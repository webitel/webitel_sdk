const version = '0.0.1'
export const DEFAULT_USER_AGENT = `webitel-web-phone-sdk/${version}`

export const resolveUserAgent = (ua?: string): string => {
  if (ua?.trim()) return ua

  return navigator?.userAgent.trim() || DEFAULT_USER_AGENT
}
