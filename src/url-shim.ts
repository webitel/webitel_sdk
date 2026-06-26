/**
 * Browser-safe subset of Node's `url` module used by the generated OpenAPI
 * request builders. They only ever `parse()` a relative path, merge a `query`
 * object, drop `search`, then `format()` it back. Implementing that with
 * URLSearchParams keeps the Node `url` builtin out of browser bundles.
 */

export interface ParsedPath {
  pathname: string
  query: Record<string, any>
  search?: string | null
}

export function parse(path: string, _parseQueryString = false): ParsedPath {
  const queryIndex = path.indexOf('?')
  if (queryIndex === -1) {
    return { pathname: path, query: {}, search: null }
  }

  const pathname = path.slice(0, queryIndex)
  const search = path.slice(queryIndex)
  const query: Record<string, string> = {}
  new URLSearchParams(search).forEach((value, key) => {
    query[key] = value
  })

  return { pathname, query, search }
}

export function format(urlObj: ParsedPath): string {
  const params = new URLSearchParams()
  const query = urlObj.query || {}
  for (const key of Object.keys(query)) {
    const value = query[key]
    if (value === undefined || value === null) {
      continue
    }
    if (Array.isArray(value)) {
      for (const item of value) {
        if (item === undefined || item === null) continue;
         params.append(key, String(item))
      }
    } else {
      params.append(key, String(value))
    }
  }

  const queryString = params.toString()

  return queryString ? `${urlObj.pathname}?${queryString}` : urlObj.pathname
}
