/**
 * 주어진 범위 내에서 무작위 숫자를 생성한다.
 * 이 함수는 `Math.random`을 사용하여 최소값(min)과 최대값(max) 사이의 무작위 숫자를 반환한다.
 * 반환된 숫자는 최소값 이상이고 최대값 미만이다.
 *
 * @param {number} min - 반환될 무작위 숫자의 최소값.
 * @param {number} max - 반환될 무작위 숫자의 최대값.
 * @returns {number} 생성된 무작위 숫자.
 *
 * @example
 * rand(10, 20); // 10 이상 20 미만의 무작위 숫자 반환
 */
export default function rand(min: number, max: number): number {
  return Math.random() * (max - min) + min;
}
