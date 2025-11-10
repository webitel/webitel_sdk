import { ReceiverSession } from '../screen'
import { Log } from '../log'
import { Client } from './client'

const ackRequestTimeout = 10000

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
    return this.cli.ackRequest(
      `screenshot`,
      {
        to_user_id: this.toUserId,
      },
      ackRequestTimeout
    )
  }

  async startRecord() {
    if (this.recordings) {
      throw new Error('recordings already exists')
    }

    const res = await this.cli.ackRequest(
      `start_record_screen`,
      {
        root_id: this.id,
        to_user_id: this.toUserId,
      },
      ackRequestTimeout
    )
    this.recordings = true

    return res
  }

  async stopRecord() {
    if (!this.recordings) {
      throw new Error('recordings not exists')
    }

    const res = await this.cli.ackRequest(
      `stop_record_screen`,
      {
        root_id: this.id,
        to_user_id: this.toUserId,
      },
      ackRequestTimeout
    )
    this.recordings = false

    return res
  }
}
