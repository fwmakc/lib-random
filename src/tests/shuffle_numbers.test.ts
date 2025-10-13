import { generate } from '../helpers/generate.helper';
import { shuffle } from '../helpers/shuffle.helper';

describe('shuffle', () => {
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
  const iterations = 5;

  testCases.forEach(({ min, max, step }) => {
    for (let i = 1; i <= iterations; i++) {
      describe(`Генерируем числа от ${min} до ${max} с шагом ${step}`, () => {
        const numbers = generate(min, max, step);
        const random = shuffle(numbers);

        it(`Перемешанный массив (${i} из ${iterations}): ${JSON.stringify(
          random,
        )}`, () => {
          expect(true).toBeTruthy();
        });
      });
    }
  });
});
