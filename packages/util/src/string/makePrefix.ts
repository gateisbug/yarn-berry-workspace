/**
 * 주어진 접두사를 사용하여 새 문자열을 생성하는 함수를 반환한다.
 * 이 함수는 문자열 접두사를 매개변수로 받고, 내부 함수에서 이 접두사를 다른 문자열 앞에 추가하여 반환한다.
 *
 * @param {string} prefix - 반환되는 내부 함수에서 사용할 접두사.
 * @returns {(str: string) => string} 주어진 문자열에 접두사를 붙여 반환하는 함수.
 *
 * @example
 * const addHttp = makePrefix('http://');
 * console.log(addHttp('www.example.com')); // 'http://www.example.com'
 */
export default function makePrefix(prefix: string): (str: string) => string {
  return (str: string) => prefix + str;
}
