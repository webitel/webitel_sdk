import { Client } from './client'
import { BaseError, PauseNotAllowedError, TypeErrors } from './errors'
import { keyable } from './notification'
import {
  BridgedEvent,
  ChannelEvent,
  Distribute,
  DistributeEvent,
  FormEvent,
  MissedEvent,
  OfferingEvent,
  ProcessingEvent,
  Task,
  TransferEvent,
  WrapTimeEvent,
} from './task'

/**
 * Інтерфейс, що представляє властивості абонента, який очікує на відповідь.
 * @interface
 */
export interface WaitingMemberProperties {
  deadline: number
  queue: object
  wait: number
}

export interface WaitingMember extends WaitingMemberProperties {
  attempt_id: number
  communication: keyable
  channel: string
  session_id: string
}

/**
 * Інтерфейс, що представляє абонента, який очікує на відповідь від дзвінка.
 * @interface
 */
export interface WaitingMemberCall extends WaitingMemberProperties {
  attemptId: number
  sessionId: string
  displayName: string
  displayNumber: string
}

/**
 * Інтерфейс, що представляє абонента, який очікує на відповідь від чату.
 * @interface
 */
export interface WaitingMemberChat extends WaitingMemberProperties {
  attemptId: number
  sessionId: string
  message: string
  displayName: string
  peer: string
  chat: string
}

/**
 * Інтерфейс, що представляє канал зв'язку.
 * @interface
 */
export interface Channel {
  channel: ChannelType
  state: string
  joined_at: number
  timeout?: number
  active: boolean
  open: number
  wrap_time_ids: number[]
}

/**
 * Інтерфейс, що представляє сесію агента.
 * @interface
 */
export interface AgentSession {
  agent_id: number
  status: string
  on_demand: boolean
  last_status_change: number
  status_duration: number
  status_payload: any
  channels: Channel[]
  is_supervisor: boolean
  is_admin: boolean
  team: object | null
  supervisor: object | null
  auditor: object | null
}

/**
 * Інтерфейс, що представляє відповідь на запит для сесії агента.
 * @interface
 */
export interface AgentSessionResponse extends AgentSession {
  task?: Distribute[]
}

/**
 * Інтерфейс, що представляє подію зміни статусу агента.
 * @interface
 */
export interface AgentStatusEvent {
  user_id: number
  agent_id: number
  timestamp: number
  status: string
  status_payload?: any
  timeout?: number
  channels: Channel[]
  on_demand?: boolean
}

/**
 * Перелік статусів агента.
 * @enum {string}
 */
export enum AgentStatus {
  /**
   * Агент онлайн.
   */
  Online = 'online',

  /**
   * Агент офлайн.
   */
  Offline = 'offline',

  /**
   * Агент на паузі.
   */
  Pause = 'pause',

  /**
   * Агент у перерві.
   */
  BreakOut = 'break_out',
}

/**
 * Перелік станів каналу зв'язку.
 * @enum {string}
 */
export enum ChannelState {
  /**
   * Канал очікує.
   */
  Waiting = 'waiting',

  /**
   * Канал розподіляється (дзвінок дзвонить).
   */
  Distribute = 'distribute',

  /**
   * Канал пропонує (дзвінок дзвонить).
   */
  Offering = 'offering',

  /**
   * Канал відповів на дзвінок.
   */
  Answered = 'answered',

  /**
   * Канал активний.
   */
  Active = 'active',

  /**
   * Канал з'єднаний.
   */
  Bridged = 'bridged',

  /**
   * Канал на утриманні.
   */
  Hold = 'hold',

  /**
   * Канал пропущено.
   */
  Missed = 'missed',

  /**
   * Канал у часі обробки.
   */
  WrapTime = 'wrap_time',

  /**
   * Канал обробляється.
   */
  Processing = 'processing',

  /**
   * Канал у процесі передачі.
   */
  Transfer = 'transfer',

  /**
   * Канал заповнюється формою.
   */
  Form = 'form',
}

/**
 * Перелік типів каналів зв'язку.
 * @enum {string}
 */
export enum ChannelType {
  /**
   * Тип каналу - дзвінок.
   */
  Call = 'call',

  /**
   * Тип каналу - електронна пошта.
   */
  Email = 'email',

  /**
   * Тип каналу - чат.
   */
  Chat = 'chat',

  /**
   * Тип каналу - завдання (планується перейменування на job).
   */
  Job = 'task',
}

/**
 * Інтерфейс, що представляє відключеного абонента.
 * @interface
 */
type OfflineMember = {
  id: number
  [key: string]: any
}

/**
 * Інтерфейс, що представляє список відключених членів.
 * @interface
 */
export interface OfflineMemberList {
  items: OfflineMember[]
  next?: boolean
}

/**
 * Клас Agent: Використовується для представлення агента, що виконує завдання,
 * чати та дзвінки, а також управляє каналами та офлайн-учасниками.
 *
 * Конструктор Agent:
 *  client: Клієнт, що керує цим агентом. Використовується для доступу до зовнішніх ресурсів та методів.
 *  info: Інформація про сесію агента, що включає дані, специфічні для агента, такі як статус, ідентифікатори тощо.
 *  Конструктор ініціалізує всі властивості класу, встановлюючи значення за замовчуванням
 *  або порожні об'єкти для управління різними аспектами роботи агента.
 */
export class Agent {
  task: Map<number, Task>
  maxWaitingListChats: number
  waitingListChats: WaitingMemberChat[]
  waitingListCalls: WaitingMemberCall[]
  _channels: Map<string, Channel>
  _listOfflineMembers: OfflineMemberList | null
  lastStatusChange: number

  /**
   * Конструктор класу Agent.
   * @constructor
   * @param {Client} client - Клієнт.
   * @param {AgentSession} info - Сесія агента.
   */
  constructor(protected readonly client: Client, protected info: AgentSession) {
    this.task = new Map<number, Task>()
    this._channels = new Map<string, Channel>()
    this.initChannels(info.channels)
    this._listOfflineMembers = null
    this.maxWaitingListChats = 10
    this.waitingListChats = []
    this.waitingListCalls = []

    this.lastStatusChange = Date.now() - this.info.status_duration * 1000
  }

  /**
   * Метод, що повертає ідентифікатор агента.
   * @method
   * @returns {number} - Ідентифікатор агента.
   */
  get agentId() {
    return this.info.agent_id
  }

  /**
   * Метод, що повертає статус "On Demand".
   * @method
   * @returns {boolean} - Статус "On Demand".
   */
  get onDemand() {
    return this.info.on_demand
  }

  /**
   * Метод, що повертає статус агента.
   * @method
   * @returns {string} - Статус агента.
   */
  get status() {
    return this.info.status
  }

  /**
   * Метод, що повертає додаткову інформацію про статус агента.
   * @method
   * @returns {any} - Додаткова інформація про статус агента.
   */
  get statusPayload() {
    return this.info.status_payload
  }

  /**
   * Метод, що повертає, чи є агент адміністратором.
   * @method
   * @returns {boolean} - Чи є агент адміністратором.
   */
  get isAdmin() {
    return this.info.is_admin
  }

  /**
   * Метод, що повертає, чи є агент супервайзером.
   * @method
   * @returns {boolean} - Чи є агент супервайзером.
   */
  get isSupervisor() {
    return this.info.is_supervisor
  }

  /**
   * Метод, що повертає команду агента.
   * @method
   * @returns {object | null} - Команда агента.
   */
  get team() {
    return this.info.team
  }

  /**
   * Метод, що повертає супервайзера агента.
   * @method
   * @returns {object | null} - Супервайзер агента.
   */
  get supervisor() {
    return this.info.supervisor
  }

  /**
   * Метод, що повертає аудитора агента.
   * @method
   * @returns {object | null} - Аудитор агента.
   */
  get auditor() {
    return this.info.auditor
  }

  /**
   * Метод, що повертає список каналів зв'язку.
   * @method
   * @returns {Channel[]} - Список каналів зв'язку.
   */
  get channels() {
    return Array.from(this._channels.values())
  }

  /**
   * Метод, що повертає канал зв'язку.
   * @method
   * @returns {Channel | undefined} - Канал зв'язку.
   */
  get channel() {
    return this._channels.get(ChannelType.Call)
  }

  /**
   * Метод, що повертає тривалість стану.
   * @method
   * @returns {number} - Тривалість стану.
   */
  get stateDuration() {
    return Math.round((Date.now() - this.lastStatusChange) / 1000)
  }

  /**
   * Метод, що встановлює список членів, які очікують на відповідь.
   * @method
   * @param {keyable | undefined} e - Об'єкт зі списком членів, які очікують на відповідь.
   */
  setWaitingList(e: keyable | undefined) {
    if (e) {
      this.waitingListCalls.length = 0
      this.waitingListChats.length = 0

      if (this.status !== AgentStatus.Online) {
        return
      }

      for (const el of (e.calls || []) as WaitingMember[]) {
        this.waitingListCalls.push({
          displayName: el.communication.name || '',
          displayNumber: el.communication.destination || '',
          attemptId: el.attempt_id,
          sessionId: el.session_id,
          deadline: el.deadline,
          queue: el.queue,
          wait: el.wait,
        })
      }

      for (const el of (e.chats || []) as WaitingMember[]) {
        this.waitingListChats.push({
          chat: el.communication.chat || '',
          displayName: el.communication.name || '',
          message: el.communication.msg || '',
          peer: el.communication.destination || '',
          attemptId: el.attempt_id,
          sessionId: el.session_id,
          deadline: el.deadline,
          queue: el.queue,
          wait: el.wait,
        })

        if (this.waitingListChats.length >= this.maxWaitingListChats) {
          break
        }
      }
    }
  }

  /**
   * Метод, що видаляє спробу очікування на відповідь.
   * @method
   * @param {keyable | undefined} e - Об'єкт зі списком членів, які очікують на відповідь.
   */
  deleteWaitingAttempt(e: keyable | undefined) {
    if (e) {
      const attemptId = e.attempt_id

      if (!removeWaitingList(this.waitingListCalls, attemptId)) {
        removeWaitingList(this.waitingListChats, attemptId)
      }
    }
  }

  /**
   * Метод, що перехоплює спробу.
   * @method
   * @param {number} id - Ідентифікатор спроби.
   * @returns {Promise<any>} - Результат запиту.
   */
  async interceptAttempt(id: number) {
    return this.client.request(`cc_intercept_attempt`, {
      attempt_id: id,
      agent_id: this.agentId,
    })
  }

  /**
   * Метод, що обробляє подію каналу зв'язку.
   * @method
   * @param {ChannelEvent} e - Подія каналу зв'язку.
   * @returns {Task | undefined | BaseError | PauseNotAllowedError} - Задача, помилка або undefined.
   */
  onChannelEvent(e: ChannelEvent) {
    let task: Task | undefined

    switch (e.status) {
      case ChannelState.Distribute:
        const distributeEvent: DistributeEvent = e as DistributeEvent
        if (!distributeEvent) {
          throw new Error('bad event')
        }

        task = new Task(this.client, e, distributeEvent.distribute)
        this.task.set(task.id, task)

        if (task.agentChannelId) {
          switch (task.channel) {
            case ChannelType.Call:
              const call = this.client.callById(task.agentChannelId)
              if (call && !call.task) {
                call.task = task
              }
              break
            case ChannelType.Chat:
              const chat = this.client.conversationById(task.agentChannelId)
              if (chat && !chat.task) {
                chat.task = task
              }
              break

            default:
          }
        }
        break

      case ChannelState.Offering:
        const evOffering = e as OfferingEvent
        task = this.task.get(e.attempt_id!)
        if (task) {
          task.setOffering(evOffering)
        }
        break

      case ChannelState.Bridged:
        const bridged = e as BridgedEvent
        task = this.task.get(bridged.attempt_id!)
        if (task) {
          task.setBridged(bridged)
        }
        break

      case ChannelState.Transfer:
        const transfer = e as TransferEvent
        task = this.task.get(transfer.to_attempt_id)
        if (task) {
          this.task.delete(task.id)
          task.id = transfer.attempt_id!
          task.setTransferred(transfer.distribute)

          this.task.set(task.id, task)
        }
        break

      case ChannelState.Answered:
        task = this.task.get(e.attempt_id!)
        if (task) {
          task.answeredAt = e.timestamp
        }
        break

      case ChannelState.Form:
        const formEvent = e as FormEvent
        task = this.task.get(e.attempt_id!)
        if (task) {
          task.form = formEvent.form || null
        }

        return // todo

      case ChannelState.Missed:
        if (e.attempt_id) {
          task = this.task.get(e.attempt_id) as Task
          if (task) {
            task.stopAt = e.timestamp
            const missedEvent: MissedEvent = e as MissedEvent
            if (!missedEvent) {
              throw new Error('bad event')
            }
            task.setMissed()

            this.setChannelStateTimeout(e, missedEvent.missed.timeout)
            this.task.delete(e.attempt_id)
            this.client.reportingChannelTask(task)

            return task
          }
        }
        break

      case ChannelState.WrapTime:
        if (e.attempt_id) {
          const wrapTimeEvent: WrapTimeEvent = e as WrapTimeEvent
          if (!wrapTimeEvent) {
            throw new Error('bad event')
          }

          task = this.task.get(e.attempt_id) as Task

          this.task.delete(e.attempt_id)
          this.client.reportingChannelTask(task)
        }
        break

      case ChannelState.Processing:
        if (e.attempt_id) {
          const processingEvent: ProcessingEvent = e as ProcessingEvent
          if (!processingEvent) {
            throw new Error('bad event')
          }

          task = this.task.get(e.attempt_id) as Task

          if (task) {
            task.setProcessing(e.timestamp, processingEvent.processing)
            this.setChannelStateTimeout(
              e,
              processingEvent.processing.timeout || 0
            )

            return task
          }
        }
        break

      // TODO
      case ChannelState.Waiting:
        if (e.attempt_id) {
          task = this.task.get(e.attempt_id)
          if (task) {
            task.setClosed(e.timestamp)
            this.task.delete(e.attempt_id)
            this.client.reportingChannelTask(task)
          }
        }
        break

      default:
      // throw new Error("not found task")
    }

    this.setChannelState(e)

    if (task) {
      task.setState(e.status)

      return task
    } else {
      return undefined
    }
  }

  /**
   * Метод, що встановлює статус "Online" для агента.
   * @method
   * @param {string[]} channels - Список каналів зв'язку.
   * @param {boolean} onDemand - Статус "On Demand".
   * @returns {Promise<any>} - Об'єкт з інформацією про сесію агента.
   */
  async online(channels: string[], onDemand: boolean) {
    return this.client.agentSetOnline(this.agentId, channels, onDemand)
  }

  /**
   * Метод, що встановлює статус "Waiting" для агента.
   * @method
   * @param {string} channel - Канал зв'язку.
   * @returns {Promise<any>} - Об'єкт з інформацією про сесію агента.
   */
  async waiting(channel: string) {
    return this.client.agentSetWaiting(this.agentId, channel)
  }

  /**
   * Метод, що встановлює статус "Pause" для агента.
   * @method
   * @param {any} payload - Додаткова інформація про статус "Pause".
   * @returns {Promise<any>} - Об'єкт з інформацією про сесію агента або об'єкт помилки.
   * Якщо статус "Pause" не дозволений, повертається об'єкт помилки PauseNotAllowedError.
   */
  async pause(payload?: any) {
    try {
      return await this.client.agentSetPause(this.agentId, payload)
    } catch (err) {
      const e = err as BaseError
      if (e.id === TypeErrors.PauseNotAllow) {
        return new PauseNotAllowedError(e.detail)
      }

      return e
    }
  }

  /**
   * Метод, що встановлює статус "Offline".
   * @method
   * @returns {Promise<any>} - Результат запиту.
   */
  async offline() {
    return this.client.agentSetOffline(this.agentId)
  }

  /**
   * Метод, що обмежує список членів, які очікують на відповідь від чату.
   * @method
   * @param {number} limit - Ліміт.
   */
  limitWaitingListChats(limit: number) {
    this.maxWaitingListChats = limit
  }

  /**
   * Метод, що встановлює статус агента.
   * @method
   * @param {AgentStatusEvent} e - Подія зміни статусу агента.
   */
  setStatus(e: AgentStatusEvent) {
    if (e.status === AgentStatus.Online) {
      this.info.on_demand = e.on_demand || false
      this.initChannels(e.channels)
    } else {
      this.waitingListCalls.length = 0
      this.waitingListChats.length = 0
    }

    this.info.status = e.status
    this.info.status_payload = e.status_payload ? e.status_payload : null
    this.lastStatusChange = Date.now()
  }

  /**
   * Метод, що направляє абонента.
   * @method
   * @param {number} memberId - Ідентифікатор абонента.
   * @param {number} communicationId - Ідентифікатор зв'язку.
   * @returns {Promise<any>} - Результат запиту.
   */
  async directMember(memberId: number, communicationId: number) {
    return this.client.request(`cc_member_direct`, {
      agent_id: this.agentId,
      member_id: memberId,
      communication_id: communicationId,
    })
  }

  /**
   * Метод, що повертає список відключених абонентів.
   * @method
   * @param {string} q - Пошуковий запит.
   * @param {number} page - Номер сторінки.
   * @param {number} perPage - Кількість елементів на сторінці.
   * @returns {Promise<OfflineMemberList>} - Список абонентів із офлайн черги.
   */
  async offlineMembers(q: string, page: number, perPage: number) {
    this._listOfflineMembers = (await this.client.request(
      `cc_fetch_offline_members`,
      {
        agent_id: this.agentId,
        page,
        q,
        per_page: perPage,
      }
    )) as OfflineMemberList

    return this._listOfflineMembers
  }

  /**
   * Метод, що перевіряє, чи має задачу агент.
   * @method
   * @param {Task} task - Задача.
   * @returns {boolean} - true, якщо агент має задачу, false - якщо ні.
   */
  hasTask(task: Task) {
    return this.task.has(task.id)
  }

  private initChannels(channels: Channel[]) {
    for (const c of channels) {
      this._channels.set(c.channel, c)
    }
  }

  private getChannel(name: string) {
    return this._channels.get(name)
  }

  private setChannelState(e: ChannelEvent) {
    const chan = this.getChannel(e.channel)
    if (chan) {
      chan.state = e.status
      chan.joined_at = e.timestamp
      chan.timeout = undefined
    }
  }

  private setChannelStateTimeout(e: ChannelEvent, timeout: number) {
    const channel = this.getChannel(e.channel)
    if (channel) {
      channel.state = e.status
      channel.timeout = timeout
      channel.joined_at = e.timestamp
    }
  }
}

/**
 * Функція, що видаляє спробу очікування на відповідь.
 * @function
 * @param {WaitingMemberChat[] | WaitingMemberCall[]} list - Список членів, які очікують
 */
function removeWaitingList(
  list: WaitingMemberChat[] | WaitingMemberCall[],
  attemptId: number
): boolean {
  for (let i = 0; i < list.length; i++) {
    if (list[i].attemptId === attemptId) {
      list.splice(i, 1)

      return true
    }
  }

  return false
}
