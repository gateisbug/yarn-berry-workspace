// noinspection TypeScriptUnresolvedReference,JSUnresolvedReference

import getWeekday from './getWeekday';

describe('getWeekday', () => {
  it('returns an array of 7 dates for a given string date', () => {
    const week = getWeekday('2023-03-16'); // 예를 들어 2023년 3월 16일이 목요일이라고 가정
    expect(week).toHaveLength(7);
    expect(week[0]).toBe('2023-03-12'); // 해당 주의 일요일 날짜
    expect(week[6]).toBe('2023-03-18'); // 해당 주의 토요일 날짜
  });

  it('returns an array of 7 dates for a given Date object', () => {
    const week = getWeekday(new Date('2023-03-16'));
    expect(week).toHaveLength(7);
    expect(week[0]).toBe('2023-03-12');
    expect(week[6]).toBe('2023-03-18');
  });

  // 추가적인 테스트 케이스들...
});
