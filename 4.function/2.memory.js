function add(a, b) {
  return a + b;
}
// add라는 변수에 함수를 담고있는 메모리의 주소가 담겨있다.

const sum = add;
// sum도 이제 add에 담긴 메모리 주소를 갖게 되는 것
// 둘 다 함수처럼 사용할 수 있다.

console.log(sum(1, 2));
console.log(add(1, 2));
