import {genId, setVP9Video} from "./utils";
import {EventEmitter} from "ee-ts";

export interface SenderEvents {
  close(s: SenderSession): void
  stream(s: RTCSessionDescription): void
}

interface FromUser {
  id: number,
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
  constructor(peerSdp: string, from: FromUser, conf: RTCConfiguration) {
    super()
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

  async start(constraints: DisplayMediaStreamOptions) {
    const pc = this.pc
    try {
      await pc.setRemoteDescription({
        type: "offer",
        sdp: this.peerSdp,
      })

      const stream = await navigator.mediaDevices.getDisplayMedia(constraints)
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
      this.closeReason = "mute stream"
      console.error('onmute')
      this.close()
    }
    t.onended = () => {
      this.closeReason = "ended stream"
      console.error('onended')
      this.close()
    }
  }

  iceConnectionState(e: Event) {
    // tslint:disable-next-line: no-console
    console.error('sender iceConnectionState ', this.pc.iceConnectionState)
    const pc = this.pc

    switch (pc.iceConnectionState) {
      case "disconnected":
      case "failed":
        this.close()
        break

      default:
        console.error('no handle state ', pc.iceConnectionState)
    }

  }


  async iceCandidate(e: RTCPeerConnectionIceEvent) {
    const pc = this.pc
    // tslint:disable-next-line: no-console
    console.error('iceCandidate', pc.iceGatheringState)

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
