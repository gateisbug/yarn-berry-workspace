/**
 * 현재 날짜와 시간을 'YYYY-MM-DDThh:mm:ss.mmmZ' 형식의 문자열로 반환한다.
 * 이 함수는 현재 시스템의 날짜와 시간을 기준으로 하며, 각 구성 요소는 항상 특정 길이를 유지하기 위해
 * 적절히 0으로 채워진다 (예: 월, 일, 시, 분, 초는 2자리, 밀리초는 3자리).
 * 반환된 문자열은 UTC 시간대를 나타내는 'Z'로 끝난다.
 *
 * @returns {string} 현재 날짜와 시간을 나타내는 문자열. 형식: 'YYYY-MM-DDThh:mm:ss.mmmZ'.
 *
 * @example
 * console.log(getNow()); // 현재 날짜와 시간을 '2023-01-01T12:30:45.123Z' 형식으로 출력
 */
export default function getNow() {
  const date = new Date();

  const YYYY = date.getFullYear();
  const MM = String(date.getMonth() + 1).padStart(2, '0');
  const DD = String(date.getDate()).padStart(2, '0');
  const hh = String(date.getHours()).padStart(2, '0');
  const mm = String(date.getMinutes()).padStart(2, '0');
  const ss = String(date.getSeconds()).padStart(2, '0');
  const ms = String(date.getMilliseconds()).padStart(3, '0');

  return `${YYYY}-${MM}-${DD}T${hh}:${mm}:${ss}.${ms}Z`;
}
