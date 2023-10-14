// typeof : 데이터 타입을 확인
// 값을 타입 문자열로 반환
//weakly type : 타입이 할당된 값에 따라서 바뀌기 때문에
let variable;
console.log(typeof variable);

variable = 123;
console.log(typeof variable);

variable = {};
console.log(typeof variable);

variable = function () {};
console.log(typeof variable);

variable = Symbol();
console.log(typeof variable);

1 // 숫자 리터럴 표현식
1 + 1 // 연산자 표현식
call() // 함수 호출 표현식