// import { IncomingRTCSessionEvent, OutgoingRTCSessionEvent } from 'jssip/lib/UA'
import { CallSession } from '../index'
import { RTCSession, RTCSessionRequest } from './types'

export class Session implements CallSession {
  callId?: string
  incoming: boolean
  instanceId: string

  private session: RTCSession

  constructor(session: RTCSession, request: RTCSessionRequest) {
    this.session = session
    this.callId = request.getHeader('X-Webitel-Uuid')
    this.incoming = session.direction === 'incoming'
    this.instanceId = request.getHeader('X-Webitel-Sock-Id')
  }

  get id(): string {
    return this.session.id
  }

  getLocalMedia(): MediaStream[] {
    if (this.session.connection) {
      const local = this.session.connection.getLocalStreams()

      if (local.length) {
        return local
      }
    }

    return []
  }
  getPeerMedia(): MediaStream[] {
    if (this.session.connection) {
      const peer = this.session.connection.getRemoteStreams()

      if (peer.length) {
        return peer
      }
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
