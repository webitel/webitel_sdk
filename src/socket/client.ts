// tslint:disable-next-line: match-default-export-name
import Axios from 'axios'
import { EventEmitter } from 'ee-ts'

import { Log } from '../log'
import { CallSession, SipClient, SipConfiguration } from '../sip'
import { SipPhone } from '../sip/webrtc'
import { SipPhone as ExperimentalPhone } from '../sip/webrtc2'
import version from '../version'
import { Agent, AgentSession, AgentStatusEvent, ChannelState } from './agent'
import {
  AnswerRequest,
  Call,
  CallActions,
  CallEventData,
  CallEventDTMF,
  CallEventEavesdrop,
  CallEventExecute,
  CallItem,
  CallVariables,
  EavesdropRequest,
  OutboundCallRequest,
} from './call'
import {
  ChatActions,
  ChatEvent,
  CloseEvent,
  Conversation,
  ConversationItem,
  DeclineInviteEvent,
  InviteEvent,
  JoinedEvent,
  LeavedEvent,
  MessageDeleted,
  MessageEvent,
} from './conversation'
import {
  BaseError,
  DeviceNotAllowPermissionError,
  DeviceNotFoundError,
  LicencePermissionError,
  RolePermissionError,
  TypeErrors,
} from './errors'
import {
  MessageNotification,
  MessageScreenShare,
  Notification,
  NotificationActions,
} from './notification'
import { QueueJoinMemberEvent } from './queue'
import { Message, Socket } from './socket'
import {
  ChannelEvent,
  ChannelName,
  JobState,
  Reporting,
  Task,
  TaskData,
} from './task'
import { UserStatus } from './user'
import { formatBaseUri, generateId } from './utils'
import { SenderSession, ScreenResolver } from '../screen'
import { SpyScreen } from './screen'

/**
 * Налаштування клієнта.
 *
 * @interface Config
 * @property {string} endpoint - URL-адреса кінцевої точки для підключення клієнта.
 * @property {string} [storageEndpoint] - (Необов'язковий) URL-адреса кінцевої точки для зберігання даних.
 * @property {string} [token] - (Необов'язковий) Токен для аутентифікації клієнта.
 * @property {'debug' | 'info' | 'warn' | 'error'} [logLvl] - (Необов'язковий) Рівень логування для клієнта.
 * @property {boolean} [registerWebDevice] - (Необов'язковий) Вказує, чи слід реєструвати веб-пристрій.
 * @property {number} [phone] - (Необов'язковий) Номер телефону для реєстрації.
 * @property {boolean} [debug] - (Необов'язковий) Вказує, чи слід увімкнути режим налагодження.
 * @property {number} [autoAnswerDelayTime] - (Необов'язковий) Час затримки перед автоматичною відповіддю на дзвінок.
 */
export interface Config {
  endpoint: string
  storageEndpoint?: string
  token?: string
  logLvl?: 'debug' | 'info' | 'warn' | 'error'
  registerWebDevice?: boolean
  phone?: number
  debug?: boolean
  autoAnswerDelayTime?: number
  screenResolver?: ScreenResolver | null
  applicationName?: string
}

/**
 * Інтерфейс для зворотного виклику обіцянки.
 */
interface PromiseCallback {
  resolve: (res: object) => void
  reject: (err: object) => void
}

interface AckPromiseCallback {
  timerId: any
  resolve: (res: object) => void
  reject: (err: object) => void
}

/**
 * Запит на дзвінок користувачу.
 *
 * @interface UserCallRequest
 * @property {string | null} [nodeId] - (Необов'язковий) Ідентифікатор вузла, з якого здійснюється дзвінок. Якщо не вказано, значення буде null.
 * @property {string | null} [parentCallId] - (Необов'язковий) Ідентифікатор батьківського дзвінка, якщо такий існує.
 * @property {string | null} [sendToCallId] - (Необов'язковий) Ідентифікатор дзвінка, на який потрібно відправити виклик, якщо такий існує.
 * @property {string} toUserId - Ідентифікатор користувача, якому призначений дзвінок.
 * @property {boolean} [useVideo] - (Необов'язковий) Вказує, чи буде використовуватись відео під час дзвінка.
 * @property {boolean} [useScreen] - (Необов'язковий) Вказує, чи буде використовуватись спільний доступ до екрану під час дзвінка.
 * @property {boolean} [useAudio] - (Необов'язковий) Вказує, чи буде використовуватись аудіо під час дзвінка.
 * @property {CallVariables} [variables] - (Необов'язковий) Додаткові змінні, які будуть використані під час дзвінка.
 */
export interface UserCallRequest {
  nodeId?: string | null
  parentCallId?: string | null
  sendToCallId?: string | null
  toUserId: string
  useVideo?: boolean
  useScreen?: boolean
  useAudio?: boolean
  variables?: CallVariables
}

/**
 * Подія SDP (Session Description Protocol).
 */
export interface SdpEvent {
  sip_id: string
  sdp: {
    sdp: string
    type: string
  }
}

// Назва заголовку для токена доступу
const API_HEADER_TOKEN = 'X-Webitel-Access'

// Тип події WebSocket для аутентифікації
const WEBSOCKET_AUTHENTICATION_CHALLENGE = 'authentication_challenge'

// Конфігурація пристрою за замовчуванням для користувача через WebSocket
const WEBSOCKET_DEFAULT_DEVICE_CONFIG = 'user_default_device'

// Подія WebSocket для сесії агента контакт-центру
const WEBSOCKET_AGENT_SESSION = 'cc_agent_session'

// Подія WebSocket для перевірки підключення (ping)
const WEBSOCKET_PING = 'ping'

// Подія WebSocket для створення вихідного дзвінка
const WEBSOCKET_MAKE_OUTBOUND_CALL = 'call_invite'

// Подія WebSocket для виклику користувача
const WEBSOCKET_MAKE_USER_CALL = 'call_user'

// Подія WebSocket для ініціалізації (hello)
const WEBSOCKET_EVENT_HELLO = 'hello'

// Подія WebSocket для обробки дзвінків
const WEBSOCKET_EVENT_CALL = 'call'

// Подія WebSocket для обробки чатів
const WEBSOCKET_EVENT_CHAT = 'chat'

// Подія WebSocket для відстеження стану користувача
const WEBSOCKET_EVENT_USER_STATE = 'user_state'

// Подія WebSocket для оновлення статусу агента
const WEBSOCKET_EVENT_AGENT_STATUS = 'agent_status'

// Подія WebSocket для оновлення стану каналу зв'язку
const WEBSOCKET_EVENT_CHANNEL_STATUS = 'channel'

// Подія WebSocket для обробки додавання учасника в чергу
const WEBSOCKET_EVENT_QUEUE_JOIN_MEMBER = 'queue_join_member'

// Подія WebSocket для обробки помилок
const WEBSOCKET_EVENT_ERROR = 'error'

// Подія WebSocket для обробки загальних повідомлень
const WEBSOCKET_EVENT_NOTIFICATION = 'notification'

// Подія WebSocket для обробки завдань
const TASK_EVENT = 'task'

// Подія WebSocket для обробки робіт
const JOB_EVENT = 'job'

// Подія WebSocket для обробки SIP повідомлень
const WEBSOCKET_EVENT_SIP = 'sip'

// Подія WebSocket для обробки SDP повідомлень
const WEBSOCKET_EVENT_SDP = 'sdp'

/**
 * Помилки обробки.
 */
enum HandleError {
  NotFoundError = 'NotFoundError',
  NotAllowedError = 'NotAllowedError',
}

/**
 * Статус відповіді.
 */
export enum Response {
  STATUS_FAIL = 'FAIL',
  STATUS_OK = 'OK',
}

/**
 * Інформація про сесію.
 *
 * Цей інтерфейс описує структуру даних, яка містить інформацію про сесію користувача.
 */
export interface Session {
  /**
   * Унікальний ідентифікатор сесії.
   */
  id: string

  /**
   * Час закінчення дії сесії в секундах (UNIX timestamp).
   */
  expire: number

  /**
   * Ідентифікатор користувача, до якого належить сесія.
   */
  user_id: number

  /**
   * Список ідентифікаторів ролей, які має користувач у межах цієї сесії.
   */
  role_ids: number[]
}

/**
 * Інформація про з'єднання.
 *
 * Цей інтерфейс описує структуру даних, яка містить інформацію про поточне з'єднання з сервером.
 */
export interface ConnectionInfo {
  /**
   * Ідентифікатор сокет-з'єднання.
   */
  sock_id: string

  /**
   * Коміт ідентифікатора збірки сервера.
   */
  server_build_commit: string

  /**
   * Ідентифікатор вузла сервера, з яким встановлено з'єднання.
   */
  server_node_id: string

  /**
   * Версія сервера, з яким встановлено з'єднання.
   */
  server_version: string

  /**
   * Поточний час сервера в секундах (UNIX timestamp).
   */
  server_time: number

  /**
   * Інтервал пінг-запитів у мілісекундах (необов'язкове).
   */
  ping_interval?: number

  /**
   * Інформація про сесію користувача, пов'язану з цим з'єднанням.
   */
  session: Session

  /**
   * Вказує на те, чи підтримує сервер Back-to-Back User Agent (необов'язкове).
   */
  b2bua?: boolean

  /**
   * Вказує, чи дозволено використовувати чат для цього з'єднання (необов'язкове).
   */
  use_chat?: boolean

  /**
   * Вказує, чи дозволено використовувати центр контактів (call center) для цього з'єднання (необов'язкове).
   */
  use_cc?: boolean
}

/**
 * Відповідь списку дзвінків.
 */
export interface CallListResponse {
  items?: CallItem[]
  next?: boolean
}

/**
 * Відповідь списку завдань.
 */
export interface TaskListResponse {
  items: TaskData[]
}

/**
 * Відповідь списку розмов.
 */
export interface ConversationListResponse {
  items?: ConversationItem[]
  next?: boolean
}

/**
 * Інформація про файл у сховищі.
 *
 * Цей інтерфейс описує структуру даних, яка містить інформацію про файл, збережений у сховищі.
 */
export interface StorageShareFile {
  /**
   * Унікальний ідентифікатор файлу.
   */
  id: number

  /**
   * Розмір файлу в байтах.
   */
  size: number

  /**
   * MIME-тип файлу, який вказує на його формат.
   */
  mime: string

  /**
   * Назва файлу.
   */
  name: string

  /**
   * Посилання для доступу до файлу, якщо файл спільний.
   */
  shared: string
}

/**
 * Функція для відстеження прогресу завантаження файлу.
 */
export type FileUploadProgress = (progress: any) => void

/**
 * Інтерфейс затримки.
 */
interface Latency {
  server_ts: number
  client_ts: number
  server_ack_ts: number
  client_ack_ts: number
}

/**
 * Обробник подій дзвінка.
 */
export type CallEventHandler = (action: CallActions, call: Call) => void

/**
 * Обробник подій чату.
 */
export type ChatEventHandler = (
  action: string,
  conversation: Conversation
) => void

/**
 * Обробник подій статусу користувачів.
 */
export type UsersStatusEventHandler = (state: UserStatus) => void

/**
 * Обробник подій статусу агента.
 */
export type AgentStatusEventHandler = (
  state: AgentStatusEvent,
  agent: Agent
) => void

/**
 * Обробник подій завдання.
 */
export type TaskEventHandler = (action: string, task: Task | undefined) => void

/**
 * Обробник подій роботи.
 */
export type JobEventHandler = (action: string, task: Task) => void

/**
 * Обробник подій приєднання абонента до черги.
 */
export type QueueJoinMemberHandler = (member: QueueJoinMemberEvent) => void

/**
 * Інтерфейс обробника подій.
 */
interface EventHandler {
  [WEBSOCKET_EVENT_CALL](action: CallActions, call: Call): void
  [WEBSOCKET_EVENT_USER_STATE](state: UserStatus): void
  [WEBSOCKET_EVENT_SIP](data: object): void
  [WEBSOCKET_EVENT_AGENT_STATUS](status: AgentStatusEvent, agent: Agent): void

  [WEBSOCKET_EVENT_QUEUE_JOIN_MEMBER](member: QueueJoinMemberEvent): void
  [TASK_EVENT](name: string, task: Task | undefined): void
  [JOB_EVENT](name: string, task: Task): void
  [WEBSOCKET_EVENT_CHAT](action: string, conversation: Conversation): void
  [WEBSOCKET_EVENT_ERROR](err: Error): void
}

/**
 * Події клієнта.
 *
 * Цей інтерфейс описує набір подій, які можуть бути викликані в процесі роботи клієнта.
 */
export interface ClientEvents {
  /**
   * Викликається при відключенні клієнта.
   * @param code - Код відключення.
   * @param err - Інформація про помилку, якщо вона є.
   */
  disconnected(code: number, err: Error | null): void

  /**
   * Викликається при успішному підключенні клієнта.
   */
  connected(): void

  /**
   * Викликається при виникненні помилки.
   * @param e - Об'єкт помилки.
   */
  error(e: Error): void

  /**
   * Викликається при зміні статусу реєстрації телефону.
   * @param registered - Булевий статус реєстрації телефону.
   */
  phone_registered(registered: boolean): void

  /**
   * Викликається при зміні статусу підключення телефону.
   * @param connected - Булевий статус підключення телефону.
   */
  phone_connected(connected: boolean): void

  /**
   * Викликається для оновлення пропущених подій.
   * @param ev - Об'єкт, що містить інформацію про пропущені події.
   */
  refresh_missed(ev: object): void

  /**
   * Викликається для відображення повідомлення.
   * @param ev - Об'єкт сповіщення.
   */
  show_message(ev: MessageNotification): void

  screenshot(ev: MessageNotification): void
  open_link(ev: MessageNotification): void
  screen_rec_start(ev: MessageNotification): void
  screen_rec_stop(ev: MessageNotification): void

  /**
   * Викликається при отриманні SDP-повідомлення.
   * @param sock - Ідентифікатор сокету.
   * @param ev - Об'єкт події SDP.
   */
  sdp(sock: string, ev: SdpEvent): void

  /**
   * Викликається при отриманні вхідного дзвінка.
   * @param call - Об'єкт дзвінка.
   */
  call_receive(call: Call): void

  /**
   * Викликається при завершенні дзвінка.
   * @param call - Об'єкт дзвінка.
   */
  call_hangup(call: Call): void
}

/**
 * Цей клас Client розширює EventEmitter, який використовується для керування подіями,
 * що описані в інтерфейсі ClientEvents. Він має декілька полів для збереження стану клієнта,
 * таких як agent, phone, lastError, lastLatency, а також деякі приватні поля для внутрішнього використання,
 * такі як socket, connectionInfo, reqSeq, queueRequest, log, eventHandler, callStore, conversationStore,
 * pingTimer, та toneTimer.
 * Конструктор класу приймає конфігураційні параметри, які використовуються для ініціалізації клієнта.
 */
export class Client extends EventEmitter<ClientEvents> {
  agent!: Agent
  phone?: SipClient
  lastError: null | Error
  lastLatency: number | null
  private socket!: Socket
  private connectionInfo!: ConnectionInfo
  private readonly basePath: string

  private reqSeq = 0
  private queueRequest: Map<number, PromiseCallback> = new Map<
    number,
    PromiseCallback
  >()

  private ackQueue: Map<string, AckPromiseCallback> = new Map<
    string,
    AckPromiseCallback
  >()
  private log: Log
  private eventHandler: EventEmitter<EventHandler>
  private callStore: Map<string, Call>
  private spyScreenSessions: SpyScreen[]
  private senderScreenStore: SenderSession[]
  private conversationStore: Map<string, Conversation>
  private pingTimer: number | null
  private toneTimer: number | null
  private screenResolver: ScreenResolver | null

  /**
   * Конструктор для створення екземпляра клієнта.
   *
   * @param _config - Конфігураційні параметри клієнта.
   */
  constructor(protected readonly _config: Config) {
    super()
    this.log = new Log(_config.logLvl)
    this.eventHandler = new EventEmitter()
    this.callStore = new Map<string, Call>()
    this.spyScreenSessions = []
    this.senderScreenStore = []
    this.conversationStore = new Map<string, Conversation>()
    this.pingTimer = null
    this.toneTimer = null
    this.basePath = `${formatBaseUri(
      _config.storageEndpoint || _config.endpoint
    )}`
    this.lastError = null
    this.lastLatency = null
    this.screenResolver = _config.screenResolver || null
  }

  async connect() {
    await this.connectToSocket()
  }

  async disconnect() {
    this.socket.close()
  }

  async subscribeCall(handler: CallEventHandler, data?: object) {
    const calls = (await this.request(
      `subscribe_call`,
      data
    )) as CallListResponse
    this.eventHandler.on(WEBSOCKET_EVENT_CALL, handler)

    if (calls.items && calls.items.length) {
      for (const c of calls.items) {
        if (c.hangup_at && c.hangup_at > 0 && !c.task) {
          continue
        }

        const e: CallEventData = {
          cc_app_id: '', // TODO
          app_id: c.app_id,
          event: c.state,
          id: c.id,
          timestamp: Date.now(),
          data: {
            app_id: c.app_id,
            event: c.state,
            id: c.id,
            timestamp: Date.now(),
            cc_app_id: '',
            sip_id: '',

            parent_id: c.parent_id,

            direction: c.direction,
            destination: c.destination,
            queue: c.queue, // TODO
            from: c.from,
            to: c.to,
            payload: c.variables,
          },
        }

        const call = new Call(this, e)
        call.createdAt = c.created_at
        call.answeredAt = c.answered_at || 0
        call.bridgedAt = c.bridged_at || 0
        call.hangupAt = c.hangup_at || 0

        // call.reportingAt = c.reporting_at || 0
        if (c.task) {
          let task = this.getTask(c.task.attempt_id!)
          if (!task) {
            task = new Task(
              this,
              {
                attempt_id: c.task.attempt_id,
                channel: c.task.channel,
                status: c.task.status,
                timestamp: Date.now(),
              },
              c.task
            )

            task.form = c.task.form || null
            if (c.leaving_at && c.task.processing_sec) {
              task.startProcessingAt = c.leaving_at
              task.setProcessing(c.leaving_at, {
                sec: c.task.processing_sec || 0,
                timeout: c.task.processing_timeout_at || null,
                renewal_sec: c.task.processing_renewal_sec || 0,
              })
            }
          }
          call.task = task
          call.queue!.reporting = 'true'
        }

        if (c.contact_id) {
          call.setContactId(c.contact_id)
        }

        this.callStore.set(call.id, call)
      }
    }

    return calls
  }
  /**
   * Підписується на події чату.
   *
   * @param handler - Обробник подій чату.
   * @param data - Додаткові дані для підписки (необов'язково).
   */
  async subscribeChat(handler: ChatEventHandler, data?: object) {
    const res = (await this.request(
      `subscribe_chat`,
      data
    )) as ConversationListResponse
    this.eventHandler.on(WEBSOCKET_EVENT_CHAT, handler)

    if (res && res.items) {
      for (const conv of res.items) {
        // tslint:disable-next-line: no-assign-mutated-array
        const messages = conv.messages.reverse()

        const c = new Conversation(
          this,
          conv.id,
          conv.title,
          conv.members,
          messages,
          conv.variables
        )
        c.createdAt = conv.created_at
        c.closedAt = conv.closed_at

        if (conv.task) {
          let task = this.getTask(conv.task.attempt_id!)
          if (!task) {
            task = new Task(
              this,
              {
                attempt_id: conv.task.attempt_id,
                channel: conv.task.channel,
                status: conv.task.status,
                timestamp: Date.now(),
              },
              conv.task // todo add app_id
            )
            if (conv.leaving_at && conv.task.processing_sec) {
              task.startProcessingAt = conv.leaving_at
              task.setProcessing(conv.leaving_at, {
                sec: conv.task.processing_sec || 0,
                timeout: conv.task.processing_timeout_at || null,
                renewal_sec: conv.task.processing_renewal_sec || 0,
              })
            }
            task.form = conv.task.form || null
          }
          c.task = task
        }

        if (conv.invite_id) {
          c.setInvite(conv.invite_id, conv.created_at)
        } else if (conv.channel_id) {
          c.setAnswered(conv.channel_id, conv.joined_at, {
            id: conv.channel_id,
            name: 'TODO',
            type: 'webitel',
          })
          if (conv.closed_at) {
            c.setClosed(conv.closed_at)
          }
        } else {
          this.log.error(`conversation ${conv.id} not valid`)
          continue
        }

        this.conversationStore.set(c.id, c)
      }
    }

    return res
  }

  async subscribeUsersStatus(handler: UsersStatusEventHandler, data?: object) {
    const res = await this.request(`subscribe_users_status`, data)
    this.eventHandler.on(WEBSOCKET_EVENT_USER_STATE, handler)

    return res
  }

  async subscribeAgentsStatus(handler: AgentStatusEventHandler, data?: object) {
    const res = await this.request(`cc_agent_subscribe_status`, data)
    this.eventHandler.on(WEBSOCKET_EVENT_AGENT_STATUS, handler)

    return res
  }

  getTask(id: number) {
    if (!this.agent) {
      return undefined
    }

    return this.agent.task.get(id)
  }

  subscribeTask(handler: TaskEventHandler) {
    this.eventHandler.on(TASK_EVENT, handler)
  }

  subscribeJob(handler: JobEventHandler) {
    this.eventHandler.on(JOB_EVENT, handler)
  }

  async unSubscribe(action: string, handler: CallEventHandler, data?: object) {
    return this.request(`un_subscribe_${action}`, data)
  }

  async destroy() {
    await this.disconnect()
    if (this.phone) {
      await this.phone.unregister()
      this.phone.off('*')
      delete this.phone
    }
    this.eventHandler.off('*')
  }

  allCall(): Call[] {
    return Array.from(this.callStore.values())
  }

  allConversations(): Conversation[] {
    return Array.from(this.conversationStore.values())
  }

  // todo deprecated
  allTask(): Task[] {
    if (!this.agent) {
      return []
    }

    return Array.from(this.agent.task.values())
  }

  allJob(): Task[] {
    return this.allTask().filter(isJobTask)
  }

  allSpyScreenSessions(): SpyScreen[] {
    return this.spyScreenSessions
  }

  callById(id: string): Call | undefined {
    if (this.callStore.has(id)) {
      return this.callStore.get(id)
    }
  }

  conversationById(id: string): Conversation | undefined {
    if (this.conversationStore.has(id)) {
      return this.conversationStore.get(id)
    }
  }

  callBySipId(id: string): Call | undefined {
    for (const call of this.allCall()) {
      if (call.sipId && id.startsWith(call.sipId)) {
        // FIXME
        return call
      }
    }
  }

  async reportingTask(attemptId: number, reporting: Reporting) {
    return this.request('cc_reporting', {
      attempt_id: attemptId,
      ...reporting,
    })
  }

  async agentActiveTasks(agentId: number) {
    return this.request(`cc_agent_tasks`, {
      agent_id: agentId,
    })
  }

  async auth() {
    try {
      const resp = await this.request(WEBSOCKET_AUTHENTICATION_CHALLENGE, {
        token: this._config.token,
      })

      return resp
    } catch (err) {
      this.handleError(err as Error)
      await this.disconnect()
      throw err
    }
  }

  async ping() {
    const response = (await this.request(WEBSOCKET_PING, {
      ping: 1,
    })) as any
    if (response && response.server_ts) {
      const ack = {
        client_ts: 0,
        client_ack_ts: 0,
        server_ts: response.server_ts as number,
        server_ack_ts: 0,
      }

      return this.calculateLatency(ack)
    }

    return response
  }

  sessionInfo(): Session {
    return this.connectionInfo.session
  }

  get version(): string {
    return this.connectionInfo.server_version
  }

  get buildVersion() {
    return version
  }

  get canUseChat() {
    const info = this.connectionInfo

    return !!(info && info.use_chat)
  }

  get canUseCC() {
    const info = this.connectionInfo

    return !!(info && info.use_cc)
  }

  get instanceId(): string {
    return this.connectionInfo.sock_id
  }

  get autoAnswerDelayTime() {
    return this._config.autoAnswerDelayTime || 400
  }

  async agentSession() {
    if (this.agent) {
      return this.agent
    }

    const info = await this.request(WEBSOCKET_AGENT_SESSION)

    this.agent = new Agent(this, info as AgentSession)

    const taskList = (await this.agentActiveTasks(
      this.agent.agentId
    )) as TaskListResponse

    // todo
    for (const t of taskList.items) {
      const task = new Task(
        this,
        {
          status: t.status,
          timestamp: Date.now(),
          channel: t.channel,
          attempt_id: t.attempt_id,
        },
        t
      )
      task.postProcessData = {}
      task.setState(t.state)
      if (t.bridged_at) {
        task.bridgedAt = t.bridged_at
        task.answeredAt = t.bridged_at
      }
      if (t.leaving_at) {
        task.closedAt = t.leaving_at
      }

      if (t.leaving_at && t.processing_sec) {
        task.startProcessingAt = t.leaving_at
        task.setProcessing(t.leaving_at, {
          sec: t.processing_sec || 0,
          timeout: t.processing_timeout_at || null,
          renewal_sec: t.processing_renewal_sec || 0,
        })
      }
      task.form = t.form || null

      this.agent.task.set(task.id, task)
    }

    for (const call of this.allCall()) {
      if (call.task) {
        this.agent.task.set(call.task.id, call.task)
      }
    }

    for (const conv of this.allConversations()) {
      if (conv.task) {
        this.agent.task.set(conv.task.id, conv.task)
      }
    }

    return this.agent
  }

  async invite(req: OutboundCallRequest) {
    return this.request(WEBSOCKET_MAKE_OUTBOUND_CALL, req)
  }

  async call(req: OutboundCallRequest) {
    if (this.phone) {
      try {
        await this.phone.call(req)
      } catch (e) {
        this.handleError(e as Error)
      }
    } else {
      await this.invite(req)
    }
  }

  async callRecordId(id: string) {
    return this.request('call_recordings', { id })
  }

  async eavesdrop(req: EavesdropRequest) {
    return this.request('call_eavesdrop', req)
  }

  async agentSetOnline(agentId: number, channels: string[], onDemand: boolean) {
    return this.request('cc_agent_online', {
      agent_id: agentId,
      channels,
      on_demand: onDemand,
    })
  }

  async agentSetWaiting(agentId: number, channel: string) {
    return this.request('cc_agent_waiting', {
      agent_id: agentId,
      channel,
    })
  }

  async agentSetPause(agentId: number, payload?: any) {
    return this.request('cc_agent_pause', {
      agent_id: agentId,
      payload,
    })
  }

  async agentSetOffline(agentId: number) {
    return this.request('cc_agent_offline', { agent_id: agentId })
  }

  inviteToUser(req: UserCallRequest) {
    return this.request(WEBSOCKET_MAKE_USER_CALL, req)
  }

  async answer(id: string, req: AnswerRequest) {
    const call = this.callById(id)
    if (call) {
      return call.answer(req)
    }
  }

  request(action: string, data?: object): Promise<object> {
    // @ts-ignore
    return new Promise<Error>((resolve: () => void, reject: () => void) => {
      this.queueRequest.set(++this.reqSeq, { resolve, reject })
      this.socket.send({
        seq: this.reqSeq,
        action,
        data,
      })
    })
  }

  ackRequest(action: string, data?: object, timeout?: number): Promise<object> {
    // @ts-ignore
    return new Promise<Error>(
      // @ts-ignore
      async (resolve: (res: object) => void, reject: (e: object) => void) => {
        const id = `${generateId()}/${this.sessionInfo().user_id}/${
          this.instanceId
        }`
        const ack = {
          resolve,
          reject,
          timerId: 0,
        } as AckPromiseCallback
        this.ackQueue.set(id, ack)
        try {
          await this.request(action, {
            ...data,
            ack_id: id,
          })

          if (timeout && timeout > 0) {
            ack.timerId = setTimeout(() => {
              this.ackQueue.delete(id)
              reject(new Error('timeout'))
            }, timeout)
          }
        } catch (e) {
          this.ackQueue.delete(id)
          reject(e as object)
        }
      }
    )
  }

  useWebPhone(): boolean {
    return this._config.registerWebDevice || false
  }

  callDestroyed(call: Call) {
    return call.hangupAt > 0 && !this.hasAgentTask(call.task)
  }

  conversationDestroyed(conv: Conversation) {
    return (
      conv.closedAt > 0 && (!this.hasAgentTask(conv.task) || !conv.hasReporting)
    )
  }

  reportingChannelTask(task: Task) {
    switch (task.channel) {
      case ChannelName.Call:
      case ChannelName.OutCall:
        for (const call of this.allCall()) {
          if (this.callDestroyed(call)) {
            this.destroyCall(call)

            return
          }
        }
        break

      case ChannelName.Chat:
        if (task.agentChannelId) {
          const conv = this.conversationById(task.agentChannelId)
          if (conv && this.conversationDestroyed(conv)) {
            this.destroyConversation(conv)

            return
          }
        }
        break

      default:
    }
  }

  async registerCallClient(phone: SipClient) {
    this.phone = phone
    this.subscribePhone(phone)

    try {
      const conf = await this.deviceConfig(this.phone.type)
      await this.phone.register(conf as SipConfiguration)
    } catch (e) {
      this.emit('error', e as Error)
    }
  }

  subscribePhone(phone: SipClient) {
    phone.on(
      'peerStreams',
      (session: CallSession, streams: MediaStream[] | null) => {
        const call = this.callBySession(session)
        if (call && !call.peerStreams.length) {
          call.setPeerStreams(streams)
          this.eventHandler.emit(
            WEBSOCKET_EVENT_CALL,
            CallActions.PeerStream,
            call
          )
        }
      }
    )

    phone.on(
      'localStreams',
      (session: CallSession, streams: MediaStream[] | null) => {
        const call = this.callBySession(session)
        if (call && !call.localStreams.length) {
          call.setLocalStreams(streams)
          this.eventHandler.emit(
            WEBSOCKET_EVENT_CALL,
            CallActions.LocalStream,
            call
          )
        }
      }
    )

    phone.on('newSession', this.onNewCallSession.bind(this))
    phone.on('registered', () => this.emit('phone_registered', true))
    phone.on('connected', () => this.emit('phone_connected', true))
    phone.on('unregistered', () => this.emit('phone_registered', false))
  }

  phoneIsRegister() {
    if (this.phone && this.phone.isRegistered) {
      return this.phone.isRegistered()
    }

    return false
  }

  async deviceConfig(name?: string) {
    return this.request(WEBSOCKET_DEFAULT_DEVICE_CONFIG, { name })
  }

  async storeFile(
    id: string,
    files: File[],
    cb?: FileUploadProgress,
    channel?: string
  ) {
    if (!files || files.length < 1) {
      throw new Error('no files')
    }

    const formData = new FormData()

    for (const file of files) {
      formData.append(file.name, file) // todo name
    }

    let url = `${this.basePath}/api/storage/file/${id}/upload`
    if (channel) {
      url += `?channel=${channel}`
    }

    const result = await Axios.post<StorageShareFile[]>(url, formData, {
      headers: {
        [API_HEADER_TOKEN]: this._config.token as string,
      },
      onUploadProgress: cb,
    })

    const data = result.data
    for (const f of data) {
      f.shared = this.basePath + f.shared
    }

    return data
  }

  fileUrlDownload(fileId: number, mime: string) {
    const params = this.fileUrlParams(mime)

    return `${this.basePath}/api/storage/file/${fileId}/download?${params.join(
      '&'
    )}`
  }

  fileUrlStream(fileId: number, mime: string) {
    const params = this.fileUrlParams(mime)

    return `${this.basePath}/api/storage/file/${fileId}/stream?${params.join(
      '&'
    )}`
  }

  handleError(e?: Error) {
    if (e) {
      switch (e.name) {
        case HandleError.NotFoundError:
          this.emit('error', new DeviceNotFoundError(e.message))
          break
        case HandleError.NotAllowedError:
          this.emit('error', new DeviceNotAllowPermissionError(e.message))
          break
        default:
          if (e.name !== 'INVALID_STATE_ERROR') {
            // TODO: DEV-3409
            this.emit('error', e)
          }
      }
    }
  }

  destroyConversation(conv: Conversation) {
    // FIXME sync channel & call event
    this.conversationStore.delete(conv.id)
    this.eventHandler.emit(WEBSOCKET_EVENT_CHAT, ChatActions.Destroy, conv)
  }

  removeSpyScreen(id: string) {
    const idx = this.spyScreenSessions.findIndex((i) => i.id === id)
    if (idx !== -1) {
      this.spyScreenSessions.splice(idx, 1)

      return true
    }

    return false
  }

  async spyScreen(
    agentId: number,
    conf: RTCConfiguration,
    cb: (m: MediaStream) => void,
    timeout?: number
  ) {
    const s = new SpyScreen(this, agentId, conf, this.log)
    s.on('close', () => {
      this.removeSpyScreen(s.id)
    })
    s.on('stream', cb)
    this.spyScreenSessions.push(s)

    try {
      const offer = await s.offer()
      await this.ackRequest(
        `ss_invite`,
        {
          id: s.id,
          sdp: offer.sdp,
          to_user_id: agentId,
        },
        timeout || 5000
      ) // TODO fix timeout
    } catch (e) {
      this.removeSpyScreen(s.id)
      this.log.error('error ', e)
    }

    return
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
          const err = message.error as BaseError
          if (err && err.id === TypeErrors.RolePermission) {
            promise!.reject(new RolePermissionError(err.detail))
          } else if (err && err.id === TypeErrors.LicencePermission) {
            promise!.reject(new LicencePermissionError(err.detail))
          } else {
            promise!.reject(message.error!)
          }
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
          await this.handleCallEvents(message.data.call as CallEventData)
          break
        case WEBSOCKET_EVENT_CHAT:
          await this.handleChatEvents(message.data as ChatEvent)
          break
        case WEBSOCKET_EVENT_USER_STATE:
          this.handleUserStateEvent(message.data.state as UserStatus)
          break

        case WEBSOCKET_EVENT_SIP:
          this.eventHandler.emit(WEBSOCKET_EVENT_SIP, message.data)
          break

        case WEBSOCKET_EVENT_SDP:
          this.emit(
            WEBSOCKET_EVENT_SDP,
            message.sock_id as string,
            message.data
          )
          break

        case WEBSOCKET_EVENT_AGENT_STATUS:
          this.handleAgentStatus(message.data as AgentStatusEvent)
          break
        case WEBSOCKET_EVENT_CHANNEL_STATUS:
          this.handleChannelEvents(message.data as ChannelEvent)
          break
        case WEBSOCKET_EVENT_ERROR:
          this.lastError = message.data.error
          break

        case WEBSOCKET_EVENT_NOTIFICATION:
          await this.handleNotification(message.data
            .notification as Notification)
          break
        default:
          this.log.error(`event ${message.event} not handler`)
      }
    }
  }

  private async handleNotification(e: Notification) {
    switch (e.action) {
      case NotificationActions.HideMember:
        if (this.agent && this.agent._listOfflineMembers) {
          const list = this.agent._listOfflineMembers
          if (list.items) {
            for (let i = 0; i < list.items.length; i++) {
              if (list.items[i].id === e.body!.member_id) {
                list.items.splice(i, 1)
                break
              }
            }
          }
        }
        break
      case NotificationActions.SetContact:
        if (e.body) {
          const contactId = e.body.contact_id as number
          const channel = e.body.channel as string
          switch (channel) {
            case 'chat':
              const conv = this.conversationById(e.body.id as string)
              if (conv) {
                conv.setContactId(contactId)
              }
              break
            default:
              const call = this.callById(e.body.id as string)
              if (call) {
                call.setContactId(contactId)
              }
          }
        }
        break
      case NotificationActions.WaitingList:
        if (this.agent) {
          this.agent.setWaitingList(e.body)
        }
        break
      case NotificationActions.HideAttempt:
        if (this.agent) {
          this.agent.deleteWaitingAttempt(e.body)
        }
        break
      case NotificationActions.RefreshMissed:
        this.emit(`refresh_missed`, e.body as object)
        break
      case NotificationActions.ShowMessage:
        this.emit(`show_message`, e.body as MessageNotification)
        break
      case NotificationActions.OpenLink:
        this.emit(`open_link`, e.body as MessageNotification)
        break

      case NotificationActions.StartScreenRecord:
        const msgRecStart = e.body as MessageNotification
        this.emit(`screen_rec_start`, msgRecStart)
        if (msgRecStart.ack_id) {
          await this.request('ss_ack', {
            ack_id: msgRecStart.ack_id,
          })
        }
        break
      case NotificationActions.StopScreenRecord:
        const msgRecStop = e.body as MessageNotification
        this.emit(`screen_rec_stop`, msgRecStop)
        if (msgRecStop.ack_id) {
          await this.request('ss_ack', {
            ack_id: msgRecStop.ack_id,
          })
        }
        break

      case NotificationActions.Screenshot:
        const msgScreenshot = e.body as MessageNotification
        this.emit(`screenshot`, msgScreenshot)
        if (msgScreenshot.ack_id) {
          await this.request('ss_ack', {
            ack_id: msgScreenshot.ack_id,
          })
        }

        break

      case NotificationActions.ACK:
        const ackMsg = e.body as MessageNotification
        const ack = this.ackQueue.get(ackMsg.ack_id!)
        if (ack) {
          clearTimeout(ack.timerId)
          this.ackQueue.delete(ackMsg.ack_id!)
          if (ackMsg.error) {
            ack.reject(new Error(ackMsg.error))
          } else {
            ack.resolve({})
          }
        }

        break

      case NotificationActions.ScreenShare:
        const body = e.body as MessageScreenShare
        switch (body.state) {
          case 'invite':
            if (!this.screenResolver) {
              throw new Error('not found screenResolver')
            }
            let displayMediaStreamOptions = {}
            let RTCConfigurationConf = {}

            if (body.screenConstraints) {
              displayMediaStreamOptions = body.screenConstraints
            }

            if (body.RTCConfiguration) {
              RTCConfigurationConf = body.RTCConfiguration
            }

            const stream = await this.screenResolver(displayMediaStreamOptions)
            const s = new SenderSession(
              body.sdp,
              {
                id: body.from_user_id!,
                sockId: body.sock_id!,
                sessionId: body.parent_id!,
              },
              RTCConfigurationConf,
              this.log
            )

            s.on('close', () => {
              this.senderScreenStore = this.senderScreenStore.filter(
                (i) => i.id !== s.id
              )
            })
            s.on('stream', async (rtc: RTCSessionDescription) => {
              await this.request(`ss_accept`, {
                id: s.id,
                sdp: rtc.sdp,
                to_user_id: s.from.id,
                sock_id: s.from.sockId,
                session_id: s.from.sessionId,
              })
            })
            this.senderScreenStore.push(s)

            // tslint:disable-next-line: no-floating-promises
            s.start(stream)
            if (body.ack_id) {
              await this.request('ss_ack', {
                ack_id: body.ack_id,
              })
            }

            break

          case 'accept':
            const receive = this.spyScreenSessions.filter(
              (i) => i.id === body.session_id!
            )[0]
            if (receive) {
              // tslint:disable-next-line: no-floating-promises
              receive.answerSession(body.from_sock_id!, {
                type: 'answer',
                sdp: body.sdp,
              })
            }
            if (body.ack_id) {
              await this.request('ss_ack', {
                ack_id: body.ack_id,
              })
            }
            break

          default:
            this.log.error(`notification "${e.action}" not handled`)
        }
        break

      default:
        this.log.error(`notification "${e.action}" not handled`)
    }
  }

  private handleAgentStatus(e: AgentStatusEvent) {
    if (this.agent && e.agent_id === this.agent.agentId) {
      this.agent.setStatus(e)
    }

    this.eventHandler.emit(WEBSOCKET_EVENT_AGENT_STATUS, e, this.agent)
  }

  private handleChannelEvents(e: ChannelEvent) {
    if (this.agent) {
      e.timestamp = Date.now() // bug
      const task = this.agent.onChannelEvent(e) || undefined
      this.eventHandler.emit(TASK_EVENT, e.status, task)
      if (task && isJobTask(task)) {
        this.eventHandler.emit(JOB_EVENT, task.state, task)
        if (isDestroyJob(task.state)) {
          this.eventHandler.emit(JOB_EVENT, JobState.Destroy, task)
        }
      }
    }
  }

  private deadlinePingTime(interval: number) {
    if (interval > 10000) {
      return interval / 2
    }

    return 3000
  }

  private async pingServer() {
    if (this.pingTimer && this.connectionInfo.ping_interval) {
      const t = setTimeout(async () => {
        this.log.error('close socket without pong')
        this.socket.close(3005)
      }, this.deadlinePingTime(this.connectionInfo.ping_interval))
      await this.ping()
      clearTimeout(t)
    }
    if (this.connectionInfo.ping_interval) {
      // @ts-ignore
      this.pingTimer = setTimeout(
        this.pingServer.bind(this),
        +this.connectionInfo.ping_interval
      )
    }
  }

  private async connected(info: ConnectionInfo) {
    this.connectionInfo = info

    if (info.ping_interval) {
      await this.pingServer()
    }

    if (!this.useWebPhone()) {
      return
    }

    return this.registerCallClient(
      this.connectionInfo.b2bua
        ? new ExperimentalPhone(this)
        : new SipPhone(this.instanceId, this._config.debug)
    )
  }

  private async latency() {
    const ack = {
      client_ts: 0,
      client_ack_ts: 0,
      server_ts: 0,
      server_ack_ts: 0,
    }

    Object.assign(ack, await this.request(`latency_start`, ack))

    return this.calculateLatency(ack)
  }

  private async calculateLatency(ack: Latency) {
    ack.client_ts = Date.now()
    Object.assign(
      ack,
      await this.request(`latency_ack`, {
        ...ack,
        last_latency: this.lastLatency || 0,
      })
    )
    ack.client_ack_ts = Date.now()
    this.lastLatency = Math.abs(
      ack.server_ack_ts -
        ack.server_ts -
        (ack.client_ack_ts - ack.client_ts) * 0.5
    )
    this.log.info(`[websocket] latency: ${this.lastLatency}`)

    return this.lastLatency
  }

  private callBySession(session: CallSession): Call | undefined {
    for (const call of this.allCall()) {
      if (call.sip && call.sip.id === session.id) {
        return call
      }
    }
  }

  private async onNewCallSession(session: CallSession) {
    let call: Call | undefined
    if (session.callId) {
      call = this.callById(session.callId)
    } else {
      call = this.callBySipId(session.id)
    }

    if (call) {
      call.setSip(session)
      this.checkAutoAnswer(call)
    }
  }

  private checkAutoAnswer(call: Call) {
    if (/*!document.hidden && */ call.autoAnswer) {
      call.answerDelay({
        video: call.params.video,
        screen: call.params.screen,
        disableStun: call.params.disableStun,
      })
    }
  }

  private connectToSocket(): Promise<Error | null> {
    return new Promise<Error | null>((resolve, reject) => {
      try {
        this.socket = new Socket(
          this._config.endpoint,
          this._config.applicationName
        )
        this.socket.connect(this._config.token!)
      } catch (e) {
        reject(e)

        return
      }

      this.socket.on('message', this.onMessage.bind(this))
      this.socket.on('close', (code: number) => {
        if (this.pingTimer) {
          clearTimeout(this.pingTimer)
        }
        this.log.error('socket close code: ', code)
        if (code !== 1000) {
          this.emit('disconnected', code, this.lastError)
          reject(new Error(`close socket code: ${code}`))
        }
        this.eventHandler.off('*')
      })
      this.socket.on('open', () => {
        resolve(null)
        this.emit('connected')
      })
    })
  }

  private handleUserStateEvent(event: UserStatus) {
    this.eventHandler.emit(WEBSOCKET_EVENT_USER_STATE, event)
  }

  private async handleCallEvents(event: CallEventData) {
    let call: Call | undefined
    event.timestamp = Date.now() // todo bug

    switch (event.event) {
      case CallActions.Ringing:
        call = new Call(this, event)
        this.emit('call_receive', call)

        this.callStore.set(call.id, call)
        this.checkAutoAnswer(call)
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
          call.setBridged(event)
        }
        break

      case CallActions.Execute:
        call = this.callById(event.id)
        if (call) {
          call.setExecute(event.data as CallEventExecute)
        }
        break

      case CallActions.DTMF:
        call = this.callById(event.id)
        if (call) {
          call.addDigit(event.data as CallEventDTMF)
        }
        break

      case CallActions.Eavesdrop:
        call = this.callById(event.id)
        if (call) {
          call.setEavesdropState(event.data as CallEventEavesdrop)
        }
        break

      case CallActions.Voice:
        call = this.callById(event.id)
        if (call) {
          call.setVoice()
        }
        break

      case CallActions.Silence:
        call = this.callById(event.id)
        if (call) {
          call.setSilence()
        }
        break

      case CallActions.Hold:
        call = this.callById(event.id)
        if (call) {
          call.setHold(event)
        }
        break

      case CallActions.Hangup:
        call = this.callById(event.id)
        if (call) {
          call.setHangup(event)
          this.emit('call_hangup', call)

          if (call.notificationHangup) {
            this.generateTone()
          }
        }
        break

      default:
        throw new Error('Unhandled action')
    }

    if (call) {
      try {
        this.eventHandler.emit(WEBSOCKET_EVENT_CALL, event.event, call)
      } catch (e) {
        // @ts-ignore
        this.log.error(e.message)
      }

      if (this.callDestroyed(call)) {
        this.destroyCall(call)
      }
    }
  }

  private generateTone() {
    if (this.toneTimer) {
      return
    }

    try {
      const context = new AudioContext()
      const oscillator = context.createOscillator() // Oscillator defaults to sine wave
      oscillator.connect(context.destination)
      // @ts-ignore
      // oscillator.type = "sawtooth";
      oscillator.start()
      // @ts-ignore
      this.toneTimer = setTimeout(() => {
        this.toneTimer = null
        oscillator.stop()
      }, 500)
    } catch (e) {
      this.emit('error', e as Error)
    }
  }

  private async handleChatEvents(event: ChatEvent) {
    let conversation: Conversation | undefined
    const timestamp = Date.now() // todo bug

    switch (event.action) {
      case ChatActions.UserInvite:
        const inv = event.data as InviteEvent
        conversation = new Conversation(
          this,
          inv.conversation_id,
          inv.title,
          inv.members,
          inv.messages,
          inv.variables
        )
        conversation.setInvite(inv.invite_id, timestamp)
        this.conversationStore.set(conversation.id, conversation)
        break

      case ChatActions.MessageDeleted:
        const deleted = event.data as MessageDeleted
        // fixme
        for (const v of this.allConversations()) {
          if (!v.closedAt && v.membersId.indexOf(deleted.channel_id) > -1) {
            conversation = v
            break
          }
        }
        if (conversation) {
          conversation.setDeletedMessage(deleted)
        }

        return

      case ChatActions.Joined:
        const joined = event.data as JoinedEvent
        conversation = this.conversationById(joined.member.id!)
        if (conversation) {
          conversation.setAnswered(joined.member.id!, timestamp, joined.member)
        }

        break

      case ChatActions.Message:
        const message = event.data as MessageEvent
        message.timestamp = timestamp
        // fixme
        for (const v of this.allConversations()) {
          if (!v.closedAt && v.membersId.indexOf(message.channel_id) > -1) {
            conversation = v
          }
        }
        if (conversation) {
          conversation.newMessage(message)
        }
        break

      case ChatActions.Close:
        const c = event.data as CloseEvent
        // fixme
        for (const v of this.allConversations()) {
          if (!v.closedAt && v.membersId.indexOf(c.from_channel_id) > -1) {
            conversation = v
          }
        }
        if (conversation) {
          conversation.setClosed(timestamp)
        }
        break
      case ChatActions.Leave:
        const l = event.data as LeavedEvent
        conversation = this.conversationById(l.leaved_channel_id)
        if (conversation) {
          conversation.setLeave(l)
        }
        break
      case ChatActions.Decline:
        const e = event.data as DeclineInviteEvent
        conversation = this.conversationById(e.invite_id)
        if (conversation) {
          conversation.setDecline(e)
        }
        break

      default:
    }

    if (conversation) {
      conversation.lastAction = event.action as ChatActions
      this.eventHandler.emit(WEBSOCKET_EVENT_CHAT, event.action, conversation)

      if (this.conversationDestroyed(conversation)) {
        this.destroyConversation(conversation)
      }
    }
  }

  private hasAgentTask(task: Task | null | undefined): boolean {
    if (!this.agent || !task) {
      return false
    }

    return this.agent.hasTask(task)
  }

  private destroyCall(call: Call) {
    // FIXME sync channel & call event
    this.callStore.delete(call.id)
    this.eventHandler.emit(WEBSOCKET_EVENT_CALL, CallActions.Destroy, call)
  }

  private fileUrlParams(mime: string) {
    const params = [`access_token=${this._config.token}`]

    if (mime) {
      const source = mime.replace(/.*;\s?source=([-._A-Za-z0-9/]+).*/, '$1')
      if (source) {
        params.push(`source=${source}`)
      }
    }

    return params
  }
}

function isJobTask(task: Task) {
  return task.channel === ChannelName.Task
}

function isDestroyJob(state: string) {
  return (
    [
      ChannelState.Missed.toString(),
      ChannelState.Waiting,
      ChannelState.WrapTime,
      JobState.Closed,
    ].indexOf(state) > -1
  )
}
