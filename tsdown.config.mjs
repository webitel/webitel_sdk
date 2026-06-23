import { defineConfig } from 'tsdown'

export default defineConfig({
  // Main barrel plus per-file enums entries: enums are intentionally not
  // re-exported from index.ts, so consumers deep-import them
  // (e.g. webitel-sdk/enums/messenger-type.enum). Each entry preserves its
  // path under dist/, matching the "./enums/*" exports subpath.
  entry: ['src/index.ts', 'src/enums/**/*.ts'],
  outDir: 'dist',
  format: ['esm', 'cjs'],
  target: 'es2018',
  // .d.ts are emitted by tsc (see build script): the generated OpenAPI code
  // re-exports types through barrels without `type` modifiers, which the
  // bundled-dts generator rejects. tsc preserves the import graph as-is.
  dts: false,
  sourcemap: true,
  clean: true,
  treeshake: true,
  // query-string (and its deps) are pure ESM — bundle them so the CJS
  // output stays require()-able. Everything else stays external.
  deps: {
    alwaysBundle: ['query-string'],
  },
  // process is undefined in browser bundles; ship production behaviour.
  define: {
    'process.env.NODE_ENV': JSON.stringify('production'),
  },
})
