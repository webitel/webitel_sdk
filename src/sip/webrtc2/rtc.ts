import { EventEmitter } from 'events'

const RTCState = {
  Init: 0,
  Processing: 1,
  Ready: 2,
  Error: 3,
}

const timeout = 2000

export class RTC extends EventEmitter {
  localStream: MediaStream | null = null
  peerStream: MediaStream | null = null
  timer: any = null
  state = RTCState.Init
  pc: RTCPeerConnection

  constructor() {
    super()
    const configuration = {}
    // const pcConstraints = {"optional": [{"DtlsSrtpKeyAgreement": true}]};
    this.pc = new RTCPeerConnection(configuration)
    this.pc.addEventListener('track', this.gotRemoteStream.bind(this))
    this.pc.addEventListener(
      'icegatheringstatechange',
      this.iceGatherIngStateChange.bind(this)
    )
  }

  createOffer() {
    return new Promise(async (resolve, reject) => {
      this.once('ready', () => {
        resolve(this)
      })
      this.once('failed', reject)
      try {
        await this._createOffer()
      } catch (e) {
        reject(e)
      }
    })
  }

  async handleAnswerFromOffer(answer: RTCSessionDescriptionInit) {
    await this.pc.setRemoteDescription(new RTCSessionDescription(answer))
  }

  createAnswer(offer: RTCSessionDescriptionInit) {
    return new Promise(async (resolve, reject) => {
      this.once('ready', () => {
        resolve(this)
      })
      this.once('failed', reject)
      try {
        await this._createAnswer(offer)
      } catch (e) {
        reject(e)
      }
    })
  }

  async _createAnswer(offer: RTCSessionDescriptionInit) {
    await this.pc.setRemoteDescription(new RTCSessionDescription(offer))
    const answer = await this.pc.createAnswer()
    await this.pc.setLocalDescription(answer)

    this.timer = setTimeout(() => {
      this.clean()
      this.emit('failed')
    }, timeout)
  }

  async _createOffer() {
    const offer = await this.pc.createOffer()
    await this.pc.setLocalDescription(offer)
    this.timer = setTimeout(() => {
      this.clean()
      this.emit('failed')
    }, timeout)
  }

  clean() {
    clearTimeout(this.timer)
    this.timer = null
    this.pc.removeEventListener('track', this.gotRemoteStream.bind(this))
    this.pc.removeEventListener(
      'icegatheringstatechange',
      this.iceGatherIngStateChange.bind(this)
    )
    this.pc.close()
    if (this.localStream) {
      this.localStream.getTracks().forEach((track) => track.stop())
    }
    if (this.peerStream && this.peerStream.getTracks) {
      this.peerStream.getTracks().forEach((track) => track.stop())
    }
  }

  async initLocalMediaStream() {
    if (!this.localStream) {
      this.localStream = await navigator.mediaDevices.getUserMedia({
        audio: true,
        video: false,
      })
      this.localStream.getTracks().forEach((track) => this.pc.addTrack(track))
      this.emit('localStreams', this.localStream)
    }

    return this.localStream
  }

  get remoteSdp() {
    return this.pc.remoteDescription!.sdp
  }

  get localSdp() {
    return this.pc.localDescription!.sdp
  }

  gotRemoteStream(e: RTCTrackEvent) {
    this.peerStream = e.streams[0]
    this.emit('peerStreams', this.peerStream)
  }

  iceGatherIngStateChange(e: Event) {
    if (
      this.state !== RTCState.Ready &&
      this.pc.iceGatheringState === 'complete'
    ) {
      clearTimeout(this.timer)
      this.state = RTCState.Ready
      this.emit('ready')
    }
  }
}
