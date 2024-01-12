/**
 * 지정된 시간 동안 함수 실행을 지연시키는 비동기 함수.
 * 이 함수는 JavaScript의 `setTimeout`을 사용하여 주어진 밀리초(ms) 동안 대기한 후에 완료된다.
 * 이 함수는 주로 비동기 작업에서 일정 시간의 대기가 필요할 때 사용된다.
 *
 * @param {number} ms - 대기할 시간(밀리초).
 * @returns {Promise<unknown>} 지정된 시간이 지나면 해결(resolve)되는 프로미스.
 *
 * @example
 * async function example() {
 *   console.log('Waiting...');
 *   await sleep(2000); // 2초 동안 대기
 *   console.log('Done!');
 * }
 */
export default async function sleep(ms: number): Promise<void> {
  await new Promise((resolve) => setTimeout(resolve, ms));
}
