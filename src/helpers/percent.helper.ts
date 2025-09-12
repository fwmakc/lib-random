/**
 * Generates a random percentage value.
 * @param {number} [limit=50] - The maximum limit of the percentage. Defaults to 50.
 * @param {number} [probability=50] - The probability (0-100%) that the result should be above the limit. Defaults to 50%.
 * @returns {number} - A random percentage value.
 */
export function randomPercent(limit = 50, probability = 50) {
  if (limit < 0) {
    limit = 0;
  }

  if (limit > 100) {
    limit = 100;
  }

  if (probability < 0) {
    probability = 0;
  }

  if (probability > 100) {
    probability = 100;
  }

  if (Math.random() * 100 < probability) {
    const value = limit + Math.random() * (100 - limit); // генерирует значение от limit до 100
    return Math.floor(value);
  }

  const randomValue = Math.random() * limit;
  return Math.floor(randomValue);
}
