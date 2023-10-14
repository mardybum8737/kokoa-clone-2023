// 옵셔널 체이닝 연산자 Optional Chaining Operator
// ES11 (ECMA Script 2020)
// ?.

// null 또는 undefined인 경우를 확인 할 때
let item = { price: 1 };
const price = item?.price;
console.log(price); // 1

let obj = { name: '🐶', owner: { name: '엘리' } };
function printName(obj) {
  //   const ownerName = obj && obj.owner && obj.owner.name;
  const ownerName = obj?.owner?.name;
  console.log(ownerName); // 엘리
}
// const ownerName = obj && obj.owner && obj.owner.name;
// console.log(ownerName); // 엘리
printName(obj); // 엘리
printName(); // undefined
