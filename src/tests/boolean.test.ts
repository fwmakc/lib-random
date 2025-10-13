import { randomBoolean } from '../helpers/boolean.helper';

describe('randomBoolean', () => {
  describe(`Случайное значение`, () => {
    const iterations = 10;

    for (let i = 1; i <= iterations; i++) {
      const random = randomBoolean();

      it(`Генерация ${i} из ${iterations}: ${random}`, () => {
        expect(random).toBe(random);
      });
    }
  });
});
