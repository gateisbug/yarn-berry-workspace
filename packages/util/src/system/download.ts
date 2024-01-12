// noinspection TypeScriptUnresolvedReference

/**
 * 주어진 URL에서 파일을 다운로드하는 함수.
 * 이 함수는 `<a>` 태그를 생성하여 지정된 URL과 파일 이름을 사용하여 다운로드 링크를 만든다.
 * 생성된 링크는 클릭 이벤트를 통해 파일 다운로드를 트리거한다.
 * 다운로드 후 링크는 문서에서 제거되며, 가능한 경우 생성된 객체 URL은 해제된다.
 *
 * @param {string} url - 다운로드할 파일의 URL. 객체 URL 또는 원격 URL이 될 수 있다.
 * @param {string} name - 다운로드할 파일의 이름.
 *
 * @example
 * // 객체 URL 사용 예
 * const fileUrl = URL.createObjectURL(file);
 * download(fileUrl, 'example.txt');
 *
 * // 원격 URL 사용 예
 * download('https://example.com/file.txt', 'example.txt');
 */
export default function download(url: string, name: string) {
  const link = document.createElement('a');
  link.href = url;
  link.download = name;
  link.rel = 'noreferrer';
  link.target = '_blank';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  if (window.URL) {
    window.URL.revokeObjectURL(url);
  }
}
