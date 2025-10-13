import { NAMES_CONST } from '../constants/names.const';
import { random } from './random.helper';
import { randomName } from './name.helper';

/**
 * Generates a random name with a specified number of words.
 * @param {number} [words=1] - The number of words in the generated name. Defaults to 1.
 * @returns {Array<string | number>} - An array containing the gender (0 for female, 1 for male) and one or more names.
 */
export function randomNames(words = 1): Array<string | number> {
  const gender = random(0, 1);
  const { vowels, consonants, normals } = NAMES_CONST;
  const finals = [gender ? 2 : 0, gender ? 0 : 2];
  const result: Array<string | number> = [gender];

  while (words > 0) {
    const name = randomName({
      vowels,
      consonants,
      normals,
      finals,
      endings: undefined,
    });
    result.push(name);
    words -= 1;
  }
  return result;
}
