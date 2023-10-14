// Iterable 하다는 건! 순회가 가능하다는 것
// [Symbol.iterator](): Iterator;
// 심볼정의를 가진 객체나, 특정한 함수가 Iterator를 리턴한다는 것은
// 순회가 가능한 객체이다 라는 걸 알 수 있음
// 순회가 가능하면 빙글빙글 도는 연산자를 사용할 수 있다. -> for..of, spread 같은

const array = [1, 2, 3];
for (const item of array.values()) {
  // for (const item of array.entries()) {
  // for (const item of array.keys()) {

  console.log(item);
  //출력
  //   1
  // 2
  // 3
}

const obj = { 0: 1, 1: 2 };
for (const item in obj) {
  // 프로토콜을 따르지 않는 일반 객체는 for in을 사용할 수 있다.
  // 오브젝트 안에 있는 key를 출력
  console.log(item);
  // 출력
  // 0
  // 1
}

const iterator = array.values();
// for (const item of iterator) {
//   console.log(item);
// }

// console.log(iterator.next()); // { value: 1, done: false }
// console.log(iterator.next().value); // 2
// console.log(iterator.next().value); // 3
// console.log(iterator.next().value); // undefined
// console.log(iterator.next().done); // true

while (true) {
  const item = iterator.next();
  if (item.done) break;
  console.log(item.value);
}
