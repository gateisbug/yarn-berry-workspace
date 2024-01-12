/**
 * 주어진 픽셀(px) 값을 현재 페이지의 기본 폰트 크기를 기준으로 한 rem 단위의 픽셀 값으로 변환한다.
 * 이 함수는 `window.getComputedStyle`를 사용하여 문서의 기본 폰트 크기를 가져오고,
 * 이를 기반으로 입력된 픽셀 값을 rem 단위로 변환한 후, 실제 픽셀 값으로 계산하여 반환한다.
 *
 * @param {number} px - 변환할 픽셀 값.
 * @param {number} [basic=16] - 1rem을 나타내는 픽셀 값의 기준. 기본값은 16.
 * @returns {number} 변환된 픽셀 값.
 *
 * @example
 * rempx(32); // 페이지의 기본 폰트 크기에 따라 계산된 픽셀 값 반환
 * rempx(32, 8); // 기본값을 8로 설정하여 계산된 픽셀 값 반환
 */
export default function rempx(px: number, basic = 16): number {
  const computedFontSize = window.getComputedStyle(document.body).fontSize;
  const fz = Number(computedFontSize.replace('px', ''));
  const rem = px / basic;

  return fz * rem;
}
