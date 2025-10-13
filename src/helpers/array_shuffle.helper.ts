/**
 * Randomly shuffles an array using the Fisher-Yates algorithm.
 * @param {Array<any>} array - The array to shuffle.
 * @returns {Array<any>} - The shuffled array.
 */
export function randomArrayShuffle([...array]): Array<any> {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
