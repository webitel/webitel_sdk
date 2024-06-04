export interface Keyable {
  [key: string]: any
}

export interface RPC {
  instanceId: string
  request(action: string, data?: object): Promise<Keyable>
  on(action: string, fn?: (sockId: string, e: Keyable) => any): void
}
