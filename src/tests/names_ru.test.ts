import { randomBoolean } from '../helpers/boolean.helper';
import { randomNamesRu } from '../helpers/names_ru.helper';

describe('randomNamesRu', () => {
  const iterations = 5;

  describe('Генерация имени', () => {
    for (let i = 1; i <= iterations; i++) {
      const random = randomNamesRu();

      it(`Случайное значение (${i} из ${iterations}): ${random[1]}`, () => {
        expect(random).toBe(random);
      });
    }
  });

  describe('Генерация имени и фамилии', () => {
    for (let i = 1; i <= iterations; i++) {
      const random = randomNamesRu(2);
      const name = [random[1], random[2], random[0] ? '(муж)' : '(жен)'].join(
        ' ',
      );

      it(`Случайное значение (${i} из ${iterations}): ${random} -> ${name}`, () => {
        expect(random).toBe(random);
      });
    }
  });

  describe('Генерация фамилии, имени, отчества', () => {
    for (let i = 1; i <= iterations; i++) {
      const random = randomNamesRu(3);

      const name = [random[2], random[1], random[3]].join(' ');

      it(`Случайное значение (${i} из ${iterations}): ${random} -> ${name}`, () => {
        expect(random).toBe(random);
      });
    }
  });

  describe('Генерация множества', () => {
    for (let i = 1; i <= iterations; i++) {
      const random = randomNamesRu(1 + i);

      const [gender, name, lastName, parentName, eastParentName] = random;

      const nameArray = [lastName, name];

      if (!eastParentName && parentName) {
        nameArray.push(parentName);
      }

      if (eastParentName) {
        if (randomBoolean()) {
          const suffix = gender ? 'оглы' : 'кызы';
          nameArray.push(`${eastParentName}-${suffix}`);
        } else {
          nameArray.push('ибн');
          nameArray.push(eastParentName);
        }
      }

      nameArray.push(gender ? '(муж)' : '(жен)');

      it(`Случайное значение (${i} из ${iterations}): ${random} -> ${nameArray.join(
        ' ',
      )}`, () => {
        expect(random).toBe(random);
      });
    }
  });
});
