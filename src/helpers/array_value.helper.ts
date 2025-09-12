import { randomNumber } from './number.helper';

/**
 * Returns a random value from an array.
 * @param {Array<any>} args - The array or object containing the values.
 * @returns {any} - A random value from the array or undefined if the array is empty.
 */
export function randomArrayValue(args: Array<any>): any {
  if (!args || !args.length) {
    return;
  }

  const options = typeof args[0] === 'object' ? args[0] : args;

  const index = randomNumber(1, options.length) - 1;

  return options[index];
}
