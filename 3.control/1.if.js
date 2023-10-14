// 조건문 conditional statement
// if (조건) { }
// if (조건) else { }
// if (조건1) { } else if (조건2) {} else {}
let fruit;
if (fruit === 'apple') {
  console.log('🍎');
} else if (fruit === 'orange') {
  console.log('🍊');
} else {
  console.log('🍕');
}
fruit = 'pizza';

if (false) {
  console.log('출력되면 안됨!');
}
if ('') {
  console.log('출력되면 안됨!');
}
if (null) {
  console.log('출력되면 안됨!');
}
if (0) {
  console.log('출력되면 안됨!');
}
if (undefined) {
  console.log('출력되면 안됨!');
}
if (1) {
  console.log('출력됨!');
}
if (true) {
  console.log('출력됨!');
}
if ('yes') {
  console.log('출력됨!');
}

console.clear();
let a = 5;
let b = a++;
console.log(a);
console.log(2 != 3);
