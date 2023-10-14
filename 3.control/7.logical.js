// 논리연산자 Logical operator
// && 그리고
// || 또는
// ! 부정 (단항연산자에서 온 것)
// !! 불리언값으로 변환 (단항연산자 응용버전)

let num = 7;
if (num >= 0 && num < 9) {
  console.log('🎃');
}

let a = 21;
if (a >= 0 || a < 9) {
  console.log('😑');
}

if (a != 7) {
  console.log('☠️');
}

console.log(true && true); // true
console.log(true && false); // false
console.log(false && true); // false
console.log(false && false); // false

console.log(true || true); // true
console.log(true || false); // true
console.log(false || true); // true
console.log(false || false); // false

console.log(!'text'); // 문자열은 true이므로 부정하면 false
console.log(!!'text'); // 문자열을 불리언 값으로 전환하므로 true
