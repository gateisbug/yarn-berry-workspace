// noinspection TypeScriptUnresolvedReference,JSUnresolvedReference

import SessionStorage from './SessionStorage';

describe('SessionStorage', () => {
  let sessionStorage: SessionStorage;
  const testKey = 'testKey';
  const testData = 'testData';
  const testObject = { key: 'value' };

  // 세션 스토리지 모의
  beforeEach(() => {
    sessionStorage = new SessionStorage(testKey);

    // 모의 구현 설정
    Object.defineProperty(window, 'sessionStorage', {
      value: {
        getItem: jest.fn(),
        setItem: jest.fn(),
        removeItem: jest.fn(),
        clear: jest.fn(),
      },
      writable: true,
    });
  });

  it('should set and retrieve a string item', () => {
    sessionStorage.setItem(testData, testKey);
    expect(window.sessionStorage.setItem).toHaveBeenCalledWith(
      testKey,
      testData,
    );

    jest.spyOn(window.sessionStorage, 'getItem').mockReturnValue(testData);
    const retrieved = sessionStorage.getItem(testKey);
    expect(window.sessionStorage.getItem).toHaveBeenCalledWith(testKey);
    expect(retrieved).toEqual(testData);
  });

  it('should set and retrieve an object', () => {
    const jsonString = JSON.stringify(testObject);
    sessionStorage.setObject(testObject, testKey);
    expect(window.sessionStorage.setItem).toHaveBeenCalledWith(
      testKey,
      jsonString,
    );

    jest.spyOn(window.sessionStorage, 'getItem').mockReturnValue(jsonString);
    const retrieved = sessionStorage.getObject<typeof testObject>(testKey);
    expect(window.sessionStorage.getItem).toHaveBeenCalledWith(testKey);
    expect(retrieved).toEqual(testObject);
  });

  it('should clear an item', () => {
    sessionStorage.clear(testKey);
    expect(window.sessionStorage.removeItem).toHaveBeenCalledWith(testKey);
  });

  // 추가적인 테스트 케이스들...
});
