// 문자열타입
let string = '안녕하세요';
string = '안녕!';
console.log(string);

string = '"안녕!"';
console.log(string);
// 문자열에 따옴표를 사용하고 싶으면 사용하고 싶은 따옴표와 다른 것으로 문자열을 감싸주면 된다.

// 특수 문자 출력하는 방법
string = "'안녕!\n 엘리야! \t\t 내이름은'"; // \n을 통해서 줄바꿈 \t를 통해서 탭간격, 이런것을 Escape Expression이라고 한다.
console.log(string);

// 템플릿 리터럴 (Template Literal) `` 특수 문자 없이 줄바꿈이나 여러 기능을 사용할 수 있다.
let id = '엘리';
let greetings = '"안녕!,' + id + '🥸\n즐거운 하루 보내요!"';
console.log(greetings);

greetings = `"안녕, ${id}😘
즐거운 하루 보내요!" `;
console.log(greetings);
