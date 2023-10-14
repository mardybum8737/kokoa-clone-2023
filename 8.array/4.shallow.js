// 얕은 복사 Shallow Copy - 객체는 메모리 주소 전달
// 자바스크립트에서 복사할 때는 항상 얕은 복사가 이루어짐!
// Array.from, concat, slice, spread(...), Object.assign

const pizza = { name: '🍕', price: 2, owner: { name: 'Ellie' } };
// 위에서 owner도 생성된 오브젝트의 주소값을 가지고 있을 뿐이다.
const ramen = { name: '🍜', price: 3 };
const sushi = { name: '🍣', price: 1 };
const store1 = [pizza, ramen];
const store2 = Array.from(store1);
console.log('store1', store1);
/* store1 [
  { name: '🍕', price: 2, owner: { name: 'Ellie' } },
  { name: '🍜', price: 3 }
  */ 

console.log('store2', store2);
/* store2 [
  { name: '🍕', price: 2, owner: { name: 'Ellie' } },
  { name: '🍜', price: 3 }
] */

store2.push(sushi);
console.log('store1', store1);
/* 
store1 [
  { name: '🍕', price: 2, owner: { name: 'Ellie' } },
  { name: '🍜', price: 3 }
]
*/

console.log('store2', store2);
/*
store2 [
  { name: '🍕', price: 2, owner: { name: 'Ellie' } },
  { name: '🍜', price: 3 },
  { name: '🍣', price: 1 }
]
*/


pizza.price = 4;
console.log('store1', store1);
/*
store1 [
  { name: '🍕', price: 4, owner: { name: 'Ellie' } },
  { name: '🍜', price: 3 }
]
*/

console.log('store2', store2);
/*
store2 [
  { name: '🍕', price: 4, owner: { name: 'Ellie' } },
  { name: '🍜', price: 3 },
  { name: '🍣', price: 1 }
]
*/


// 배열에 오브젝트를 아이템으로 추가하고 제거할 때 주소값을 추가하고 제거하는 것과 동일하다
// 그 오브젝트가 위치한 메모리의 주소를 알려주는 것이기 때문에,
// 그 오브젝트를 다른 곳에서 수정하면, 그 오브젝트를 가지고 있는 모든 배열에서 수정이 반영된다.
