// 논리연산자 Logical Operator
// && 그리고
// || 또는
// 단축평가 short-circuit evaluation
const obj1 = { name: '🐶' };
const obj2 = { name: '🐱', owner: 'Ellie' };

if (obj1 || obj2) {
  console.log('둘 다 true!');
}
// 출력 값 : 둘 다 true!

let result = obj1 && obj2; // obj1은 true이고 obj2는 result 변수의 할당된다.
console.log(result); // { name: '🐱', owner: 'Ellie' }
result = obj1 || obj2; // obj1가 트루니까 뒤에껀 확인 안해도 되어서 obj1이 출력된다
console.log(result); // { name: '🐶' }

// 활용 예
// 조건이 truthy일 때 && 무언가를 해야 할 경우
// 조건이 falsey일 때 || 무언가를 해야 할 경우
function changeOwner(animal) {
  if (!animal.owner) {
    throw new Error('주인이 없습니다');
  }
  animal.owner = '바뀐주인!';
}
function makeNewOwner(animal) {
  if (animal.owner) {
    throw new Error('주인이 이미 있습니다');
  }
  animal.owner = '새로운주인';
}

obj1.owner && changeOwner(obj1);
obj2.owner && changeOwner(obj2); // 왼쪽 피연산자가 truthy이기 때문에
console.log(obj1); // { name: '🐶' }, 강아지는 주인이 없었기 때문에 changeOwner가 실행되지 않았다.
console.log(obj2); // { name: '🐱', owner: '바뀐주인!' }

obj1.owner || makeNewOwner(obj1);
obj2.owner || makeNewOwner(obj2);
console.log(obj1); // { name: '🐶', owner: '새로운주인' }
console.log(obj2); // { name: '🐱', owner: '바뀐주인!' }

// null 또는 undefined인 경우를 확인 할 때
let item; // //  { price: 1 } 주석처리하면 어플레케이션이 죽음
const price = item && item.price; // 왼쪽 피연산자가 undefined이기 때문에 아래처럼 출력된다
console.log(price); // undefined,

// 기본값을 설정
// default parameter 전달하지 않거나, undefined 일때만 설정
// || 값이 falsey 한 경우 설정(할당) : 0, -0, null, undefined, ''
function print(message) {
  const text = message || 'Hello';
  console.log(text);
}
print(); // Hello
print(undefined); // Hello
print(null); // Hello
print(0); // Hello

function print2(message = 'hi') {
  // const text = message || 'Hello';
  console.log(message);
}
print2(); // hi
print2(undefined); // hi
print2(null); // null
print2(0); // 0
