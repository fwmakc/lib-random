import { randomDatetime } from '../helpers/datetime.helper';

describe('random datetime', () => {
  const testCases = [
    {
      min: '2000-01-01',
      max: '2020-12-31',
      format: 'YYYY-MM-DD',
    },
    {
      min: '1980-01-01 09:00:00',
      max: '1980-01-01 21:59:59',
      format: 'YYYY-MM-DD HH:mm:ss',
    },
  ];

  const length = testCases.length;
  const iterations = 5;

  testCases.forEach(({ min, max, format }, index) => {
    for (let i = 1; i <= iterations; i++) {
      describe(`Генерируем дату от ${min} до ${max}`, () => {
        const random = randomDatetime(min, max, format);

        it(`Генерация (${index + 1} из ${length}): ${random}`, () => {
          expect(random).toBe(random);
        });
      });
    }
  });
});
