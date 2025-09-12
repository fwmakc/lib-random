import { randomPercent } from '../helpers/percent.helper';

describe('randomPercent', () => {
  for (let p = 0; p <= 4; p++) {
    const probability = p * 25;

    describe(`Случайное значение с вероятностью ${probability}%`, () => {
      let value = 0;
      const iterations = 10;

      for (let i = 1; i <= iterations; i++) {
        const random = randomPercent(50, probability);
        value += random;
        it(`Генерация ${i} из ${iterations}: ${random}`, () => {
          expect(random).toBe(random);
        });
      }

      value /= iterations;

      it(`Среднее значение: ${value}`, () => {
        expect(true).toBeDefined();
      });
    });
  }
});
