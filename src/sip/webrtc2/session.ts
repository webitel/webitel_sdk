import { RTC } from './rtc'
import { Keyable, RPC } from './rpc'
import { CallSession } from '../index'
import { SipPhone } from './client'

export class Session implements CallSession {
  rtc: RTC
  rpc: RPC
  callId?: string
  incoming: boolean

  id: string
  answered: boolean
  constructor(private cli: SipPhone, rpc: RPC) {
    this.rtc = new RTC()
    this.id = ''
    this.answered = false
    this.incoming = false
    this.rpc = rpc
  }

  async call(destination = '') {
    await this.rtc.initLocalMediaStream()
    await this.rtc.createOffer()
    const result = await this.rpc.request(`call_sdp`, {
      destination,
      sdp: this.rtc.localSdp,
    })

    this.id = result.sip_id as string
  }

  async answer(s: object) {
    return new Promise<Error>(async () => {
      const { callId } = s as Keyable
      if (!this.callId) {
        this.callId = callId
      }
      const result = await this.rpc.request(`call_sdp_remote`, {
        id: this.callId,
      })

      await this.rtc.initLocalMediaStream()
      await this.rtc.createAnswer(result.sdp)

      await this.rpc.request(`call_sdp_answer`, {
        id: this.callId,
        sdp: this.rtc.localSdp,
      })

      this.cli.emit('localStreams', this, this.getLocalMedia())
      this.cli.emit('peerStreams', this, this.getPeerMedia())
    })
  }

  async recovery(callId: string) {
    await this.rtc.initLocalMediaStream()
    await this.rtc.createOffer()

    const result = await this.rpc.request(`call_sdp_recovery`, {
      id: callId,
      sdp: this.rtc.localSdp,
    })

    this.id = result.sip_id

    return this.id
  }

  get localStream() {
    return this.rtc.localStream
  }

  get peerStream() {
    return this.rtc.peerStream
  }
  getLocalMedia(): MediaStream[] {
    if (this.localStream) {
      return [this.localStream]
    }

    return []
  }
  getPeerMedia(): MediaStream[] {
    if (this.peerStream) {
      return [this.peerStream]
    }

    return []
  }

  async destroy() {
    this.rtc.clean()
  }

  async handleAnswerFromOffer(answer: RTCSessionDescriptionInit) {
    if (this.answered) {
      throw new Error('Answered')
    }
    this.answered = true
    await this.rtc.handleAnswerFromOffer(answer)
  }
}
