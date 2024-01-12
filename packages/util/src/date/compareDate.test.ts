// noinspection TypeScriptUnresolvedReference,JSUnresolvedReference

import compareDate from './compareDate';

describe('compareDate', () => {
  it('returns 0 when both dates are the same', () => {
    const date1 = new Date('2023-01-01');
    const date2 = new Date('2023-01-01');
    expect(compareDate(date1, date2)).toBe(0);
  });

  it('returns -1 when the first date is earlier than the second date', () => {
    const date1 = new Date('2023-01-01');
    const date2 = new Date('2023-01-02');
    expect(compareDate(date1, date2)).toBe(-1);
  });

  it('returns 1 when the first date is later than the second date', () => {
    const date1 = new Date('2023-01-02');
    const date2 = new Date('2023-01-01');
    expect(compareDate(date1, date2)).toBe(1);
  });

  // 추가적인 테스트 케이스들...
});
