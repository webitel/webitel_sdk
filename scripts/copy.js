/**
 * This file only purpose is to copy files before npm publish and strip churn/security sensitive metadata from package.json
 *
 * **NOTE:**
 * 👉 This file should not use any 3rd party dependency
 */
const { writeFileSync, copyFileSync, statSync } = require('fs')
const { resolve, basename } = require('path')
const packageJson = require('../package.json')

main()

function main() {
  const projectRoot = resolve(__dirname, '..')
  const distPath = resolve(projectRoot, 'dist')
  const distPackageJson = createDistPackageJson(packageJson)

  const cpFiles = ['README.md', 'CHANGELOG.md', 'LICENSE.md', '.npmignore'].map(
    (file) => resolve(projectRoot, file)
  )

  cp(cpFiles, distPath)

  writeFileSync(resolve(distPath, 'package.json'), distPackageJson)
}

/**
 *
 * @param {string[]|string} source
 * @param {string} target
 */
function cp(source, target) {
  const isDir = statSync(target).isDirectory()

  if (isDir) {
    if (!Array.isArray(source)) {
      throw new Error(
        'if <target> is directory you need to provide source as an array'
      )
    }

    source.forEach((file) =>
      copyFileSync(file, resolve(target, basename(file)))
    )

    return
  }

  copyFileSync(/** @type {string} */ (source), target)
}

/**
 * @param {typeof packageJson} packageConfig
 * @return {string}
 */
function createDistPackageJson(packageConfig) {
  const {
    devDependencies,
    scripts,
    engines,
    'lint-staged': lintStaged,
    ...distPackageJson
  } = packageConfig

  // The `development` export condition points at ./src for live consumption
  // by linked dev consumers (e.g. Vite). src is not shipped, so drop it from
  // the published manifest.
  if (distPackageJson.exports) {
    distPackageJson.exports = /** @type {any} */ (
      stripDevelopmentCondition(distPackageJson.exports)
    )
  }

  // Entry points reference ./dist/* so the repo root resolves when linked
  // locally. In the published package dist/ IS the root, so strip the prefix.
  return JSON.stringify(distPackageJson, null, 2).replace(/\.\/dist\//g, './')
}

/**
 * @param {Record<string, any>} exportsMap
 * @return {Record<string, any>}
 */
function stripDevelopmentCondition(exportsMap) {
  /** @type {Record<string, any>} */
  const out = {}
  for (const [key, value] of Object.entries(exportsMap)) {
    if (value && typeof value === 'object') {
      const { development, ...rest } = value
      out[key] = rest
    } else {
      out[key] = value
    }
  }

  return out
}
