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
  channel: string
  queue_id: number
  member_id: number
  agent_id?: number
  member_channel_id?: string
  agent_channel_id?: string
  communication: MemberCommunication
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
  status: string
  lastStatusChange: number
  _channel: string
  reporting: boolean
  constructor(e: ChannelEvent, protected distribute: Distribute) {
    this.id = e.attempt_id!
    this.status = e.status
    this.lastStatusChange = e.timestamp
    this.communication = distribute.communication
    this.history = [distribute]
    this._channel = distribute.channel
    this.reporting = false
  }

  // get status() {
  //   return this.status
  // }

  get channel() {
    return this._channel
  }

  // ban() {
  //
  // }
  //
  // cancel() {
  //
  // }
  //
  // reporting() {
  //
  // }
}
