import { EventEmitter } from 'ee-ts'
import { formatWebSocketUri } from './utils'

const SOCKET_URL_SUFFIX = 'websocket'
const spamData = `\u0000\u0000\u0000\u0000`

export interface Message {
  event?: string
  status?: string
  seq?: number
  seq_reply?: number
  data: any
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
  private socket!: WebSocket | undefined

  constructor(private host: string) {
    super()
    // this.socket = null
  }

  connect(token: string) {
    this.socket = new WebSocket(
      `${formatWebSocketUri(this.host)}/${SOCKET_URL_SUFFIX}`
    )

    this.socket.onclose = (e) => this.onClose(e.code)

    this.socket.onmessage = (e) => this.onMessage(e.data)
    this.socket.onopen = () => this.onOpen()
  }

  send(request: Request): never | null {
    this.socket!.send(JSON.stringify(request))

    return null
  }

  close(code?: number) {
    this.socket!.close(code)
    this.off('*')
    delete this.socket
  }

  private onOpen() {
    this.emit('open')
  }

  private onClose(code: number) {
    this.emit('close', code)
  }

  private onMessage(data: string) {
    if (data !== spamData) {
      const message = JSON.parse(data) as Message
      this.emit('message', message)
    }
  }
}
