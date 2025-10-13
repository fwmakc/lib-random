import { shuffle } from '../helpers/shuffle.helper';

describe('shuffle array', () => {
  const testArray = ['1', 2, '3', 4, '5', 6];
  const iterations = 5;

  for (let i = 1; i <= iterations; i++) {
    const random = shuffle(testArray);

    it(`Перемешанный массив (${i} из ${iterations}): ${random}`, () => {
      expect(random).toBe(random);
    });
  }
});
