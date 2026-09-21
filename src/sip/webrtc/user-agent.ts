const version = '0.0.1'
export const DEFAULT_USER_AGENT = `webitel-web-phone-sdk/${version}`

export const resolveUserAgent = (ua?: string): string => ua?.trim() ?? DEFAULT_USER_AGENT
