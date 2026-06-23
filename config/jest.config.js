/**
 * @type {import('jest').Config}
 */
const config = {
  preset: 'ts-jest',
  rootDir: '..',
  verbose: true,
  transform: {
    // ignoreCodes 2345: @types/jest 30 types jest.fn(() => value) mocks more
    // strictly than the specs were written against; the runtime behaviour is
    // unchanged, so we skip just that assignability diagnostic.
    '^.+\\.tsx?$': ['ts-jest', { diagnostics: { ignoreCodes: [2345] } }],
  },
  testMatch: [
    '<rootDir>/src/**/__tests__/**/*.ts?(x)',
    '<rootDir>/src/**/?(*.)+(spec|test).ts?(x)',
  ],
  testPathIgnorePatterns: ['dist'],
  collectCoverage: true,
  // coverageThreshold: {
  //   global: {
  //     branches: 80,
  //     functions: 80,
  //     lines: 80,
  //     statements: 80,
  //   },
  // },
  collectCoverageFrom: [
    'src/**/*.ts',
    '!src/**/index.ts',
    '!src/api/**',
    '!src/api.ts',
    '!src/base.ts',
    '!src/configuration.ts',
  ],
  setupFiles: ['<rootDir>/config/setup-tests.js'],
  watchPlugins: [
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname',
  ],
}

module.exports = config
