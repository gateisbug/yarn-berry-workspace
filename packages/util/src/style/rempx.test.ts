// noinspection TypeScriptUnresolvedReference,JSUnresolvedReference

import rempx from './rempx';

describe('rempx', () => {
  // window.getComputedStyle 모의
  const originalGetComputedStyle = window.getComputedStyle;
  beforeEach(() => {
    window.getComputedStyle = jest.fn().mockImplementation(() => {
      return {
        fontSize: '16px',
      };
    });
  });

  afterEach(() => {
    window.getComputedStyle = originalGetComputedStyle;
  });

  it('converts pixel values to rem based on the default font size of the page', () => {
    expect(rempx(32)).toBe(32); // 기본 폰트 크기가 16px일 때
    expect(rempx(32, 8)).toBe(64); // 기본값을 8로 설정
  });

  // 추가적인 테스트 케이스들...
});
