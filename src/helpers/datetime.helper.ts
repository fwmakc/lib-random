import { random } from './random.helper';

/**
 * Generates a random date and time within the specified range.
 * @param {string} min - The minimum date and time as a string in 'YYYY-MM-DD HH:mm:ss' format.
 * @param {string} max - The maximum date and time as a string in 'YYYY-MM-DD HH:mm:ss' format.
 * @param {string} [format='YYYY-MM-DD HH:mm:ss'] - The output format for the date and time. Defaults to 'YYYY-MM-DD HH:mm:ss'.
 * @returns {string} - A random date and time string.
 */
export function randomDatetime(
  min: string,
  max: string,
  format = 'YYYY-MM-DD HH:mm:ss',
): string {
  const minTimestamp = parseDateString(min);
  const maxTimestamp = parseDateString(max);

  if (!minTimestamp || !maxTimestamp) {
    return '';
  }

  const timestamp = random(minTimestamp, maxTimestamp);
  const datetime = formatTimestamp(timestamp, format);

  return datetime;
}

/**
 * Parses a date string into a timestamp.
 * @param {string} dateString - The date string to parse.
 * @returns {number | undefined} - The timestamp or undefined if the parsing fails.
 */
function formatTimestamp(timestamp: number, format: string): string {
  const date = new Date(timestamp);

  const year = String(date.getFullYear());
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');

  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');

  return format
    .replace('YYYY', year)
    .replace('MM', month)
    .replace('DD', day)
    .replace('HH', hours)
    .replace('mm', minutes)
    .replace('ss', seconds);
}

/**
 * Formats a timestamp into a date and time string based on the specified format.
 * @param {number} timestamp - The timestamp to format.
 * @param {string} format - The output format for the date and time.
 * @returns {string} - The formatted date and time string.
 */
function parseDateString(dateString: string): number | undefined {
  const date = new Date(dateString);

  const timestamp = date.getTime();

  return !isNaN(timestamp) ? timestamp : undefined;
}
