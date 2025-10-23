import { EventEmitter } from 'ee-ts'
// @ts-ignore
import { debug, version, UA, WebSocketInterface } from 'jssip/lib-es5/JsSIP'

import { Answer, CallSession, Outbound, SipClient, SipConfiguration } from '../'
import { Log } from '../../log'
import { SipClientEvents } from '../index'
import { Session } from './session'
import { RTCSessionEvent } from './types'

interface PeerConnectionEvent {
  peerconnection: RTCPeerConnection
}

export class SipPhone extends EventEmitter<SipClientEvents>
  implements SipClient {
  static readonly userAgent = `Webitel-Phone/${version}`
  static readonly sipVersion = version
  readonly type = 'webrtc'

  private ua!: any
  private sessionCache = new Map<string, Session>()
  private log: Log

  constructor(private instanceId: string, d?: boolean) {
    super()

    this.log = new Log()
    if (d) {
      this.log.info(`JsSip version: ${version}`)
      debug.enable('*')
    } else {
      debug.disable()
    }

    this.on('unregistered', () => {
      this.sessionCache.clear()
    })
  }

  async callOption(req: Answer = {}) {
    const mediaStream = await this.getUserCallStream(req)

    return {
      sessionTimersExpires: 120,
      pcConfig: req.disableStun
        ? undefined
        : {
            iceServers: [{ urls: ['stun:stun.l.google.com:19302'] }],
          },
      mediaStream,
    }
  }

  async answer(id: string, req: Answer) {
    if (this.sessionCache.has(id)) {
      const session = this.sessionCache.get(id)
      const params = await this.callOption(req)

      return session!.answer(params)
    }

    return false
  }

  async call(req: Outbound) {
    const params = {} as Answer
    const display = {
      extraHeaders: new Array<string>(),
    }

    if (req.params) {
      params.audio = req.params.audio
      params.video = req.params.video || false
      params.screen = req.params.screen || false
      params.disableStun = req.params.disableStun || false
    }

    if (typeof req.destination !== 'string') {
      throw new Error('bad destination type')
    }

    const invite = await this.callOption(params)

    if (req.params) {
      if (req.params.display) {
        display.extraHeaders.push(`X-Webitel-Display: ${req.params.display}`)
      }
      if (req.params.contactId) {
        display.extraHeaders.push(
          `X-Webitel-Contact-Id: ${req.params.contactId}`
        )
      }
    }

    await this.ua.call(req.destination, {
      ...invite,
      ...display,
    })
  }

  async register(sipConf: SipConfiguration) {
    const socket = new WebSocketInterface(sipConf.server)

    const configuration = {
      realm: sipConf.realm,
      uri: sipConf.uri,
      authorization_user: sipConf.authorization_user,
      ha1: sipConf.ha1,
      user_agent: SipPhone.userAgent,
      sockets: [socket],
      session_timers: true,
      // use_preloaded_route: true,
      display_name: sipConf.display_name,
      register_expires: sipConf.register_expires || 90,
      connection_recovery_min_interval: 2,
      connection_recovery_max_interval: 30,
      // instance_id: '8f1fa16a-1165-4a96-8341-785b1ef24f13',
    }

    const ua = (this.ua = new UA(configuration))

    // ua.on('connected', (e: object) => {})

    ua.on('newRTCSession', (e: RTCSessionEvent) => {
      const session = e.session
      const id = session.id

      const callSession = new Session(session, e.request)

      this.storeSession(id, callSession)

      session.on('ended', () => {
        // this handler will be called for incoming calls too
        this.removeSession(callSession)
      })

      session.on('failed', () => {
        // this handler will be called for incoming calls too
        this.removeSession(callSession)
        const stream = session._localMediaStream
        if (stream) {
          stream.getTracks().forEach((track: MediaStreamTrack) => track.stop())
        }
      })

      session.on('accepted', () => {
        // the call has answered
        if (!callSession.incoming) {
          this.initPeerStream(callSession, session.connection)
        }
      })

      session.on('progress', () => {
        // the call has answered
        if (!callSession.incoming) {
          this.initPeerStream(callSession, session.connection)
        }
      })

      session.on('confirmed', () => {
        this.initPeerStream(callSession, session.connection)

        const localStream = new MediaStream()
        session.connection.getSenders().forEach((t: any) => {
          localStream.addTrack(t.track)
        })

        callSession.localStream = localStream
        this.emit('localStreams', callSession, callSession.getLocalMedia())
      })

      this.emit('newSession', callSession)
    })

    ua.on('disconnected', (e: object) => {
      this.emit('unregistered')
    })

    // ua.on('registered', (e: object) => {})

    ua.on('unregistered', (e: object) => {
      this.emit('unregistered')
    })

    ua.on('registrationFailed', (e: object) => {
      this.log.error('registrationFailed', e)
    })

    ua.on('registered', (e: object) => {
      this.emit('registered')
    })

    // fixes WTEL-4236
    ua.on('connected', (e: object) => {
      this.emit('connected')
    })

    ua.start()
  }

  async unregister() {
    if (this.ua) {
      this.ua.terminateSessions()
      this.ua.removeAllListeners()
      await this.ua.stop()
      delete this.ua
    }
  }

  isRegistered() {
    if (this.ua) {
      return this.ua.isRegistered()
    }

    return false
  }

  sipSessionByCallId(id: string): CallSession | null {
    for (const sess of this.allSession) {
      if (sess.callId === id) {
        return sess
      }
    }

    return null
  }

  sipSessionBySipId(id: string): CallSession | null {
    for (const sess of this.allSession) {
      if (sess.id.startsWith(id)) {
        return sess
      }
    }

    return null
  }

  private removeSession(s: Session): boolean {
    if (this.sessionCache.has(s.id)) {
      this.sessionCache.delete(s.id)
      s.getLocalMedia().forEach((m) => {
        m.getTracks().forEach((track) => track.stop())
      })
      s.getPeerMedia().forEach((m) => {
        m.getTracks().forEach((track) => track.stop())
      })

      return true
    }

    return false
  }

  private storeSession(id: string, session: Session) {
    if (this.sessionCache.has(id)) {
      throw new Error('Session already store')
    }

    this.sessionCache.set(id, session)
  }

  private get allSession(): Session[] {
    return Array.from(this.sessionCache.values())
  }

  private getMediaConstraints(req: Answer): object {
    if (req.screen) {
      return {
        video: false,
        audio: false,
        screen: true,
      }
    }

    return {
      video: req.video || false,
      audio: true,
    }
  }

  private getSession(id: string): CallSession | null {
    if (this.sessionCache.has(id)) {
      return this.sessionCache.get(id) as CallSession
    }

    return null
  }

  private hasSession(id: string | null): boolean {
    return this.sessionCache.has(id!)
  }

  private initPeerStream(sess: Session, connection: any) {
    if (!sess.peerStream) {
      const peerStream = new MediaStream()
      connection.getReceivers().forEach((t: any) => {
        peerStream.addTrack(t.track)
      })
      sess.peerStream = peerStream
      this.emit('peerStreams', sess, sess.getPeerMedia())
    }
  }

  private async getUserScreen(): Promise<MediaStream> {
    return new Promise<MediaStream>(
      async (
        resolve: (stream: MediaStream) => void,
        reject: (err: Error) => void
      ) => {
        try {
          const stream = (await (navigator.mediaDevices as any).getDisplayMedia()) as MediaStream
          resolve(stream)
        } catch (e) {
          reject(e as Error)
        }
      }
    )
  }

  private async getUserCallStream(req: Answer) {
    let stream: MediaStream | undefined

    if (req.screen === true) {
      stream = await this.getUserScreen()
    }

    if (req.audio !== false || req.video) {
      const camera = await this.getUserMedia(req.audio, req.video)

      if (stream) {
        camera.getTracks().forEach((track) => {
          stream!.addTrack(track)
        })
      } else {
        stream = camera
      }
    }

    if (!stream) {
      throw new Error('bad stream request')
    }

    return stream
  }

  private async getUserMedia(
    audio?: boolean,
    video?: boolean
  ): Promise<MediaStream> {
    return new Promise<MediaStream>(
      async (resolve: (stream: MediaStream) => void, reject: () => void) => {
        const mediaConstraints = {
          audio: undefined as any,
          video: undefined as any,
        }
        if (!(audio === false)) {
          mediaConstraints.audio = {
            autoGainControl: false,
          }
        }
        if (video) {
          mediaConstraints.video = {
            width: { min: 10, ideal: 1280, max: 1920 },
            height: { min: 10, ideal: 720, max: 1080 },
            frameRate: { ideal: 10, max: 15 },
          }
        }

        return getMediaStream(mediaConstraints)
          .then(resolve)
          .catch(reject)
      }
    )
  }
}

async function getMediaStream(
  constraints: MediaStreamConstraints
): Promise<MediaStream> {
  return new Promise((resolve, reject) => {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices
        .getUserMedia(constraints)
        .then((stream) => resolve(stream))
        .catch((err) => reject(err))
    } else {
      /// <reference types="webrtc" />
      const getUserMedia =
        navigator.getUserMedia ||
        navigator.webkitGetUserMedia ||
        navigator.mozGetUserMedia ||
        navigator.msGetUserMedia

      getUserMedia(
        constraints,
        (stream) => resolve(stream),
        (err) => reject(err)
      )
    }
  })
}
