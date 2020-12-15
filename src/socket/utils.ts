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

export function chunkString(str: string, len: number): string[] {
  const size = Math.ceil(str.length / len)
  const r = new Array(size)
  let offset = 0

  for (let i = 0; i < size; i++) {
    r[i] = str.substr(offset, len)
    offset += len
  }

  return r
}
