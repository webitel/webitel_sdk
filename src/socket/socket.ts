import { EventEmitter } from 'ee-ts'
import { formatWebSocketUri } from './utils'

const SOCKET_URL_SUFFIX = 'websocket'

export interface Message {
  event?: string
  status?: string
  seq?: number
  seq_reply?: number
  data: object
  error?: Map<string, Error>
}

export interface Request {
  seq: number
  action: string
  data?: object
}

export interface SocketEvents {
  message(msg: Message): void
  close(code: number): void
  open(): void
}

export class Socket extends EventEmitter<SocketEvents> {
  private socket!: WebSocket

  constructor(private host: string) {
    super()
  }

  connect(token: string) {
    this.socket = new WebSocket(
      `${formatWebSocketUri(
        this.host
      )}/${SOCKET_URL_SUFFIX}?access_token=${token}`
    )

    this.socket.onclose = (e) => this.onClose(e.code)

    this.socket.onmessage = (e) => this.onMessage(e.data)
    this.socket.onopen = () => this.onOpen()
  }

  send(request: Request): never | null {
    this.socket.send(JSON.stringify(request))

    return null
  }

  close(code?: number) {
    this.socket.close(code)
    delete this.socket
  }

  private onOpen() {
    this.emit('open')
  }

  private onClose(code: number) {
    this.emit('close', code)
  }

  private onMessage(data: string) {
    const message = JSON.parse(data) as Message
    this.emit('message', message)
  }
}
