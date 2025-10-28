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
