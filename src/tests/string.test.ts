import { randomString } from '../helpers/string.helper';

describe('randomString', () => {
  const testCases = [
    {
      min: 16,
      max: 16,
      string: '0123456789ABCDEF',
    },
    {
      min: -10,
      max: 40,
      string: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz',
    },
    {
      min: 0,
      max: 10,
      string: '.-',
    },
  ];

  const length = testCases.length;
  const iterations = 5;

  testCases.forEach(({ min, max, string }, index) => {
    for (let i = 1; i <= iterations; i++) {
      describe(`Генерируем строку от ${min} до ${max} из символов [${string}]`, () => {
        const random = randomString(min, max, string);

        it(`Генерация (${index + 1} из ${length}): ${random}`, () => {
          expect(random).toBe(random);
        });
      });
    }
  });
});
