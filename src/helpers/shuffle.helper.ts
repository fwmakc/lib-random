import { randomArrayShuffle } from './array_shuffle.helper';

/**
 * Randomly shuffles an array using the Fisher-Yates algorithm.
 * @param {number} min - The minimum value of the range (inclusive).
 * @param {number} max - The maximum value of the range (inclusive). Defaults to the same as min if not provided.
 * @param {number} [step=1] - The step between possible values. Defaults to 1.
 * @returns {Array<any>} - The shuffled array.
 */
export function shuffle(min: number, max: number, step = 1): Array<number> {
  if (min > max) {
    [min, max] = [max, min];
  }

  const array: Array<number> = [];

  for (let i = min; i <= max; i += step) {
    i = Math.round(i * 1e10) / 1e10;
    array.push(i);
  }

  return randomArrayShuffle(array);
}
