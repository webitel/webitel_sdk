import { EventEmitter } from 'ee-ts'
import * as SipClient from 'jssip'
import { Log } from './log'

export interface SipConfiguration {
  realm: string
  uri: string
  authorization_user: string
  ha1?: string
}

interface RTCSession {
  session: CallSession
  request: RTCRequest
}

interface RTCRequest {
  getHeader(name: string): string
}

interface CallSession {
  id: string
  direction: string
  stream: object
  answer(s: object): void
  on(name: string, arg?: object): void
}

interface SipHoneEvent {
  unregistered(): void
  error(err: Error): void
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

  private get callOption(): object {
    return {
      sessionTimersExpires: 120,
      pcConfig1: {
        iceServers: [{ urls: ['stun:stun.l.google.com:19302'] }],
      },
      mediaConstraints: {
        audio: true,
        video: false,
      },
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

  answer(id: string): boolean {
    if (this.sessionCache.has(id)) {
      this.sessionCache.get(id)!.answer(this.callOption)

      return true
    }

    return false
  }

  async register(sipConf: SipConfiguration) {
    const socket = new SipClient.WebSocketInterface('ws://192.168.177.9:5080')

    const configuration = {
      ...sipConf,
      user_agent: SipPhone.userAgent,
      sockets: [socket],
      session_timers: true,
      register_expires: 300,
      connection_recovery_min_interval: 5,
      connection_recovery_max_interval: 60,
      instance_id: '8f1fa16a-1165-4a96-8341-785b1ef24f13',
    }

    const ua = (this.ua = new SipClient.UA(configuration))

    ua.on('connected', (e: object) => {
      this.log.error('connected', e)
    })

    ua.on('newRTCSession', (e: RTCSession) => {
      const session = e.session
      const id = e.request.getHeader('X-Webitel-Uuid') || session.id

      this.storeSession(id, session)

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

      session.on('addstream', async (s: CallSession) => {
        // set remote audio stream (to listen to remote audio)
        // remoteAudio is <audio> element on page
        const remoteAudio = document.createElement('audio')
        remoteAudio.src = window.URL.createObjectURL(s.stream)
        await remoteAudio.play()
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
