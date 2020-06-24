import { EventEmitter } from 'ee-ts'
import * as SipClient from 'jssip'
import { AnswerRequest, OutboundCallRequest } from './call'
import { Log } from './log'

export interface SipConfiguration {
  server: string
  extension: string
  realm: string
  uri: string
  authorization_user: string
  display_name: string
  ha1?: string
}

interface RTCSession {
  session: SipSession
  peerconnection: SipSession
  request: RTCRequest
}

interface RTCRequest {
  getHeader(name: string): string
}

export interface SipSession {
  id: string
  direction: string
  stream: object
  connection: RTCPeerConnection
  answer(s: object): void
  on(name: string, arg?: object): void
}

export interface CallSession {
  callId?: string
  sip: SipSession
  incoming: boolean
  instance_id: string
}

interface PeerConnectionEvent {
  peerconnection: RTCPeerConnection
}

interface SipPhoneEvent {
  unregistered(): void
  error(err: Error): void
  peerStreams(session: CallSession, e: MediaStream[] | null): void
  localStreams(session: CallSession, e: MediaStream[] | null): void
  newSession(session: CallSession): void
}

export class SipPhone extends EventEmitter<SipPhoneEvent> {
  static readonly userAgent = 'Webitel-Phone/0.0.1'
  private ua!: any
  private sessionCache = new Map<string, CallSession>()
  private log: Log

  constructor(private instanceId: string, debug?: boolean) {
    super()
    if (debug) {
      SipClient.debug.enable('*')
    } else {
      SipClient.debug.disable('*')
    }
    this.log = new Log()

    this.on('unregistered', () => {
      this.ua.removeAllListeners()
      delete this.ua
      this.sessionCache.clear()
    })
  }

  getMediaConstraints(req: AnswerRequest): object {
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

  async callOption(req: AnswerRequest = {}) {
    const mediaStream = await this.getUserCallStream(req)
    const res = {
      sessionTimersExpires: 120,
      pcConfig: req.disableStun
        ? undefined
        : {
            iceServers: [{ urls: ['stun:stun.l.google.com:19302'] }],
          },
      mediaStream,
    }

    return res
  }

  getSession(id: string): CallSession | null {
    if (this.sessionCache.has(id)) {
      return this.sessionCache.get(id) as CallSession
    }

    return null
  }

  hasSession(id: string | null): boolean {
    return this.sessionCache.has(id!)
  }

  async answer(id: string, req: AnswerRequest) {
    if (this.sessionCache.has(id)) {
      const session = this.sessionCache.get(id)
      session!.sip.answer(await this.callOption(req))

      return true
    }

    return false
  }

  async call(req: OutboundCallRequest) {
    const params = {} as AnswerRequest
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

  async getUserCallStream(req: AnswerRequest) {
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

  async getUserScreen(): Promise<MediaStream> {
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

  async getUserMedia(audio?: boolean, video?: boolean): Promise<MediaStream> {
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

  async register(sipConf: SipConfiguration) {
    const socket = new SipClient.WebSocketInterface(sipConf.server)

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

    const ua = (this.ua = new SipClient.UA(configuration))

    // ua.on('connected', (e: object) => {})

    ua.on('newRTCSession', (e: RTCSession) => {
      const session = e.session
      const id = session.id
      const incoming = session.direction === 'incoming'

      const callSession = {
        callId: e.request.getHeader('X-Webitel-Uuid'),
        sip: session,
        incoming,
        instance_id: e.request.getHeader('X-Webitel-Sock-Id'),
      }

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

    ua.on('error', (e: Error) => {
      this.emit('error', e)
      this.log.error('error', e)
    })

    ua.start()
  }

  isOutboundCall(id: string): boolean {
    const session = this.getSession(id)
    if (session) {
      return session.incoming && session.instance_id === this.instanceId
    }

    return false
  }

  async unregister() {
    if (this.ua) {
      this.ua.unregister()
    }
  }

  get allSession(): CallSession[] {
    return Array.from(this.sessionCache.values())
  }

  sipSessionByCallId(id: string): SipSession | null {
    for (const sess of this.allSession) {
      if (sess.callId === id) {
        return sess.sip
      }
    }

    return null
  }

  sipSessionBySipId(id: string): SipSession | null {
    for (const sess of this.allSession) {
      if (sess.sip.id.startsWith(id)) {
        return sess.sip
      }
    }

    return null
  }

  protected removeSession(id: string, connection: any): boolean {
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

  protected storeSession(id: string, session: CallSession) {
    if (this.sessionCache.has(id)) {
      throw new Error('Session already store')
    }

    this.sessionCache.set(id, session)
  }
}
