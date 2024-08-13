import { CallVariables } from './call'
import { Client, FileUploadProgress } from './client'
import { Reporting, Task, TaskData } from './task'
import { chunkString } from './utils'

const maxSizeMessage = 4096

/**
 * Перелік причин відмови.
 */
export enum DeclineCause {
  Timeout = 'TIMEOUT',
  Busy = 'BUSY',
  Cancel = 'CANCEL',
  Transfer = 'TRANSFER',
}

/**
 * Перелік дій чату.
 */
export enum ChatActions {
  Message = 'message',
  UserInvite = 'user_invite',
  Invite = 'invite_conversation', // коли запрошують в групу нового учасника
  Joined = 'join_conversation',

  Close = 'close_conversation',
  Leave = 'leave_conversation',
  Decline = 'decline_invite',
  Update = 'update_channel',
  Destroy = 'destroy',
  MessageDeleted = 'message_deleted',
}

/**
 * Перелік станів розмови.
 */
export enum ConversationState {
  Init = 'init',
  Invite = 'invite',
  Active = 'active',
  Pending = 'pending',
  Closed = 'closed',
}

/**
 * Подія чату.
 */
export interface ChatEvent {
  /**
   * Дія, що викликала подію.
   * @type {string}
   */
  action: string

  /**
   * Дані події.
   * @type {object}
   */
  data?: object
}

/**
 * Базовий інтерфейс події чату.
 */
export interface BaseChatEvent {
  /**
   * Ідентифікатор розмови.
   * @type {string}
   */
  conversation_id: string

  /**
   * Час події (Unix timestamp).
   * @type {number}
   */
  timestamp: number
}

/**
 * Подія запрошення до чату.
 */
export interface InviteEvent extends BaseChatEvent {
  /**
   * Ідентифікатор запрошення.
   * @type {string}
   */
  invite_id: string

  /**
   * Назва розмови.
   * @type {string}
   */
  title: string

  /**
   * Члени чату.
   * @type {ChatChannel[]}
   */
  members: ChatChannel[]

  /**
   * Повідомлення в чаті.
   * @type {Message[]}
   */
  messages: Message[]

  /**
   * Інформація про розмову.
   * @type {ConversationInfo}
   */
  conversation: ConversationInfo

  /**
   * Змінні виклику.
   * @type {CallVariables}
   */
  variables?: CallVariables
}

/**
 * Подія приєднання до чату.
 */
export interface JoinedEvent extends BaseChatEvent {
  /**
   * Член чату, що приєднався.
   * @type {ChatChannel}
   */
  member: ChatChannel
}

/**
 * Подія повідомлення в чаті.
 */
export interface MessageEvent extends BaseChatEvent, Message {}

/**
 * Подія виходу з чату.
 */
export interface LeavedEvent extends BaseChatEvent {
  /**
   * Ідентифікатор чату, з якого вийшли.
   * @type {string}
   */
  leaved_channel_id: string

  /**
   * Причина виходу.
   * @type {DeclineCause | null}
   */
  cause?: DeclineCause | null
}

/**
 * Подія закриття чату.
 */
export interface CloseEvent extends BaseChatEvent {
  /**
   * Ідентифікатор каналу, з якого закрито розмову.
   * @type {string}
   */
  from_channel_id: string

  /**
   * Причина закриття.
   * @type {string}
   */
  cause: string
}

/**
 * Подія відмови від запрошення.
 */
export interface DeclineInviteEvent extends BaseChatEvent {
  /**
   * Ідентифікатор користувача, який відмовився.
   * @type {number}
   */
  user_id: number

  /**
   * Ідентифікатор запрошення.
   * @type {string}
   */
  invite_id: string

  /**
   * Причина відмови.
   * @type {DeclineCause | null}
   */
  cause?: DeclineCause | null
}

/**
 * Подія оновлення каналу.
 */
export interface UpdateChannelEvent extends BaseChatEvent {
  /**
   * Ідентифікатор каналу.
   * @type {string}
   */
  channel_id: string

  /**
   * Час оновлення.
   * @type {number}
   */
  updated_at: number
}

/**
 * Інтерфейс для повідомлення в чаті.
 */
export interface Message {
  /**
   * Ідентифікатор повідомлення.
   * @type {number}
   */
  id: number

  /**
   * Ідентифікатор каналу.
   * @type {string}
   */
  channel_id: string

  /**
   * Тип повідомлення.
   * @type {string}
   */
  type: string

  /**
   * Текст повідомлення.
   * @type {string}
   */
  text: string

  /**
   * Файл, прикріплений до повідомлення.
   * @type {MessageFile}
   */
  file?: MessageFile

  /**
   * Контактна інформація.
   * @type {object}
   */
  contact?: object

  /**
   * Час створення.
   * @type {number}
   */
  created_at: number

  /**
   * Час оновлення.
   * @type {number | null}
   */
  updated_at?: number | null
}

/**
 * Інтерфейс для видаленого повідомлення.
 */
export interface MessageDeleted {
  /**
   * Ідентифікатор повідомлення.
   * @type {number}
   */
  id: number

  /**
   * Ідентифікатор каналу.
   * @type {string}
   */
  channel_id: string

  /**
   * Ідентифікатор розмови.
   * @type {string}
   */
  conversation_id: string

  /**
   * Тип повідомлення.
   * @type {string}
   */
  type: string

  /**
   * Текст повідомлення.
   * @type {string}
   */
  text: string

  /**
   * Час повідомлення.
   * @type {number}
   */
  timestamp: number

  /**
   * Час створення.
   * @type {number | undefined}
   */
  created_at?: number
}

/**
 * Інтерфейс для інформації про канал чату.
 */
export interface ChatChannel {
  /**
   * Ідентифікатор каналу.
   * @type {string | undefined}
   */
  id?: string

  /**
   * Назва каналу.
   * @type {string | undefined}
   */
  name?: string

  /**
   * Тип каналу.
   * @type {string | undefined}
   */
  type?: string

  /**
   * Месенджер каналу.
   * @type {string | undefined}
   */
  messenger?: string

  /**
   * Чи є це самостійний користувач.
   * @type {boolean | undefined}
   */
  self?: boolean
}

/**
 * Інтерфейс для файлу повідомлення.
 */
export interface MessageFile {
  /**
   * Ідентифікатор файлу.
   * @type {number}
   */
  id: number

  /**
   * Назва файлу.
   * @type {string}
   */
  name: string

  /**
   * MIME-тип файлу.
   * @type {string}
   */
  mime: string

  /**
   * Розмір файлу.
   * @type {number}
   */
  size: number

  /**
   * URL для завантаження файлу.
   * @type {string}
   */
  url: string

  /**
   * URL для потокового доступу до файлу.
   * @type {string}
   */
  streamUrl: string
}

/**
 * Інтерфейс для повідомлення з інформацією про канал.
 */
export interface MessageWithChannel {
  /**
   * Ідентифікатор повідомлення.
   * @type {number}
   */
  id: number

  /**
   * Ідентифікатор каналу.
   * @type {string}
   */
  channelId: string

  /**
   * Тип повідомлення.
   * @type {string}
   */
  type: string

  /**
   * Файл, прикріплений до повідомлення.
   * @type {MessageFile}
   */
  file?: MessageFile

  /**
   * Текст повідомлення.
   * @type {string | undefined}
   */
  text?: string

  /**
   * Контактна інформація.
   * @type {object | null}
   */
  contact?: object | null

  /**
   * Час створення.
   * @type {number}
   */
  createdAt: number

  /**
   * Час оновлення.
   * @type {number}
   */
  updatedAt: number

  /**
   * Член чату, який відправив повідомлення.
   * @type {ChatChannel | null}
   */
  member: ChatChannel | null
}

/**
 * Інтерфейс для інформації про розмову.
 */
export interface ConversationInfo {
  /**
   * Ідентифікатор розмови.
   * @type {string}
   */
  id: string

  /**
   * Назва розмови.
   * @type {string}
   */
  title: string

  /**
   * Час створення.
   * @type {number}
   */
  created_at: number

  /**
   * Час оновлення.
   * @type {number | null}
   */
  updated_at: number | null
}

/**
 * Інтерфейс для елемента розмови.
 */
export interface ConversationItem {
  /**
   * Ідентифікатор розмови.
   * @type {string}
   */
  id: string

  /**
   * Ідентифікатор запрошення.
   * @type {string | undefined}
   */
  invite_id?: string

  /**
   * Ідентифікатор каналу.
   * @type {string | undefined}
   */
  channel_id?: string

  /**
   * Назва розмови.
   * @type {string}
   */
  title: string

  /**
   * Час створення.
   * @type {number}
   */
  created_at: number

  /**
   * Час закриття.
   * @type {number}
   */
  closed_at: number

  /**
   * Час оновлення.
   * @type {number}
   */
  updated_at: number

  /**
   * Час приєднання.
   * @type {number}
   */
  joined_at: number

  /**
   * Час виходу.
   * @type {number | undefined}
   */
  leaving_at?: number

  /**
   * Змінні виклику.
   * @type {CallVariables | undefined}
   */
  variables?: CallVariables

  /**
   * Члени розмови.
   * @type {ChatChannel[]}
   */
  members: ChatChannel[]

  /**
   * Повідомлення в розмові.
   * @type {Message[]}
   */
  messages: Message[]

  /**
   * Дані задачі.
   * @type {TaskData | undefined}
   */
  task?: TaskData
}

/**
 * Інтерфейс для контакту.
 */
interface Contact {
  /**
   * Ідентифікатор контакту.
   * @type {number | null}
   */
  id: number | null

  /**
   * Приховати контакт.
   * @type {boolean}
   */
  hide: boolean
}

/**
 * Клас Conversation: Описує чат, включаючи його стан, учасників, повідомлення та інші атрибути.
 *
 * Конструктор Conversation:
 *  client: Клієнт для виконання запитів, використовуваних у розмові.
 *  conversationId: Ідентифікатор розмови.
 *  title: Назва розмови.
 *  members: Список учасників розмови.
 *  messages: Список повідомлень у розмові.
 *  variables: Опційні змінні виклику, що можуть бути використані в розмові.
 * Конструктор ініціалізує всі властивості класу, задаючи значення за замовчуванням або використовує
 * передані параметри для налаштування об'єкта розмови.
 */
export class Conversation {
  data: any
  state: ConversationState
  channelId!: string | null
  inviteId!: string | null
  member!: ChatChannel
  members!: ChatChannel[]
  _cause!: DeclineCause | null
  _messages: Message[]
  autoAnswered: boolean
  _autoAnswerParam: boolean | string | number
  _autoAnswerTimerId: any | null

  createdAt: number
  updatedAt: number
  answeredAt: number
  invitedAt: number
  closedAt: number
  _hasReporting: boolean
  lastAction: ChatActions | null

  variables?: CallVariables
  task: Task | null
  queue: { [index: string]: any } | null
  contact: Contact | null

  /**
   * Конструктор для розмови.
   * @param {Client} client - Клієнт для виконання запитів.
   * @param {string} conversationId - Ідентифікатор розмови.
   * @param {string} title - Назва розмови.
   * @param {ChatChannel[]} members - Члени розмови.
   * @param {Message[]} messages - Повідомлення в розмові.
   * @param {CallVariables} [variables] - Змінні виклику.
   */
  constructor(
    private readonly client: Client,
    private readonly conversationId: string,
    private readonly title: string,
    members: ChatChannel[],
    messages: Message[],
    variables?: CallVariables
  ) {
    this.channelId = null
    this.createdAt = Date.now()
    this.answeredAt = 0
    this.updatedAt = 0
    this.invitedAt = 0
    this.closedAt = 0
    this.task = null
    this.data = null
    this.queue = null
    this.members = (members || []).map((i) => wrapChannelMember(i))
    this._messages = messages || []
    this.state = ConversationState.Invite
    this.variables = {}
    this._hasReporting = !!(variables && variables.cc_reporting === 'true')
    this.autoAnswered = false
    this._autoAnswerParam = false
    this._autoAnswerTimerId = null
    this._cause = null
    this.lastAction = null
    this.contact = null

    for (const k in variables) {
      if (!k.startsWith('cc_') && variables.hasOwnProperty(k)) {
        if (k === 'wbt_auto_answer') {
          this._autoAnswerParam = variables.wbt_auto_answer
        }
        if (k === 'wbt_contact_id') {
          this.contact = { id: +variables[k], hide: false }
        } else {
          this.variables[k] = variables[k]
        }
      }
    }

    if (
      variables &&
      variables.hasOwnProperty('cc_attempt_id') &&
      this.client.agent
    ) {
      this.queue = {
        id: +variables.cc_queue_id || null,
        name: variables.cc_queue_name || '',
        manual_distribution: variables.cc_manual_distribution === 'true',
      }
      this.task = this.client.agent.task.get(+variables.cc_attempt_id) || null
    }
  }

  /**
   * Встановлює інформацію про запрошення.
   * @param {string} inviteId - Ідентифікатор запрошення.
   * @param {number} timestamp - Час запрошення.
   */
  setInvite(inviteId: string, timestamp: number) {
    this.inviteId = inviteId
    this.invitedAt = timestamp

    if (this.autoAnswer) {
      this.joinDelay().catch((e) => {
        this.client.emit('error', e)
      })
    }
  }

  /**
   * Перевіряє, чи є ручний розподіл в черзі.
   * @type {boolean}
   */
  get manualDistribution() {
    return this.queue && (this.queue.manual_distribution as boolean)
  }

  /**
   * Отримує ідентифікатор контакту.
   * @type {number | null}
   */
  get contactId() {
    return (this.contact && this.contact.id) || null
  }

  /**
   * Перевіряє, чи слід приховувати контакт.
   * @type {boolean}
   */
  get hideContact() {
    return this.contact && this.contact.hide
  }

  /**
   * Встановлює ідентифікатор контакту.
   * @param {number} id - Ідентифікатор контакту.
   */
  setContactId(id: number) {
    if (!this.contact) {
      this.contact = {
        hide: false,
        id,
      }
    } else {
      this.contact.id = id
    }
  }

  /**
   * Перевіряє, чи потрібно автоматично відповісти.
   * @type {boolean}
   */
  get autoAnswer() {
    return this.autoAnswerDelay > 0
  }

  /**
   * Отримує затримку для автоматичної відповіді.
   * @type {number}
   */
  get autoAnswerDelay() {
    if (!this._autoAnswerParam || `${this._autoAnswerParam}` === 'false') {
      return 0
    } else if (isFinite(+this._autoAnswerParam)) {
      return +this._autoAnswerParam
    }

    return this.client.autoAnswerDelayTime
  }

  /**
   * Встановлює розмову як відповідану.
   * @param {string} channelId - Ідентифікатор каналу.
   * @param {number} timestamp - Час відповіді.
   * @param {ChatChannel} member - Член чату.
   */
  setAnswered(channelId: string, timestamp: number, member: ChatChannel) {
    this.state = ConversationState.Active
    this.answeredAt = timestamp
    this.channelId = channelId
    if (this._autoAnswerTimerId) {
      clearTimeout(this._autoAnswerTimerId)
      this._autoAnswerTimerId = null
    }
    this.member = wrapChannelMember(member)
    this.inviteId = null // deleted in DB
  }

  /**
   * Встановлює розмову як закриту.
   * @param {number} timestamp - Час закриття.
   */
  setClosed(timestamp: number) {
    this.state = ConversationState.Closed
    this.closedAt = timestamp
  }

  /**
   * Встановлює причину відмови від запрошення.
   * @param {DeclineInviteEvent} e - Подія відмови.
   */
  setDecline(e: DeclineInviteEvent) {
    this.setClosed(e.timestamp)
    this._cause = e.cause || null
  }

  /**
   * Встановлює причину виходу з чату.
   * @param {LeavedEvent} e - Подія виходу.
   */
  setLeave(e: LeavedEvent) {
    if (e.cause) {
      this._cause = e.cause
    }

    this.setClosed(e.timestamp)
  }

  /**
   * Оновлює видалене повідомлення.
   * @param {MessageDeleted} d - Видалене повідомлення.
   */
  setDeletedMessage(d: MessageDeleted) {
    const messages = this._messages
    for (let i = 0; i < messages.length; i++) {
      if (messages[i].id === d.id) {
        d.created_at = messages[i].created_at
        messages.splice(i, 1, d as Message)
      }
    }
  }

  /**
   * Отримує ідентифікатор розмови.
   * @type {string}
   */
  get id() {
    return this.channelId || this.inviteId || this.conversationId
  }

  /**
   * Отримує причину відмови або виходу.
   * @type {DeclineCause | null}
   */
  get cause() {
    return this._cause
  }

  /**
   * Отримує всі повідомлення з каналу.
   * @type {MessageWithChannel[]}
   */
  get messages(): MessageWithChannel[] {
    return this.getMessages()
  }

  /**
   * Отримує всі повідомлення з каналу.
   * @returns {MessageWithChannel[]}
   */
  getMessages(): MessageWithChannel[] {
    return this._messages.map((i) => {
      const msg = {
        id: i.id,
        type: i.type,
        member: this.messageMember(i),
        channelId: i.channel_id,
        createdAt: i.created_at,
        updatedAt: i.updated_at,
        contact: null,
      } as MessageWithChannel

      if (i.hasOwnProperty('file')) {
        if (i.file && i.file.id > 0) {
          i.file.url = this.client.fileUrlDownload(i.file.id, i.file.mime)
          i.file.streamUrl = this.client.fileUrlStream(i.file.id, i.file.mime)
        }

        msg.file = i.file
      }

      if (i.hasOwnProperty('text')) {
        msg.text = i.text
      }

      if (i.hasOwnProperty('contact')) {
        msg.contact = i.contact
      }

      return msg
    })
  }

  /**
   * Обробляє наступний етап (потрібно реалізувати).
   * @returns {Promise<void>}
   */
  async next() {
    throw new Error('TODO')
  }

  /**
   * Обробляє пагінацію для повідомлень.
   * @param {number} page - Номер сторінки.
   * @param {number} perPage - Кількість повідомлень на сторінку.
   * @returns {Promise<void>}
   */
  async pagination(page: number, perPage: number) {
    throw new Error('TODO')
  }

  /**
   * Додає нове повідомлення до розмови.
   * @param {MessageEvent} e - Подія нового повідомлення.
   */
  newMessage(e: MessageEvent) {
    this._messages.push(e)
  }

  /**
   * Перевіряє, чи дозволена відмова.
   * @type {boolean}
   */
  get allowDecline() {
    return !!this.inviteId
  }

  /**
   * Перевіряє, чи дозволено приєднання.
   * @type {boolean}
   */
  get allowJoin() {
    return !!this.inviteId
  }

  /**
   * Перевіряє, чи дозволено вихід.
   * @type {boolean}
   */
  get allowLeave() {
    return !!this.channelId && (this.closedAt === 0 || !this.hasReporting)
  }

  /**
   * Перевіряє, чи дозволена подача звітності.
   * @type {boolean}
   */
  get allowReporting() {
    return this.answeredAt > 0 && this.hasReporting
  }

  /**
   * Перевіряє, чи є звітність.
   * @type {boolean}
   */
  get hasReporting() {
    return this._hasReporting
  }

  /**
   * Отримує ідентифікатори всіх учасників.
   * @type {string[]}
   */
  get membersId() {
    const res = [this.id]
    for (const m of this.members) {
      res.push(m.id!)
    }

    return res
  }

  /**
   * @deprecated
   * Отримує завдання, яке зараз виконується.
   * @type {Task | null}
   */
  get attempt() {
    return this.task
  }

  /**
   * Перевіряє, чи була розмова передана.
   * @type {boolean}
   */
  get isTransferred() {
    return (this._cause && this._cause.toUpperCase()) === DeclineCause.Transfer
  }

  /*
   * Дії
   */

  /**
   * Відмовляється від розмови.
   * @param {DeclineCause} [cause] - Причина відмови.
   * @returns {Promise<void>}
   */
  async decline(cause?: DeclineCause) {
    if (!this.inviteId) throw new Error('This conversation is joined')
    let _cause = cause

    if (!cause && this.answeredAt === 0) {
      _cause = DeclineCause.Busy
    }

    return this.client.request(`decline_chat`, {
      invite_id: this.inviteId,
      cause: _cause,
    })
  }

  /**
   * Затримує приєднання до розмови, якщо потрібно.
   * @returns {Promise<void>}
   */
  async joinDelay() {
    if (this.autoAnswered) {
      return
    }

    this.autoAnswered = true
    this._autoAnswerTimerId = setTimeout(async () => {
      if (!this.answeredAt) {
        await this.join()
      }
    }, this.autoAnswerDelay)
  }

  /**
   * Приєднується до розмови.
   * @returns {Promise<void>}
   */
  async join() {
    if (!this.inviteId) throw new Error('This conversation is joined')

    return this.client.request(`join_chat`, {
      invite_id: this.inviteId,
    })
  }

  /**
   * Закриває розмову.
   * @param {string} cause - Причина закриття.
   * @returns {Promise<void>}
   */
  async close(cause: string) {
    if (!this.channelId) throw new Error('This conversation not active')

    return this.client.request(`close_chat`, {
      channel_id: this.channelId,
      conversation_id: this.conversationId,
      cause,
    })
  }

  /**
   * Виходить з розмови.
   * @param {string} cause - Причина виходу.
   * @returns {Promise<void>}
   */
  async leave(cause: string) {
    if (!this.channelId) throw new Error('This conversation not active')

    if (
      this.closedAt !== 0 &&
      !this.hasReporting &&
      this.cause !== DeclineCause.Busy
    ) {
      return this.client.destroyConversation(this)
    }

    return this.client.request(`leave_chat`, {
      channel_id: this.channelId,
      conversation_id: this.conversationId,
      cause,
    })
  }

  /**
   * Відправляє текстове повідомлення.
   * @param {string} text - Текст повідомлення.
   * @returns {Promise<void>}
   */
  async sendText(text: string) {
    if (!this.channelId) {
      throw new Error('conversation not active')
    }

    if (!text.length) {
      throw new Error('empty message')
    }

    const chunk = chunkString(text, maxSizeMessage)

    for (let i = 0; i < chunk.length; i++) {
      if (i + 1 >= chunk.length) {
        return this.sendMessageTextChunk(chunk[i])
      }

      await this.sendMessageTextChunk(chunk[i])
    }
  }

  /**
   * Відправляє файл.
   * @param {File} file - Файл для відправки.
   * @param {FileUploadProgress} [cb] - Колбек для відстеження прогресу завантаження.
   * @returns {Promise<void>}
   */
  async sendFile(file: File, cb?: FileUploadProgress) {
    const storedFiles = await this.client.storeFile(
      this.conversationId,
      [file],
      cb
    )
    const f = storedFiles[0]

    // todo bug if chat response error
    return this.client.request(`send_file_chat`, {
      channel_id: this.channelId,
      conversation_id: this.conversationId,
      id: f.id,
      name: file.name,
      mime: f.mime,
      url: f.shared,
      size: f.size,
    })
  }

  /**
   * Відправляє дані (текст або файл).
   * @param {string | File} data - Дані для відправки.
   * @param {FileUploadProgress} [cb] - Колбек для відстеження прогресу завантаження.
   * @returns {Promise<void>}
   */
  async send(data: string | File, cb?: FileUploadProgress) {
    if (data instanceof File) {
      return this.sendFile(data, cb)
    }

    return this.sendText(data)
  }

  /**
   * Оновлює інформацію про членів розмови.
   * @param {ChatChannel[]} members - Нові члени розмови.
   */
  setMembers(members: ChatChannel[]) {
    this.members = members.map((i) => wrapChannelMember(i))
  }

  /**
   * Перевіряє, чи належить повідомлення розмові.
   * @param {Message} m - Повідомлення.
   * @returns {boolean}
   */
  isMessageInConversation(m: Message) {
    return this._messages.some((i) => i.id === m.id)
  }

  /**
   * Надсилає звіт для поточної розмови.
   *
   * Цей метод викликає метод reporting об'єкта Task, щоб надіслати звіт про розмову.
   * Якщо розмова не знаходиться в черзі, буде згенерована помилка.
   *
   * @param {Reporting} reporting - Об'єкт Reporting, який містить дані звіту.
   * @throws {Error} - Якщо розмова не знаходиться в черзі.
   * @returns {Promise<any>} - Результат виконання методу reporting об'єкта Task.
   */
  async reporting(reporting: Reporting) {
    if (!this.task) {
      throw new Error(`this conversation not in queue`)
    }

    return this.task.reporting(reporting)
  }

  /**
   * Оновлює час для поточної розмови в черзі.
   *
   * Цей метод викликає метод renew об'єкта Task, щоб оновити час розмови.
   * Якщо розмова не знаходиться в черзі, буде згенерована помилка.
   *
   * @param {number} [sec] - Кількість секунд для продовження розмови. Якщо не зазначено, використовується значення за замовчуванням.
   * @throws {Error} - Якщо розмова не знаходиться в черзі.
   * @returns {Promise<any>} - Результат виконання методу renew об'єкта Task.
   */
  async renew(sec?: number) {
    if (!this.task) {
      throw new Error(`this conversation not in queue`)
    }

    return this.task.renew(sec)
  }

  /**
   * Переносить розмову до плану.
   *
   * Цей метод відправляє запит на сервер для перенесення розмови до зазначеного плану.
   *
   * @param {number} planId - Ідентифікатор плану, до якого потрібно перенести розмову.
   * @returns {Promise<any>} - Результат запиту на сервер для перенесення розмови.
   */
  async transferToPlan(planId: number) {
    return this.client.request(`blind_transfer_chat`, {
      conversation_id: this.conversationId,
      channel_id: this.channelId,
      plan_id: planId,
    })
  }

  /**
   * Переносить розмову до іншого користувача.
   *
   * Цей метод відправляє запит на сервер для перенесення розмови до вказаного користувача.
   *
   * @param {number} userId - Ідентифікатор користувача, до якого потрібно перенести розмову.
   * @returns {Promise<any>} - Результат запиту на сервер для перенесення розмови.
   */
  async transferToUser(userId: number) {
    return this.client.request(`transfer_user_chat`, {
      conversation_id: this.conversationId,
      channel_id: this.channelId,
      user_id: userId,
    })
  }

  /**
   * Встановлює контакт для розмови.
   *
   * Цей метод відправляє запит на сервер для призначення контактного ідентифікатора до розмови.
   *
   * @param {number} contactId - Ідентифікатор контакту, який потрібно призначити для розмови.
   * @returns {Promise<any>} - Результат запиту на сервер для встановлення контакту.
   */
  async setContact(contactId: number) {
    return this.client.request(`chat_set_contact`, {
      id: this.conversationId,
      channel_id: this.channelId,
      contact_id: contactId,
    })
  }

  /**
   * Надсилає частину текстового повідомлення у розмову.
   *
   * Цей метод надсилає частину текстового повідомлення на сервер у рамках розмови.
   *
   * @param {string} text - Текст повідомлення, яке потрібно надіслати.
   * @returns {Promise<any>} - Результат запиту на сервер для надсилання частини текстового повідомлення.
   */
  private sendMessageTextChunk(text: string) {
    return this.client.request(`send_text_chat`, {
      channel_id: this.channelId,
      conversation_id: this.conversationId,
      text,
    })
  }

  /**
   * Визначає учасника, який надіслав повідомлення.
   *
   * Цей метод перевіряє, чи є відправник повідомлення поточним учасником розмови або одним з членів розмови.
   *
   * @param {Message} msg - Повідомлення, для якого потрібно визначити відправника.
   * @returns {ChatChannel | null} - Об'єкт `ChatChannel`, що представляє учасника, який надіслав повідомлення, або `null`, якщо учасник не знайдено.
   */
  private messageMember(msg: Message): ChatChannel | null {
    if (this.member && msg.channel_id === this.channelId) {
      return {
        self: true,
      }
    }

    for (const m of this.members) {
      if (m.id === msg.channel_id) {
        return m
      }
    }

    return null // TODO
  }
}

/**
 * Оновлює або покращує об'єкт ChatChannel.
 * @param {ChatChannel} m - Об'єкт ChatChannel для оновлення.
 * @returns {ChatChannel} - Оновлений об'єкт ChatChannel.
 */
function wrapChannelMember(m: ChatChannel): ChatChannel {
  // TODO: Реалізувати додаткову логіку обробки об'єкта ChatChannel

  // Встановлює значення властивості messenger як тип каналу
  m.messenger = m.type

  return m
}
