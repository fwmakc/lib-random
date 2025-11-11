import { generate } from '../helpers/generate.helper';

describe('generate', () => {
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
    {
      min: -10,
      max: 10,
      step: -1,
    },
    {
      min: 5,
      max: 5,
      step: 1,
    },
    {
      min: 1,
      max: 5,
      step: 0,
    },
  ];

  const length = testCases.length;

  testCases.forEach(({ min, max, step }, index) => {
    describe(`Генерируем число от ${min} до ${max} с шагом ${step}`, () => {
      const randomValue = generate(min, max, step);

      it(`Генерация (${index + 1} из ${length}): ${randomValue}`, () => {
        expect(randomValue).toBe(randomValue);
      });
    });
  });
});
