/**
 * Repoints the generated OpenAPI client off Node's `url` builtin onto the
 * browser-safe shim (src/url-shim.ts). The pinned generator emits
 * `import * as globalImportUrl from 'url'`, which throws in the browser
 * (url.parse is undefined). Run automatically after `npm run api`.
 */
const { readdirSync, readFileSync, writeFileSync } = require('fs')
const { resolve } = require('path')

const API_DIR = resolve(__dirname, '..', 'src', 'api')
const FROM = "import * as globalImportUrl from 'url'"
const TO = "import * as globalImportUrl from '../url-shim'"

let patched = 0
for (const file of readdirSync(API_DIR)) {
  if (!file.endsWith('.ts')) {
    continue
  }

  const path = resolve(API_DIR, file)
  const source = readFileSync(path, 'utf8')
  if (!source.includes(FROM)) {
    continue
  }

  writeFileSync(path, source.replace(FROM, TO), 'utf8')
  patched++
}

console.log(`Patched url import in ${patched} generated API file(s)`)
