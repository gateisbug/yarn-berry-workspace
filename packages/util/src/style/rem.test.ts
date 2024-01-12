// noinspection TypeScriptUnresolvedReference,JSUnresolvedReference

import rem from './rem';

describe('rem', () => {
  it('converts pixel values to rem using the default base value', () => {
    expect(rem(32)).toBe('2rem');
    expect(rem(16)).toBe('1rem');
    expect(rem(8)).toBe('0.5rem');
  });

  it('converts pixel values to rem using a custom base value', () => {
    expect(rem(32, 8)).toBe('4rem');
    expect(rem(16, 8)).toBe('2rem');
    expect(rem(8, 8)).toBe('1rem');
  });

  it('handles zero and negative values correctly', () => {
    expect(rem(0)).toBe('0rem');
    expect(rem(-16)).toBe('-1rem');
  });

  // 추가적인 테스트 케이스들...
});
