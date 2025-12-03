export function genId() {
  if (crypto && crypto.randomUUID instanceof Function) {
    return crypto.randomUUID()
  }

  // @ts-ignore
  return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c: any) =>
    // @ts-ignore
    // tslint:disable-next-line: no-bitwise
    (
      c ^
      // tslint:disable-next-line: no-bitwise
      (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
    ).toString(16)
  )
}

export function setVP9Video(pc: RTCPeerConnection): void {
  pc.getTransceivers().forEach((transceiver) => {
    if (
      transceiver.direction === 'sendrecv' &&
      transceiver.receiver.track.kind === 'video'
    ) {
      const capabilities = RTCRtpSender.getCapabilities('video')
      const preferredCodecs = capabilities!.codecs.filter(
        (codec) =>
          codec.mimeType === 'video/VP9' &&
          (codec.sdpFmtpLine
            ? codec.sdpFmtpLine.includes('profile-id=0') ||
              codec.sdpFmtpLine.includes('profile-id=2')
            : true) // Filter for VP9 profiles if needed
      )

      if (preferredCodecs.length > 0) {
        // Prioritize VP9 (profile 0 then profile 2)
        preferredCodecs.sort((a, b) => {
          if (a.mimeType === 'video/VP9' && b.mimeType === 'video/VP9') {
            const aProfile = a.sdpFmtpLine
              ? a.sdpFmtpLine.includes('profile-id=0')
                ? 0
                : 2
              : -1
            const bProfile = b.sdpFmtpLine
              ? b.sdpFmtpLine.includes('profile-id=0')
                ? 0
                : 2
              : -1

            return aProfile - bProfile
          }

          return 0
        })

        transceiver.setCodecPreferences(preferredCodecs)
      }
    }
  })
}

export async function sendWebRTCFrame(
  media: MediaStream,
  name: string,
  basePath: string,
  callId: string,
  token: string
) {
  const video = document.createElement('video')
  const canvas = document.createElement('canvas')
  const context = canvas.getContext('2d')

  if (!context) {
    throw new Error('canvas context not found')
  }

  video.srcObject = media

  return new Promise((resolve, reject) => {
    video.addEventListener('loadeddata', async () => {
      const { videoWidth, videoHeight } = video
      canvas.width = videoWidth
      canvas.height = videoHeight

      try {
        await video.play()
        context.drawImage(video, 0, 0, videoWidth, videoHeight)
        const blob = await new Promise((resolveBlob: (res: any) => void) => {
          canvas.toBlob(resolveBlob, 'image/png', 1)
        })

        const formData = new FormData()
        formData.append('frame', blob as Blob, name)

        const response = await fetch(
          `${basePath}/api/storage/file/${callId}/upload?channel=call&thumbnail=true`,
          {
            method: 'POST',
            body: formData,
            headers: {
              'X-Webitel-Access': token,
            },
          }
        )

        if (response.ok) {
          resolve({
            file: (await response.json())[0],
            blob,
          })
        } else {
          throw response
        }
      } catch (error) {
        reject(error)
      }
    })
  })
}

export async function sendWebRTCFrame2(
  track: MediaStreamTrack,
  name: string,
  basePath: string,
  callId: string,
  token: string
) {
  // @ts-ignore
  const imageCapture = new ImageCapture(track)
  try {
    const imageBitmap = await imageCapture.grabFrame()

    const canvas = document.createElement('canvas')
    canvas.width = imageBitmap.width
    canvas.height = imageBitmap.height
    // @ts-ignore
    canvas.getContext('2d').drawImage(imageBitmap, 0, 0)

    const blob = await new Promise((resolve) => {
      canvas.toBlob(resolve, 'image/png', 1)
    })

    const formData = new FormData()
    formData.append('frame', blob as Blob, name)

    const response = await fetch(
      `${basePath}/api/storage/file/${callId}/upload?channel=call&thumbnail=true`,
      {
        method: 'POST',
        body: formData,
        headers: {
          'X-Webitel-Access': token,
        },
      }
    )

    if (response.ok) {
      return await response.json()
    } else {
      throw response
    }
  } catch (error) {
    throw error
  }
}
