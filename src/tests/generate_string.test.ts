import { generateString } from '../helpers/generate_string.helper';

describe('generate string', () => {
  const testCases = [
    {
      min: 'A',
      max: 'Z',
      step: 1,
    },
    {
      max: 'Z',
      min: 'A',
      step: 2,
    },
    {
      min: 'A',
      max: 'Z',
      step: -1,
    },
    {
      min: 32,
      max: 126,
      step: 1,
    },
    {
      min: 'A',
      max: 'Z',
      step: 1.2,
    },
    {
      min: 'A',
      max: 'Z',
      step: 0.2,
    },
    {
      min: 'A',
      max: 'A',
      step: 1,
    },
    {
      min: 'A',
      max: 'Z',
      step: 0,
    },
    {
      min: 'А',
      max: 'я',
      step: 1,
    },
  ];

  const length = testCases.length;

  testCases.forEach(({ min, max, step }, index) => {
    describe(`Генерируем строку от ${min} до ${max} с шагом ${step}`, () => {
      const randomValue = generateString(min, max, step);

      it(`Генерация (${index + 1} из ${length}): ${randomValue}`, () => {
        expect(randomValue).toBe(randomValue);
      });
    });
  });
});
