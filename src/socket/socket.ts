import { EventEmitter } from 'ee-ts'
import { formatWebSocketUri } from './utils'

const SOCKET_URL_SUFFIX = 'websocket'
const spamData = `\u0000\u0000\u0000\u0000`

/**
 * Інтерфейс, що описує структуру повідомлення.
 */
export interface Message {
  event?: string // Подія, що сталася
  status?: string // Статус повідомлення
  seq?: number // Послідовність повідомлень
  seq_reply?: number // Відповідь на послідовне повідомлення
  data: any // Дані, що передаються в повідомленні
  error?: object // Об'єкт з інформацією про помилку
  sock_id?: string // Ідентифікатор сокету
}

/**
 * Інтерфейс, що описує структуру запиту.
 */
export interface Request {
  seq: number // Послідовність запитів
  action: string // Дія, яка виконується
  data?: object // Дані для запиту
}

/**
 * Інтерфейс, що описує події, які можуть виникнути у сокеті.
 */
export interface SocketEvents {
  /**
   * Обробник події надходження повідомлення.
   * @param msg Повідомлення, що надійшло.
   */
  message(msg: Message): void

  /**
   * Обробник події закриття з'єднання.
   * @param code Код закриття з'єднання.
   */
  close(code: number): void

  /**
   * Обробник події відкриття з'єднання.
   */
  open(): void
}

/**
 * Клас для роботи з WebSocket-з'єднанням.
 */
export class Socket extends EventEmitter<SocketEvents> {
  private socket!: WebSocket | undefined

  /**
   * Конструктор класу Socket.
   * @param host Хост для підключення.
   * @param appName Імя підключення.
   */
  constructor(private host: string, private appName?: string) {
    super()
    // this.socket = null
  }

  /**
   * Встановлює з'єднання з WebSocket.
   * @param token Токен для авторизації.
   */
  connect(token: string) {
    this.socket = new WebSocket(
      `${formatWebSocketUri(
        this.host
      )}/${SOCKET_URL_SUFFIX}?application_name=${this.appName || 'webitel_sdk'}`
    )

    this.socket.onclose = (e) => this.onClose(e.code)

    this.socket.onmessage = (e) => this.onMessage(e.data)
    this.socket.onopen = () => this.onOpen()
  }

  /**
   * Відправляє запит через WebSocket.
   * @param request Запит, який необхідно відправити.
   * @returns Ніколи або null.
   */
  send(request: Request): never | null {
    this.socket!.send(JSON.stringify(request))

    return null
  }

  /**
   * Закриває WebSocket-з'єднання.
   * @param code Код закриття з'єднання (необов'язково).
   */
  close(code?: number) {
    this.socket!.close(code || 1000)
    delete this.socket
    this.onClose(code || 1000)
  }

  /**
   * Викликається при відкритті з'єднання.
   * Генерує подію 'open'.
   * @private
   */
  private onOpen() {
    this.emit('open')
  }

  /**
   * Викликається при закритті з'єднання.
   * Генерує подію 'close' та очищає слухачів подій.
   * @param code Код закриття з'єднання.
   * @private
   */
  private onClose(code: number) {
    this.emit('close', code)
    this.off('*')
  }

  /**
   * Викликається при отриманні повідомлення.
   * Парсує дані повідомлення і генерує подію 'message'.
   * @param data Дані повідомлення у форматі рядка.
   * @private
   */
  private onMessage(data: string) {
    if (data !== spamData) {
      const message = JSON.parse(data) as Message
      this.emit('message', message)
    }
  }
}
