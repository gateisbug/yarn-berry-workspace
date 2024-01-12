// noinspection TypeScriptUnresolvedReference,JSUnresolvedReference

import sleep from './sleep';

jest.useFakeTimers();

describe('sleep', () => {
  it('delays the execution by the specified amount of time', async () => {
    const ms = 2000;
    const spy = jest.fn();

    // sleep 함수를 호출하고 완료를 기다림
    const promise = sleep(ms).then(spy);

    // 타이머를 전진시키기 전에는 콜백이 호출되지 않았어야 함
    expect(spy).not.toHaveBeenCalled();

    // 지정된 시간만큼 타이머를 전진시킴
    jest.advanceTimersByTime(ms);

    // sleep 함수의 완료를 기다림
    await promise;

    // 이제 콜백이 호출되었어야 함
    expect(spy).toHaveBeenCalled();
  });

  // 추가적인 테스트 케이스들...
});
