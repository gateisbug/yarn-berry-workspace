import { randomBytes } from 'crypto';

// noinspection TypeScriptUnresolvedReference
/**
 * 지정된 길이의 무작위 문자열을 생성한다.
 * 이 함수는 `crypto` 모듈의 `randomBytes` 함수를 사용하여 무작위 바이트를 생성하고,
 * 이를 지정된 인코딩 형식(기본값은 'hex')으로 변환하여 문자열을 반환한다.
 *
 * @param {number} length - 생성할 문자열의 길이.
 * @param {BufferEncoding} [type='hex'] - 문자열의 인코딩 형식. 'hex', 'base64' 등이 가능.
 * @returns {string} 생성된 무작위 문자열.
 *
 * @example
 * randString(10); // 길이가 10인 무작위 hex 문자열 반환
 * randString(10, 'base64'); // 길이가 10인 무작위 base64 문자열 반환
 */
export default function randString(length: number, type?: BufferEncoding) {
  // noinspection TypeScriptValidateTypes
  return randomBytes(length).toString(type ?? 'hex');
}
