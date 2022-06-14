import { CallVariables, Categories } from './call'
import { Client } from './client'
import { Form } from './form'

export interface Reporting {
  success?: boolean
  agent_id?: number
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

export enum JobState {
  Distribute = 'distribute',
  Offering = 'offering',
  Bridged = 'bridged',
  Missed = 'missed',
  Processing = 'processing',
  Destroy = 'destroy',
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
  queue_id: number
  queue_name: string
  member_id: number
  agent_id?: number
  member_channel_id?: string
  agent_channel_id?: string
  communication: MemberCommunication
  has_reporting: boolean
  has_form?: boolean
}

export interface TaskData extends Distribute {
  app_id: string
  bridged_at?: number
  leaving_at?: number
  processing_sec?: number
  processing_renewal_sec?: number
  processing_timeout_at?: number
  duration: number
  state: string
  form?: Form | null
  has_form?: boolean
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
}

export interface Processing {
  timeout: number | null
  sec: number
  renewal_sec?: number
}

export interface DistributeEvent extends ChannelEvent {
  distribute: Distribute
}

export interface BridgedEvent extends ChannelEvent {
  form?: Form | null
}

export interface FormEvent extends ChannelEvent {
  form?: Form | null
}

export interface TransferEvent extends ChannelEvent {
  to_attempt_id: number
  distribute: Distribute
}

export interface MissedEvent extends ChannelEvent {
  missed: Missed
}

export interface WrapTimeEvent extends ChannelEvent {
  wrap_time: WrapTime
}

export interface ProcessingEvent extends ChannelEvent {
  processing: Processing
}

export interface Queue {
  id: number
  name: string
}

export class Task {
  history!: Distribute[]
  communication: MemberCommunication
  id: number
  state: JobState
  postProcessData!: object
  lastStatusChange: number
  createdAt: number
  offeringAt: number
  answeredAt: number
  bridgedAt: number
  startProcessingAt: number
  stopAt: number
  closedAt: number
  reportedAt: number
  form: Form | null
  _processing: Processing | null

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

    this.communication = distribute.communication
    this.history = [distribute]
  }

  get queue(): Queue {
    return {
      id: this.distribute.queue_id,
      name: this.distribute.queue_name,
    }
  }

  get duration() {
    return Math.round((Date.now() - this.lastStatusChange) / 1000)
  }

  get hasForm() {
    return this.distribute.has_form || false
  }

  get channel() {
    return this.distribute.channel
  }

  get allowAccept() {
    return (
      this.channel === ChannelName.Task &&
      (this.bridgedAt === 0 && this.closedAt === 0)
    )
  }

  get allowDecline() {
    return this.allowAccept
  }

  get allowClose() {
    return (
      this.channel === ChannelName.Task &&
      this.closedAt === 0 &&
      this.bridgedAt > 0
    )
  }

  get memberId() {
    return this.distribute.member_id
  }

  get queueId() {
    return this.distribute.queue_id
  }

  get hasReporting() {
    return this.distribute.has_reporting
  }

  get allowReporting() {
    return this.hasReporting && this.bridgedAt > 0
  }

  get agentChannelId() {
    return this.distribute.agent_channel_id
  }

  // todo
  setState(state: string) {
    this.state = state as JobState
  }

  setAnswered(t: number) {
    this.answeredAt = t
    this.lastStatusChange = Date.now()
  }

  setBridged(e: BridgedEvent) {
    this.bridgedAt = e.timestamp
    this.lastStatusChange = Date.now()
    if (e.form) {
      this.form = e.form
    }
  }

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

  setWaiting(now: number) {
    this.stopAt = now
  }

  setTransferred(d: Distribute) {
    this.distribute = d
    this.history.push(d)
  }

  setMissed() {
    this.state = JobState.Missed
  }

  get processingTimeoutAt() {
    if (!this._processing || !this._processing.timeout) {
      return null
    }

    return this._processing.timeout
  }

  get processingSec() {
    if (!this._processing || !this._processing.sec) {
      return null
    }

    return this._processing.sec
  }

  get attempt() {
    return this
  }

  get displayNumber() {
    return this.communication.destination
  }

  get displayName() {
    return this.communication.display
  }

  get display() {
    return `${this.displayNumber} (${this.displayName})`
  }

  get renewalSec() {
    if (!this._processing || !this._processing.renewal_sec) {
      return null
    }

    return this._processing.renewal_sec
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
  // todo
  async decline() {
    return this.client.request(`cc_agent_task_close`, {
      agent_id: this.distribute.agent_id,
      attempt_id: this.id,
      app_id: this.distribute.app_id,
    })
  }

  async reporting(reporting: Reporting) {
    const res = await this.client.request('cc_reporting', {
      attempt_id: this.id,
      ...reporting,
    })
    this.reportedAt = Date.now()

    return res
  }

  async renew(sec?: number) {
    return this.client.request('cc_renewal', {
      attempt_id: this.id,
      renewal_sec: sec ? sec : this.processingSec,
    })
  }

  async formAction(action: string, fields: Map<string, string>) {
    if (!this.form) {
      throw new Error('not found active form')
    }

    return this.client.request('cc_form_action', {
      attempt_id: this.id,
      app_id: this.distribute.app_id,
      action,
      fields,
    })
  }
}
