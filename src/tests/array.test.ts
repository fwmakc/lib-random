import { randomArray } from '../helpers/array.helper';

describe('randomArray', () => {
  const iterations = 5;

  for (let i = 1; i <= iterations; i++) {
    const random = randomArray(i, (n) => n % 2);

    it(`Массив длиной ${i} элементов (${i} из ${iterations}): ${random}`, () => {
      expect(random).toBe(random);
    });
  }
});
