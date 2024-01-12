// noinspection TypeScriptUnresolvedReference,JSUnresolvedReference

import uuid from './uuid';

describe('uuid', () => {
  it('generates a valid UUID string', () => {
    const uuidRegex =
      /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/;
    const id = uuid();
    expect(uuidRegex.test(id)).toBeTruthy();
  });

  it('generates unique UUIDs on multiple calls', () => {
    const id1 = uuid();
    const id2 = uuid();
    expect(id1).not.toBe(id2);
  });

  // 추가적인 테스트 케이스들...
});
