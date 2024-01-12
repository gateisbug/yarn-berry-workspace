import sanitizeDate from './sanitizeDate';
import localeToISO from './localeToISO';

/**
 * 주어진 날짜를 포함하는 주(week)의 모든 날짜를 배열 형태로 반환한다.
 * 이 함수는 먼저 `sanitizeDate` 함수를 사용하여 입력된 날짜를 표준화하고,
 * 그 주의 일요일부터 시작하여 연속된 7일의 날짜를 `localeToISO` 함수를 사용하여 ISO 8601 형식의 문자열로 변환한다.
 * 결과적으로 일요일부터 토요일까지의 날짜가 ISO 형식의 문자열 배열로 반환된다.
 *
 * @param {string | Date} date - 주의 날짜를 계산할 기준 날짜. 문자열 또는 Date 객체 형태로 입력할 수 있다.
 * @returns {string[]} 해당 주의 일요일부터 토요일까지 날짜를 포함하는 ISO 형식의 문자열 배열.
 *
 * @example
 * // 기준 날짜를 문자열로 입력한 경우
 * console.log(getWeekday('2023-03-16')); // 2023년 3월 16일이 포함된 주의 일요일부터 토요일까지의 날짜 배열 반환
 *
 * // 기준 날짜를 Date 객체로 입력한 경우
 * console.log(getWeekday(new Date('2023-03-16'))); // 2023년 3월 16일이 포함된 주의 일요일부터 토요일까지의 날짜 배열 반환
 */
export default function getWeekday(date: string | Date) {
  const _date = sanitizeDate(date);

  _date.setDate(_date.getDate() - _date.getDay()); // 해당 주의 일요일로 이동

  const weekDates: string[] = [];
  for (let i = 0; i < 7; i++) {
    // 일요일부터 토요일까지 7일간
    weekDates.push(localeToISO(new Date(_date)).split('T')[0]);
    _date.setDate(_date.getDate() + 1); // 다음 날짜
  }

  return weekDates;
}
