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
  let string = randomString(min, max, letters.join(''));

  normals?.forEach((num, index) => {
    const regexp = new RegExp(`[${letters[index]}]{${+num + 1},}`, 'igu');
    string.match(regexp)?.forEach((n) => {
      string = string.replace(n, n.substring(0, +num));
    });
  });

  finals?.forEach((num, index) => {
    const regexp = `[${letters[index]}]{${+num + 1},}$`;
    const regexpMatch = new RegExp(regexp, 'iu');
    const regexpReplace = new RegExp(`(.*?)${regexp}`, 'iu');
    string.match(regexpMatch)?.forEach((n) => {
      string = string.replace(regexpReplace, `$1${n.substring(0, +num)}`);
    });
  });

  if (!string.match(new RegExp(`[${letters[0]}]+`, 'iu'))) {
    string = `${string}${randomString(1, 1, letters[0])}`;
  }
  if (!string.match(new RegExp(`[${letters[1]}]+`, 'iu'))) {
    string = `${string}${randomString(1, 1, letters[1])}`;
  }

  string = `${string.substring(0, 1).toUpperCase()}${string.substring(1)}`;
  const ending = endings && endings.length ? randomArrayValue(endings) : '';

  return `${string}${ending}`;
}
