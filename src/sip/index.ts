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

/**
 * Identifies the call that an outbound dial (`Client.call`) created.
 *
 * Exactly one field is set. Which one depends on how the call was dialed:
 * - `callId`: no web phone registered. The id from the `call_invite`
 *   response. It equals `Call.id` of the caller's leg in the call feed.
 * - `sipId`: web phone registered. The SIP session id of the dial. Match it
 *   against the feed the way `Client.callBySipId` does:
 *   `call.sipId && sipId.startsWith(call.sipId)`.
 */
export type OutboundCallResult =
  | {
      /** Server call id from the `call_invite` response. Compare with `Call.id`. */
      callId: string
      sipId?: never
    }
  | {
      callId?: never
      /** SIP session id of the web phone dial. Compare with `Call.sipId` by prefix. */
      sipId: string
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

  const constraints: MediaTrackConstraints = {}

  if (echoCancellation !== undefined) {
    constraints.echoCancellation = echoCancellation
  }
  if (noiseSuppression !== undefined) {
    constraints.noiseSuppression = noiseSuppression
  }
  if (autoGainControl !== undefined) {
    constraints.autoGainControl = autoGainControl
  }

  if (Object.keys(constraints).length === 0) {
    return true
  }

  return constraints
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

  /**
   * Dials `req.destination`. Resolves with the id of the created call when
   * the implementation knows it, otherwise with `undefined`. Errors are
   * thrown, not returned.
   */
  abstract call(req: Outbound): Promise<OutboundCallResult | undefined>
  abstract isRegistered(): boolean

  abstract setAudioProcessing(processing: AudioProcessingConfig): void

  // TODO del me
  abstract sipSessionByCallId(id: string): CallSession | null
  abstract sipSessionBySipId(id: string): CallSession | null
}
