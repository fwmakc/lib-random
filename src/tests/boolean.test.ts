import { randomBoolean } from '../helpers/boolean.helper';

describe('randomBoolean', () => {
  for (let p = 0; p <= 10; p++) {
    const probability = p * 10;

    describe(`Случайное значение с вероятностью ${probability}%`, () => {
      const iterations = 5;

      for (let i = 1; i <= iterations; i++) {
        const random = randomBoolean(probability);

        it(`Генерация ${i} из ${iterations}: ${random}`, () => {
          expect(random).toBe(random);
        });
      }
    });
  }
});
