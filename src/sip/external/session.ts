import { CallSession } from '../index'

import { ExternalClient } from './index'

export default class Session implements CallSession {
  callId: string
  incoming: boolean
  instanceId: string

  constructor(private client: ExternalClient, id: string) {
    this.callId = id
    this.incoming = false
    this.instanceId = 'fixme'
  }

  get id(): string {
    return this.callId
  }

  getLocalMedia(): MediaStream[] {
    return []
  }
  getPeerMedia(): MediaStream[] {
    return []
  }
  answer(s: object): Promise<Error> {
    return new Promise<Error>((resolve) => {
      this.client.answer(this.id)
      resolve()
    })
  }
}
