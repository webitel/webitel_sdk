// import { IncomingRTCSessionEvent, OutgoingRTCSessionEvent } from 'jssip/lib/UA'
import { CallSession } from '../index'
import { RTCSession, RTCSessionRequest } from './types'

export class Session implements CallSession {
  callId?: string
  incoming: boolean
  instanceId: string
  peerStream: MediaStream | null
  localStream: MediaStream | null

  private session: RTCSession

  constructor(session: RTCSession, request: RTCSessionRequest) {
    this.session = session
    this.callId = request.getHeader('X-Webitel-Uuid')
    this.incoming = session.direction === 'incoming'
    this.instanceId = request.getHeader('X-Webitel-Sock-Id')
    this.peerStream = null
    this.localStream = null
  }

  get id(): string {
    return this.session.id
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
  answer(s: object): Promise<Error> {
    return new Promise<Error>(() => {
      this.session.answer(s)
    })
  }
  // on(name: string, arg?: object): void
}
