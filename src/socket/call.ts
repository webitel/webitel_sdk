import { CallSession } from '../sip'
import { Client, SdpEvent, UserCallRequest } from './client'
import { QueueParameters } from './queue'
import { MemberCommunication, Reporting, Task, TaskData } from './task'
import { MessageNotification } from './notification'

/**
 * Параметри виклику
 * @typedef {Object} CallParameters
 * @property {number} [timeout] - Тайм-аут у секундах.
 * @property {boolean} [video] - Вказує на наявність відео.
 * @property {boolean} [audio] - Вказує на наявність аудіо.
 * @property {boolean} [screen] - Вказує на наявність екрану.
 * @property {boolean} [disableStun] - Вимкнення STUN.
 * @property {boolean} [autoAnswer] - Автоматична відповідь.
 * @property {string} [display] - Відображуване ім'я.
 * @property {Map<string, string>} [variables] - Змінні виклику.
 */
export interface CallParameters {
  timeout?: number
  video?: boolean
  audio?: boolean
  screen?: boolean
  disableStun?: boolean
  autoAnswer?: boolean
  display?: string
  variables?: Map<string, string>
  contactId?: number
}

/**
 * Статуси звітності виклику
 * @enum {string}
 */
export enum CallReportingStatus {
  Abandoned = 'abandoned', // Викинуто
  Cancel = 'cancel', // Скасовано
  Success = 'success', // Успішно
  Failed = 'failed', // Неуспішно
  Missed = 'missed', // Пропущено
  Timeout = 'timeout', // Тайм-аут
  Endless = 'endless', // Нескінченний
  Transferred = 'transferred', // Передано
}

/**
 * Стани прослуховування
 * @enum {string}
 */
export enum EavesdropState {
  Muted = 'muted', // Вимкнено звук
  Conference = 'conference', // Конференція
  Prompt = 'prompt', // Підказка
}

/**
 * Типи прослуховування
 * @enum {string}
 */
export enum EavesdropType {
  Joined = 'joined', // Приєднано
  Leave = 'leave', // Покинено
  Hide = 'hide', // Приховано
}
/**
 * Інтерфейс для змінних дзвінка.
 * Ключі є ідентифікаторами змінних, а значення - рядками.
 * @interface
 */
export interface CallVariables {
  [key: string]: string
}

/**
 * Інтерфейс для представлення інформації про дзвінок.
 * @interface
 */
export interface CallItem {
  /** Унікальний ідентифікатор дзвінка. */
  id: string
  /** Ідентифікатор програми. */
  app_id: string
  /** Стан дзвінка. */
  state: string
  /** Час, коли дзвінок був створений. */
  timestamp: number
  /** Тип дзвінка. */
  type: string
  /** Ідентифікатор батьківського дзвінка. */
  parent_id?: string
  /** Розширення для дзвінка. */
  extension?: string
  /** Напрямок дзвінка. */
  direction: string
  /** Місце призначення дзвінка. */
  destination: string
  /** Вхідний параметр дзвінка. */
  from: CallEndpoint
  /** Вихідний параметр дзвінка. */
  to?: CallEndpoint
  /** Додаткові змінні дзвінка. */
  variables: CallVariables

  /** Час створення дзвінка. */
  created_at: number
  /** Час, коли дзвінок був відповіданий. */
  answered_at?: number
  /** Час, коли дзвінок був з'єднаний. */
  bridged_at?: number
  /** Час, коли дзвінок був завершений. */
  hangup_at?: number

  /** Тривалість дзвінка. */
  duration: number
  /** Час, проведений на утриманні. */
  hold_sec: number
  /** Час очікування дзвінка. */
  wait_sec?: number
  /** Час, за який був обрахований дзвінок. */
  bill_sec?: number

  /** Інформація про чергу. */
  queue?: object

  /** Час приєднання до черги. */
  joined_at?: number
  /** Час, коли дзвінок залишив чергу. */
  leaving_at?: number
  /** Час звітності. */
  reporting_at?: number
  /** Час з'єднання черги. */
  queue_bridged_at?: number
  /** Час очікування в черзі. */
  queue_wait_sec?: number
  /** Тривалість перебування в черзі. */
  queue_duration_sec?: number
  /** Час звітності. */
  reporting_sec?: number
  /** Час відображення. */
  display?: number
  /** Дані завдання. */
  task?: TaskData
  /** Ідентифікатор контакту. */
  contact_id?: number
}

/**
 * Інтерфейс для запиту виходу дзвінка.
 * @interface
 */
export interface OutboundCallRequest {
  /** SDP для з'єднання. */
  sdp?: string
  /** Місце призначення дзвінка. */
  destination?: string
  /** Потік медіа. */
  stream?: MediaStream
  /** Додаткові параметри дзвінка. */
  params?: CallParameters
}

/**
 * Інтерфейс для запиту прослуховування дзвінка.
 * @interface
 */
export interface EavesdropRequest {
  /** Ідентифікатор дзвінка. */
  id: string

  /** Управлінські параметри прослуховування. */
  control?: boolean
  /** Слухати сторону A. */
  listenA?: boolean
  /** Слухати сторону B. */
  listenB?: boolean
  /** Шепотіти стороні A. */
  whisperA?: boolean
  /** Шепотіти стороні B. */
  whisperB?: boolean
  /** Група прослуховування. */
  group?: string
}

/**
 * Інтерфейс для даних прослуховування.
 * @interface
 */
export interface EavesdropData {
  /** Тип прослуховування. */
  type: EavesdropType
  /** Стан прослуховування. */
  state: EavesdropState

  /** Ім'я контакту. */
  name?: string
  /** Номер контакту. */
  number?: string
  /** Тривалість прослуховування. */
  duration?: number
}

/**
 * Перерахування для дій дзвінка.
 * @enum {string}
 */
export enum CallActions {
  /**
   * Дзвінок у режимі дзвінка (ringing).
   */
  Ringing = 'ringing',

  /**
   * Дзвінок у активному стані (active).
   */
  Active = 'active',

  /**
   * Дзвінок у режимі мосту (bridge).
   */
  Bridge = 'bridge',

  /**
   * Дзвінок у режимі утримання (hold).
   */
  Hold = 'hold',

  /**
   * Дзвінок з DTMF (Dual-tone multi-frequency) сигналами.
   */
  DTMF = 'dtmf',

  /**
   * Голосовий дзвінок (voice).
   */
  Voice = 'voice',

  /**
   * Дзвінок у режимі тиші (silence).
   */
  Silence = 'silence',

  /**
   * Виконання програми або дії (execute).
   */
  Execute = 'execute',

  /**
   * Оновлення інформації про дзвінок (update).
   */
  Update = 'update',

  /**
   * Завершення дзвінка (hangup).
   */
  Hangup = 'hangup',

  /**
   * Перевірка стану дзвінка (heartbeat).
   */
  Heartbeat = 'heartbeat',

  /**
   * Надсилання звітності про дзвінок (reporting).
   */
  Reporting = 'reporting',

  /**
   * Надсилання потоків для співрозмовників (peerStream).
   */
  PeerStream = 'peerStream',

  /**
   * Надсилання локальних потоків (localStream).
   */
  LocalStream = 'localStream',

  /**
   * Знищення дзвінка (destroy).
   */
  Destroy = 'destroy',

  /**
   * Прослуховування дзвінка (eavesdrop).
   */
  Eavesdrop = 'eavesdrop',
}

/**
 * Перерахування для напрямку дзвінка.
 * @enum {string}
 */
export enum CallDirection {
  /**
   * Вхідний дзвінок.
   */
  Inbound = 'inbound',

  /**
   * Вихідний дзвінок.
   */
  Outbound = 'outbound',
}

/**
 * Інтерфейс для подій контактних даних.
 * @interface
 */
interface ContactDataEvent {
  /** Ідентифікатор контакту. */
  contact_id?: number
  /** Вказує, чи ховати контакт. */
  hide_contact?: boolean
}

/**
 * Інтерфейс для контактної інформації.
 * @interface
 */
interface Contact {
  /** Ідентифікатор контакту або `null`. */
  id: number | null
  /** Вказує, чи потрібно ховати контакт. */
  hide: boolean
}

/**
 * Інтерфейс для запиту на відповідь дзвінка.
 * @interface
 */
export interface AnswerRequest {
  /** Включити аудіо. */
  audio?: boolean
  /** Включити відео. */
  video?: boolean
  /** Включити екран. */
  screen?: boolean
  /** Вимкнути STUN. */
  disableStun?: boolean
}

/**
 * Інтерфейс для даних події дзвінка.
 * @interface
 */
export interface CallEventData {
  /** Ідентифікатор події. */
  id: string
  /** Ідентифікатор програми. */
  app_id: string
  /** Ідентифікатор CC програми. */
  cc_app_id: string
  /** Час події. */
  timestamp: number
  /** Тип події. */
  event: string
  /** Додаткові дані події. */
  data?: object
}

/**
 * Інтерфейс для події виконання дзвінка.
 * @interface
 * @extends CallEventData
 */
export interface CallEventExecute extends CallEventData {
  /** Назва програми. */
  application: string
}

/**
 * Інтерфейс для події DTMF дзвінка.
 * @interface
 * @extends CallEventData
 */
export interface CallEventDTMF extends CallEventData {
  /** DTMF цифра. */
  digit: string
}

/**
 * Інтерфейс для події прослуховування дзвінка.
 * @interface
 * @extends CallEventData, EavesdropData
 */
export interface CallEventEavesdrop extends CallEventData, EavesdropData {}

/**
 * Інтерфейс для параметрів кінцевих точок дзвінка.
 * @interface
 */
export interface CallEndpoint {
  /** Тип кінцевої точки. */
  type: string
  /** Номер кінцевої точки. */
  number?: string
  /** Ідентифікатор кінцевої точки. */
  id?: string
  /** Назва кінцевої точки. */
  name?: string
}

/**
 * Інтерфейс для події з'єднання дзвінків.
 * @interface
 * @extends CallEventData, ContactDataEvent
 */
export interface CallBridged extends CallEventData, ContactDataEvent {
  /** Ідентифікатор з'єднаного дзвінка. */
  bridged_id: string
  /** Вихідний параметр кінцевої точки. */
  to?: CallEndpoint
  /** Параметри черги. */
  queue?: QueueParameters
  /** Додаткові дані. */
  payload?: Map<string, string>
}

/**
 * Інтерфейс для інформації про дзвінок.
 * @interface
 * @extends CallEventData, ContactDataEvent
 */
export interface CallInfo extends CallEventData, ContactDataEvent {
  /** SIP-ідентифікатор. */
  sip_id: string

  /** Ідентифікатор батьківського дзвінка. */
  parent_id?: string
  /** Ідентифікатор користувача. */
  user_id?: string
  /** Напрямок дзвінка. */
  direction: string
  /** Місце призначення дзвінка. */
  destination: string
  /** Параметри черги. */
  queue?: QueueParameters

  /** Вхідний параметр кінцевої точки. */
  from: CallEndpoint
  /** Вихідний параметр кінцевої точки. */
  to?: CallEndpoint

  /** Додаткові дані дзвінка. */
  payload: Map<string, string>

  /** Параметри дзвінка. */
  params?: CallParams
  /** Дані прослуховування. */
  eavesdrop?: EavesdropData
  /** Вказує, чи дзвінок був ініційований. */
  originate?: boolean
}

/**
 * Інтерфейс для події завершення дзвінка.
 * @interface
 */
export interface CallHangup extends CallEventData {
  /** Причина завершення дзвінка. */
  cause: string
  /** SIP-код завершення. */
  sip: number
  /** Час звітності. */
  reporting_at: number
  /** Вказує, чи потрібно відправити повідомлення про завершення. */
  notification_hangup?: boolean
}

/**
 * Інтерфейс для параметрів дзвінка.
 * @interface
 */
export interface CallParams {
  /** Включити аудіо. */
  audio?: boolean
  /** Включити відео. */
  video?: boolean
  /** Включити екран. */
  screen?: boolean
  /** Автоматичний відповідь. */
  autoAnswer?: boolean | string
  /** Вимкнути STUN. */
  disableStun?: boolean
}

/**
 * Інтерфейс для запиту інформації про учасників.
 * @interface
 */
export interface MemberInfoRequest {
  /** Поля для отримання інформації. */
  fields?: string[]
}

/**
 * Інтерфейс для подій дзвінків.
 * @interface
 */
export interface CallEvents {
  /** Подія завершення дзвінка. */
  hangup(): void
}

/**
 * Клас Call: Описує властивості і методи для роботи з дзвінком,
 * включаючи інформацію про його стан, учасників, медіа потоки, та інші атрибути.
 *
 * Конструктор Call:
 *  client: Клієнт, що керує дзвінком.
 *  e: Дані події дзвінка, які використовуються для ініціалізації властивостей класу.
 * В конструкторі здійснюється ініціалізація всіх властивостей класу на основі переданих даних
 * події дзвінка (e). Значення за замовчуванням задаються для необов'язкових полів,
 * якщо вони не присутні в об'єкті e.
 */
export class Call {
  data: any
  id: string
  appId: string
  sipId!: string | null
  state!: string
  params!: CallParams

  direction!: string
  destination!: string

  from!: CallEndpoint
  to?: CallEndpoint

  toNumber!: string
  toName!: string
  variables!: Map<string, string>

  postProcessData!: object

  peerStreams!: MediaStream[]
  localStreams!: MediaStream[]
  sip!: CallSession | null
  screen!: string | null

  createdAt: number
  answeredAt: number
  bridgedAt: number
  hangupAt: number
  reportingAt: number

  hangupCause!: string
  hangupSipCode!: number
  notificationHangup: boolean

  parentId?: string
  bridgedId!: string
  queue!: QueueParameters | null

  _muted!: boolean

  digits!: string[]
  applications!: string[]
  voice: boolean
  task: Task | null
  autoAnswered: boolean
  _eavesdrop: EavesdropData | null
  _autoAnswerTimerId: any | null
  _activeCounter: number
  contact: Contact | null
  originate: boolean

  /**
   * Конструктор класу Call.
   * @param client - Клієнт, що керує дзвінком.
   * @param e - Дані події дзвінка.
   */
  constructor(protected client: Client, e: CallEventData) {
    // FIXME перевірити _muted з каналу
    const callInfo = e.data as CallInfo
    this._muted = false
    this.voice = true
    this.createdAt = +e.timestamp
    this.task = null
    this.data = null
    this._eavesdrop = null
    this._autoAnswerTimerId = null
    this._activeCounter = 0
    this.contact = null
    this.notificationHangup = false

    this.answeredAt = 0
    this.hangupAt = 0
    this.bridgedAt = 0
    this.reportingAt = 0
    this.autoAnswered = false

    this.peerStreams = []
    this.localStreams = []

    if (callInfo.eavesdrop) {
      this._eavesdrop = callInfo.eavesdrop
    }

    this.originate = callInfo.originate || false

    // fixme
    if (client.phone) {
      if (callInfo.sip_id) {
        this.setSip(client.phone.sipSessionBySipId(callInfo.sip_id))
      } else {
        this.setSip(client.phone.sipSessionByCallId(e.id))
      }
    }

    this.params = {}

    this.id = e.id
    this.digits = []
    this.applications = []
    this.appId = e.app_id
    this.setState(e)
    this.setInfo(callInfo)

    if (this.queue && this.client.agent) {
      this.task = this.client.agent.task.get(+this.queue.attempt_id) || null
    }
  }

  /**
   * Встановлює стан дзвінка.
   * @param s - Дані події дзвінка.
   */
  setState(s: CallEventData) {
    this.state = s.event
  }

  /**
   * Встановлює SIP-сесію.
   * @param sip - SIP-сесія.
   */
  setSip(sip: CallSession | null) {
    if (sip && !this.sip) {
      this.sip = sip
      this.localStreams = sip.getLocalMedia()
      this.peerStreams = sip.getPeerMedia()
    }
  }

  /**
   * Перевіряє, чи є ручний розподіл.
   * @returns Чи є ручний розподіл.
   */
  get manualDistribution() {
    return this.queue && this.queue.manual_distribution === 'true'
  }

  /**
   * Отримує тривалість дзвінка.
   * @returns Тривалість дзвінка в секундах.
   */
  get duration() {
    if (this.hangupAt === 0) {
      return Math.round((Date.now() - this.createdAt) / 1000) // tslint:disable-line
    } else {
      return Math.round((this.hangupAt - this.createdAt) / 1000) // tslint:disable-line
    }
  }

  /**
   * Перевіряє, чи дозволено DTMF.
   * @returns Чи дозволено DTMF.
   */
  get allowDtmf(): boolean {
    return this.answeredAt > 0 && this.allowHangup
  }

  /**
   * Перевіряє, чи дозволено Transfer.
   * @returns Чи дозволено Transfer.
   */
  get allowTransfer(): boolean {
    return !(this.answeredAt === 0 && this.queue) && this.allowHangup
  }

  /**
   * Перевіряє, чи дозволено завершення дзвінка.
   * @returns Чи дозволено завершення дзвінка.
   */
  get allowHangup() {
    return this.hangupAt === 0
  }

  /**
   * Перевіряє, чи дозволено утримання дзвінка.
   * @returns Чи дозволено утримання дзвінка.
   */
  get allowHold() {
    return (
      this.hangupAt === 0 &&
      (this.state === 'active' || this.state === 'bridge')
    )
  }

  /**
   * Перевіряє, чи дозволено відповісти на дзвінок.
   * @returns Чи дозволено відповісти на дзвінок.
   */
  get allowAnswer() {
    return (
      this.client.phone &&
      this.hangupAt === 0 &&
      this.answeredAt === 0 &&
      !!(this.queue || this.direction === CallDirection.Inbound || this.params)
    )
  }

  /**
   * Перевіряє, чи дозволено зняти утримання.
   * @returns Чи дозволено зняти утримання.
   */
  get allowUnHold() {
    return this.hangupAt === 0 && this.state === 'hold'
  }

  /**
   * Отримує комунікацію учасника.
   * @returns Комунікація учасника або null.
   */
  get memberCommunication(): MemberCommunication | null {
    if (!this.task) {
      return null
    } else {
      return this.task.communication
    }
  }

  /**
   * Перевіряє, чи є прослуховування.
   * @returns Чи є прослуховування.
   */
  get isEavesdrop() {
    return !!this._eavesdrop
  }

  /**
   * Отримує ім'я прослуховування.
   * @returns Ім'я прослуховування.
   */
  get eavesdropName() {
    return this.isEavesdrop ? this._eavesdrop!.name : ''
  }

  /**
   * Отримує номер прослуховування.
   * @returns Номер прослуховування.
   */
  get eavesdropNumber() {
    return this.isEavesdrop ? this._eavesdrop!.number : ''
  }

  /**
   * Отримує тривалість прослуховування.
   * @returns Тривалість прослуховування.
   */
  get eavesdropDuration() {
    return this.isEavesdrop ? this._eavesdrop!.duration : 0
  }

  /**
   * Отримує стан прослуховування.
   * @returns Стан прослуховування або null.
   */
  get eavesdropState() {
    return this.isEavesdrop ? this._eavesdrop!.state : null
  }

  /**
   * Перевіряє, чи прослуховування в режимі мовчання.
   * @returns Чи прослуховування в режимі мовчання.
   */
  get eavesdropIsMuted() {
    return this.eavesdropState === EavesdropState.Muted
  }

  /**
   * Перевіряє, чи прослуховування є конференцією.
   * @returns Чи прослуховування є конференцією.
   */
  get eavesdropIsConference() {
    return this.eavesdropState === EavesdropState.Conference
  }

  /**
   * Перевіряє, чи прослуховування є запитом.
   * @returns Чи прослуховування є запитом.
   */
  get eavesdropIsPrompt() {
    return this.eavesdropState === EavesdropState.Prompt
  }

  /**
   * Отримує ідентифікатор контакту.
   * @returns Ідентифікатор контакту або null.
   */
  get contactId() {
    return (this.contact && this.contact.id) || null
  }

  /**
   * Перевіряє, чи контакт потрібно приховати.
   * @returns Чи контакт потрібно приховати.
   */
  get hideContact() {
    return this.contact && this.contact.hide
  }

  /**
   * Отримує інформацію про учасника.
   * @param req - Запит інформації про учасника.
   * @returns Інформація про учасника.
   * @throws Помилка, якщо дзвінок не з виходу черги.
   */
  // todo
  async getMember(req: MemberInfoRequest) {
    if (!this.isMember) {
      throw new Error(`call is not from outbound queue`)
    }

    return this.client.request(`cc_member_page`, {
      queue_id: this.task!.queueId,
      member_id: this.task!.memberId,
    })
  }

  /**
   * Перевіряє, чи дзвінок є учасником.
   * @returns Чи дзвінок є учасником.
   */
  get isMember(): boolean {
    return !!(this.task && this.task.isMember)
  }

  /**
   * Перевіряє, чи перший активний дзвінок.
   * @returns Чи перший активний дзвінок.
   */
  get firstActive() {
    return this._activeCounter === 1
  }

  /**
   * Встановлює активність дзвінка.
   * @param e - Дані події дзвінка.
   */
  setActive(e: CallEventData) {
    this._activeCounter++
    if (this._autoAnswerTimerId) {
      clearTimeout(this._autoAnswerTimerId)
      this._autoAnswerTimerId = null
    }
    if (!this.answeredAt) {
      if (this.direction === CallDirection.Inbound) {
        this.bridgedAt = +e.timestamp
        if (this.parentId) {
          this.bridgedId = this.parentId
        }
      }
      this.answeredAt = +e.timestamp
    }
    this.setState(e)
  }

  /**
   * Встановлює інформацію про мосту.
   * @param s - Дані події мосту.
   */
  setBridged(s: CallEventData) {
    const bridged = s.data as CallBridged
    if (!this.bridgedAt) {
      this.bridgedAt = +s.timestamp
    }

    this.bridgedId = bridged.bridged_id
    if (bridged.to) {
      if (this.direction === CallDirection.Inbound) {
        this.from = bridged.to
      } else {
        this.to = bridged.to
      }
    }

    this.bridgedId = bridged.bridged_id
    if (bridged.payload) {
      this.variables = bridged.payload
    }

    if (bridged.queue) {
      this.queue = bridged.queue
    }

    this.setContactData(bridged)
  }

  /**
   * Встановлює інформацію про утримання.
   * @param e - Дані події утримання.
   */
  setHold(e: CallEventData) {
    this.setState(e)
  }

  /**
   * Встановлює ідентифікатор контакту.
   * @param id - Ідентифікатор контакту.
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
   * Встановлює інформацію про дзвінок.
   * @param s - Інформація про дзвінок.
   */
  setInfo(s: CallInfo) {
    this.parentId = s.parent_id
    this.destination = s.destination
    this.direction = s.direction

    this.from = s.from
    this.to = s.to
    this.variables = s.payload
    this.queue = s.queue || null

    this.sipId = s.sip_id || null
    this.params = s.params as CallParams

    this.setContactData(s)
  }

  /**
   * Встановлює потоки для співрозмовників.
   * @param streams - Потоки для співрозмовників.
   */
  setPeerStreams(streams: MediaStream[] | null) {
    if (!streams) {
      this.peerStreams = []
    } else {
      this.peerStreams = streams
    }
  }

  /**
   * Встановлює локальні потоки.
   * @param streams - Локальні потоки.
   */
  setLocalStreams(streams: MediaStream[] | null) {
    if (!streams) {
      this.localStreams = []
    } else {
      this.localStreams = streams
    }
  }

  /**
   * Увімкнути голос.
   */
  setVoice() {
    this.voice = true
  }

  /**
   * Вимкнути голос.
   */
  setSilence() {
    this.voice = false
  }

  /**
   * Додає виконання програми.
   * @param s - Дані події виконання.
   */
  setExecute(s: CallEventExecute) {
    this.applications.push(s.application)
  }

  /**
   * Додає DTMF.
   * @param s - Дані події DTMF.
   */
  addDigit(s: CallEventDTMF) {
    this.digits.push(s.digit)
  }

  /**
   * Встановлює стан прослуховування.
   * @param e - Дані події прослуховування.
   */
  setEavesdropState(e: CallEventEavesdrop) {
    if (e.type === EavesdropType.Joined) {
      this._eavesdrop = e
    } else if (e.type === EavesdropType.Leave) {
      this._eavesdrop = null
    } else {
      this._eavesdrop!.state = e.state
    }
  }

  /**
   * Встановлює інформацію про завершення дзвінка.
   * @param s - Дані події завершення дзвінка.
   */
  setHangup(s: CallEventData) {
    const hangup = s.data as CallHangup
    this.hangupAt = +s.timestamp
    this.hangupCause = hangup.cause
    this.hangupSipCode = hangup.sip
    this.notificationHangup = hangup.notification_hangup || false
    this.voice = false
    this.peerStreams = []
    if (+hangup.reporting_at) {
      this.reportingAt = +hangup.reporting_at // FIXME тип number
    }
    this.setState(s)
  }

  /**
   * Перевіряє, чи дозволена звітність.
   * @returns Чи дозволена звітність.
   */
  get allowReporting() {
    return this.answeredAt > 0 && this.hasReporting
  }

  /**
   * Перевіряє, чи є звітність.
   * @returns Чи є звітність.
   */
  get hasReporting() {
    if (this.task) {
      return this.task.hasReporting
    }

    return false
  }

  /**
   * Отримує відображення дзвінка.
   * @returns Відображення дзвінка.
   */
  get display() {
    return `${this.displayNumber} (${this.displayName})`
  }

  /**
   * Перевіряє, чи вимкнений звук.
   * @returns Чи вимкнений звук.
   */
  get muted() {
    return this._muted
  }

  /**
   * Перевіряє, чи дзвінок перебуває в режимі утримання.
   * @returns Чи дзвінок перебуває в режимі утримання.
   */
  get isHold(): boolean {
    return this.state === CallActions.Hold
  }

  /**
   * Перевіряє, чи дозволено відео для вхідних дзвінків.
   * @returns Чи дозволено відео для вхідних дзвінків.
   */
  get allowInboundVideo(): boolean {
    if (this.params) {
      return this.params.video || false
    }

    return false
  }

  /**
   * Перевіряє, чи дозволено відео для вихідних дзвінків.
   * @returns Чи дозволено відео для вихідних дзвінків.
   */
  get allowOutboundVideo(): boolean {
    if (this.params) {
      return this.params.video || false
    }

    return false
  }

  /**
   * Перевіряє, чи дзвінок активний.
   * @returns Чи дзвінок активний.
   */
  get active(): boolean {
    return this.hangupAt === 0
  }

  /**
   * Отримує номер для відображення.
   * @returns Номер для відображення.
   */
  get displayNumber() {
    if (this.direction === 'inbound') {
      return this.from.number
    } else {
      if (this.to) {
        return this.to.number
      }

      return this.destination
    }
  }

  /**
   * Отримує ім'я для відображення.
   * @returns Ім'я для відображення.
   */
  get displayName() {
    if (this.direction === 'inbound') {
      return this.from.name
    } else {
      if (this.to) {
        return this.to.name
      }

      return this.destination
    }
  }

  /**
   * Перевіряє, чи дозволено автоматичне відповідання.
   * @returns Чи дозволено автоматичне відповідання.
   */
  get autoAnswer() {
    return (
      (this.queue && this.queue.queue_type === 'offline') ||
      this.autoAnswerDelay > 0
    )
  }

  /**
   * Отримує затримку автоматичного відповідання.
   * @returns Затримка автоматичного відповідання.
   */
  get autoAnswerDelay() {
    if (
      !this.params ||
      !this.params.autoAnswer ||
      `${this.params.autoAnswer}` === 'false'
    ) {
      return 0
    } else if (isFinite(+this.params.autoAnswer)) {
      return +this.params.autoAnswer
    }

    return this.client.autoAnswerDelayTime
  }

  // todo task is deprecated
  /**
   * Отримує спробу.
   * @returns Спроба.
   */
  get attempt() {
    return this.task
  }

  /* Call control */
  /**
   * Відповідає на дзвінок.
   * @param req - Запит на відповідання.
   * @returns Чи успішно відповіли.
   */
  async answer(req: AnswerRequest) {
    if (this.sip && this.client.phone) {
      try {
        const params = await this.client.phone.callOption(req)
        await this.sip.answer(params)
      } catch (e) {
        this.client.handleError(e as Error)
      }

      return true
    }

    return false
  }

  /**
   * Затримка автоматичного відповідання.
   * @param req - Запит на відповідання.
   */
  answerDelay(req: AnswerRequest) {
    if (this.autoAnswered) {
      return
    }

    if (this._autoAnswerTimerId) {
      clearTimeout(this._autoAnswerTimerId)
    }

    this._autoAnswerTimerId = setTimeout(async () => {
      if (this.autoAnswered) {
        return
      }
      this.autoAnswered = true
      this.autoAnswered = await this.answer(req)
    }, this.autoAnswerDelay)
  }

  /**
   * Завершує дзвінок.
   * @param cause - Причина завершення.
   * @returns Результат завершення дзвінка.
   */
  async hangup(cause?: string) {
    let _cause = cause
    if (this.answeredAt === 0 && !cause) {
      _cause =
        this.direction === CallDirection.Inbound
          ? 'USER_BUSY'
          : 'ORIGINATOR_CANCEL'
    }

    return this.client.request('call_hangup', {
      id: this.id,
      app_id: this.appId,
      cause: _cause,
    })
  }

  /**
   * Запускає прослуховування дзвінка.
   * @param req - Запит на прослуховування.
   * @returns Результат прослуховування.
   */
  async eavesdrop(req: EavesdropRequest) {
    req.id = this.id

    return this.client.request('call_eavesdrop', req)
  }

  /**
   * Змінює стан прослуховування.
   * @param state - Новий стан прослуховування.
   * @returns Результат зміни стану прослуховування.
   */
  async changeEavesdropState(state: EavesdropState) {
    if (!this.isEavesdrop) {
      throw new Error(`this call not in eavesdrop`)
    }

    if (this.eavesdropState === state) {
      throw new Error(`this call already eavesdrop state: ${state}`)
    }

    return this.client.request('call_eavesdrop_state', {
      id: this.id,
      state,
    })
  }

  /**
   * Перемикає утримання дзвінка.
   * @returns Результат утримання дзвінка.
   */
  async toggleHold() {
    if (this.state === CallActions.Hold) {
      return this.unHold()
    } else {
      return this.hold()
    }
  }

  /**
   * Утримує дзвінок.
   * @returns Результат утримання дзвінка.
   */
  async hold() {
    if (this.state === CallActions.Hold) {
      throw new Error('Call is hold')
    }

    return this.client.request('call_hold', {
      id: this.id,
      app_id: this.appId,
    })
  }

  /**
   * Виймає дзвінок з утримання.
   * @returns Результат виймання дзвінка з утримання.
   */
  async unHold() {
    if (this.state !== CallActions.Hold) {
      throw new Error('Call is active')
    }

    return this.client.request('call_unhold', {
      id: this.id,
      app_id: this.appId,
    })
  }

  /**
   * Надсилає DTMF.
   * @param dtmf - DTMF.
   * @returns Результат надсилання DTMF.
   */
  async sendDTMF(dtmf: string) {
    return this.client.request('call_dtmf', {
      id: this.id,
      app_id: this.appId,
      dtmf,
    })
  }

  /**
   * Виконує сліпий переказ дзвінка.
   * @param destination - Місце призначення.
   * @param variables - Змінні.
   * @returns Результат переказу.
   */
  async blindTransfer(destination: string, variables?: object) {
    if (variables) {
      return this.client.request('call_blind_transfer_ext', {
        id: this.id,
        app_id: this.appId,
        destination,
        variables,
      })
    }

    // todo deprecated
    return this.client.request('call_blind_transfer', {
      id: this.id,
      app_id: this.appId,
      destination,
    })
  }

  /**
   * Вимикає або включає мікрофон.
   * @param mute - Якщо true, вимикає мікрофон; якщо false, включає мікрофон.
   * @returns Результат вимикання або включення мікрофона.
   */
  async mute(mute = false) {
    const res = await this.client.request('call_mute', {
      id: this.id,
      app_id: this.appId,
      mute,
    })
    this._muted = mute

    return res
  }

  /**
   * Створює міст між дзвінками.
   * @param call - Дзвінок, з яким створюється міст.
   * @param variables - Змінні.
   * @returns Результат створення мосту.
   */
  async bridgeTo(call: Call, variables?: object) {
    if (this.task) {
      await this.task.saveForm(null, null)
    }
    if (call.task) {
      await call.task.saveForm(null, null)
    }

    return this.client.request('call_bridge', {
      from_id: this.id,
      from_app_id: this.appId,
      to_id: call.id,
      to_app_id: call.appId,
      variables,
    })
  }

  /**
   * Надсилає звітність про дзвінок.
   * @param reporting - Дані звітності.
   * @returns Результат надсилання звітності.
   */
  async reporting(reporting: Reporting) {
    if (!this.task) {
      throw new Error(`this call not in queue`)
    }

    return this.task.reporting(reporting)
  }

  /**
   * Оновлює розмову.
   * @param sec - Кількість секунд.
   * @returns Результат оновлення розмови.
   */
  async renew(sec?: number) {
    if (!this.task) {
      throw new Error(`this conversation not in queue`)
    }

    return this.task.renew(sec)
  }

  /**
   * Робить запрошення користувача.
   * @param req - Запит на запрошення.
   * @returns Результат запрошення.
   */
  async callToUser(req: UserCallRequest) {
    req.nodeId = this.appId
    req.parentCallId = this.id || null
    req.sendToCallId = this.parentId || null

    return this.client.inviteToUser(req)
  }

  /**
   * Встановлює контакт для дзвінка.
   * @param contactId - Ідентифікатор контакту.
   * @returns Результат встановлення контакту.
   */
  async setContact(contactId: number) {
    return this.client.request(`call_set_contact`, {
      id: this.id,
      contact_id: contactId,
    })
  }

  async processTransferAgent(agentId: number, params: CallParams) {
    return this.client.request(`call_to_queue`, {
      parent_id: this.id,
      agent_id: agentId,
      params,
    })
  }

  async processTransferQueue(queueId: number, params: CallParams) {
    return this.client.request(`call_to_queue`, {
      parent_id: this.id,
      queue_id: queueId,
      params,
    })
  }

  async blindTransferQueue(queueId: number) {
    return this.client.request(`call_bt_queue`, {
      id: this.id,
      queue_id: queueId,
    })
  }

  /**
   * Встановлює дані контакту.
   * @param e - Дані події контакту.
   */
  private setContactData(e: ContactDataEvent) {
    this.contact = {
      id: e.contact_id || null,
      hide: e.hide_contact || false,
    }
  }
}
