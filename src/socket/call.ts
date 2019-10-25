import { Client } from './client'

export type CallEventHandler = (call: Call) => void

export enum CallState {
  Ringing = 'ringing',
  Active = 'active',
  Hold = 'hold',
  Hangup = 'hangup',
}

export enum CallDirection {
  Inbound = 'inbound',
  Outbound = 'outbound',
  Internal = 'internal',
}

export interface CallData {
  id: string
  destination: string
  direction: 'outbound' | 'inbound' | 'internal'
  domain_id: number
  event: string
  from_name: string
  from_number: string
  node_name: string
  parent_id?: string
  state: number
  state_name: string
  to_name: string
  to_number: string
  user_id: number
  hangup_cause?: string
}

export class Call {
  private answeredAt = 0
  private _muted = false
  constructor(protected client: Client, protected data: CallData) {}

  get id(): string {
    return this.data.id
  }

  get direction(): string {
    return this.data.direction
  }

  get destination(): string {
    return this.data.destination
  }

  get userId(): number {
    return this.data.user_id
  }

  get toNumber(): string {
    return this.data.to_number
  }

  get toName(): string {
    return this.data.to_name
  }

  get fromNumber(): string {
    return this.data.from_number
  }

  get fromName(): string {
    return this.data.from_name
  }

  get state(): string {
    return this.data.event
  }

  get parentCallId(): string | null {
    if (this.data.parent_id) {
      return this.data.parent_id
    }

    return null
  }

  get hangupCause(): string | undefined {
    return this.data.hangup_cause
  }

  get nodeId(): string {
    return this.data.node_name
  }

  setState(event: CallData): void {
    this.data = event
    switch (this.state) {
      case 'active':
        if (this.answeredAt === 0) {
          this.answeredAt = Date.now()
        }
        break
      default:
      // throw "FIXME";
    }
  }

  toString(): string {
    if (this.parentCallId) {
      return `[${this.data.node_name}:${this.id}<${this.parentCallId}>] ${
        this.state
      } ${this.fromNumber} (${this.fromName}) ${this.direction} to: ${
        this.toNumber
      } ${this.toName}`
    } else {
      return `[${this.data.node_name}:${this.id}${''}] ${this.state} ${
        this.fromNumber
      } (${this.fromName}) ${this.direction} to: ${this.toNumber} ${
        this.toName
      }`
    }
  }

  get muted(): boolean {
    return this._muted
  }

  /* Call control */
  answer(): boolean {
    let sessionId = null
    if (this.client.phone.hasSession(this.id)) {
      sessionId = this.id
    } else if (this.client.phone.hasSession(this.parentCallId)) {
      sessionId = this.parentCallId
    }

    if (sessionId) {
      return this.client.phone.answer(sessionId)
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
      node_id: this.data.node_name,
      cause: _cause,
    })
  }

  async toggleHold() {
    if (this.state === CallState.Hold) {
      return this.unHold()
    } else {
      return this.hold()
    }
  }

  async hold() {
    if (this.state === CallState.Hold) {
      throw new Error('Call is hold')
    }

    return this.client.request('call_hold', {
      id: this.id,
      node_id: this.data.node_name,
    })
  }

  async unHold() {
    if (this.state !== CallState.Hold) {
      throw new Error('Call is active')
    }

    return this.client.request('call_unhold', {
      id: this.id,
      node_id: this.data.node_name,
    })
  }

  async sendDTMF(dtmf: string) {
    return this.client.request('call_dtmf', {
      id: this.id,
      node_id: this.data.node_name,
      dtmf,
    })
  }

  async blindTransfer(destination: string) {
    if (!this.parentCallId) {
      throw new Error('Not allow one leg')
    }

    return this.client.request('call_blind_transfer', {
      id: this.parentCallId,
      node_id: this.data.node_name,
      destination,
    })
  }

  async mute(mute = false) {
    const res = await this.client.request('call_mute', {
      id: this.id,
      node_id: this.data.node_name,
      mute,
    })
    this._muted = mute

    return res
  }

  async bridgeTo(call: Call) {
    return this.client.request('call_bridge', {
      id: this.id,
      node_id: this.data.node_name,
      to: {
        id: call.id,
        node_id: call.nodeId,
      },
    })
  }
}
