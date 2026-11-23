/** Type guard: `value` is a string with at least one character. */
export const isNonEmptyString = (value: unknown): value is string =>
  typeof value === 'string' && value.length > 0
