import { EventEmitter } from 'ee-ts'
import { Session } from './session'
import { RPC } from './rpc'
import {
  Answer,
  CallSession,
  Outbound,
  SipClient,
  SipClientEvents,
} from '../index'

const version = '0.0.1'

export class SipPhone extends EventEmitter<SipClientEvents>
  implements SipClient {
  static readonly userAgent = `Webitel-Phone/${version}`
  static readonly sipVersion = version
  readonly type = 'webrtc'
  sessions: Session[]
  registered: boolean
  ua: object

  constructor(private rpc: RPC) {
    super()
    this.sessions = []
    this.registered = false
    this.ua = {}

    this.rpc.on('sdp', async (sock, e) => {
      const sess = this.sipSessionBySipId(e.sip_id as string)
      if (!sess) {
        return
      }
      if (sock === this.rpc.instanceId) {
        if (!sess.answered) {
          await sess.handleAnswerFromOffer(e.sdp)
          this.emitSessionMedia(sess)
        }
      } else {
        this.emit('localStreams', sess, [])
        this.emit('peerStreams', sess, [])
        await this.removeSession(sess.id)
      }
    })

    this.rpc.on('call_receive', (call: any) => {
      if ((call.direction as string) === 'inbound' || call.originate) {
        const sess = new Session(this, this.rpc)
        sess.callId = call.id as string
        this.sessions.push(sess)
        call.setSip(sess)
      }
    })

    this.rpc.on('call_hangup', async (call: any) => {
      await this.removeSession((call.sipId as string) || (call.id as string))
    })
  }

  emitSessionMedia(sess: Session) {
    this.emit('localStreams', sess, sess.getLocalMedia())
    this.emit('peerStreams', sess, sess.getPeerMedia())
  }

  async callOption(req: Answer = {}) {
    return req
  }

  async answer(id: string, req: Answer) {
    return false
  }

  async call(req: Outbound) {
    const sess = new Session(this, this.rpc)
    await sess.call(req.destination)
    this.sessions.push(sess)
    this.emit('newSession', sess)
  }

  async register() {
    try {
      await this.rpc.request(`sip_register`, {})
      // tslint:disable-next-line: no-empty
    } catch (e) {}

    this.setRegister(true)
    this.emit('connected')
  }

  async unregister() {
    this.setRegister(false)
  }

  isRegistered() {
    return this.registered
  }

  sipSessionByCallId(id: string): Session | null {
    for (const v of this.sessions) {
      if (v.callId === id) {
        return v
      }
    }

    return null
  }

  sipSessionBySipId(id: string): Session | null {
    for (const v of this.sessions) {
      if (v.id === id) {
        return v
      }
    }

    return null
  }

  private async removeSession(id: string) {
    for (let i = 0; i < this.sessions.length; i++) {
      if (this.sessions[i].id === id || this.sessions[i].callId === id) {
        await this.sessions[i].destroy()
        this.sessions.splice(i, 1)
        // break
      }
    }
  }

  private setRegister(val: boolean) {
    this.registered = val
    if (this.registered) {
      this.emit('registered')
    } else {
      this.emit('unregistered')
    }
  }
}
