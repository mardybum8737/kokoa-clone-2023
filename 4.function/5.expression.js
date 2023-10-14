// 함수 선언문 function name() {}
// 함수 표현식 const name = function () {}
// 함수도 객체이기 때문에 변수에 할당/재할당이 가능하다.
let add = function (a, b) {
  // function 뒤에 sum 같은 이름을 넣을 순 있지만 함수 밖에서 사용할 수 없다. 선언되지 않아서
  return a + b;
};
console.log(add(0.5, 0.5)); // 1

// 화살표 함수 const name = () => {}
add2 = (a, b) => {
  return a + b;
};
console.log(add2(1, 1)); // 2

// 화살표 함수에서 값만 바로 리턴하는 경우에는 괄호,return도 생략이 가능하다
add3 = (a, b) => a + b;
console.log(add3(1, 2)); // 3

// 생성자 함수 const object = new Function(); // 뒤에 객체편에서 다룸

// IIFE (Immediatley-Invoked Function Expressions)
// 자바스크립트에서 거의 잘 쓰이지 않고 FE에서 웹페이지가 로딩되면서 즉각적으로 뭔가를 실행 할 때
(function run() {
  console.log('😝');
})(); // 😝
