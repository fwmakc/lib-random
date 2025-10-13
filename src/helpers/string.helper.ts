import { random } from './random.helper';

/**
 * Generates a random string of specified length.
 * @param {number} min - The minimum length of the string (inclusive).
 * @param {number} [max=0] - The maximum length of the string (inclusive). Defaults to the same as min if not provided.
 * @param {string} [string=''] - The character set from which to generate the random string. Defaults to all alphanumeric characters.
 * @returns {string} - A random string of specified length.
 */
export function randomString(min: number, max = 0, sourceString = ''): string {
  if (min < 0) {
    min = 0;
  }

  if (max < 1) {
    max = min;
  }

  if (min !== max) {
    max = random(min, max);
  }

  let result = '';

  const { length } = sourceString;

  for (let i = 0; i < max; i++) {
    result += sourceString.charAt(Math.floor(Math.random() * length));
  }

  return result;
}
