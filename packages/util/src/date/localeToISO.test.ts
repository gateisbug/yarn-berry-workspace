// noinspection TypeScriptUnresolvedReference,JSUnresolvedReference

import localeToISO from './localeToISO';

describe('dateToISO', () => {
  it('converts a Date object to an ISO string', () => {
    const date = new Date('2023-01-01T12:00:00Z');
    expect(localeToISO(date)).toBe('2023-01-01T12:00:00.000Z');
  });

  it('converts a YYYY-MM-DD string to an ISO string', () => {
    expect(localeToISO('2023-01-01')).toBe('2023-01-01T00:00:00.000Z');
  });

  it('converts a YY-MM-DD string to an ISO string', () => {
    expect(localeToISO('23-01-01')).toBe('2023-01-01T00:00:00.000Z');
  });

  it('converts a YYYY/MM/DD string to an ISO string', () => {
    expect(localeToISO('2023/01/01')).toBe('2023-01-01T00:00:00.000Z');
  });

  // it('converts a Date object representing a local time to an ISO string', () => {
  //   const localDate = new Date(2023, 0, 1);
  //   const isoString = localDate.toISOString();
  //   expect(localeToISO(localDate)).toBe(isoString);
  // });

  it('throws an error for invalid date input', () => {
    expect(() => localeToISO('invalid-date')).toThrow('Invalid date');
  });

  // 추가 테스트 케이스들...
});
