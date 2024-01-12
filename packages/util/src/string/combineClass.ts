type PossibleClassNameType =
  | string
  | number
  | boolean
  | Record<string, boolean | undefined>
  | undefined
  | null;

/**
 * 다양한 유형의 인자들을 받아 하나의 문자열로 결합하는 함수.
 * 문자열, 숫자, 불리언, 또는 객체를 인자로 받으며, 객체의 경우 키-값 쌍으로 구성되어야 하고 값이 참인 키만 결과 문자열에 포함됨.
 * null 또는 undefined 값은 무시됨.
 *
 * @param {...PossibleClassNameType[]} args - 결합할 클래스 이름 또는 값을 나타내는 인자들.
 * @returns {string} 결합된 클래스 이름을 나타내는 문자열.
 *
 * @example
 * combineClass('class1', 'class2'); // 'class1 class2'
 * combineClass('class1', null, 'class3'); // 'class1 class3'
 * combineClass('class1', { class2: true, class3: false }); // 'class1 class2'
 * combineClass('class1', 5, false, { class2: true }); // 'class1 5 false class2'
 */
export default function combineClass(...args: PossibleClassNameType[]): string {
  const output: string[] = [];

  for (let i = 0; i < args.length; i++) {
    if (args[i] === null || args[i] === undefined) continue;

    if (typeof args[i] === 'string') {
      output.push(args[i] as string);
    } else if (typeof args[i] === 'object') {
      const o = args[i] as Record<string, boolean | undefined>;
      const key = Object.keys(o)[0];
      if (o[key]) {
        output.push(key);
      }
    } else if (typeof args[i] === 'number' || typeof args[i] === 'boolean') {
      output.push(String(args[i]));
    }
  }

  return output.join(' ');
}
