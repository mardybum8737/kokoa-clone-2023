// 동결! Object.freeze
// 추가 ❌, 삭제 ❌, 쓰기 ❌, 속성 재정의

const ellie = { name: '엘리' };
const dog = { name: '와우', emoji: '🐶', owner: ellie };
Object.freeze(dog);
dog.name = '멍멍';
console.log(dog); // { name: '와우', emoji: '🐶', owner: { name: '엘리' } }
dog.age = 4;
console.log(dog); // { name: '와우', emoji: '🐶', owner: { name: '엘리' } }
delete dog.name;
console.log(dog); // { name: '와우', emoji: '🐶', owner: { name: '엘리' } }

// (단 얕은 꽁꽁 얼림!)
// 특정한 객체를 얼려도 그 객체가 다른 객체를 참조하고 있다면 그 참조하는 객체까지는 얼리지 못한다.
ellie.name = '엘리얌';
console.log(dog); // { name: '와우', emoji: '🐶', owner: { name: '엘리얌' } }

// 밀봉! Object.seal
// 값의 수정 ✅, 추가 ❌, 삭제 ❌, 속성 재정의
const cat = { ...dog };
// Object.assign(cat, dog);
Object.seal(cat);
console.log(cat); // { name: '와우', emoji: '🐶', owner: { name: '엘리얌' } }
cat.name = '냐옹';
console.log(cat); // { name: '냐옹', emoji: '🐶', owner: { name: '엘리얌' } }
delete cat.emoji;
console.log(cat); // { name: '냐옹', emoji: '🐶', owner: { name: '엘리얌' } }

// 동결 or 밀봉 되었는지 확인
console.log(Object.isFrozen(dog)); // true
console.log(Object.isSealed(cat)); // true

// 확장 금지 preventExtensions
const tiger = { name: '어흥' };
Object.preventExtensions(tiger);
console.log(Object.isExtensible(tiger)); // false
tiger.name = '어흐응';
console.log(tiger); // { name: '어흐응' }
delete tiger.name;
console.log(tiger); // {}
tiger.age = 5;
console.log(tiger); // {}
