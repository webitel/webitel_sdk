import { genId, setVP9Video } from './utils'
import { EventEmitter } from 'ee-ts'
import { Log } from '../log'

export interface SenderEvents {
  close(s: SenderSession): void
  stream(s: RTCSessionDescription): void
  error(s: Error): void
}

interface FromUser {
  id: number
  sockId: string
  sessionId: string
}

export class SenderSession extends EventEmitter<SenderEvents> {
  id: string
  pc: RTCPeerConnection
  stream: MediaStream | null
  peerSdp: string
  closeReason: string | null
  from: FromUser
  log: Log
  constructor(
    peerSdp: string,
    from: FromUser,
    conf: RTCConfiguration,
    log: Log
  ) {
    super()
    this.log = log
    this.id = genId()
    this.from = from
    this.pc = new RTCPeerConnection(conf)
    setVP9Video(this.pc)
    // this.pc.addTransceiver('video', { direction: 'sendonly' });
    this.pc.oniceconnectionstatechange = (e) => this.iceConnectionState(e)
    this.pc.onicecandidate = this.iceCandidate.bind(this)
    this.stream = null
    this.peerSdp = peerSdp
    this.closeReason = null
  }

  close() {
    this.pc.close()
    if (this.stream) {
      this.stream.getTracks().forEach((track) => track.stop())
      this.stream = null
    }
    this.emit('close', this)
    this.off('*')
  }

  async start(stream: MediaStream) {
    const pc = this.pc
    try {
      await pc.setRemoteDescription({
        type: 'offer',
        sdp: this.peerSdp,
      })

      this.stream = stream
      stream.getTracks().forEach((track) => {
        this.onTrackStop(track)
        pc.addTrack(track, stream)
      })

      const answer = await pc.createAnswer()
      await pc.setLocalDescription(answer)
    } catch (e) {
      throw e
    }
  }

  onTrackStop(t: MediaStreamTrack) {
    t.onmute = () => {
      // TODO
      // this.closeReason = 'mute stream'
      // this.close()
    }
    t.onended = () => {
      this.closeReason = 'ended stream'
      this.close()
    }
  }

  iceConnectionState(e: Event) {
    this.log.debug('sender iceConnectionState ', this.pc.iceConnectionState)
    const pc = this.pc

    switch (pc.iceConnectionState) {
      case 'disconnected':
      case 'failed':
        this.close()
        break

      default:
        this.log.debug(
          `unhandled ICE connection state: ${this.pc.iceConnectionState}`
        )
    }
  }

  async iceCandidate(e: RTCPeerConnectionIceEvent) {
    const pc = this.pc
    this.log.debug(`ICE candidate state: ${pc.iceGatheringState}`)

    if (pc.iceGatheringState !== 'complete') {
      return
    }
    try {
      this.emit('stream', pc.localDescription!)
      // tslint:disable-next-line: no-console
      // console.info('sender local sdp\n', pc.localDescription!.sdp)
      // tslint:disable-next-line: no-console
      // tslint:disable-next-line: no-console
      // console.info('sender remote sdp\n', this.peerSdp)
      // tslint:disable-next-line: no-console
    } catch (e) {
      this.close()
      throw e
    }
  }
}
