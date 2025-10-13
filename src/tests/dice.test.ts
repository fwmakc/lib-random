import { random } from '../helpers/random.helper';

describe('dice', () => {
  const min = 1;
  const max = 6;
  const step = 1;
  const offset = 0.5;
  const iterates = 10;

  describe(`Делаем бросков кубика: ${iterates}`, () => {
    for (let n = 0; n < 100; n++) {
      const report = {
        iterate: 0,
        total: 0,
        average: 0,
        max: 0,
        min: 0,
      };

      const values = [0, 0, 0, 0, 0, 0, 0];

      for (let i = 1; i <= iterates; i++) {
        const value = random(min, max, step, offset);

        report.total += value;
        report.iterate += 1;

        if (!report.min || value < report.min) {
          report.min = value;
        }

        if (!report.max || value > report.max) {
          report.max = value;
        }

        values[value] += 1;
      }

      report.average = report.total / report.iterate;

      const counter: Array<string> = [];

      values.forEach((value, index) => {
        if (!index) {
          return;
        }
        counter.push(`${index}[${value}]`);
      });

      it(`среднее: ${report.average}, мин: ${report.min}, макс: ${
        report.max
      }, всего: ${counter.join(' ')}`, () => {
        expect(true).toBeTruthy();
      });
    }
  });
});
