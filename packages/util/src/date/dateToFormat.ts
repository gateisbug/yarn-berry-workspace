import sanitizeDate from './sanitizeDate';

/**
 * 주어진 날짜를 지정된 형식의 문자열로 변환한다. 입력된 날짜는 문자열 또는 Date 객체 형태일 수 있으며,
 * `sanitizeDate` 함수를 통해 ISO 형식으로 표준화된다. 변환된 날짜는 지정된 포맷 형식에 따라 문자열로 반환된다.
 * 기본 포맷은 'YYYY.MM.DD'이며, 사용자가 다른 포맷을 지정할 수 있다.
 * 유효하지 않은 날짜 입력에 대해서는 에러를 발생시킨다.
 *
 * @param {string | Date} date - 변환할 날짜. 문자열 또는 Date 객체.
 * @param {string} [format='YYYY.MM.DD'] - 반환할 날짜의 문자열 포맷.
 *                                         'YYYY'는 연도, 'MM'은 월, 'DD'는 일을 나타낸다.
 * @returns {string} 지정된 포맷의 날짜 문자열.
 *
 * @throws {Error} 유효하지 않은 날짜 입력에 대해 에러를 발생시킴.
 *
 * @example
 * dateToFormat('2023-01-01'); // '2023.01.01'
 * dateToFormat(new Date(2023, 0, 1), 'DD-MM-YYYY'); // '01-01-2023'
 */
export default function dateToFormat(
  date: string | Date,
  format = 'YYYY.MM.DD',
): string {
  const months = [
    '01',
    '02',
    '03',
    '04',
    '05',
    '06',
    '07',
    '08',
    '09',
    '10',
    '11',
    '12',
  ];
  const _date = sanitizeDate(date);

  if (isNaN(_date.getTime())) {
    throw new Error('Invalid date');
  }

  const year = _date.getFullYear().toString();
  const month = months[_date.getMonth()];
  const day = _date.getDate().toString().padStart(2, '0');

  return format.replace('YYYY', year).replace('MM', month).replace('DD', day);
}
