/**
 * Generates a random number within the specified range.
 * @param {number} min - The minimum value of the range (inclusive).
 * @param {number} max - The maximum value of the range (inclusive). Defaults to the same as min if not provided.
 * @param {number} [step=1] - The step between possible values. Defaults to 1.
 * @param {number} [offset=0.5] - The offset between values. Defaults to 0.5.
 * @returns {number} - A random number within the specified range.
 */
export function random(
  min: number,
  max: number,
  step = 1,
  offset = 0.5,
): number {
  if (min > max) {
    [min, max] = [max, min];
  }

  min = Math.ceil(min / step);
  max = Math.floor(max / step);

  let randomValue = Math.random();

  if (offset !== 0.5) {
    offset = Math.min(Math.max(offset, 0), 1);
    offset -= 0.5;
    const randomOffset = Math.random() * offset;
    randomValue += randomOffset;
  }

  const rangedValue = Math.floor(randomValue * (max - min + 1) + min);
  const steppedValue = Math.round(rangedValue) * step;
  const normalizedValue = Math.round(steppedValue * 1e10) / 1e10;

  return Math.min(Math.max(normalizedValue, min * step), max * step);
}
