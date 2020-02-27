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

interface SipSession {
  id: string
  direction: string
  stream: object
  connection: RTCPeerConnection
  answer(s: object): void
  on(name: string, arg?: object): void
}

export interface CallSession {
  sip: SipSession
  incoming: boolean
  instance_id: string
}

interface PeerConnectionEvent {
  peerconnection: RTCPeerConnection
}

interface SipHoneEvent {
  unregistered(): void
  error(err: Error): void
  peerStreams(id: string, e: MediaStream[] | null, incoming: boolean): void
  newSession(id: string, session: CallSession): void
}

export class SipPhone extends EventEmitter<SipHoneEvent> {
  static readonly userAgent = 'Webitel-Phone/0.0.1'
  private ua!: SipClient.UA
  private sessionCache = new Map<string, CallSession>()
  private log: Log

  constructor(private instanceId: string) {
    super()
    SipClient.debug.enable('*')
    this.log = new Log()

    this.on('unregistered', () => {
      this.ua.removeAllListeners()
      delete this.ua
      this.sessionCache.clear()
    })
  }

  getMediaConstraints(req: AnswerRequest): object {
    if (req.useScreen) {
      return {
        video: false,
        audio: false,
        screen: true,
      }
    }

    return {
      video: req.useVideo || false,
      audio: req.useAudio || true,
    }
  }

  callOption(req: AnswerRequest = {}): object {
    return {
      sessionTimersExpires: 120,
      pcConfig: {
        iceServers: [{ urls: ['stun:stun.l.google.com:19302'] }],
      },
      rtcOfferConstraints: {
        offerToReceiveAudio: req.useAudio || true,
        offerToReceiveVideo: req.useVideo,
      },
      mediaConstraints: this.getMediaConstraints(req),
    }
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

  getPeerStream(id: string): MediaStream[] | null {
    const session = this.getSession(id)
    if (session && session.sip.connection) {
      // @ts-ignore
      const streams = session.sip.connection.getRemoteStreams() as MediaStream[]
      if (streams && streams.length) {
        return streams
      }
    }

    return null
  }

  answer(id: string, req: AnswerRequest): boolean {
    if (this.sessionCache.has(id)) {
      const session = this.sessionCache.get(id)
      session!.sip.answer(this.callOption(req))

      return true
    }

    return false
  }

  call(req: OutboundCallRequest) {
    this.ua.call(req.toNumber, this.callOption(req))
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
      register_expires: 300,
      connection_recovery_min_interval: 5,
      connection_recovery_max_interval: 60,
      // instance_id: '8f1fa16a-1165-4a96-8341-785b1ef24f13',
    }

    const ua = (this.ua = new SipClient.UA(configuration))

    ua.on('connected', (e: object) => {
      this.log.error('connected', e)
    })

    ua.on('newRTCSession', (e: RTCSession) => {
      const session = e.session
      const id = e.request.getHeader('X-Webitel-Uuid') || session.id
      const incoming = session.direction === 'incoming'

      const callSession = {
        sip: session,
        incoming,
        instance_id: e.request.getHeader('X-Webitel-Sock-Id'),
      }

      this.storeSession(id, callSession)

      session.on('peerconnection', (peer: PeerConnectionEvent) => {
        peer.peerconnection.addEventListener(
          'addstream',
          async (evt: Event) => {
            // set remote audio stream
            this.emit(
              'peerStreams',
              id,
              new Array((evt as MediaStreamEvent).stream as MediaStream),
              incoming
            )
          }
        )
      })

      session.on('ended', () => {
        // this handler will be called for incoming calls too
        this.removeSession(id)
      })

      session.on('failed', () => {
        // this handler will be called for incoming calls too
        this.removeSession(id)
      })

      session.on('accepted', () => {
        // the call has answered
        if (!this.isOutboundCall(id)) {
          this.emit('peerStreams', id, this.getPeerStream(id), incoming)
        }
      })

      session.on('confirmed', () => {
        // this handler will be called for incoming calls too
      })

      this.emit('newSession', id, callSession)
    })

    ua.on('disconnected', (e: object) => {
      this.log.error('disconnected', e)
      this.emit('unregistered')
    })

    ua.on('registered', (e: object) => {
      this.log.error('registered', e)
    })

    ua.on('unregistered', (e: object) => {
      this.log.error('unregistered', e)
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

  protected removeSession(id: string): boolean {
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
