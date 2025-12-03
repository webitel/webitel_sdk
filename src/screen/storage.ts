import { EventEmitter } from 'ee-ts'

export interface StorageMediaCaptureEvents {
  error(e: Error): void
  close(): void
}

export class StorageMediaCapture extends EventEmitter<
  StorageMediaCaptureEvents
> {
  id: string
  sdpResolver: string
  stream: MediaStream[] | null
  pc: RTCPeerConnection | null
  token: string
  offerOptions: RTCOfferOptions
  restartId: string
  name: string
  constructor(
    id: string,
    name: string,
    mediaStream: MediaStream[],
    iceServers: RTCIceServer[],
    sdpResolver: string,
    token: string
  ) {
    super()
    this.id = id
    this.sdpResolver = `${sdpResolver}/api/webrtc/video`
    this.token = token
    this.stream = mediaStream
    const pc = new RTCPeerConnection({
      iceServers,
    })

    this.restartId = ''
    this.name = name
    this.pc = pc
    this.offerOptions = {
      iceRestart: false,
    }
    pc.oniceconnectionstatechange = () => {
      switch (pc.iceConnectionState) {
        case 'disconnected':
          break
        case 'failed':
        case 'closed':
          this.close()
          break
        default:
      }
    }

    pc.onicecandidate = async (event) => {
      if (pc.iceGatheringState !== 'complete') {
        return
      }

      const request = {
        type: pc.localDescription!.type,
        sdp_offer: pc.localDescription!.sdp,
        uuid: this.id,
        name: this.name,
      }

      let url = this.sdpResolver
      let method = 'POST'

      if (this.offerOptions.iceRestart) {
        url += `/${this.restartId}`
        method = 'PUT'
      }

      let remoteSdp: any

      try {
        const sdp = JSON.stringify(request)
        const response = await fetch(`${url}?channel=CallChannel`, {
          method,
          headers: {
            'X-Webitel-Access': this.token,
          },
          body: sdp,
        })

        if (response.status !== 200) {
          throw new Error(await response.json())
        }

        remoteSdp = await response.json()
      } catch (e) {
        this.emit('error', e as Error)
        this.close()

        return
      }
      if (!this.restartId) {
        this.restartId = remoteSdp.id
      }

      await pc.setRemoteDescription({
        type: 'answer',
        sdp: remoteSdp.sdp_answer,
      })
    }
    // pc.addTransceiver('video', { direction: 'sendrecv' });
    // pc.addTransceiver('audio', { direction: 'sendrecv' });
  }

  async hangup() {
    let url = this.sdpResolver
    url += `/${this.restartId}`

    const response = await fetch(url, {
      method: 'DELETE',
      headers: {
        'X-Webitel-Access': this.token,
      },
    })
    this.close()
  }

  close(): void {
    if (this.stream) {
      this.stream.forEach((s) => {
        s.getTracks().forEach((t) => t.stop())
      })
      this.stream = null
    }

    if (this.pc) {
      this.pc.close()
      this.pc = null
    }
    this.emit('close')
    this.off('*')
  }

  async cast(): Promise<void> {
    const pc = this.pc
    this.stream!.forEach((s) => {
      s.getTracks().forEach((track) => {
        pc!.addTrack(track, s)
      })
    })

    const offer = await pc!.createOffer(this.offerOptions)
    await pc!.setLocalDescription(offer)
  }

  async restart(): Promise<void> {
    const pc = this.pc
    this.offerOptions.iceRestart = true
    const offer = await pc!.createOffer(this.offerOptions)
    await pc!.setLocalDescription(offer)
  }
}
