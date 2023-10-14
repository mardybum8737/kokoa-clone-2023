const num1 = 123;
const num2 = new Number(123);
console.log(typeof num1); // number
console.log(typeof num2); // object

console.log(Number.MAX_VALUE);
// e+308 = 10^308
console.log(Number.MIN_VALUE);
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);
console.log(Number.NaN);
console.log(Number.NEGATIVE_INFINITY);
console.log(Number.POSITIVE_INFINITY);

if (num1 === Number.NaN) {
}
if (num1 < Number.MAX_VALUE) {
}
if (Number.isNaN(num1)) {
}

// 지수표기법 (매우 크거나 작은 숫자를 표기할 때 사용, 10의 n승으로 표기)
const num3 = 102;
console.log(num3.toExponential()); // 1.02e+2 = 1.02*10^2

// 반올림하여 문자열로 변환
const num4 = 1234.12;
console.log(num4.toFixed());

// 숫자 자체를 문자열로 변환
console.log(num4.toString());
console.log(num4.toLocaleString('ar-EG'));

// 원하는 자릿수까지 유효하도록 반올림
console.log(num4.toPrecision(4)); // 1234
console.log(num4.toPrecision(2)); // 1.2e+3, 전체 자릿수 표기가 안될 때는 지수표기법

console.log(Number.EPSILON); // 0과 1사이에서 나타낼 수 있는 가장 작은 숫자
if (Number.EPSILON > 0 && Number.EPSILON < 1) {
  console.log(Number.EPSILON); // 0과 1사이에서 나타낼 수 있는 가장 작은 숫자
}
const num = 0.1 + 0.2 - 0.2;
console.log(num); // 0.10000000000000003
// 자바스크립트가 계산을 할 때는 10진수를 2진수로 변환해서 연산한 후 2진수를 다시 10진수로 변환
// 그래서 부동소수까지 정확하게 계산이 안되어 작은 오차가 발생 할 수 있다. 그 작은 오차를 나타내는 것을 EPSILON이라고 할 수 있다.)

function isEqual(original, expected) {
  //   return original === expected;
  //   return original - expected < Number.EPSILON;
  return Math.abs(original - expected) < Number.EPSILON;
}
console.log(isEqual(1, 1)); // true
console.log(isEqual(0.1, 0.1)); // true
console.log(isEqual(num, 0.1)); // false
