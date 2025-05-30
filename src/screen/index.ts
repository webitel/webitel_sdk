export * from './sender'
export * from './receiver'

export type ScreenResolver = (
  c: DisplayMediaStreamOptions
) => Promise<MediaStream>
