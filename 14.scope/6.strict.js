// 엄격 모드 strict mode
// 리액트와 같은 프레임워크 사용시 기본적으로 엄격 모드임

'use strict'; //이러면 엄격모드 사용할 수 있음

// var x = 1;
// delete x; //엄격 모드에서는 안됨

function add(x) {
  var a = 2;
  //   b = a + x; // 에러 발생, b is not defined
  console.log(this); // undefined
}
add(1);

const array = [1, 2, 3];
for (const num of array) {
  console.log(num); // num is not defined
}
