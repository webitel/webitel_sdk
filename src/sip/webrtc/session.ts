import { RTCSession } from 'jssip/lib/RTCSession'
import { IncomingRTCSessionEvent, OutgoingRTCSessionEvent } from 'jssip/lib/UA'
import { CallSession } from '../index'

export class Session implements CallSession {
  callId?: string
  incoming: boolean
  instanceId: string

  private session: RTCSession

  constructor(e: IncomingRTCSessionEvent | OutgoingRTCSessionEvent) {
    this.session = e.session
    this.callId = e.request.getHeader('X-Webitel-Uuid')
    this.incoming = e.session.direction === 'incoming'
    this.instanceId = e.request.getHeader('X-Webitel-Sock-Id')
  }

  get id(): string {
    return this.session.id
  }

  getLocalMedia(): MediaStream[] {
    if (this.session.connection) {
      const local = (this.session.connection as any).getLocalStreams()

      if (local.length) {
        return local
      }
    }

    return []
  }
  getPeerMedia(): MediaStream[] {
    if (this.session.connection) {
      const peer = (this.session.connection as any).getRemoteStreams()

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
