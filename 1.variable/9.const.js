//let 재할당이 가능
let a = 1;
a = 2;

// const 재할당이 불가능
// 1. 상수
// 2. 상수변수 또는 변수
const text = 'hello';
// text = 'hi'; 이렇게 재할당하면 안됨

// 1. 상수
const MAX_FRUITS = 5;

// 2. 재할당 불가능한 상수변수 또는 변수
const apple = {
  name: 'apple',
  color: 'red',
  display: '🍎',
};
-
console.log(apple);
apple.name = 'orange';
console.log(apple);

// const, let 모두 mutable 즉 변경이 가능하다. const는 재할당은 불가능.
// 레퍼런스로 불러오는 것이기 때문에

//프로그래밍에서 let 보다 const를 선호해서 사용하는 것이 더 좋다.
