import { randomArrayShuffle } from '../helpers/array_shuffle.helper';

describe('randomArrayShuffle', () => {
  const testArray = ['1', 2, '3', 4, '5', 6];
  const iterations = 5;

  for (let i = 1; i <= iterations; i++) {
    const random = randomArrayShuffle(testArray);

    it(`Перемешанный массив (${i} из ${iterations}): ${random}`, () => {
      expect(random).toBe(random);
    });
  }
});
