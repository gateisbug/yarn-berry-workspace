import localeToISO from './localeToISO';

/**
 * 주어진 날짜를 ISO 8601 형식의 날짜 문자열로 변환한 후, 그 결과를 Date 객체로 반환한다.
 * 이 함수는 `localeToISO` 함수를 사용하여 입력된 날짜(문자열 또는 Date 객체)를 표준화한다.
 * 이 과정을 통해 날짜가 일관된 형식으로 처리되며, 입력된 날짜의 형식에 관계없이 동일한 형태의 Date 객체가 생성된다.
 *
 * @param {string | Date} date - 표준화할 날짜. 문자열 또는 Date 객체 형태로 입력할 수 있다.
 * @returns {Date} 표준화된 날짜를 나타내는 Date 객체.
 *
 * @example
 * // 문자열 입력의 경우
 * console.log(sanitizeDate('2023-01-01')); // '2023-01-01T00:00:00.000Z'에 해당하는 Date 객체 반환
 *
 * // Date 객체 입력의 경우
 * console.log(sanitizeDate(new Date(2023, 0, 1))); // 입력된 Date 객체를 ISO 형식 문자열로 변환한 후, 다시 Date 객체로 반환
 */
export default function sanitizeDate(date: string | Date): Date {
  return new Date(localeToISO(date));
}
