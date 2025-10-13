import { NAMES_RU_CONST } from '../constants/names_ru.const';
import { random } from './random.helper';
import { randomName } from './name.helper';

/**
 * Generates a random Russian name with a specified number of words.
 * @param {number} [words=1] - The number of words in the generated name. Defaults to 1.
 * @returns {Array<string | number>} - An array containing the gender (0 for female, 1 for male) and one or more names.
 */
export function randomNamesRu(words = 1): Array<string | number> {
  const { vowels, consonants, endings } = NAMES_RU_CONST;
  const gender = random(0, 1);
  const result: Array<string | number> = [gender];

  let n = 0;
  while (words > 0) {
    const name = randomName({
      min: n === 1 ? 5 : 3,
      max: n === 1 ? 8 : 5,
      vowels,
      consonants,
      endings: endings[n]?.[gender] || [],
    });
    result.push(name);
    words -= 1;
    n += 1;
  }
  return result;
}
