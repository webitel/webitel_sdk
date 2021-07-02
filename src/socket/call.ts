import { CallSession } from '../sip'
import { Client, UserCallRequest } from './client'
import { QueueParameters } from './queue'
import { Distribute, MemberCommunication, Reporting, Task } from './task'

export interface CallParameters {
  timeout?: number
  video?: boolean
  audio?: boolean
  screen?: boolean
  disableStun?: boolean
  autoAnswer?: boolean
  variables?: Map<string, string>
}

export enum CallReportingStatus {
  Abandoned = 'abandoned',
  Cancel = 'cancel',
  Success = 'success',
}

export interface Categories {
  [key: string]: string
}

export interface CallVariables {
  [key: string]: string
}

export interface CallItem {
  id: string
  app_id: string
  state: string
  timestamp: number
  type: string
  parent_id?: string
  extension?: string
  direction: string
  destination: string
  from: CallEndpoint
  to?: CallEndpoint
  variables: CallVariables

  created_at: number
  answered_at?: number
  bridged_at?: number
  hangup_at?: number

  duration: number
  hold_sec: number
  wait_sec?: number
  bill_sec?: number

  queue?: object

  joined_at?: number
  leaving_at?: number
  reporting_at?: number
  queue_bridged_at?: number
  queue_wait_sec?: number
  queue_duration_sec?: number
  reporting_sec?: number
  display?: number
  task?: Distribute
}

export interface OutboundCallRequest {
  sdp?: string
  destination?: string
  stream?: MediaStream
  params?: CallParameters
}

export interface EavesdropRequest {
  id: string

  control?: boolean
  listenA?: boolean
  listenB?: boolean
  whisperA?: boolean
  whisperB?: boolean
  group?: string
}

export enum CallActions {
  Ringing = 'ringing',
  Active = 'active',
  Bridge = 'bridge',
  Hold = 'hold',
  DTMF = 'dtmf',
  Voice = 'voice',
  Silence = 'silence',
  Execute = 'execute',
  Update = 'update',
  Hangup = 'hangup',
  Reporting = 'reporting',
  PeerStream = 'peerStream',
  LocalStream = 'localStream',
  Destroy = 'destroy',
}

export enum CallDirection {
  Inbound = 'inbound',
  Outbound = 'outbound',
}

export interface AnswerRequest {
  audio?: boolean
  video?: boolean
  screen?: boolean
  disableStun?: boolean
}

export interface CallEventData {
  id: string
  app_id: string
  cc_app_id: string
  timestamp: number
  event: string
  data?: object
}

export interface CallEventExecute extends CallEventData {
  application: string
}

export interface CallEventDTMF extends CallEventData {
  digit: string
}

export interface CallEndpoint {
  type: string
  number?: string
  id?: string
  name?: string
}

export interface CallBridged extends CallEventData {
  bridged_id: string
  to?: CallEndpoint
  queue?: QueueParameters
  payload?: Map<string, string>
}

export interface CallInfo extends CallEventData {
  sip_id: string

  parent_id?: string
  user_id?: string
  direction: string
  destination: string
  queue?: QueueParameters

  from: CallEndpoint
  to?: CallEndpoint

  payload: Map<string, string>

  params?: CallParams
}

export interface CallHangup extends CallEventData {
  cause: string
  sip: number
  reporting_at: number
}

export interface CallParams {
  audio?: boolean
  video?: boolean
  screen?: boolean
  autoAnswer?: boolean
  disableStun?: boolean
}

export interface MemberInfoRequest {
  fields?: string[]
}

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

  parentId?: string
  bridgedId!: string
  queue!: QueueParameters | null

  _muted!: boolean

  digits!: string[]
  applications!: string[]
  voice: boolean
  task: Task | null

  constructor(protected client: Client, e: CallEventData) {
    // FIXME check _muted from channel
    const callInfo = e.data as CallInfo
    this._muted = false
    this.voice = true
    this.createdAt = +e.timestamp
    this.task = null
    this.data = null

    this.answeredAt = 0
    this.hangupAt = 0
    this.bridgedAt = 0
    this.reportingAt = 0

    this.peerStreams = []
    this.localStreams = []

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
  // set private
  setState(s: CallEventData) {
    this.state = s.event
  }

  setSip(sip: CallSession | null) {
    if (sip && !this.sip) {
      this.sip = sip
      this.localStreams = sip.getLocalMedia()
      this.peerStreams = sip.getPeerMedia()
    }
  }

  get duration() {
    if (this.hangupAt === 0) {
      return Math.round((Date.now() - this.createdAt) / 1000) // tslint:disable-line
    } else {
      return Math.round((this.hangupAt - this.createdAt) / 1000) // tslint:disable-line
    }
  }

  get allowDtmf(): boolean {
    return this.answeredAt > 0 && this.allowHangup
  }

  get allowHangup() {
    return this.hangupAt === 0
  }

  get allowHold() {
    return (
      this.hangupAt === 0 &&
      (this.state === 'active' || this.state === 'bridge')
    )
  }

  get allowAnswer() {
    return (
      this.client.phone &&
      this.hangupAt === 0 &&
      this.answeredAt === 0 &&
      (this.queue ||
        this.direction === CallDirection.Inbound ||
        (this.params && !this.params.autoAnswer))
    )
  }

  get allowUnHold() {
    return this.hangupAt === 0 && this.state === 'hold'
  }

  get memberCommunication(): MemberCommunication | null {
    if (!this.task) {
      return null
    } else {
      return this.task.communication
    }
  }

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

  get isMember(): boolean {
    return !!(this.task && this.task.memberId)
  }

  setActive(e: CallEventData) {
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
  }

  setHold(e: CallEventData) {
    this.setState(e)
  }

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
  }

  setPeerStreams(streams: MediaStream[] | null) {
    if (!streams) {
      this.peerStreams = []
    } else {
      this.peerStreams = streams
    }
  }

  setLocalStreams(streams: MediaStream[] | null) {
    if (!streams) {
      this.localStreams = []
    } else {
      this.localStreams = streams
    }
  }

  setVoice() {
    this.voice = true
  }

  setSilence() {
    this.voice = false
  }

  setExecute(s: CallEventExecute) {
    this.applications.push(s.application)
  }

  addDigit(s: CallEventDTMF) {
    this.digits.push(s.digit)
  }

  setHangup(s: CallEventData) {
    const hangup = s.data as CallHangup
    this.hangupAt = +s.timestamp
    this.hangupCause = hangup.cause
    this.hangupSipCode = hangup.sip
    this.voice = false
    this.peerStreams = []
    if (+hangup.reporting_at) {
      this.reportingAt = +hangup.reporting_at // FIXME type number
    }
    this.setState(s)
  }

  get allowReporting() {
    return this.answeredAt > 0 && this.hasReporting
  }

  get hasReporting() {
    if (this.task) {
      return this.task.hasReporting
    }

    return false
  }

  get display() {
    return `${this.displayNumber} (${this.displayName})`
  }

  get muted() {
    return this._muted
  }

  get isHold(): boolean {
    return this.state === CallActions.Hold
  }

  get allowInboundVideo(): boolean {
    if (this.params) {
      return this.params.video || false
    }

    return false
  }

  get allowOutboundVideo(): boolean {
    if (this.params) {
      return this.params.video || false
    }

    return false
  }

  get active(): boolean {
    return this.hangupAt === 0
  }

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

  get autoAnswer() {
    return (
      (this.queue && this.queue.queue_type === 'offline') ||
      (this.params && this.params.autoAnswer === true)
    )
  }

  /* Call control */
  async answer(req: AnswerRequest) {
    if (this.sip && this.client.phone) {
      const params = await this.client.phone.callOption(req)
      await this.sip.answer(params)

      return true
    }

    return false
  }

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

  async eavesdrop(req: EavesdropRequest) {
    req.id = this.id

    return this.client.request('call_eavesdrop', req)
  }

  async toggleHold() {
    if (this.state === CallActions.Hold) {
      return this.unHold()
    } else {
      return this.hold()
    }
  }

  async hold() {
    if (this.state === CallActions.Hold) {
      throw new Error('Call is hold')
    }

    return this.client.request('call_hold', {
      id: this.id,
      app_id: this.appId,
    })
  }

  async unHold() {
    if (this.state !== CallActions.Hold) {
      throw new Error('Call is active')
    }

    return this.client.request('call_unhold', {
      id: this.id,
      app_id: this.appId,
    })
  }

  async sendDTMF(dtmf: string) {
    return this.client.request('call_dtmf', {
      id: this.id,
      app_id: this.appId,
      dtmf,
    })
  }

  async blindTransfer(destination: string) {
    return this.client.request('call_blind_transfer', {
      id: this.id,
      app_id: this.appId,
      destination,
    })
  }

  async mute(mute = false) {
    const res = await this.client.request('call_mute', {
      id: this.id,
      app_id: this.appId,
      mute,
    })
    this._muted = mute

    return res
  }

  async bridgeTo(call: Call) {
    return this.client.request('call_bridge', {
      from_id: this.id,
      from_app_id: this.appId,
      to_id: call.id,
      to_app_id: call.appId,
    })
  }

  async reporting(reporting: Reporting) {
    if (!this.task) {
      throw new Error(`this call not in queue`)
    }

    return this.task.reporting(reporting)
  }

  async renew(sec?: number) {
    if (!this.task) {
      throw new Error(`this conversation not in queue`)
    }

    return this.task.renew(sec)
  }

  async callToUser(req: UserCallRequest) {
    req.nodeId = this.appId
    req.parentCallId = this.id || null
    req.sendToCallId = this.parentId || null

    return this.client.inviteToUser(req)
  }
}
