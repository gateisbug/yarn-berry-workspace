// noinspection TypeScriptUnresolvedReference,JSUnresolvedReference

import download from './download';

describe('download', () => {
  // window.URL 모의
  beforeAll(() => {
    global.URL.createObjectURL = jest.fn();
    global.URL.revokeObjectURL = jest.fn();
  });

  it('creates a link and triggers a download', () => {
    // 메서드 모의
    document.createElement = jest.fn().mockImplementation(() => ({
      href: '',
      download: '',
      rel: '',
      target: '',
      click: jest.fn(),
    }));
    document.body.appendChild = jest.fn();
    document.body.removeChild = jest.fn();

    // 함수 호출
    download('https://example.com/file.txt', 'example.txt');

    // 모의된 메서드가 올바르게 호출되었는지 확인
    expect(document.createElement).toHaveBeenCalledWith('a');
    expect(document.body.appendChild).toHaveBeenCalled();
    expect(document.body.removeChild).toHaveBeenCalled();
    expect(global.URL.createObjectURL).not.toHaveBeenCalled();
    expect(global.URL.revokeObjectURL).toHaveBeenCalledWith(
      'https://example.com/file.txt',
    );
  });

  // 추가적인 테스트 케이스들...
});
