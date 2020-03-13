declare module 'jssip' {
  export class UA {
    constructor(configuration: any)
    on(name: string, handler?: any): any
    removeAllListeners(): void
    register(): void
    unregister(): void
    start(): void
    call(destination: string | undefined, options?: object): void
  }

  export class WebSocketInterface {
    constructor(wsUri: any)
  }

  export const debug: any
}
