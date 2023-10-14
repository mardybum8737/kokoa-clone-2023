// 코드 블럭: { }, if() { }, for() { }, function() { }
// 블록 외부에서는 블록 내부의 변수를 참조할 수 ❌
{
  const a = 'a';
  console.log(a); // a
}
const b = 'b';
// console.log(a); // crashed

// 함수 외부에서는 함수 내부의 변수를 참조할 수 ❌
function print() {
  const message = 'Hello World';
  console.log(message);
}
// print(); // Hello World
// console.log(message); // crash

// 함수 외부에서는 함수의 매개변수를 참조할 수 ❌
function sum(a, b) {
  console.log(a, b);
}
// console.log(a, b); // crash
