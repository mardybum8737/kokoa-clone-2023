// Symbol 심벌
// 유일한 키를 생성할 수 있음
const map = new Map();
// const key1 = 'key';
// const key2 = 'key';
// map.set(key1, 'Hello');
// console.log(map.get(key2)); // Hello, 데이터가 원시타입이기 때문에 key1, key2가 같은 값으로 취급된다
// console.log(key1 === key2); // true

const key1 = Symbol('key'); // Symbol은 new 안붙이고 생성할 수 있음
const key2 = Symbol('key');

map.set(key1, 'Hello');
console.log(map.get(key2)); // undefined
console.log(key1 === key2); // false

// 동일한 이름으로 하나의 키를 사용하고 싶다면, Symbol.for
// 전역 심벌 레지스트리 (Global Symbol Registry)
const k1 = Symbol.for('key');
const k2 = Symbol.for('key');
console.log(k1 === k2); // true

console.log(Symbol.keyFor(k1)); // key
console.log(Symbol.keyFor(key1)); // undefined , Symbol.for로 생성된게 아니어서 글로벌 레지스트리에 없다.

const obj = { [k1]: 'hello', [Symbol('key')]: 1 };
console.log(obj); // { [Symbol(key)]: 'hello', [Symbol(key)]: 1 }
console.log(obj[k1]); // hello
console.log(obj[Symbol('key')]); // undefined
