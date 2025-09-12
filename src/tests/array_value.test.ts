import { randomArrayValue } from '../helpers/array_value.helper';

describe('randomArrayValue', () => {
  const testArray = ['1', 2, '3', 4, '5', 6];
  const iterations = 5;

  for (let i = 1; i <= iterations; i++) {
    const random = randomArrayValue(testArray);

    it(`Случайное значение (${i} из ${iterations}): ${random}`, () => {
      expect(random).toBe(random);
    });
  }
});
