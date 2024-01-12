// noinspection TypeScriptUnresolvedReference,JSUnresolvedReference

import rand from './rand';

describe('rand', () => {
  it('generates a random number within the specified range', () => {
    const min = 10;
    const max = 20;
    for (let i = 0; i < 100; i++) {
      const randomNumber = rand(min, max);
      expect(randomNumber).toBeGreaterThanOrEqual(min);
      expect(randomNumber).toBeLessThan(max);
    }
  });

  it('handles equal min and max values', () => {
    expect(rand(5, 5)).toBe(5);
  });

  it('handles min value greater than max value', () => {
    expect(rand(10, 5)).toBeGreaterThanOrEqual(5);
    expect(rand(10, 5)).toBeLessThan(10);
  });

  // 추가적인 테스트 케이스들...
});
