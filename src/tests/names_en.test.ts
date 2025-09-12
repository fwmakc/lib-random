import { randomNamesEn } from '../helpers/names_en.helper';

describe('randomNamesEn', () => {
  const iterations = 5;

  describe('Генерация имени', () => {
    for (let i = 1; i <= iterations; i++) {
      const random = randomNamesEn();

      it(`Случайное значение (${i} из ${iterations}): ${random[1]}`, () => {
        expect(random).toBe(random);
      });
    }
  });

  describe('Генерация имени и фамилии', () => {
    for (let i = 1; i <= iterations; i++) {
      const random = randomNamesEn(2);
      const name = [
        random[1],
        random[2],
        random[0] ? '(male)' : '(female)',
      ].join(' ');

      it(`Случайное значение (${i} из ${iterations}): ${random} -> ${name}`, () => {
        expect(random).toBe(random);
      });
    }
  });

  describe('Генерация множества', () => {
    for (let i = 1; i <= iterations; i++) {
      const random = randomNamesEn(i);

      const [gender, ...nameArray] = random;

      nameArray.push(gender ? '(male)' : '(female)');

      it(`Случайное значение (${i} из ${iterations}): ${random} -> ${nameArray.join(
        ' ',
      )}`, () => {
        expect(random).toBe(random);
      });
    }
  });
});
