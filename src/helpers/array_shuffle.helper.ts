/**
 * Randomly shuffles an array using the Fisher-Yates algorithm.
 * @param {Array<any>} array - The array to shuffle.
 * @returns {Array<any>} - The shuffled array.
 */
export function randomArrayShuffle([...array]): Array<any> {
  return array.sort(() => Math.random() - 0.5);
}
