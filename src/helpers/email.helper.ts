import { randomBoolean } from './boolean.helper';
import { randomString } from './string.helper';

interface IRandomEmail {
  min?: number;
  max?: number;

  // имя домена
  domain?: string | undefined;

  // строка из которой составляется имя
  string?: string;
}

/**
 * Generates a random email address.
 * @param {IRandomEmail} [options={}] - An object containing options for generating the email. Optional.
 * @returns {string} - A random email address.
 */
export function randomEmail(options: IRandomEmail = {}): string {
  const { min = 6, max = 10 } = options;
  let { string = undefined, domain = undefined } = options;

  if (!string) {
    string = '0123456789abcdefghijklmnopqrstuvwxyz._-';
  }

  const name = randomString(min, max, string);

  if (!domain) {
    domain = randomString(5, 8, 'abcdefghijklmnopqrstuvwxyz');
    if (randomBoolean()) {
      domain += '.' + randomString(3, 5, 'abcdefghijklmnopqrstuvwxyz');
    }
    domain += '.' + randomString(2, 4, 'abcdefghijklmnopqrstuvwxyz');
  }

  return `${name}@${domain}`;
}
