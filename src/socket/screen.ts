import { ReceiverSession } from '../screen'
import { Log } from '../log'
import { Client } from './client'

export class SpyScreen extends ReceiverSession {
  toUserId: number
  recordings: boolean
  fromSockId: string
  constructor(
    private cli: Client,
    userId: number,
    conf: RTCConfiguration,
    log: Log
  ) {
    super(conf, log)
    this.recordings = false
    this.toUserId = userId
    this.fromSockId = ''
  }

  async answerSession(fromSockId: string, ans: RTCSessionDescriptionInit) {
    this.fromSockId = fromSockId

    return this.answer(ans)
  }

  async screenshot() {
    return this.cli.request(`screenshot`, {
      to_user_id: this.toUserId,
    })
  }

  async startRecord() {
    if (this.recordings) {
      throw new Error('recordings already exists')
    }

    const res = await this.cli.request(`start_record_screen`, {
      root_id: this.id,
      to_user_id: this.toUserId,
    })
    this.recordings = true
  }

  async stopRecord() {
    if (!this.recordings) {
      throw new Error('recordings not exists')
    }

    const res = await this.cli.request(`stop_record_screen`, {
      root_id: this.id,
      to_user_id: this.toUserId,
    })
    this.recordings = false
  }
}
