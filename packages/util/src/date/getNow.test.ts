// noinspection TypeScriptUnresolvedReference,JSUnresolvedReference

import getNow from './getNow';

describe('getNow', () => {
  it('returns the current date and time in YYYY-MM-DDThh:mm:ss.mmmZ format', () => {
    const now = getNow();
    const regex = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/;

    expect(regex.test(now)).toBeTruthy();
  });

  // 추가적인 테스트 케이스들 (필요한 경우)...
});
