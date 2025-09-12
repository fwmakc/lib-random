/**
 * Generates a random number within the specified range.
 * @param {number} min - The minimum value of the range (inclusive).
 * @param {number} max - The maximum value of the range (inclusive). Defaults to the same as min if not provided.
 * @param {number} [step=1] - The step between possible values. Defaults to 1.
 * @returns {number} - A random number within the specified range.
 */
export function randomNumber(min: number, max: number, step = 1): number {
  if (min > max) {
    [min, max] = [max, min];
  }

  const start = Math.ceil(min / step);
  const end = Math.floor(max / step);

  const randomStep = Math.floor(Math.random() * (end - start + 1)) + start;

  let result = randomStep * step;

  result = Math.round(result * 1e10) / 1e10;

  return Math.min(Math.max(result, min), max);
}
