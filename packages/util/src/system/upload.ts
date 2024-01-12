/**
 * 주어진 파일들을 FormData 객체로 변환한다.
 *
 * 이 함수는 File 객체 배열과 이름을 받아, 각 파일을 FormData에 추가한다.
 * 생성된 FormData 객체는 파일 업로드 등의 목적으로 사용할 수 있음.
 *
 * @param {File[]} files - 업로드할 파일 객체의 배열.
 * @param {string} name - FormData에 추가될 때 사용될 필드 이름.
 * @returns {FormData} 파일들이 추가된 FormData 객체를 반환.
 */
export default function upload(files: File[], name: string) {
  const formData = new FormData();

  for (let i = 0; i < files.length; i++) {
    formData.append(name, files[i]);
  }

  return formData;
}
