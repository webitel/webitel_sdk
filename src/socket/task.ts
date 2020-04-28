export interface ChannelEvent {
  status: string
  attempt_id?: number
  timestamp: number
}

export interface Distribute extends ChannelEvent {
  channel: string
  queue_id: number
  member_id: number
  agent_id?: number
  member_channel_id?: string
  agent_channel_id?: string
}

export interface Offering {
  member_channel_id?: string
  agent_channel_id?: string
}

export interface Missed {
  timeout: number
}

export interface WrapTime {
  timeout: number
}

export interface Reporting {
  timeout: number
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

export interface ReportingEvent extends ChannelEvent {
  reporting?: Reporting
}

export class Task {
  history!: Distribute[]
  id: number
  status: string
  laStatusChange: number
  constructor(e: ChannelEvent, protected distribute: Distribute) {
    this.id = e.attempt_id!
    this.status = e.status
    this.laStatusChange = e.timestamp
    this.history = [distribute]
  }

  // get status() {
  //   return this.status
  // }

  get channel() {
    return this.distribute.channel
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
