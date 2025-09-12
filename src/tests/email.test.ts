import { randomEmail } from '../helpers/email.helper';

describe('randomEmail', () => {
  const iterations = 5;

  describe('Генерация по-умолчанию', () => {
    for (let i = 1; i <= iterations; i++) {
      const random = randomEmail();

      it(`Генерация ${i} из ${iterations}: ${random}`, () => {
        expect(random).toBe(random);
      });
    }
  });

  describe('Генерация с параметрами', () => {
    for (let i = 1; i <= iterations; i++) {
      const options = {
        min: 10,
        max: 10,
        string: 'abcdefghijklmnopqrstuvwxyz0123456789',
        domain: 'domain.com',
      };
      const random = randomEmail(options);

      it(`Генерация ${i} из ${iterations}: ${random}`, () => {
        expect(random).toBe(random);
      });
    }
  });
});
