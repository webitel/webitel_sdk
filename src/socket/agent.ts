import { Client } from './client'
import {
  ChannelEvent,
  DistributeEvent,
  MissedEvent,
  Task,
  WrapTimeEvent,
} from './task'

export interface Channel {
  channel: ChannelType
  state: string
  joined_at: number
  timeout?: number
  active: boolean
  max_open: number
  open: number
  no_answer: number
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
}

export interface AgentStatusEvent {
  user_id: number
  agent_id: number
  timestamp: number
  status: string
  status_payload?: any
  timeout?: number
  channels?: Channel[]
  on_demand?: boolean
}

export enum AgentStatus {
  Online = 'online',
  Offline = 'offline',
  Pause = 'pause',
}

export enum AgentState {
  Offline = 'offline',
  Waiting = 'waiting',
  Offering = 'offering',
  Ringing = 'ringing',
  Talking = 'talking',
  Break = 'break',
  Fine = 'fine',
}

export enum ChannelState {
  Waiting = 'waiting',

  Distribute = 'distribute', // ring
  Offering = 'offering', // ring

  Answered = 'answered',
  Active = 'active',
  Hold = 'hold', // TODO
  Missed = 'missed',
  WrapTime = 'wrap_time',
}

export enum ChannelType {
  Call = 'call',
  Email = 'email',
  Chat = 'chat',
}

export class Agent {
  task: Map<number, Task>

  lastStatusChange: number
  constructor(protected readonly client: Client, protected info: AgentSession) {
    this.task = new Map<number, Task>()

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

  get channels() {
    return this.info.channels
  }

  get stateDuration() {
    return Math.round((Date.now() - this.lastStatusChange) / 1000)
  }

  onChannelEvent(e: ChannelEvent) {
    let task: Task | undefined

    switch (e.status) {
      case ChannelState.Distribute:
        const distributeEvent: DistributeEvent = e as DistributeEvent
        if (!distributeEvent) {
          throw new Error('bad event')
        }

        task = new Task(e, distributeEvent.distribute)
        this.task.set(task.id, task)
        break

      case ChannelState.Offering:
        task = this.task.get(e.attempt_id!)

        break

      case ChannelState.Missed:
        if (e.attempt_id) {
          task = this.task.get(e.attempt_id) as Task
          if (task) {
            const missedEvent: MissedEvent = e as MissedEvent
            if (!missedEvent) {
              throw new Error('bad event')
            }

            this.setChannelStateTimeout(
              e.channel,
              e,
              missedEvent.missed.timeout
            )
            this.task.delete(e.attempt_id)
            this.client.reportingCallTask(task)

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

          if (task) {
            this.setChannelStateTimeout(
              e.channel,
              e,
              wrapTimeEvent.wrap_time.timeout
            )

            if (!wrapTimeEvent.wrap_time.post_processing) {
              this.task.delete(e.attempt_id)
              this.client.reportingCallTask(task)
            }

            return task
          }
        }
        break

      // TODO
      case ChannelState.Waiting:
        if (e.attempt_id) {
          task = this.task.get(e.attempt_id)
          this.task.delete(e.attempt_id)
          this.client.reportingCallTask(task!)
        }
        break

      default:
      // throw new Error("not found task")
    }

    this.setChannelState(e.channel, e)

    return task || undefined
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
      this.info.channels = e.channels || []
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
    return this.client.request(`cc_fetch_offline_members`, {
      agent_id: this.agentId,
      page,
      q,
      per_page: perPage,
    })
  }

  hasTask(task: Task) {
    return this.task.has(task.id)
  }

  private setChannelState(name: string, e: ChannelEvent) {
    for (const chan of this.channels) {
      if (chan.channel === name) {
        chan.state = e.status
        chan.joined_at = e.timestamp
        chan.timeout = undefined
      }
    }
  }

  private setChannelStateTimeout(
    name: string,
    e: ChannelEvent,
    timeout: number
  ) {
    for (const chan of this.channels) {
      if (chan.channel === name) {
        chan.state = e.status // FIXME
        chan.timeout = timeout
        chan.joined_at = e.timestamp
      }
    }
  }
}
