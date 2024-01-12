/**
 * 주어진 객체를 URL 쿼리 문자열로 변환한다.
 * 객체의 각 키-값 쌍을 쿼리 파라미터로 변환하며, null 또는 undefined인 값은 무시된다.
 * 객체의 값이 배열인 경우, 배열 요소들이 쉼표로 구분되어 표현된다.
 *
 * @template T - 변환할 객체의 타입.
 * @param {T} object - URL 쿼리 문자열로 변환할 객체.
 * @returns {string} 생성된 URL 쿼리 문자열. 문자열은 '?'로 시작하며, 각 파라미터는 '&'로 구분된다.
 *
 * @example
 * objectToQuery({ a: 1, b: 'test', c: [1, 2, 3] }); // '?a=1&b=test&c=[1,2,3]&'
 * objectToQuery({ a: null, b: undefined, c: 'value' }); // '?c=value&'
 */
export default function objectToQuery<T>(object: T): string {
  let output = '?';

  for (const key in object) {
    const value = object[key];

    // noinspection JSIncompatibleTypesComparison
    if (value !== null && value !== undefined) {
      const valueString =
        typeof value === 'object'
          ? `[${(value as T[]).join(',')}]`
          : String(value);

      output += `${key}=${valueString}&`;
    }
  }

  return output;
}
