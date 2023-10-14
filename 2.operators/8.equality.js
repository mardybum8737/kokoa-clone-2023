// 동등 비교 관계 연산자 (Equality Operators)
// == 값이 같음
// != 값이 다름
// === 값과 타입이 둘 다 같음
// !== 값과 타입이 다름
console.log(2 == 2);
console.log(2 != 2); // true
console.log(2 != 3); // false
console.log(2 !== 3); //true
console.log(2 == '2'); // true , 타입은 다르지만 숫자와 문자열을 비교할 때 문자열 안에 있는 숫자들이 자동으로 숫자로 변환되어서 비교가 된다.
console.log(2 === '2'); // false, 타입이 다르기 때문에 ✨보통 실무에서 타입도 함께 비교하는 경우가 많으므로 이 타입 비교 연산자를 사용하는 것이 좋다.
console.log(true == 1); // true
console.log(true === 1); // false
console.clear();

const obj1 = {
  name: 'js',
};
const obj2 = {
  name: 'js',
};

console.log(obj1 == obj2); // false , 서로 다른 메모리 셀 주소가 할당되어있기 때문에
console.log(obj1 === obj2); // 당연히  false
console.log(obj1.name == obj2.name); // true
console.log(obj1.name === obj2.name); // true

let obj3 = obj2;
console.log(obj2 == obj3); // 동일한 메모리 주소를 공유하고 있기 때문에
console.log(obj2 === obj3);

console.log(2 !== 3);
