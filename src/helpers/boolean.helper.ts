/**
 * Generates a random boolean value based on the given probability of being true.
 * @param {number} [probabilityOfTrue=50] - The probability (0-100%) that the result should be true. Defaults to 50%.
 * @returns {boolean} - A random boolean value.
 */
export function randomBoolean(probabilityOfTrue = 50): boolean {
  if (probabilityOfTrue < 0) {
    probabilityOfTrue = 0;
  }

  if (probabilityOfTrue > 100) {
    probabilityOfTrue = 100;
  }

  return Math.random() < probabilityOfTrue / 100;
}
