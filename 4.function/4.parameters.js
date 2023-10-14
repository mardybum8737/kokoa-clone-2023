// 매개변수의 기본값은 무조건 undefined
// 매개변수의 정보는 함수 내부에서 접근이 가능한 arguments 객체에 저장됨
// 매개변수 기본값 Default Parameters a = 1, b = 1 / 입력된 매개변수가 없을 때만 사용된다.

function add(a, b) {
  // function add(a = 1, b = 2) { //이런 식으로 기본값을 설정할 수도 있다.
  console.log(a);
  console.log(b);
  console.log(arguments);
  return a + b;
}

add();
// arguments { '0' : 1, '1' : 2 , '2' : 3 }
// arguments에는 0부터 시작하는 매개변수의 배열

// Rest 매개변수 Rest Parameters
function sum(a, b, ...numbers) {
  console.log(a); // 1
  console.log(b); // 2
  console.log(numbers); // [ 3, 4, 5, 6, 7, 8 ]
}
sum(1, 2, 3, 4, 5, 6, 7, 8);
