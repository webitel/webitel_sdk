import {EventEmitter} from "ee-ts";
import {genId, setVP9Video} from "./utils";

export interface ReceiveEvents {
  close(s: ReceiverSession): void
  offer(o: RTCSessionDescription): void
  stream(m: MediaStream) : void
}

export class ReceiverSession extends EventEmitter<ReceiveEvents> {
  pc: RTCPeerConnection | null
  id: string
  stream: MediaStream | null
  acceptSdp: Promise<RTCSessionDescription>;
  private resolveAcceptSdp!: (value: RTCSessionDescription) => void;
  private rejectAcceptSdp!: (reason?: any) => void;
  constructor(conf: RTCConfiguration) {
    super()
    this.id = genId()
    this.pc = new RTCPeerConnection(conf)
    // setVP9Video(this.pc)
    this.pc.addTransceiver('video', { direction: 'recvonly' });
    this.pc.oniceconnectionstatechange = (e) => this.iceConnectionState(e)
    this.pc.onicecandidate = this.iceCandidate.bind(this)
    this.pc.ontrack = this.onTrack.bind(this)
    this.acceptSdp = new Promise<RTCSessionDescription>((resolve, reject) => {
      this.resolveAcceptSdp = resolve;
      this.rejectAcceptSdp = reject;
    });

    this.stream = null
  }

  onTrack(e: RTCTrackEvent) {
    this.stream = e.streams[0];
    this.stream.getTracks().forEach(this.onTrackStop.bind(this))
    this.emit('stream', this.stream)
    console.error('onTrack ', e.streams)
  }

  onTrackStop(t: MediaStreamTrack) {
    t.onmute = () => {
      console.error('onmute')
      this.close()
    }
    t.onended = () => {
      console.error('onended')
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
    return await this.acceptSdp
  }

  async answer(answer: RTCSessionDescriptionInit) {
    const pc = this.pc!
    try {
      console.error("answer ", answer)
      await pc.setRemoteDescription(answer)
    } catch (e) {
      debugger
      throw e
    }
  }

  iceConnectionState(e: Event) {
    const pc = this.pc!

    // tslint:disable-next-line: no-console
    console.error('sender iceConnectionState ', pc.iceConnectionState)

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
    const pc = this.pc!;

    // tslint:disable-next-line: no-console
    console.error('receiver iceCandidate state:', pc.iceGatheringState, 'candidate:', e.candidate);

    if (e.candidate) {
      console.log("Generated ICE candidate:", e.candidate);
    }

    if (pc.iceGatheringState === 'complete') {
      if (pc.localDescription) {
        console.log("ICE gathering complete. Resolving acceptSdp with localDescription.");
        this.resolveAcceptSdp(pc.localDescription);
      } else {
        console.error("ICE gathering complete, but localDescription is null.");
        this.rejectAcceptSdp(new Error("Local Description is null after ICE gathering."));
      }
    }
  }
}
