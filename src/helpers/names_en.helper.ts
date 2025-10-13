import { NAMES_EN_CONST } from '../constants/names_en.const';
import { random } from './random.helper';
import { randomName } from './name.helper';

/**
 * Generates a random English name with a specified number of words.
 * @param {number} [words=1] - The number of words in the generated name. Defaults to 1.
 * @returns {Array<string | number>} - An array containing the gender (0 for female, 1 for male) and one or more names.
 */
export function randomNamesEn(words = 1): Array<string | number> {
  const { vowels, consonants } = NAMES_EN_CONST;
  const woman = NAMES_EN_CONST.endings[0];
  const families = NAMES_EN_CONST.endings[1];
  const gender = random(0, 1);
  const result: Array<string | number> = [gender];

  while (words > 0) {
    const name = randomName({
      vowels,
      consonants,
      endings: words === 1 ? families : gender ? woman : undefined,
    });
    result.push(name);
    words -= 1;
  }
  return result;
}
