import { randomUUID } from 'crypto';

/**
 * UUID (Universally Unique Identifier)를 생성하는 함수.
 * 이 함수는 `crypto` 모듈의 `randomUUID` 함수를 사용하여 무작위 UUID를 생성한다.
 * 생성된 UUID는 RFC4122 버전 4 규격을 따른다.
 *
 * @returns {string} 생성된 UUID 문자열.
 *
 * @example
 * const id = uuid(); // 예: '123e4567-e89b-12d3-a456-426614174000'
 */
export default function uuid() {
  return randomUUID();
}
