import { Client, UserCallRequest } from './client'

export interface OutboundCallRequest {
  parentCallId?: string
  toNumber: string
  toName?: string
  useVideo?: boolean
  useScreen?: boolean
  useAudio?: boolean
  variables?: Map<string, string>
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
  PeerStream = 'peerStream',
}

export enum CallDirection {
  Inbound = 'inbound',
  Outbound = 'outbound',
  Internal = 'internal',
}

export interface AnswerRequest {
  useVideo?: boolean
  useAudio?: boolean
  useScreen?: boolean
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

export interface CallInfo extends CallEventData {
  sip_id: string
  parent_id: string
  owner_id: string
  direction: string
  destination: string

  from_number: string
  from_name: string

  to_number: string
  to_name: string

  payload: Map<string, string>
  gateway_id: string
  video_request: string
  video_flow: string
  screen_request: string
}

export interface CallHangup extends CallEventData {
  cause: string
  sip: number
}

export class Call {
  id: string
  appId: string
  sipId!: string | null
  state!: string

  direction!: string
  destination!: string

  fromNumber!: string
  fromName!: string

  toNumber!: string
  toName!: string
  payload!: Map<string, string>
  queue!: Map<string, string>

  videoRequest!: boolean
  screenRequest!: boolean
  videoFlow!: string | null
  peerStreams!: MediaStream[] | null
  screen!: string | null

  createdAt: number
  answeredAt: number
  bridgedAt: number
  hangupAt: number

  hangupCause!: string
  hangupSipCode!: number

  parentCallId!: string
  ownerCallId!: string

  _muted!: boolean
  _gatewayId!: string | null

  digits!: string[]
  applications!: string[]
  voice: boolean

  constructor(
    protected client: Client,
    e: CallEventData,
    peerStreams: MediaStream[] | null
  ) {
    this.voice = true
    this.createdAt = +e.timestamp

    this.answeredAt = 0
    this.hangupAt = 0
    this.bridgedAt = 0
    this.peerStreams = peerStreams

    this.id = e.id
    this.digits = []
    this.applications = []
    this.appId = e.app_id
    this.setState(e)
    this.setInfo(e.data as CallInfo)
  }
  // set private
  setState(s: CallEventData) {
    this.state = s.event
  }

  setActive(e: CallEventData) {
    if (!this.answeredAt) {
      this.answeredAt = +e.timestamp
    }
    this.setState(e)
  }

  setBridged(s: CallEventData) {
    if (!this.bridgedAt) {
      this.bridgedAt = +s.timestamp
    }

    this.setInfo(s.data as CallInfo)
  }

  setHold(e: CallEventData) {
    this.setState(e)
  }

  setInfo(s: CallInfo) {
    this.ownerCallId = s.owner_id
    this.parentCallId = s.parent_id
    this.destination = s.destination
    this.direction = s.direction
    this.fromNumber = s.from_number
    this.fromName = s.from_name
    this.toName = s.to_name
    this.toNumber = s.to_number
    this.payload = s.payload

    this.sipId = s.sip_id || null

    if (s.gateway_id) {
      this._gatewayId = s.gateway_id
    } else {
      this._gatewayId = null // ?
    }

    if (s.video_flow) {
      this.videoFlow = s.video_flow
    } else {
      this.videoFlow = null
    }

    this.screenRequest = s.screen_request === 'true'
    this.videoRequest = s.video_request === 'true'
  }

  setPeerStreams(streams: MediaStream[] | null) {
    this.peerStreams = streams
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
    this.peerStreams = null
    this.setState(s)
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
    if (this.videoFlow) {
      return this.videoFlow.indexOf('send') > -1
    }

    return false
  }

  get allowOutboundVideo(): boolean {
    if (this.videoFlow) {
      return this.videoFlow.indexOf('recv') > -1
    }

    return false
  }

  get gatewayId() {
    return this._gatewayId
  }

  get active(): boolean {
    return this.hangupAt === 0
  }

  get displayNumber() {
    if (this.direction === 'inbound') {
      return this.fromNumber
    } else {
      return this.toNumber
    }
  }

  get displayName() {
    if (this.direction === 'inbound') {
      return this.fromName
    } else {
      return this.toName
    }
  }

  /* Call control */
  answer(req: AnswerRequest): boolean {
    let sessionId = null
    if (this.client.phone.hasSession(this.id)) {
      sessionId = this.id
    } else if (this.client.phone.hasSession(this.parentCallId)) {
      sessionId = this.parentCallId
    }

    if (sessionId) {
      return this.client.phone.answer(sessionId, req)
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
    if (!this.parentCallId) {
      throw new Error('Not allow one leg')
    }

    return this.client.request('call_blind_transfer', {
      id: this.parentCallId,
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
      id: this.id,
      app_id: this.appId,
      parent_id: call.id,
      parent_app_id: call.appId,
    })
  }

  async callToUser(req: UserCallRequest) {
    req.nodeId = this.appId
    req.parentCallId = this.id || null
    req.sendToCallId = this.parentCallId || null

    return this.client.inviteToUser(req)
  }
}
