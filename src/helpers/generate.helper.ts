/**
 * Generate an array from min to max values value with a given step.
 * @param {number} min - Minimum value of range (inclusive).
 * @param {number} max - Maximum value of range (inclusive). Defaults to same as min if not provided.
 * @param {number} [step=1] - Step between possible values. Defaults to 1.
 * @returns {Array<any>} - Generated array.
 */
export function generate(min: number, max: number, step = 1): Array<number> {
  if (min === max) {
    return [min];
  }

  if (!step) {
    return [min, max];
  }

  if (min > max) {
    [min, max] = [max, min];
  }

  const array: Array<number> = [];

  if (step > 0) {
    for (let i = min; i <= max; i += step) {
      i = Math.round(i * 1e10) / 1e10;
      array.push(i);
    }
  }

  if (step < 0) {
    for (let i = max; i >= min; i += step) {
      i = Math.round(i * 1e10) / 1e10;
      array.push(i);
    }
  }

  return array;
}
