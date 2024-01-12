// noinspection TypeScriptUnresolvedReference,JSUnresolvedReference

import sanitizeDate from './sanitizeDate';

describe('sanitizeDate', () => {
  it('converts a YYYY-MM-DD string to a Date object in ISO format', () => {
    const input = '2023-01-01';
    const expected = new Date('2023-01-01T00:00:00.000Z');
    expect(sanitizeDate(input).toISOString()).toBe(expected.toISOString());
  });

  it('converts a YY-MM-DD string to a Date object in ISO format', () => {
    const input = '23-01-01';
    const expected = new Date('2023-01-01T00:00:00.000Z');
    expect(sanitizeDate(input).toISOString()).toBe(expected.toISOString());
  });

  it('converts a Date object to a Date object in ISO format', () => {
    const input = new Date(2023, 0, 1, 15, 30);
    const expected = new Date(input.toISOString());
    expect(sanitizeDate(input).toISOString()).toBe(expected.toISOString());
  });

  it('throws an error for invalid date input', () => {
    expect(() => sanitizeDate('invalid-date')).toThrow('Invalid date');
  });

  // 추가적인 테스트 케이스들...
});
