/**
 * SessionStorage 클래스는 브라우저의 세션 스토리지를 쉽게 관리하기 위한 유틸리티 클래스.
 * 이 클래스를 사용하여 세션 스토리지에 데이터를 저장하고, 조회하며, 삭제할 수 있음.
 * JSON 형식으로 객체를 저장하고 불러올 수 있는 기능도 포함되어 있음.
 */
export default class SessionStorage {
  /**
   * 세션 스토리지의 키를 관리.
   * @private
   */
  private __key: string = '';

  /**
   * SessionStorage 클래스의 생성자.
   * @param {string} key - 기본 키 값.
   */
  constructor(key: string) {
    this.__key = key;
  }

  /**
   * 새로운 키 값을 설정.
   * @param {string} key - 새로 설정할 키 값.
   */
  set key(key: string) {
    this.__key = key;
  }

  /**
   * 현재 설정된 키 값을 가져옴.
   * @returns {string} 현재 설정된 키 값.
   */
  get key() {
    return this.__key;
  }

  /**
   * 지정된 키에 해당하는 세션 스토리지 항목을 가져옴.
   * @param {string} [key] - 가져올 항목의 키. 제공되지 않을 경우 클래스에 설정된 키를 사용.
   * @returns {string | null} 저장된 항목의 값 또는 항목이 없을 경우 null.
   */
  public getItem(key?: string): string | null {
    return window.sessionStorage.getItem(key ?? this.__key);
  }

  /**
   * 지정된 키에 해당하는 객체를 세션 스토리지에서 가져옴.
   * @template T - 반환할 객체의 타입.
   * @param {string} [key] - 가져올 객체의 키. 제공되지 않을 경우 클래스에 설정된 키를 사용.
   * @returns {T | null} 저장된 객체 또는 객체가 없을 경우 null.
   */
  public getObject<T>(key?: string): T | null {
    const items: string | null = window.sessionStorage.getItem(
      key ?? this.__key,
    );

    if (items) return JSON.parse(items) as T;
    return null;
  }

  /**
   * 지정된 키에 문자열 항목을 세션 스토리지에 저장.
   * @param {string} item - 저장할 항목의 값.
   * @param {string} [key] - 저장할 항목의 키. 제공되지 않을 경우 클래스에 설정된 키를 사용.
   */
  public setItem(item: string, key?: string) {
    window.sessionStorage.setItem(key ?? this.__key, item);
  }

  /**
   * 지정된 키에 객체를 세션 스토리지에 저장.
   * @template T - 저장할 객체의 타입.
   * @param {T} item - 저장할 객체.
   * @param {string} [key] - 저장할 객체의 키. 제공되지 않을 경우 클래스에 설정된 키를 사용.
   */
  public setObject<T = object>(item: T, key?: string) {
    const object = JSON.stringify(item);
    window.sessionStorage.setItem(key ?? this.__key, object);
  }

  /**
   * 지정된 키에 해당하는 세션 스토리지 항목을 삭제.
   * @param {string} [key] - 삭제할 항목의 키. 제공되지 않을 경우 클래스에 설정된 키를 사용.
   */
  public clear(key?: string) {
    window.sessionStorage.removeItem(key ?? this.__key);
  }
}
