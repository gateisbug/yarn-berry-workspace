// noinspection TypeScriptUnresolvedReference,JSUnresolvedReference

import LocalStorage from './LocalStorage';

describe('LocalStorage', () => {
  let localStorage: LocalStorage;
  const testKey = 'testKey';
  const testData = 'testData';
  const testObject = { key: 'value' };

  beforeEach(() => {
    localStorage = new LocalStorage(testKey);
    jest.clearAllMocks();
    Storage.prototype.setItem = jest.fn();
    Storage.prototype.getItem = jest.fn();
    Storage.prototype.removeItem = jest.fn();
  });

  it('should set and retrieve a string item', () => {
    jest.spyOn(Storage.prototype, 'getItem').mockReturnValue(testData);
    localStorage.setItem(testData);
    expect(window.localStorage.setItem).toHaveBeenCalledWith(testKey, testData);

    const retrieved = localStorage.getItem();
    expect(window.localStorage.getItem).toHaveBeenCalledWith(testKey);
    expect(retrieved).toEqual(testData);
  });

  it('should set and retrieve an object', () => {
    jest
      .spyOn(Storage.prototype, 'getItem')
      .mockReturnValue(JSON.stringify(testObject));
    localStorage.setObject(testObject);
    expect(window.localStorage.setItem).toHaveBeenCalledWith(
      testKey,
      JSON.stringify(testObject),
    );

    const retrieved = localStorage.getObject<typeof testObject>();
    expect(window.localStorage.getItem).toHaveBeenCalledWith(testKey);
    expect(retrieved).toEqual(testObject);
  });

  it('should clear an item', () => {
    localStorage.clear();
    expect(window.localStorage.removeItem).toHaveBeenCalledWith(testKey);
  });

  // 추가적인 테스트 케이스들...
});
