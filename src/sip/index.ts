import { EventEmitter } from 'ee-ts'

export interface SipConfiguration {
  server: string
  extension: string
  realm: string
  uri: string
  authorization_user: string
  display_name: string
  ha1?: string
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
  variables?: Map<string, string>
}

export interface Outbound {
  sdp?: string
  destination?: string
  stream?: MediaStream
  params?: OutboundConfiguration
}

export interface CallSession {
  callId?: string
  incoming: boolean
  id: string

  getLocalMedia(): MediaStream[]
  getPeerMedia(): MediaStream[]
  answer(s: object): Promise<Error>
  // on(name: string, arg?: object): void
}

export interface SipClientEvents {
  registered(): void
  unregistered(): void
  error(err: Error): void
  peerStreams(session: CallSession, e: MediaStream[] | null): void
  localStreams(session: CallSession, e: MediaStream[] | null): void
  newSession(session: CallSession): void
}

export abstract class SipClient extends EventEmitter<SipClientEvents> {
  abstract readonly type: string

  abstract async callOption(req: Answer): Promise<object | Error>
  abstract async register(sipConf: SipConfiguration): Promise<Error | void>
  abstract async unregister(): Promise<void | Error>

  abstract async call(req: Outbound): Promise<void | Error>

  // TODO del me
  abstract sipSessionByCallId(id: string): CallSession | null
  abstract sipSessionBySipId(id: string): CallSession | null
}
