import { shuffle } from '../helpers/shuffle.helper';

describe('string shuffle', () => {
  const testCases = [
    '0123456789ABCDEF',
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz',
    '.-',
  ];
  const iterations = 5;

  testCases.forEach((string) => {
    for (let i = 1; i <= iterations; i++) {
      describe(`Генерируем строку ${string}`, () => {
        const random = shuffle(string);

        it(`Перемешанный массив (${i} из ${iterations}): ${JSON.stringify(
          random,
        )}`, () => {
          expect(true).toBeTruthy();
        });
      });
    }
  });
});
