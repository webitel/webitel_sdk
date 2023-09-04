import { Client } from './client'
import { PauseNotAllowedError, TypeErrors } from './errors'
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

export interface WaitingMember {
  attempt_id: number
  channel: string
  communication: object
  deadline: number
  position: number
  queue: object
  wait: number
}

export interface Channel {
  channel: ChannelType
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
  waitingListChats: WaitingMember[]
  waitingListCalls: WaitingMember[]
  _channels: Map<string, Channel>
  _listOfflineMembers: OfflineMemberList | null
  lastStatusChange: number
  constructor(protected readonly client: Client, protected info: AgentSession) {
    this.task = new Map<number, Task>()
    this._channels = new Map<string, Channel>()
    this.initChannels(info.channels)
    this._listOfflineMembers = null
    this.waitingListChats = []
    this.waitingListCalls = []

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
    return Array.from(this._channels.values())
  }

  get channel() {
    return this._channels.get(ChannelType.Call)
  }

  get stateDuration() {
    return Math.round((Date.now() - this.lastStatusChange) / 1000)
  }

  // todo need refactor

  setWaitingList(e: keyable | undefined) {
    if (e) {
      const list = e.list as WaitingMember[]
      this.waitingListCalls.length = 0
      this.waitingListChats.length = 0
      for (const el of list) {
        switch (el.channel) {
          case ChannelType.Call:
            this.waitingListCalls.push(el)
            break
          case ChannelType.Chat:
            this.waitingListChats.push(el)
            break
          default:
        }
      }
    }
  }
  deleteWaitingAttempt(e: keyable | undefined) {
    if (e) {
      const attemptId = e.attempt_id

      if (!removeWaitingList(this.waitingListCalls, attemptId)) {
        removeWaitingList(this.waitingListChats, attemptId)
      }
    }
  }

  async interceptAttempt(id: number) {
    return this.client.request(`cc_intercept_attempt`, {
      attempt_id: id,
      agent_id: this.agentId,
    })
  }

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

  async online(channels: string[], onDemand: boolean) {
    return this.client.agentSetOnline(this.agentId, channels, onDemand)
  }

  async waiting(channel: string) {
    return this.client.agentSetWaiting(this.agentId, channel)
  }

  async pause(payload?: any) {
    try {
      return await this.client.agentSetPause(this.agentId, payload)
    } catch (e) {
      if (e.id === TypeErrors.PauseNotAllow) {
        return new PauseNotAllowedError(e.detail)
      }

      return e
    }
  }

  async offline() {
    return this.client.agentSetOffline(this.agentId)
  }

  setStatus(e: AgentStatusEvent) {
    if (e.status === AgentStatus.Online) {
      this.info.on_demand = e.on_demand || false
      this.initChannels(e.channels)
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

function removeWaitingList(list: WaitingMember[], attemptId: number): boolean {
  for (let i = 0; i < list.length; i++) {
    if (list[i].attempt_id === attemptId) {
      list.splice(i, 1)

      return true
    }
  }

  return false
}
