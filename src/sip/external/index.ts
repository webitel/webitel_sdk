import { EventEmitter } from 'ee-ts/lib/ee'
import {
  Answer,
  CallSession,
  Outbound,
  SipClient,
  SipClientEvents,
  SipConfiguration,
} from '../index'

import Session from './session'

export class ExternalClient extends EventEmitter<SipClientEvents>
  implements SipClient {
  readonly type = 'external'
  readonly schema = 'wtel://'
  constructor(private config: object | undefined) {
    super()
  }

  async callOption(req: Answer): Promise<object | Error> {
    return req
  }
  async register(sipConf: SipConfiguration): Promise<Error | void> {
    return
  }
  async unregister(): Promise<void | Error> {
    return
  }

  async call(req: Outbound): Promise<void | Error> {
    if (!req.destination) {
      return
    }

    this.exec(req.destination)
  }

  answer(id: string) {
    this.exec(id, 'answer')
  }

  sipSessionByCallId(id: string): CallSession | null {
    return new Session(this, id)
  }
  sipSessionBySipId(id: string): CallSession | null {
    return null
  }

  open(token: string) {
    this.exec(
      encodeURIComponent(
        JSON.stringify({
          token,
          ...this.config,
        })
      ),
      'open'
    )
  }

  private exec(args: string, action?: string) {
    // TODO escape
    let url = `${this.schema}${args}`
    if (action) {
      url += ` ${action}`
    }

    const link = document.createElement('a')
    link.download = 'File name'
    link.href = url
    link.click()

    return
  }
}
