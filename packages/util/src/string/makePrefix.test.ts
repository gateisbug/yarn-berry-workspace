// noinspection TypeScriptUnresolvedReference,JSUnresolvedReference

import makePrefix from './makePrefix';

describe('makePrefix', () => {
  it('creates a function that adds a prefix to a string', () => {
    const addHttp = makePrefix('http://');
    expect(addHttp('www.example.com')).toBe('http://www.example.com');

    const addHello = makePrefix('Hello ');
    expect(addHello('World')).toBe('Hello World');
  });

  it('handles empty strings correctly', () => {
    const addPrefix = makePrefix('');
    expect(addPrefix('test')).toBe('test');
  });

  it('works with different prefixes', () => {
    const prefixes = ['Mr. ', 'Dr. ', 'Ms. '];
    prefixes.forEach((prefix) => {
      const addPrefix = makePrefix(prefix);
      expect(addPrefix('Smith')).toBe(prefix + 'Smith');
    });
  });

  // 추가적인 테스트 케이스들...
});
