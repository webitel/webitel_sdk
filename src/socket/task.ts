import { CallVariables, Categories } from './call'
import { Client } from './client'

export interface Reporting {
  success?: boolean
  next_distribute_at?: number
  categories?: Categories

  communication?: MemberCommunication
  new_communication?: MemberCommunication[]
  description?: string

  // integration fields
  display?: boolean
  expire?: number
  variables?: CallVariables
  name?: string
  timezone?: object
}

export enum ChannelName {
  Call = 'call',
  Chat = 'chat',
  Task = 'task',
}

export interface Node {
  id: number
  name: string
  value: object // ?
  children?: Node[]
}

export interface CommunicationType {
  id: number
  name: string
}

export interface MemberCommunication {
  destination: string
  type: CommunicationType
  display?: string
  state?: number // TODO
}

export interface ChannelEvent {
  status: string
  attempt_id?: number
  timestamp: number
  channel: string
}

export interface Distribute extends ChannelEvent {
  app_id: string
  channel: string
  queue_id: number
  member_id: number
  agent_id?: number
  member_channel_id?: string
  agent_channel_id?: string
  communication: MemberCommunication
  has_reporting: boolean
}

export interface Offering {
  member_channel_id?: string
  agent_channel_id?: string
}

export interface Missed {
  timeout: number
  no_answers: number
}

export interface WrapTime {
  timeout: number
  post_processing: boolean
}

export interface DistributeEvent extends ChannelEvent {
  distribute: Distribute
}

export interface MissedEvent extends ChannelEvent {
  missed: Missed
}

export interface WrapTimeEvent extends ChannelEvent {
  wrap_time: WrapTime
}

export class Task {
  history!: Distribute[]
  communication: MemberCommunication
  id: number
  state: string
  postProcessData!: object
  lastStatusChange: number
  _agentChannelId: string | undefined
  _channel: string
  createdAt: number
  offeringAt: number
  answeredAt: number
  bridgedAt: number
  stopAt: number
  closedAt: number
  hasReporting: boolean

  constructor(
    private readonly client: Client,
    e: ChannelEvent,
    protected distribute: Distribute
  ) {
    this.id = e.attempt_id!
    this.state = e.status
    this.lastStatusChange = e.timestamp
    this.communication = distribute.communication
    this.createdAt = e.timestamp
    this.offeringAt = 0
    this.answeredAt = 0
    this.bridgedAt = 0
    this.stopAt = 0
    this.closedAt = 0
    this.hasReporting = distribute.has_reporting

    this.history = [distribute]
    this._channel = distribute.channel
    this._agentChannelId = distribute.agent_channel_id
  }

  get channel() {
    return this._channel
  }

  get allowAccept() {
    return (
      this.channel === ChannelName.Task &&
      (this.answeredAt === 0 && this.closedAt === 0)
    )
  }

  get allowDecline() {
    return this.allowAccept
  }

  get allowClose() {
    return (
      this.channel === ChannelName.Task &&
      this.closedAt === 0 &&
      this.answeredAt > 0
    )
  }

  get allowReporting() {
    return this.hasReporting && this.answeredAt > 0
  }

  get agentChannelId() {
    return this._agentChannelId
  }

  setAnswered(t: number) {
    this.answeredAt = t
  }

  /*
    control
   */

  async accept() {
    return this.client.request(`cc_agent_task_accept`, {
      agent_id: this.distribute.agent_id,
      attempt_id: this.id,
      app_id: this.distribute.app_id,
    })
  }

  async close() {
    return this.client.request(`cc_agent_task_close`, {
      agent_id: this.distribute.agent_id,
      attempt_id: this.id,
      app_id: this.distribute.app_id,
    })
  }
  //todo
  async decline() {
    return this.client.request(`cc_agent_task_close`, {
      agent_id: this.distribute.agent_id,
      attempt_id: this.id,
      app_id: this.distribute.app_id,
    })
  }

  async reporting(reporting: Reporting) {
    return this.client.request('cc_reporting', {
      attempt_id: this.id,
      ...reporting,
    })
  }
}
