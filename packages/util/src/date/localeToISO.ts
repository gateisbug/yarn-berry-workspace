/**
 * 주어진 날짜(문자열 또는 Date 객체)를 ISO 8601 형식의 문자열로 변환한다.
 * 문자열 입력의 경우, 정규 표현식을 사용하여 날짜 형식이 유효한지 검증한 후 변환한다.
 * Date 객체 입력의 경우, 직접 ISO 문자열로 변환한다.
 * 주어진 날짜 문자열이 유효한 형식이 아닌 경우 에러를 발생시킨다.
 *
 * @param {string | Date} date - 변환할 날짜. 문자열 또는 Date 객체 형태로 입력할 수 있다.
 * @returns {string} ISO 8601 형식의 날짜 문자열 (예: 'YYYY-MM-DDTHH:MM:SS.sssZ').
 *
 * @throws {Error} 제공된 날짜 문자열이 유효한 형식이 아닐 때 에러를 발생시킨다.
 *
 * @example
 * localeToISO('2023-01-01'); // '2023-01-01T00:00:00.000Z' 반환
 * localeToISO(new Date(2023, 0, 1)); // 로컬 시간을 ISO 형식 문자열로 반환
 */
export default function localeToISO(date: string | Date): string {
  if (typeof date !== 'string') {
    return date.toISOString();
  }

  const regex = /^(\d{2,4})\D(\d{2})\D(\d{2})$/;
  if (!regex.test(date)) {
    throw new Error('Invalid date');
  }

  const parts = date.split('T');
  const normalizedDateStr = parts[0].replace(regex, '$1-$2-$3');
  const dateParts = normalizedDateStr.split('-');

  if (dateParts[0].length === 2) dateParts[0] = '20' + dateParts[0];

  let newDateStr = dateParts.join('-');
  if (parts.length > 0) newDateStr += 'T' + (parts[1] ?? '00:00:00.000Z');

  const _date = new Date(newDateStr);

  return _date.toISOString();
}
