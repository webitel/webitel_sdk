/**
 * Функція, що форматує URI WebSocket.
 * @function
 * @param {string} host - Хост.
 * @returns {string} - URI WebSocket.
 */
export function formatWebSocketUri(host: string): string {
  return host.replace(/^http/, 'ws')
}

/**
 * Функція, що форматує базовий URI.
 * @function
 * @param {string} host - Хост.
 * @returns {string} - Базовий URI.
 */
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

/**
 * Функція, що розбиває рядок на частини заданої довжини.
 * @function
 * @param {string} str - Рядок.
 * @param {number} len - Довжина частини.
 * @returns {string[]} - Масив частин рядка.
 */
export function chunkString(str: string, len: number): string[] {
  const size = Math.ceil(str.length / len)
  const r = new Array(size)
  let offset = 0

  for (let i = 0; i < size; i++) {
    r[i] = str.substring(offset, offset + len)
    offset += len
  }

  return r
}

export function generateId() {
  return String(Date.now().toString(32) + Math.random().toString(16)).replace(
    /\./g,
    ''
  )
}
