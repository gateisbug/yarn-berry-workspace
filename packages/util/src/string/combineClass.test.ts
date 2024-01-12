// noinspection TypeScriptUnresolvedReference,JSUnresolvedReference

import combineClass from './combineClass';

describe('combineClass', () => {
  it('combines string arguments into a single string', () => {
    expect(combineClass('class1', 'class2')).toBe('class1 class2');
  });

  it('ignores null and undefined arguments', () => {
    expect(combineClass('class1', null, 'class3')).toBe('class1 class3');
    expect(combineClass(undefined, 'class4')).toBe('class4');
  });

  it('includes keys of an object with truthy values', () => {
    expect(combineClass('class1', { class2: true, class3: false })).toBe(
      'class1 class2',
    );
  });

  it('converts non-string arguments to strings', () => {
    expect(combineClass('class1', 5, false, { class2: true })).toBe(
      'class1 5 false class2',
    );
  });

  // 추가적인 테스트 케이스들...
});
