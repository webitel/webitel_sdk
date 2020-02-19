import { Client, UserCallRequest } from './client'

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
  node_name: string
  action: string
}

export interface CallEventExecute extends CallEventData {
  application: string
}

export interface CallEventDTMF extends CallEventData {
  digit: string
}

export interface CallInfo extends CallEventData {
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
}

export class Call {
  id: string
  nodeName: string
  state!: string

  direction!: string
  destination!: string

  fromNumber!: string
  fromName!: string

  toNumber!: string
  toName!: string
  payload!: Map<string, string>

  videoRequest!: boolean
  screenRequest!: boolean
  videoFlow!: string | null
  peerStreams!: MediaStream[] | null
  screen!: string | null

  createdAt: number
  answeredAt: number
  hangupAt: number

  hangupCause!: string

  parentCallId!: string
  ownerCallId!: string

  _muted!: boolean
  _gatewayId!: string | null

  digits!: string[]
  applications!: string[]
  voice: boolean

  constructor(
    protected client: Client,
    e: CallInfo,
    peerStreams: MediaStream[] | null
  ) {
    this.voice = true
    this.createdAt = Date.now()

    this.answeredAt = 0
    this.hangupAt = 0
    this.peerStreams = peerStreams

    this.id = e.id
    this.digits = []
    this.applications = []
    this.nodeName = e.node_name
    this.setState(e)
    this.setInfo(e)
  }

  setActive(e: CallEventData) {
    if (!this.answeredAt) {
      this.answeredAt = Date.now()
    }
    this.setState(e)
  }

  get display() {
    return `${this.displayNumber} (${this.displayName})`
  }

  get muted() {
    return this._muted
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
    this.videoRequest = s.video_request === 'true' //

    this.setState(s)
  }

  get gatewayId() {
    return this._gatewayId
  }

  setState(s: CallEventData) {
    this.state = s.action
  }

  get active(): boolean {
    return this.hangupAt === 0
  }

  setPeerStreams(streams: MediaStream[] | null) {
    this.peerStreams = streams
  }

  setHangup(s: CallHangup) {
    this.hangupAt = Date.now()
    this.hangupCause = s.cause
    this.voice = false
    this.peerStreams = null
    this.setState(s)
  }

  setVoice(s: CallEventData) {
    this.voice = true
  }

  setSilence(s: CallEventData) {
    this.voice = false
  }

  setExecute(s: CallEventExecute) {
    this.applications.push(s.application)
  }

  addDigit(s: CallEventDTMF) {
    this.digits.push(s.digit)
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
      node_id: this.nodeName,
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
      node_id: this.nodeName,
    })
  }

  async unHold() {
    if (this.state !== CallActions.Hold) {
      throw new Error('Call is active')
    }

    return this.client.request('call_unhold', {
      id: this.id,
      node_id: this.nodeName,
    })
  }

  async sendDTMF(dtmf: string) {
    return this.client.request('call_dtmf', {
      id: this.id,
      node_id: this.nodeName,
      dtmf,
    })
  }

  async blindTransfer(destination: string) {
    if (!this.parentCallId) {
      throw new Error('Not allow one leg')
    }

    return this.client.request('call_blind_transfer', {
      id: this.parentCallId,
      node_id: this.nodeName,
      destination,
    })
  }

  async mute(mute = false) {
    const res = await this.client.request('call_mute', {
      id: this.id,
      node_id: this.nodeName,
      mute,
    })
    this._muted = mute

    return res
  }

  async bridgeTo(call: Call) {
    return this.client.request('call_bridge', {
      id: this.id,
      node_id: this.nodeName,
      parent_id: call.id,
      parent_node_id: call.nodeName,
    })
  }

  async callToUser(req: UserCallRequest) {
    req.nodeId = this.nodeName
    req.parentCallId = this.id || null
    req.sendToCallId = this.parentCallId || null

    return this.client.inviteToUser(req)
  }
}
