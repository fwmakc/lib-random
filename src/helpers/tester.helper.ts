/**
 * Generates a random number within the specified range.
 * @param {number} min - The minimum value of the range (inclusive).
 * @param {number} max - The maximum value of the range (inclusive). Defaults to the same as min if not provided.
 * @param {number} [step=1] - The step between possible values. Defaults to 1.
 * @returns {number} - A random number within the specified range.
 */

interface Report {
  iterations: number;
  total: number;
  average: number;
  max: number | undefined;
  min: number | undefined;
  time: number;
}

export function tester(
  callback: (...args: any) => any,
  args: Array<any>,
  iterate: number,
): any {
  const report: Report = {
    iterations: 0,
    total: 0,
    average: 0,
    max: undefined,
    min: undefined,
    time: 0,
  };

  for (let i = 1; i <= iterate; i++) {
    const startTime = Date.now();
    const value = callback(...args);
    const endTime = Date.now();

    report.time += endTime - startTime;
    report.total += value;
    report.iterations += 1;

    if (report.min === undefined || value < report.min) {
      report.min = value;
    }

    if (report.max === undefined || value > report.max) {
      report.max = value;
    }
  }

  report.average = report.total / report.iterations;

  return report;
}
