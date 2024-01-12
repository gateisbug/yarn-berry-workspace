/**
 * 주어진 픽셀(px) 값을 rem 단위로 변환하는 함수.
 * 기본적으로 16px을 1rem으로 간주하며, 다른 기준 값을 사용할 수도 있다.
 *
 * @param {number} px - rem으로 변환할 픽셀 값.
 * @param {number} [basic=16] - 1rem을 나타내는 픽셀 값의 기준. 기본값은 16.
 * @returns {string} 변환된 rem 단위의 값.
 *
 * @example
 * rem(32); // '2rem'
 * rem(32, 8); // '4rem'
 */
export default function rem(px: number, basic = 16): string {
  return px / basic + 'rem';
}
