export function formatWebSocketUri(host: string): string {
  return host.replace(/^http/, 'ws')
}

export function formatBaseUri(host: string): string {
  const res = host.replace(/^ws/, 'http')
  if (res.endsWith('/')) {
    return res.slice(0, -1)
  }

  return res
}
