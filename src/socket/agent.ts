import { Client } from './client'
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

export interface Channel {
  channel: ChannelType | null
  state: string
  joined_at: number
  timeout?: number
  active: boolean
  open: number
  wrap_time_ids: number[]
}

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

export interface AgentSessionResponse extends AgentSession {
  task?: Distribute[]
}

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

export enum AgentStatus {
  Online = 'online',
  Offline = 'offline',
  Pause = 'pause',
  BreakOut = 'break_out',
}

export enum ChannelState {
  Waiting = 'waiting',

  Distribute = 'distribute', // ring
  Offering = 'offering', // ring

  Answered = 'answered',
  Active = 'active',
  Bridged = 'bridged',
  Hold = 'hold', // TODO
  Missed = 'missed',
  WrapTime = 'wrap_time',
  Processing = 'processing',
  Transfer = 'transfer',
  Form = 'form',
}

export enum ChannelType {
  Call = 'call',
  Email = 'email',
  Chat = 'chat',
  Job = 'task', // todo rename task to job
}

type OfflineMember = {
  id: number
  [key: string]: any
}

export interface OfflineMemberList {
  items: OfflineMember[]
  next?: boolean
}

export class Agent {
  task: Map<number, Task>
  _channel: Channel
  _listOfflineMembers: OfflineMemberList | null
  lastStatusChange: number
  constructor(protected readonly client: Client, protected info: AgentSession) {
    this.task = new Map<number, Task>()
    this._channel = info.channels[0] // todo
    this._listOfflineMembers = null

    this.lastStatusChange = Date.now() - this.info.status_duration * 1000
  }

  get agentId() {
    return this.info.agent_id
  }

  get onDemand() {
    return this.info.on_demand
  }

  get status() {
    return this.info.status
  }

  get statusPayload() {
    return this.info.status_payload
  }

  get isAdmin() {
    return this.info.is_admin
  }

  get isSupervisor() {
    return this.info.is_supervisor
  }

  get team() {
    return this.info.team
  }

  get supervisor() {
    return this.info.supervisor
  }

  get auditor() {
    return this.info.auditor
  }

  get channels() {
    return [this._channel]
  }

  get channel() {
    return this._channel
  }

  get stateDuration() {
    return Math.round((Date.now() - this.lastStatusChange) / 1000)
  }

  // todo need refactor

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

            this.setChannelStateTimeout(
              e.channel,
              e,
              missedEvent.missed.timeout
            )
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
              e.channel,
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

    this.setChannelState(e.channel, e)

    if (task) {
      task.setState(e.status)

      return task
    } else {
      return undefined
    }
  }

  async online(channels: string[], onDemand: boolean) {
    return this.client.agentSetOnline(this.agentId, channels, onDemand)
  }

  async waiting(channel: string) {
    return this.client.agentSetWaiting(this.agentId, channel)
  }

  async pause(payload?: any) {
    return this.client.agentSetPause(this.agentId, payload)
  }

  async offline() {
    return this.client.agentSetOffline(this.agentId)
  }

  setStatus(e: AgentStatusEvent) {
    if (e.status === AgentStatus.Online) {
      this.info.on_demand = e.on_demand || false

      this._channel = e.channels[0]
    }

    this.info.status = e.status
    this.info.status_payload = e.status_payload ? e.status_payload : null
    this.lastStatusChange = Date.now()
  }

  async directMember(memberId: number, communicationId: number) {
    return this.client.request(`cc_member_direct`, {
      agent_id: this.agentId,
      member_id: memberId,
      communication_id: communicationId,
    })
  }

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

  hasTask(task: Task) {
    return this.task.has(task.id)
  }

  private setChannelState(name: string, e: ChannelEvent) {
    this._channel.channel = name ? (name as ChannelType) : null
    this._channel.state = e.status
    this._channel.joined_at = e.timestamp
    this._channel.timeout = undefined
  }

  private setChannelStateTimeout(
    name: string,
    e: ChannelEvent,
    timeout: number
  ) {
    this._channel.channel = name ? (name as ChannelType) : null
    this._channel.state = e.status // FIXME
    this._channel.timeout = timeout
    this._channel.joined_at = e.timestamp
  }
}
