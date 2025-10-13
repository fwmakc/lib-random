import { random } from '../helpers/random.helper';

describe('random', () => {
  const testCases = [
    {
      min: 0,
      max: 1,
      step: 0.2,
    },
    {
      max: -100,
      min: 100,
      step: 10,
    },
    {
      min: 0,
      max: 10,
      step: 1,
    },
  ];

  const length = testCases.length;
  const iterations = 10;

  testCases.forEach(({ min, max, step }, index) => {
    for (let i = 1; i <= iterations; i++) {
      describe(`Генерируем число от ${min} до ${max} с шагом ${step}`, () => {
        const randomValue = random(min, max, step);

        it(`Генерация (${index + 1} из ${length}): ${randomValue}`, () => {
          expect(randomValue).toBe(randomValue);
        });
      });
    }
  });
});
