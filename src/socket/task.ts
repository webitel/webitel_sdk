import { ChannelType } from './agent'
import { CallVariables } from './call'
import { Client } from './client'
import { Form } from './form'

export interface Reporting {
  /**
   * Успішність операції.
   * @type {boolean}
   */
  success?: boolean

  /**
   * Ідентифікатор агента.
   * @type {number}
   */
  agent_id?: number

  /**
   * Час наступного розподілу.
   * @type {number}
   */
  next_distribute_at?: number

  /**
   * Інформація про комунікацію.
   * @type {MemberCommunication}
   */
  communication?: MemberCommunication

  /**
   * Нові комунікації.
   * @type {MemberCommunication[]}
   */
  new_communication?: MemberCommunication[]

  /**
   * Опис.
   * @type {string}
   */
  description?: string

  // integration fields

  /**
   * Відображати чи ні.
   * @type {boolean}
   */
  display?: boolean

  /**
   * Термін дії.
   * @type {number}
   */
  expire?: number

  /**
   * Змінні виклику.
   * @type {CallVariables}
   */
  variables?: CallVariables

  /**
   * Назва.
   * @type {string}
   */
  name?: string

  /**
   * Часовий пояс.
   * @type {object}
   */
  timezone?: object
}

/**
 * Перелік станів завдання.
 * @enum {string}
 */
export enum JobState {
  /**
   * Стан завдання - розподіл.
   */
  Distribute = 'distribute',

  /**
   * Стан завдання - пропозиція.
   */
  Offering = 'offering',

  /**
   * Стан завдання - з'єднано.
   */
  Bridged = 'bridged',

  /**
   * Стан завдання - пропущено.
   */
  Missed = 'missed',

  /**
   * Стан завдання - обробка.
   */
  Processing = 'processing',

  /**
   * Стан завдання - закрито.
   */
  Closed = 'closed',

  /**
   * Стан завдання - знищено.
   */
  Destroy = 'destroy',
}

/**
 * Перелік назв каналів.
 * @enum {string}
 */
export enum ChannelName {
  /**
   * Назва каналу - дзвінок.
   */
  Call = 'call',

  /**
   * Назва каналу - вихідний дзвінок.
   */
  OutCall = 'out_call',

  /**
   * Назва каналу - чат.
   */
  Chat = 'chat',

  /**
   * Назва каналу - завдання.
   */
  Task = 'task',
}

export interface Node {
  /**
   * Ідентифікатор вузла.
   * @type {number}
   */
  id: number

  /**
   * Назва вузла.
   * @type {string}
   */
  name: string

  /**
   * Значення вузла.
   * @type {object}
   */
  value: object

  /**
   * Діти вузла.
   * @type {Node[]}
   */
  children?: Node[]
}

export interface CommunicationType {
  /**
   * Ідентифікатор типу комунікації.
   * @type {number}
   */
  id: number

  /**
   * Назва типу комунікації.
   * @type {string}
   */
  name: string
}

export interface MemberCommunication {
  /**
   * Місце призначення комунікації.
   * @type {string}
   */
  destination: string

  /**
   * Тип комунікації.
   * @type {CommunicationType}
   */
  type: CommunicationType

  /**
   * Відображення комунікації.
   * @type {string}
   */
  display?: string

  /**
   * Стан комунікації.
   * @type {number}
   * @todo
   */
  state?: number
}

export interface ChannelEvent {
  /**
   * Статус події каналу.
   * @type {string}
   */
  status: string

  /**
   * Ідентифікатор спроби.
   * @type {number}
   */
  attempt_id?: number

  /**
   * Часова мітка події.
   * @type {number}
   */
  timestamp: number

  /**
   * Канал події.
   * @type {string}
   */
  channel: string
}

export interface Distribute extends ChannelEvent {
  /**
   * Ідентифікатор додатку.
   * @type {string}
   */
  app_id: string

  /**
   * Ідентифікатор черги.
   * @type {number}
   */
  queue_id: number

  /**
   * Назва черги.
   * @type {string}
   */
  queue_name: string

  /**
   * Ідентифікатор учасника.
   * @type {number}
   */
  member_id: number

  /**
   * Назва учасника.
   * @type {string}
   */
  member_name?: string

  /**
   * Ідентифікатор агента.
   * @type {number}
   */
  agent_id?: number

  /**
   * Ідентифікатор каналу учасника.
   * @type {string}
   */
  member_channel_id?: string

  /**
   * Ідентифікатор каналу агента.
   * @type {string}
   */
  agent_channel_id?: string

  /**
   * Інформація про комунікацію.
   * @type {MemberCommunication}
   */
  communication: MemberCommunication

  /**
   * Чи є звітність.
   * @type {boolean}
   */
  has_reporting: boolean

  /**
   * Чи є форма.
   * @type {boolean}
   */
  has_form?: boolean

  /**
   * Змінні.
   * @type {{ [key: string]: any }}
   */
  variables?: { [key: string]: any }
}

export interface TaskData extends Distribute {
  /**
   * Ідентифікатор додатку.
   * @type {string}
   */
  app_id: string

  /**
   * Час, коли завдання було з'єднано.
   * @type {number}
   */
  bridged_at?: number

  /**
   * Час, коли завдання залишило.
   * @type {number}
   */
  leaving_at?: number

  /**
   * Час обробки в секундах.
   * @type {number}
   */
  processing_sec?: number

  /**
   * Час оновлення обробки в секундах.
   * @type {number}
   */
  processing_renewal_sec?: number

  /**
   * Час тайм-ауту обробки.
   * @type {number}
   */
  processing_timeout_at?: number

  /**
   * Тривалість завдання в секундах.
   * @type {number}
   */
  duration: number

  /**
   * Стан завдання.
   * @type {string}
   */
  state: string

  /**
   * Форма.
   * @type {Form | null}
   */
  form?: Form | null

  /**
   * Чи є форма.
   * @type {boolean}
   */
  has_form?: boolean
}

export interface Offering {
  /**
   * Ідентифікатор каналу учасника.
   * @type {string}
   */
  member_channel_id?: string

  /**
   * Ідентифікатор каналу агента.
   * @type {string}
   */
  agent_channel_id?: string

  /**
   * Автоматичний прийом.
   * @type {boolean}
   */
  auto_answer: boolean
}

export interface Missed {
  /**
   * Тайм-аут.
   * @type {number}
   */
  timeout: number

  /**
   * Кількість пропущених відповідей.
   * @type {number}
   */
  no_answers: number
}

export interface WrapTime {
  /**
   * Тайм-аут.
   * @type {number}
   */
  timeout: number
}

export interface Processing {
  /**
   * Тайм-аут обробки.
   * @type {number | null}
   */
  timeout: number | null

  /**
   * Час обробки в секундах.
   * @type {number}
   */
  sec: number

  /**
   * Час оновлення обробки в секундах.
   * @type {number}
   */
  renewal_sec?: number
}

export interface DistributeEvent extends ChannelEvent {
  /**
   * Інформація про розподіл.
   * @type {Distribute}
   */
  distribute: Distribute
}

export interface BridgedEvent extends ChannelEvent {
  /**
   * Форма.
   * @type {Form | null}
   */
  form?: Form | null
}

export interface OfferingEvent extends ChannelEvent {
  /**
   * Інформація про пропозицію.
   * @type {Offering}
   */
  offering: Offering
}

export interface FormEvent extends ChannelEvent {
  /**
   * Форма.
   * @type {Form | null}
   */
  form?: Form | null
}

export interface TransferEvent extends ChannelEvent {
  /**
   * Ідентифікатор спроби передачі.
   * @type {number}
   */
  to_attempt_id: number

  /**
   * Інформація про розподіл.
   * @type {Distribute}
   */
  distribute: Distribute

  form?: Form
}

export interface MissedEvent extends ChannelEvent {
  /**
   * Інформація про пропущені події.
   * @type {Missed}
   */
  missed: Missed
}

export interface WrapTimeEvent extends ChannelEvent {
  /**
   * Інформація про час завершення.
   * @type {WrapTime}
   */
  wrap_time: WrapTime
}

export interface ProcessingEvent extends ChannelEvent {
  /**
   * Інформація про обробку.
   * @type {Processing}
   */
  processing: Processing
}

export interface Queue {
  /**
   * Ідентифікатор черги.
   * @type {number}
   */
  id: number

  /**
   * Назва черги.
   * @type {string}
   */
  name: string
}

export class Task {
  /**
   * Історія розподілів.
   * @type {Distribute[]}
   */
  history!: Distribute[]

  /**
   * Інформація про комунікацію.
   * @type {MemberCommunication}
   */
  communication: MemberCommunication

  /**
   * Ідентифікатор завдання.
   * @type {number}
   */
  id: number

  /**
   * Стан завдання.
   * @type {JobState}
   */
  state: JobState

  /**
   * Дані для постобробки.
   * @type {object}
   */
  postProcessData!: object

  /**
   * Час останньої зміни статусу.
   * @type {number}
   */
  lastStatusChange: number

  /**
   * Час створення завдання.
   * @type {number}
   */
  createdAt: number

  /**
   * Час пропозиції.
   * @type {number}
   */
  offeringAt: number

  /**
   * Час відповіді.
   * @type {number}
   */
  answeredAt: number

  /**
   * Час з'єднання.
   * @type {number}
   */
  bridgedAt: number

  /**
   * Час початку обробки.
   * @type {number}
   */
  startProcessingAt: number

  /**
   * Час завершення.
   * @type {number}
   */
  stopAt: number

  /**
   * Час закриття.
   * @type {number}
   */
  closedAt: number

  /**
   * Час звітування.
   * @type {number}
   */
  reportedAt: number

  /**
   * Форма.
   * @type {Form | null}
   */
  form: Form | null

  /**
   * Інформація про обробку.
   * @type {Processing | null}
   */
  _processing: Processing | null

  /**
   * Автоматичний прийом.
   * @type {boolean}
   */
  autoAnswered: boolean

  /**
   * Параметр автоматичного прийому.
   * @type {boolean | string | number}
   */
  _autoAnswerParam: boolean | string | number

  /**
   * Тайм-аут автоматичного прийому.
   * @type {any | null}
   */
  _autoAnswerTimerId: any | null

  /**
   * Конструктор класу.
   * @param {Client} client - Клієнт.
   * @param {ChannelEvent} e - Подія каналу.
   * @param {Distribute} distribute - Інформація про розподіл.
   */
  constructor(
    private readonly client: Client,
    e: ChannelEvent,
    protected distribute: Distribute
  ) {
    this.id = e.attempt_id!
    this.state = JobState.Offering
    this.setState(e.status)
    this.lastStatusChange = e.timestamp
    this.createdAt = e.timestamp
    this._processing = null
    this.offeringAt = 0
    this.answeredAt = 0
    this.bridgedAt = 0
    this.reportedAt = 0
    this.startProcessingAt = 0
    this.stopAt = 0
    this.closedAt = 0
    this.form = null

    this.autoAnswered = false
    this._autoAnswerParam = false
    this._autoAnswerTimerId = null

    this.communication = distribute.communication
    this.history = [distribute]
  }

  /**
   * Отримати чергу завдання.
   * @returns {Queue}
   */
  get queue(): Queue {
    return {
      id: this.distribute.queue_id,
      name: this.distribute.queue_name,
    }
  }

  /**
   * Отримати тривалість завдання в секундах.
   * @returns {number}
   */
  get duration() {
    return Math.round((Date.now() - this.lastStatusChange) / 1000)
  }

  /**
   * Чи є форма.
   * @returns {boolean}
   */
  get hasForm() {
    return this.distribute.has_form || false
  }

  /**
   * Отримати канал.
   * @returns {string}
   */
  get channel() {
    return this.distribute.channel
  }

  /**
   * Чи дозволено прийняття завдання.
   * @returns {boolean}
   */
  get allowAccept() {
    return (
      this.channel === ChannelName.Task &&
      (this.bridgedAt === 0 && this.closedAt === 0)
    )
  }

  /**
   * Чи дозволено відхилення завдання.
   * @returns {boolean}
   */
  get allowDecline() {
    return this.allowAccept
  }

  /**
   * Чи дозволено закриття завдання.
   * @returns {boolean}
   */
  get allowClose() {
    return (
      this.channel === ChannelName.Task &&
      this.closedAt === 0 &&
      this.bridgedAt > 0
    )
  }

  /**
   * Отримати ідентифікатор учасника.
   * @returns {number}
   */
  get memberId() {
    return this.distribute.member_id
  }

  /**
   * Отримати ідентифікатор черги.
   * @returns {number}
   */
  get queueId() {
    return this.distribute.queue_id
  }

  /**
   * Чи є звітність.
   * @returns {boolean}
   */
  get hasReporting() {
    return this.distribute.has_reporting
  }

  /**
   * Чи дозволено звітування.
   * @returns {boolean}
   */
  get allowReporting() {
    return this.hasReporting && this.bridgedAt > 0
  }

  /**
   * Отримати ідентифікатор каналу агента.
   * @returns {string}
   */
  get agentChannelId() {
    return this.distribute.agent_channel_id
  }

  /**
   * Встановити стан завдання.
   * @param {string} state - Стан завдання.
   * @todo
   */
  setState(state: string) {
    this.state = state as JobState
  }

  setForm(form: Form | null) {
    this.form = form
    if (!this.allowReporting) {
      this.distribute.has_form = true
    }
  }

  /**
   * Встановити час відповіді.
   * @param {number} t - Час відповіді.
   */
  setAnswered(t: number) {
    this.answeredAt = t
    this.lastStatusChange = Date.now()

    if (this._autoAnswerTimerId) {
      clearTimeout(this._autoAnswerTimerId)
      this._autoAnswerTimerId = null
    }
  }

  /**
   * Встановити пропозицію.
   * @param {OfferingEvent} e - Подія пропозиції.
   */
  setOffering(e: OfferingEvent) {
    this.offeringAt = e.timestamp

    if (e.offering.auto_answer && this.channel === ChannelType.Job) {
      this._autoAnswerParam = e.offering.auto_answer
      this.acceptDelay().catch((err) => {
        this.client.emit('error', err)
      })
    }
  }

  /**
   * Встановити з'єднання.
   * @param {BridgedEvent} e - Подія з'єднання.
   */
  setBridged(e: BridgedEvent) {
    this.bridgedAt = e.timestamp
    this.lastStatusChange = Date.now()
    if (e.form) {
      this.form = e.form
    }

    if (this._autoAnswerTimerId) {
      clearTimeout(this._autoAnswerTimerId)
      this._autoAnswerTimerId = null
    }
  }

  /**
   * Встановити обробку.
   * @param {number} now - Час обробки.
   * @param {Processing} p - Інформація про обробку.
   */
  setProcessing(now: number, p: Processing) {
    this.state = JobState.Processing
    this.closedAt = now
    if (!this.startProcessingAt) {
      this.startProcessingAt = Date.now()
    }

    if (p.sec && !p.timeout) {
      p.timeout = Date.now() + p.sec * 1000 // bug
    }

    this._processing = p
  }

  /**
   * Встановити закриття завдання.
   * @param {number} now - Час закриття.
   */
  setClosed(now: number) {
    this.stopAt = now
    this.state = JobState.Closed
  }

  /**
   * Встановити новий розподіл.
   * @param {Distribute} d - Інформація про новий розподіл.
   */
  setTransferred(d: Distribute, f?: Form) {
    this.distribute = d
    this.history.push(d)
    this.form = f || null
  }

  /**
   * Встановити пропущене завдання.
   */
  setMissed() {
    this.state = JobState.Missed
  }

  /**
   * Отримати час тайм-ауту обробки.
   * @returns {number | null}
   */
  get processingTimeoutAt() {
    if (!this._processing || !this._processing.timeout) {
      return null
    }

    return this._processing.timeout
  }

  /**
   * Отримати тривалість обробки в секундах.
   * @returns {number | null}
   */
  get processingSec() {
    if (!this._processing || !this._processing.sec) {
      return null
    }

    return this._processing.sec
  }

  /**
   * Отримати спробу.
   * @returns {Task}
   */
  get attempt() {
    return this
  }

  /**
   * Отримати змінні завдання.
   * @returns {object}
   */
  get variables() {
    const res: { [key: string]: any } = {}
    for (const k in this.distribute.variables) {
      if (k.startsWith('cc_')) {
        continue
      }
      res[k] = this.distribute.variables[k]
    }

    return res
  }

  /**
   * Чи є учасник.
   * @returns {boolean}
   */
  get isMember(): boolean {
    return !!this.memberId
  }

  /**
   * Отримати номер для відображення.
   * @returns {string}
   */
  get displayNumber() {
    return this.communication.destination
  }

  /**
   * Отримати ім'я для відображення.
   * @returns {string | null}
   */
  get displayName() {
    return this.distribute.member_name || null
  }

  /**
   * Отримати відображення (ім'я та номер).
   * @returns {string}
   */
  get display() {
    return `${this.displayName} (${this.displayNumber})`
  }

  /**
   * Отримати тривалість оновлення в секундах.
   * @returns {number | null}
   */
  get renewalSec() {
    if (!this._processing || !this._processing.renewal_sec) {
      return null
    }

    return this._processing.renewal_sec
  }

  /**
   * Чи є автоматичний прийом.
   * @returns {boolean}
   */
  get autoAnswer() {
    return this.autoAnswerDelay > 0
  }

  /**
   * Отримати затримку автоматичного прийому.
   * @returns {number}
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
   * Прийняти завдання.
   * @returns {Promise<any>}
   */
  async accept() {
    return this.client.request(`cc_agent_task_accept`, {
      agent_id: this.distribute.agent_id,
      attempt_id: this.id,
      app_id: this.distribute.app_id,
    })
  }

  /**
   * Автоматично прийняти завдання із затримкою.
   * @returns {Promise<void>}
   */
  async acceptDelay() {
    this._autoAnswerTimerId = setTimeout(async () => {
      if (this.autoAnswered) {
        return
      }

      if (!this.answeredAt) {
        this.autoAnswered = true
        await this.accept()
      }
    }, this.autoAnswerDelay)
  }

  /**
   * Закрити завдання.
   * @returns {Promise<any>}
   */
  async close() {
    return this.client.request(`cc_agent_task_close`, {
      agent_id: this.distribute.agent_id,
      attempt_id: this.id,
      app_id: this.distribute.app_id,
    })
  }

  /**
   * Відхилити завдання.
   * @returns {Promise<any>}
   */
  async decline() {
    return this.client.request(`cc_agent_task_close`, {
      agent_id: this.distribute.agent_id,
      attempt_id: this.id,
      app_id: this.distribute.app_id,
    })
  }

  /**
   * Звітувати про завдання.
   * @param {Reporting} reporting - Дані звітності.
   * @returns {Promise<any>}
   */
  async reporting(reporting: Reporting) {
    const res = await this.client.request('cc_reporting', {
      attempt_id: this.id,
      ...reporting,
    })
    this.reportedAt = Date.now()

    return res
  }

  /**
   * Оновити завдання.
   * @param {number} [sec] - Кількість секунд для оновлення.
   * @returns {Promise<any>}
   */
  async renew(sec?: number) {
    return this.client.request('cc_renewal', {
      attempt_id: this.id,
      renewal_sec: sec ? sec : this.processingSec,
    })
  }

  /**
   * Виконати дію з формою.
   * @param {string} action - Дія, яку потрібно виконати.
   * @param {Map<string, string | number | object | any[]>} fields - Поля форми.
   * @returns {Promise<any>}
   * @throws {Error} Якщо активна форма не знайдена.
   */
  async formAction(
    action: string,
    fields: Map<string, string | number | object | any[]> | undefined
  ) {
    if (!this.form) {
      throw new Error('not found active form')
    }

    return this.client.request('cc_form_action', {
      attempt_id: this.id,
      app_id: this.distribute.app_id,
      action,
      fields: formFields(fields || this.form.fields),
    })
  }

  async saveForm(
    form: Form | null,
    fields: Map<string, string | number | object | any[]> | null
  ) {
    if (!this.form) {
      throw new Error('no form')
    }

    return this.client.request('cc_form_save', {
      attempt_id: this.id,
      app_id: this.distribute.app_id,
      fields: formFields(fields || this.form.fields),
      form: form || this.form,
    })
  }

  async componentAction(
    componentId: string,
    action: string,
    vars: Map<string, string | number | object | any[]> | undefined,
    sync?: boolean
  ) {
    if (!this.form) {
      throw new Error('no form')
    }

    return this.client.request('cc_component_action', {
      attempt_id: this.id,
      app_id: this.distribute.app_id,
      action,
      componentId,
      vars: formFields(vars),
      formId: this.form.id,
      sync: !!sync,
    })
  }
}

function formFields(
  fields: Map<string, string | number | object | any[]> | undefined
) {
  const res = {} as object

  if (!fields) return res

  for (const [key, value] of Object.entries(fields)) {
    if (typeof value === 'object') {
      ;(res as any)[key] = JSON.stringify(value)
    } else {
      ;(res as any)[key] = value
    }
  }

  return res
}
