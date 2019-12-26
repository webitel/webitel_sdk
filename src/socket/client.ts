import { EventEmitter } from 'ee-ts'
import {
  Call,
  CallActions,
  CallEventData,
  CallEventDTMF,
  CallEventExecute,
  CallHangup,
  CallInfo,
} from './call'
import { Log } from './log'
import { SipConfiguration, SipPhone } from './sip'
import { Message, Socket } from './socket'

export interface Config {
  endpoint: string
  token?: string
  logLvl?: 'debug' | 'info' | 'warn' | 'error'
  registerWebDevice?: boolean
  phone?: number
}

interface PromiseCallback {
  resolve: (res: object) => void
  reject: (err: object) => void
}

export interface OutboundCallRequest {
  toNumber: string
  toName?: string
  useVideo?: boolean
  variables?: Map<string, string>
}

const WEBSOCKET_AUTHENTICATION_CHALLENGE = 'authentication_challenge'
const WEBSOCKET_DEFAULT_DEVICE_CONFIG = 'user_default_device'

const WEBSOCKET_MAKE_OUTBOUND_CALL = 'call_invite'
const WEBSOCKET_EVENT_HELLO = 'hello'
const WEBSOCKET_EVENT_CALL = 'call'
const WEBSOCKET_EVENT_SIP = 'sip'

export enum Response {
  STATUS_FAIL = 'FAIL',
  STATUS_OK = 'OK',
}

export interface Session {
  id: string
  expire: number
  user_id: number
  role_ids: number[]
}

export interface ConnectionInfo {
  sock_id: string
  server_build_commit: string
  server_node_id: string
  server_version: string
  server_time: number
  session: Session
}

export type CallEventHandler = (action: CallActions, call: Call) => void

interface EventHandler {
  [WEBSOCKET_EVENT_CALL](action: CallActions, call: Call): void
  [WEBSOCKET_EVENT_SIP](data: object): void
}

export class Client {
  phone!: SipPhone
  private socket!: Socket
  private connectionInfo!: ConnectionInfo

  private reqSeq = 0
  private queueRequest: Map<number, PromiseCallback> = new Map<
    number,
    PromiseCallback
  >()
  private log: Log
  private eventHandler: EventEmitter<EventHandler>
  private callStore: Map<string, Call>

  constructor(protected readonly _config: Config) {
    this.log = new Log()
    this.eventHandler = new EventEmitter()
    this.callStore = new Map<string, Call>()
  }

  async connect() {
    await this.connectToSocket()
  }

  async disconnect() {
    this.socket.close()
  }

  async subscribeCall(
    handler: CallEventHandler,
    data?: object
  ): Promise<null | Error> {
    const res = await this.request(`subscribe_call`, data)
    this.eventHandler.on(WEBSOCKET_EVENT_CALL, handler)

    return res
  }

  async unSubscribe(
    action: string,
    handler: CallEventHandler,
    data?: object
  ): Promise<null | Error> {
    const res = await this.request(`un_subscribe_${action}`, data)

    // this.eventHandler.listeners(action)
    // this.eventHandler.removeListener(action, handler)
    // this.eventHandler.off(action, handler)

    return res
  }

  allCall(): Call[] {
    return Array.from(this.callStore.values())
  }

  callById(id: string): Call | undefined {
    if (this.callStore.has(id)) {
      return this.callStore.get(id)
    }

    return undefined
  }

  async auth() {
    return this.request(WEBSOCKET_AUTHENTICATION_CHALLENGE, {
      token: this._config.token,
    })
  }

  sessionInfo(): Session {
    return this.connectionInfo.session
  }

  get version(): string {
    return this.connectionInfo.server_version
  }

  get instanceId(): string {
    return this.connectionInfo.sock_id
  }

  invite(req: OutboundCallRequest) {
    return this.request(WEBSOCKET_MAKE_OUTBOUND_CALL, req)
  }

  answer(id: string): boolean {
    return this.phone.answer(id)
  }

  request(action: string, data?: object): Promise<Error> {
    return new Promise<Error>((resolve: () => void, reject: () => void) => {
      this.queueRequest.set(++this.reqSeq, { resolve, reject })
      this.socket.send({
        seq: this.reqSeq,
        action,
        data,
      })
    })
  }

  useWebPhone(): boolean {
    return this._config.registerWebDevice || false
  }

  private async deviceConfig(): Promise<SipConfiguration | Error> {
    return this.request(WEBSOCKET_DEFAULT_DEVICE_CONFIG, {})
  }

  private async onMessage(message: Message) {
    this.log.debug('receive message: ', message)
    if (message.seq_reply! > 0) {
      if (this.queueRequest.has(message.seq_reply!)) {
        const promise = this.queueRequest.get(message.seq_reply!)
        this.queueRequest.delete(message.seq_reply!)
        if (message.status === Response.STATUS_OK) {
          promise!.resolve(message.data)
        } else {
          promise!.reject(message.error!)
        }
      }
    } else {
      switch (message.event) {
        case WEBSOCKET_EVENT_HELLO:
          await this.connected(message.data as ConnectionInfo)
          this.log.debug(
            `opened session ${this.connectionInfo.sock_id} for userId=${
              this.connectionInfo.session.user_id
            }`
          )
          break
        case WEBSOCKET_EVENT_CALL:
          this.handleCallEvents(message.data.call as CallEventData)
          break

        case WEBSOCKET_EVENT_SIP:
          this.eventHandler.emit(WEBSOCKET_EVENT_SIP, message.data)
          break
        default:
          this.log.error(`event ${message.event} not handler`)
      }
    }
  }

  private async connected(info: ConnectionInfo) {
    this.connectionInfo = info

    this.phone = new SipPhone(this.instanceId)

    this.phone.on(
      'peerStreams',
      (id: string, streams: MediaStream[] | null) => {
        const call = this.callById(id)
        if (call && call.peerStreams === null) {
          call.setPeerStreams(streams)
          this.eventHandler.emit(
            WEBSOCKET_EVENT_CALL,
            CallActions.PeerStream,
            call
          )
        }
      }
    )

    if (this.useWebPhone()) {
      try {
        const conf = await this.deviceConfig()
        await this.phone.register(conf as SipConfiguration)
      } catch (e) {
        // FIXME add handle error
        this.log.error(e)
      }
    }
  }

  private connectToSocket(): Promise<Error | null> {
    return new Promise<Error | null>((resolve, reject) => {
      try {
        this.socket = new Socket(this._config.endpoint)
        this.socket.connect(this._config.token!)
      } catch (e) {
        reject(e)

        return
      }

      this.socket.on('message', this.onMessage.bind(this))
      this.socket.on('close', (code: number) => {
        this.log.error('socket close code: ', code)
      })
      this.socket.on('open', () => {
        resolve(null)
      })
    })
  }

  private handleCallEvents(event: CallEventData) {
    let call: Call | undefined

    switch (event.action) {
      case CallActions.Ringing:
        call = new Call(
          this,
          event as CallInfo,
          this.phone.getPeerStream(event.id)
        )
        this.callStore.set(call.id, call)
        break

      case CallActions.Active:
        call = this.callById(event.id)
        if (call) {
          call.setActive(event)
        }
        break

      case CallActions.Bridge:
        call = this.callById(event.id)
        if (call) {
          call.setInfo(event as CallInfo)
        }
        break

      case CallActions.Execute:
        call = this.callById(event.id)
        if (call) {
          call.setExecute(event as CallEventExecute)
        }
        break

      case CallActions.DTMF:
        call = this.callById(event.id)
        if (call) {
          call.addDigit(event as CallEventDTMF)
        }
        break

      case CallActions.Voice:
        call = this.callById(event.id)
        if (call) {
          call.setVoice(event)
        }
        break

      case CallActions.Silence:
        call = this.callById(event.id)
        if (call) {
          call.setSilence(event)
        }
        break

      case CallActions.Hold:
        call = this.callById(event.id)
        if (call) {
          call.setState(event)
        }
        break

      case CallActions.Hangup:
        call = this.callById(event.id)
        if (call) {
          call.setHangup(event as CallHangup)
          this.callStore.delete(call.id)
        }
        break

      default:
        throw new Error('Unhandled action')
    }

    if (call) {
      this.eventHandler.emit(WEBSOCKET_EVENT_CALL, event.action, call)
    }
  }
}
