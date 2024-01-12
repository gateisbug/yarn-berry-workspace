// noinspection TypeScriptUnresolvedReference,JSUnresolvedReference

import randString from './randString';

describe('randString', () => {
  it('generates a random string of specified length in hex format', () => {
    const length = 10;
    const str = randString(length);
    expect(str).toHaveLength(length * 2); // hex 형식은 바이트당 2자리
  });

  it('generates a random string in specified encoding format', () => {
    const length = 10;
    const str = randString(length, 'base64');
    expect(Buffer.from(str, 'base64').toString('base64')).toBe(str); // base64 인코딩 확인
  });

  it('handles different lengths correctly', () => {
    for (let i = 1; i <= 5; i++) {
      const str = randString(i);
      expect(str).toHaveLength(i * 2); // hex 형식은 바이트당 2자리
    }
  });

  // 추가적인 테스트 케이스들...
});
