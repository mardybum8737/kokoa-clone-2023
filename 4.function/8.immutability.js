// 함수내부에서 외부로부터 주어진 인자의 값을 변경하는 것은 💩
// 상태변경이 필요한 경우에는, 새로운 상태(오브젝트, 값)을 만들어서 반환해야 함 ✨
// 원시값은 값에 의한 복사가 이루어진다.
// 객체값 - 참조(메모리 주소)에 의한 복사

function display(num) {
  num = 5;
  console.log(num);
}
const value = 4;
display(value);
console.log(value);

//나쁘게 사용된 예시
function dispalyObj(obj) {
  obj.name = 'Bob'; // ☠️☠️☠️☠️☠️☠️ 외부로부터 주어진 인자(오브젝트)를 내부에서 변경 ❌
  console.log(obj);
}
const ellie = { name: 'Ellie' };
dispalyObj(ellie);
console.log(ellie); // 'Bob'

function changeName(obj) {
  // 이름부터 변경하는 느낌이 주도록!
  return { ...obj, name: 'Bob' }; // 반환할 때는 새로운 오브젝트를 만드는 것이 중요하다.
}
