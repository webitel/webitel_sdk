export declare class RTCSession {
  id: string
  direction: string
  connection: any
  answer(params: object): void
  on<T extends keyof any>(type: T, listener: any[T]): this
  _localMediaStream: MediaStream
}

export declare class RTCSessionRequest {
  getHeader(name: string): string
}

export declare class RTCSessionEvent {
  session: RTCSession
  request: RTCSessionRequest
}
