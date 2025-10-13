import { randomArrayValue } from './array_value.helper';
import { randomString } from './string.helper';

/**
 * Generates a random name.
 * @param {IRandomName} [options={}] - An object containing options for generating the name. Optional.
 * @returns {string} - A random name.
 */
interface IRandomName {
  min?: number;
  max?: number;

  // массив нормального количества гласных и согласных в составе слова
  normals?: Array<number>;

  // массив нормального количества гласных и согласных в окончании
  finals?: Array<number>;

  // массив окончаний
  endings?: Array<string>;

  // гласные
  vowels: any;

  // согласные
  consonants: any;
}

export function randomName(options: IRandomName): string {
  const {
    min = 5,
    max = 8,
    normals = [1, 1],
    finals = [0, 1],
    endings = undefined,
    vowels,
    consonants,
  } = options;

  const letters = [
    `${vowels}${vowels}`.toLowerCase(),
    consonants.toLowerCase(),
  ];
  let sourceString = randomString(min, max, letters.join(''));

  normals?.forEach((num, index) => {
    const regexp = new RegExp(`[${letters[index]}]{${+num + 1},}`, 'igu');
    sourceString.match(regexp)?.forEach((n) => {
      sourceString = sourceString.replace(n, n.substring(0, +num));
    });
  });

  finals?.forEach((num, index) => {
    const regexp = `[${letters[index]}]{${+num + 1},}$`;
    const regexpMatch = new RegExp(regexp, 'iu');
    const regexpReplace = new RegExp(`(.*?)${regexp}`, 'iu');
    sourceString.match(regexpMatch)?.forEach((n) => {
      sourceString = sourceString.replace(
        regexpReplace,
        `$1${n.substring(0, +num)}`,
      );
    });
  });

  if (!sourceString.match(new RegExp(`[${letters[0]}]+`, 'iu'))) {
    sourceString = `${sourceString}${randomString(1, 1, letters[0])}`;
  }
  if (!sourceString.match(new RegExp(`[${letters[1]}]+`, 'iu'))) {
    sourceString = `${sourceString}${randomString(1, 1, letters[1])}`;
  }

  sourceString = `${sourceString
    .substring(0, 1)
    .toUpperCase()}${sourceString.substring(1)}`;
  const ending = endings && endings.length ? randomArrayValue(endings) : '';

  return `${sourceString}${ending}`;
}
