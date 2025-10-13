import { random } from '../helpers/random.helper';
import { tester } from '../helpers/tester.helper';

describe('tester', () => {
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
      offset: 0.5,
    },
    {
      min: 0,
      max: 10,
      step: 1,
      offset: 0.5,
    },
    {
      min: 1,
      max: 6,
      step: 1,
      offset: 0.5,
    },
    {
      min: 1,
      max: 6,
      step: 1,
      offset: 0,
    },
    {
      min: 1,
      max: 6,
      step: 1,
      offset: 1,
    },
  ];

  testCases.forEach(({ min, max, step, offset }) => {
    const offsetLabel =
      offset === undefined || offset === 0.5
        ? 'без смещения'
        : `со смещением ${offset}`;

    describe(`Генерируем число от ${min} до ${max} с шагом ${step} и ${offsetLabel}`, () => {
      const report = tester(random, [min, max, step, offset], 10);
      const {
        iterations,
        average,
        max: totalMax,
        min: totalMin,
        time,
      } = report;
      it(`генераций: ${iterations}, среднее значение: ${average}, мин: ${totalMin}, макс: ${totalMax}, время: ${time}`, () => {
        expect(true).toBeTruthy();
      });
    });
  });
});
