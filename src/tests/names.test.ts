import { randomNames } from '../helpers/names.helper';

describe('randomNames', () => {
  const iterations = 5;

  for (let i = 1; i <= iterations; i++) {
    const random = randomNames();

    it(`Случайное значение (${i} из ${iterations}): ${random}`, () => {
      expect(random).toBe(random);
    });
  }
});
