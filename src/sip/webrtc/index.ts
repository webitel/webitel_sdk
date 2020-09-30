import { EventEmitter } from 'ee-ts'

import * as JsSip from 'jssip'
import { IncomingRTCSessionEvent, OutgoingRTCSessionEvent } from 'jssip/lib/UA'

import { Answer, CallSession, Outbound, SipClient, SipConfiguration } from '../'
import { Log } from '../../log'
import { SipClientEvents } from '../index'
import { Session } from './session'

interface PeerConnectionEvent {
  peerconnection: RTCPeerConnection
}

export class SipPhone extends EventEmitter<SipClientEvents>
  implements SipClient {
  static readonly userAgent = 'Webitel-Phone/0.0.1'
  readonly type = 'webrtc'

  private ua!: any
  private sessionCache = new Map<string, Session>()
  private log: Log

  constructor(private instanceId: string, debug?: boolean) {
    super()
    if (debug) {
      JsSip.debug.enable('*')
    } else {
      JsSip.debug.disable()
    }
    this.log = new Log()

    this.on('unregistered', () => {
      this.ua.removeAllListeners()
      delete this.ua
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
    if (req.params) {
      params.audio = req.params.audio
      params.video = req.params.video || false
      params.screen = req.params.screen || false
      params.disableStun = req.params.disableStun || false
    }

    if (typeof req.destination !== 'string') {
      throw new Error('bad destination type')
    }

    await this.ua.call(req.destination, await this.callOption(params))
  }

  async register(sipConf: SipConfiguration) {
    const socket = new JsSip.WebSocketInterface(sipConf.server)

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
      register_expires: 300,
      connection_recovery_min_interval: 5,
      connection_recovery_max_interval: 60,
      // instance_id: '8f1fa16a-1165-4a96-8341-785b1ef24f13',
    }

    const ua = (this.ua = new JsSip.UA(configuration))

    // ua.on('connected', (e: object) => {})

    ua.on(
      'newRTCSession',
      (e: IncomingRTCSessionEvent | OutgoingRTCSessionEvent) => {
        const session = e.session
        const id = session.id

        const callSession = new Session(e)

        this.storeSession(id, callSession)

        session.on('connecting', () => {
          this.emit(
            'localStreams',
            callSession,
            (session.connection as any).getLocalStreams()
          )
        })

        if (session.connection) {
          session.connection.addEventListener('addstream', (evt: object) => {
            this.emit(
              'peerStreams',
              callSession,
              new Array((evt as MediaStreamEvent).stream as MediaStream)
            )
          })
        }

        session.on('peerconnection', (peer: PeerConnectionEvent) => {
          peer.peerconnection.addEventListener(
            'addstream',
            async (evt: Event) => {
              // set remote audio stream
              this.emit(
                'peerStreams',
                callSession,
                new Array((evt as MediaStreamEvent).stream as MediaStream)
              )
            }
          )
        })

        session.on('ended', () => {
          // this handler will be called for incoming calls too
          this.removeSession(id, session.connection)
        })

        session.on('failed', () => {
          // this handler will be called for incoming calls too
          this.removeSession(id, session.connection)
        })

        session.on('accepted', () => {
          // the call has answered
          if (!callSession.incoming) {
            this.emit(
              'peerStreams',
              callSession,
              (session.connection as any).getRemoteStreams()
            )
          }
        })

        session.on('confirmed', () => {
          // this handler will be called for incoming calls too
        })

        this.emit('newSession', callSession)
      }
    )

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

    ua.start()
  }

  async unregister() {
    if (this.ua) {
      this.ua.unregister()
    }
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

  private removeSession(id: string, connection: any): boolean {
    if (connection) {
      const localStreams = connection.getLocalStreams()
      const remoteStreams = connection.getRemoteStreams()

      if (localStreams) {
        localStreams.forEach((stream: MediaStream) => {
          stream.getTracks().forEach((track) => {
            track.stop()
          })
        })
      }
      if (remoteStreams) {
        remoteStreams.forEach((stream: MediaStream) => {
          stream.getTracks().forEach((track) => {
            track.stop()
          })
        })
      }
    }

    if (this.sessionCache.has(id)) {
      this.sessionCache.delete(id)

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
          reject(e)
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
      (resolve: (stream: MediaStream) => void, reject: () => void) => {
        const mediaConstraints = {
          audio: !(audio === false),
          video: undefined as any,
        }
        if (video) {
          mediaConstraints.video = {
            width: { min: 10, ideal: 1280, max: 1920 },
            height: { min: 10, ideal: 720, max: 1080 },
            frameRate: { ideal: 10, max: 15 },
          }
        }

        navigator.getUserMedia(mediaConstraints, resolve, reject)
      }
    )
  }
}
