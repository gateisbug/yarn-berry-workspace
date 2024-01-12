// noinspection TypeScriptUnresolvedReference,JSUnresolvedReference

import objectToQuery from './objectToQuery';

describe('objectToQuery', () => {
  it('converts an object to a query string', () => {
    expect(objectToQuery({ a: 1, b: 'test', c: [1, 2, 3] })).toBe(
      '?a=1&b=test&c=[1,2,3]&',
    );
  });

  it('ignores null and undefined values', () => {
    expect(objectToQuery({ a: null, b: undefined, c: 'value' })).toBe(
      '?c=value&',
    );
  });

  it('handles empty objects', () => {
    expect(objectToQuery({})).toBe('?');
  });

  it('handles objects with array values', () => {
    expect(objectToQuery({ a: [1, 2], b: 'test' })).toBe('?a=[1,2]&b=test&');
  });

  // 추가적인 테스트 케이스들...
});
