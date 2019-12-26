import { EventEmitter } from 'ee-ts'
import * as SipClient from 'jssip'
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

interface PeerConnectionEvent {
  peerconnection: RTCPeerConnection
}

interface SipHoneEvent {
  unregistered(): void
  error(err: Error): void
  peerStreams(id: string, e: MediaStream[] | null): void
}

export class SipPhone extends EventEmitter<SipHoneEvent> {
  static readonly userAgent = 'Webitel-Phone/0.0.1'
  private ua!: SipClient.UA
  private sessionCache = new Map<string, SipSession>()
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

  private get callOption(): object {
    return {
      sessionTimersExpires: 120,
      pcConfig1: {
        iceServers: [{ urls: ['stun:stun.l.google.com:19302'] }],
      },
      // rtcOfferConstraints: {
      //   offerToReceiveAudio: true,
      //   offerToReceiveVideo: false,
      // },
      mediaConstraints: {
        audio: true,
        video: false,
      },
    }
  }

  getSession(id: string): SipSession | null {
    if (this.sessionCache.has(id)) {
      return this.sessionCache.get(id) as SipSession
    }

    return null
  }

  hasSession(id: string | null): boolean {
    return this.sessionCache.has(id!)
  }

  getPeerStream(id: string): MediaStream[] | null {
    const session = this.getSession(id)
    if (session && session.connection) {
      // @ts-ignore
      const streams = session.connection.getRemoteStreams() as MediaStream[]
      if (streams && streams.length) {
        return streams
      }
    }

    return null
  }

  answer(id: string): boolean {
    if (this.sessionCache.has(id)) {
      this.sessionCache.get(id)!.answer(this.callOption)

      return true
    }

    return false
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

      this.storeSession(id, session)

      session.on('peerconnection', (peer: PeerConnectionEvent) => {
        peer.peerconnection.addEventListener(
          'addstream',
          async (evt: Event) => {
            // set remote audio stream
            this.emit(
              'peerStreams',
              id,
              new Array((evt as MediaStreamEvent).stream as MediaStream)
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
      })

      session.on('confirmed', () => {
        // this handler will be called for incoming calls too
      })

      if (
        session.direction === 'incoming' &&
        e.request.getHeader('X-Webitel-Sock-Id') === this.instanceId
      ) {
        session.answer(this.callOption)
      }
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

  async unregister() {
    if (this.ua) {
      this.ua.unregister()
    }
  }

  get allSession(): SipSession[] {
    return Array.from(this.sessionCache.values())
  }

  protected removeSession(id: string): boolean {
    if (this.sessionCache.has(id)) {
      this.sessionCache.delete(id)

      return true
    }

    return false
  }

  protected storeSession(id: string, session: SipSession) {
    if (this.sessionCache.has(id)) {
      throw new Error('Session already store')
    }

    this.sessionCache.set(id, session)
  }
}
