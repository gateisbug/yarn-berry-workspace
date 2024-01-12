// noinspection TypeScriptUnresolvedReference,JSUnresolvedReference

import dateToFormat from './dateToFormat';

describe('dateToFormat', () => {
  it('formats a YYYY-MM-DD string to default format (YYYY.MM.DD)', () => {
    expect(dateToFormat('2023-01-01')).toBe('2023.01.01');
  });

  it('formats a Date object to default format (YYYY.MM.DD)', () => {
    expect(dateToFormat(new Date('2023-01-01'))).toBe('2023.01.01');
  });

  it('correctly formats using a custom format (DD/MM/YYYY)', () => {
    expect(dateToFormat('2023-01-01', 'DD/MM/YYYY')).toBe('01/01/2023');
  });

  it('throws an error for invalid date input', () => {
    expect(() => dateToFormat('invalid-date')).toThrow('Invalid date');
  });

  // 추가적인 테스트 케이스들...
});
