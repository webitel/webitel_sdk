export function formatWebSocketUri(host: string): string {
  return host.replace(/^http/, 'ws')
}

export function formatBaseUri(host: string): string {
  let res = host.replace(/^ws/, 'http')

  if (res.endsWith('/')) {
    res = res.slice(0, -1)
  }

  if (res.endsWith('/ws')) {
    res = res.slice(0, -3)
  }

  return res
}
