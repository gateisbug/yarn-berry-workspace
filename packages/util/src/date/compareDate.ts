import sanitizeDate from './sanitizeDate';

/**
 * 두 날짜를 비교하여 첫 번째 날짜가 두 번째 날짜보다 이른지, 늦은지, 또는 동일한지를 판별한다.
 * 날짜는 문자열 또는 Date 객체 형태로 입력받으며, `sanitizeDate` 함수를 사용하여 ISO 형식으로 표준화된다.
 * 첫 번째 날짜가 두 번째 날짜보다 이르면 -1, 늦으면 1, 동일하면 0을 반환한다.
 *
 * @param {string | Date} date1 - 비교할 첫 번째 날짜. 문자열 또는 Date 객체 형태로 입력할 수 있다.
 * @param {string | Date} date2 - 비교할 두 번째 날짜. 문자열 또는 Date 객체 형태로 입력할 수 있다.
 * @returns {-1 | 0 | 1} 첫 번째 날짜가 두 번째 날짜보다 이른 경우 -1, 동일한 경우 0, 늦은 경우 1을 반환한다.
 *
 * @example
 * compareDate('2023-01-01', '2023-01-02'); // -1
 * compareDate('2023-01-02', '2023-01-01'); // 1
 * compareDate('2023-01-01', '2023-01-01'); // 0
 */
export default function compareDate(
  date1: string | Date,
  date2: string | Date,
): -1 | 0 | 1 {
  const A = sanitizeDate(date1);
  const B = sanitizeDate(date2);

  if (A.getTime() === B.getTime()) {
    return 0;
  } else if (A > B) {
    return 1;
  }
  return -1;
}
