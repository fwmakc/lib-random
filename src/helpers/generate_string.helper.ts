/**
 * Generate string from min to max char with a given step.
 * @param {string} min - Minimum char of range (inclusive).
 * @param {string} max - Maximum char of range (inclusive). Defaults to same as min if not provided.
 * @param {number} [step=1] - Step between possible chars. Defaults to 1.
 * @returns {string} - Generated string.
 */
export function generateString(
  minChar: string | number,
  maxChar: string | number,
  step = 1,
): string {
  if (minChar === maxChar) {
    return String(minChar);
  }

  let min = typeof minChar === 'number' ? minChar : minChar.charCodeAt(0);
  let max = typeof maxChar === 'number' ? maxChar : maxChar.charCodeAt(0);

  step = Math.floor(step);

  if (!step) {
    return `${minChar}${maxChar}`;
  }

  if (min > max) {
    [min, max] = [max, min];
  }

  let result = '';

  if (step > 0) {
    for (let i = min; i <= max; i += step) {
      result += String.fromCharCode(i);
    }
  }

  if (step < 0) {
    for (let i = max; i >= min; i += step) {
      result += String.fromCharCode(i);
    }
  }

  return result;
}
