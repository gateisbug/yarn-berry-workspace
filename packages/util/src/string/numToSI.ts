/**
 * 숫자를 SI 단위(예: 천, 백만, 십억 등)로 변환하는 함수.
 * 숫자 또는 숫자 형태의 문자열을 입력받아 해당하는 SI 단위의 접미사와 함께 문자열로 반환한다.
 * 반환되는 값은 1자리의 소수점을 가지며, 불필요한 0은 제거된다.
 *
 * @param {string | number} number - 변환할 숫자 또는 숫자 형태의 문자열.
 * @returns {string} SI 단위로 변환된 문자열.
 *
 * @example
 * numToSI(1000); // '1 k'
 * numToSI('2500000'); // '2.5 M'
 * numToSI(1234567890); // '1.2 G'
 */
export default function numToSI(number: string | number): string {
  const _number = Number(number);

  const si = [
    { value: 1, symbol: '' },
    { value: 1e3, symbol: 'k' },
    { value: 1e6, symbol: 'M' },
    { value: 1e9, symbol: 'G' },
    { value: 1e12, symbol: 'T' },
    { value: 1e15, symbol: 'P' },
    { value: 1e18, symbol: 'E' },
  ];

  const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
  let i: number;
  for (i = si.length - 1; i > 0; i--) {
    if (_number >= si[i].value) {
      break;
    }
  }

  const result = _number / si[i].value;
  if (Number.isInteger(result)) {
    return `${result} ${si[i].symbol}`.trim();
  } else {
    return `${result.toFixed(1).replace(rx, '$1')} ${si[i].symbol}`.trim();
  }
}
