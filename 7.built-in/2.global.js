console.log(globalThis); // node에서 사용하는 글로벌 객체
console.log(Infinity);
console.log(NaN);
console.log(undefined);

eval('const num = 2; console.log(num)'); // 문자열 형태로 JS 코드를 작성하면 평가해서 값을 출력할 수 있음
console.log(isFinite(1));
console.log(isFinite(Infinity));

console.log(parseFloat('12.43')); // 문자열인데 소수점이 포함된 숫자가 들어있다면 숫자로 나타내준다
console.log(parseInt('12.8')); // 문자열 안에 있는 숫자를 정수로 변환해준다.

// URL (URI, Uniform Resource Identifier 하위개념)
// 아스키 문자로만 구성되어야 함
// 한글이나 특수문자는 이스케이프 처리해야한다.
const URL = 'httpsL//드림코딩.com';
const encoded = encodeURI(URL);
console.log(encoded);

const decoded = decodeURI(encoded);
console.log(decoded);

// 전체 URL이 아니라 부분적인 것은 Component 이용
const part = '드림코딩.com';
console.log(encodeURIComponent(part));
