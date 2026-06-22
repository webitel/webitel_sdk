import { EventEmitter } from 'ee-ts'

export interface SipConfiguration {
  server: string
  extension: string
  realm: string
  uri: string
  authorization_user: string
  display_name: string
  ha1?: string
  register_expires?: number
}

export interface Answer {
  audio?: boolean
  video?: boolean
  screen?: boolean
  disableStun?: boolean
}

export interface OutboundConfiguration {
  timeout?: number
  video?: boolean
  audio?: boolean
  screen?: boolean
  disableStun?: boolean
  autoAnswer?: boolean
  display?: string
  variables?: Map<string, string>
  contactId?: number
}

export interface Outbound {
  sdp?: string
  destination?: string
  stream?: MediaStream
  params?: OutboundConfiguration
}

export interface MediaConfig {
  videoMuted: boolean
  audioMuted: boolean
  hold: boolean
  syncRequested?: boolean
}

export interface AudioProcessingConfig {
  echoCancellation?: boolean
  noiseSuppression?: boolean
  autoGainControl?: boolean
}

export function buildAudioConstraints(
  processing: AudioProcessingConfig = {}
): boolean | MediaTrackConstraints {
  const { echoCancellation, noiseSuppression, autoGainControl } = processing

  if (
    echoCancellation === undefined &&
    noiseSuppression === undefined &&
    autoGainControl === undefined
  ) {
    return true
  }

  return {
    echoCancellation: !!echoCancellation,
    noiseSuppression: !!noiseSuppression,
    autoGainControl: !!autoGainControl,
  }
}

export interface CallSession {
  callId?: string
  incoming: boolean
  id: string
  remoteVideoMuted?: boolean
  remoteAudioMuted?: boolean
  remoteHold?: boolean

  getLocalMedia(): MediaStream[]
  getPeerMedia(): MediaStream[]
  answer(s: object): Promise<Error>
  setMediaConfig?(mediaConfig: MediaConfig): void
  // on(name: string, arg?: object): void
}

export interface SipClientEvents {
  registered(): void
  unregistered(): void
  connected(): void
  error(err: Error): void
  peerStreams(session: CallSession, e: MediaStream[] | null): void
  localStreams(session: CallSession, e: MediaStream[] | null): void
  newSession(session: CallSession): void
  info(session: CallSession): void
}

export abstract class SipClient extends EventEmitter<SipClientEvents> {
  abstract readonly type: string

  abstract callOption(req: Answer): Promise<object | Error>
  abstract register(sipConf: SipConfiguration): Promise<Error | undefined>
  abstract unregister(): Promise<undefined | Error>

  abstract call(req: Outbound): Promise<undefined | Error>
  abstract isRegistered(): boolean

  abstract setAudioProcessing(processing: AudioProcessingConfig): void

  // TODO del me
  abstract sipSessionByCallId(id: string): CallSession | null
  abstract sipSessionBySipId(id: string): CallSession | null
}
