// 함수의 호이스팅은 함수의 선언문 전에 호출이 가능하게 해줌
// 함수의 선언문은 선언 이전에도 호출이 가능함

print();

function print() {
  console.log('Hello');
}

// 변수 (let, const)와 클래스는 선언만 호이스팅이 되고,
// 초기화는 안됨
// 초기화 전, 변수에 접근하면 컴파일(빌드) 에러가 발생
// console.log(hi); // crash
let hi = 'hi';
// let func1 = function () {}; // 함수를 표현식으로 작성하면 위에서 접근이 안된다.

// const cat = new Cat(); // 이것 역시 마찬가지로 사용할 수 없다.
class Cat {}

let x = 1;
{
  console.log(x); // 밑에 let x = 2;가 없으면 1을 출력, 지금 상태면 crash
  let x = 2; // 여기서도 변수의 선언만 호이스팅되기 때문에
}
