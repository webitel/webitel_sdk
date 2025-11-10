import { EventEmitter } from 'ee-ts'
import { genId, setVP9Video } from './utils'
import { Log } from '../log'

export interface ReceiveEvents {
  close(s: ReceiverSession): void
  offer(o: RTCSessionDescription): void
  stream(m: MediaStream): void
}

export class ReceiverSession extends EventEmitter<ReceiveEvents> {
  pc: RTCPeerConnection | null
  id: string
  stream: MediaStream | null
  acceptSdp: Promise<RTCSessionDescription>
  log: Log
  private resolveAcceptSdp!: (value: RTCSessionDescription) => void
  private rejectAcceptSdp!: (reason?: any) => void
  constructor(conf: RTCConfiguration, log: Log) {
    super()
    this.log = log
    this.id = genId()
    this.pc = new RTCPeerConnection(conf)
    // setVP9Video(this.pc)
    this.pc.addTransceiver('video')
    this.pc.oniceconnectionstatechange = (e) => this.iceConnectionState(e)
    this.pc.onicecandidate = this.iceCandidate.bind(this)
    this.pc.ontrack = this.onTrack.bind(this)
    this.acceptSdp = new Promise<RTCSessionDescription>((resolve, reject) => {
      this.resolveAcceptSdp = resolve
      this.rejectAcceptSdp = reject
    })

    this.stream = null
  }

  onTrack(e: RTCTrackEvent) {
    this.stream = e.streams[0]
    this.stream.getTracks().forEach(this.onTrackStop.bind(this))
    this.emit('stream', this.stream)
    this.log.debug('receive media', e.streams[0].id)
  }

  onTrackStop(t: MediaStreamTrack) {
    t.onmute = () => {
      // TODO
      // this.log.debug('onmute')
      // this.close()
    }
    t.onended = () => {
      this.log.debug('onended')
      this.close()
    }
  }

  close() {
    if (this.pc) {
      this.pc.close()
      this.pc = null
    }

    if (this.stream) {
      this.stream.getTracks().forEach((track) => track.stop())
      this.stream = null
    }
    this.emit('close', this)
    this.off('*')
  }
  async offer() {
    const offer = await this.pc!.createOffer()
    await this.pc!.setLocalDescription(offer)

    return this.acceptSdp
  }

  async answer(answer: RTCSessionDescriptionInit) {
    const pc = this.pc!
    try {
      this.log.debug('answer sdp: ', answer.sdp)
      await pc.setRemoteDescription(answer)
    } catch (e) {
      throw e
    }
  }

  iceConnectionState(e: Event) {
    const pc = this.pc!

    this.log.debug('sender iceConnectionState ', pc.iceConnectionState)

    switch (pc.iceConnectionState) {
      case 'disconnected':
      case 'failed':
        this.close()
        break

      default:
        this.log.debug(
          `unhandled ICE connection state: ${pc.iceConnectionState}`
        )
    }
  }

  async iceCandidate(e: RTCPeerConnectionIceEvent) {
    const pc = this.pc!

    this.log.debug('receiver iceCandidate state:', pc.iceGatheringState)

    if (e.candidate) {
      this.log.debug('generated ICE candidate:', e.candidate)
    }

    if (pc.iceGatheringState === 'complete') {
      if (pc.localDescription) {
        this.log.debug(
          'ICE gathering complete. Resolving acceptSdp with localDescription.'
        )
        this.resolveAcceptSdp(pc.localDescription)
      } else {
        this.log.debug('ICE gathering complete, but localDescription is null.')
        this.rejectAcceptSdp(
          new Error('Local Description is null after ICE gathering.')
        )
      }
    }
  }
}
