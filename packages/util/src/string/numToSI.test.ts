// noinspection TypeScriptUnresolvedReference,JSUnresolvedReference

import numToSI from './numToSI';

describe('numToSI', () => {
  it('converts numbers to SI unit strings', () => {
    expect(numToSI(1000)).toBe('1 k');
    expect(numToSI('2500000')).toBe('2.5 M');
    expect(numToSI(1234567890)).toBe('1.2 G');
    expect(numToSI(1e12)).toBe('1 T');
    expect(numToSI(1e15)).toBe('1 P');
    expect(numToSI(1e18)).toBe('1 E');
  });

  it('handles numbers less than 1000 without SI unit', () => {
    expect(numToSI(999)).toBe('999');
    expect(numToSI(10.5)).toBe('10.5');
    expect(numToSI(0.1)).toBe('0.1');
  });

  it('removes unnecessary zeros', () => {
    expect(numToSI(10000)).toBe('10 k');
    expect(numToSI(20000000)).toBe('20 M');
    expect(numToSI(3000000000)).toBe('3 G');
  });

  // 추가적인 테스트 케이스들...
});
