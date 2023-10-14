// Spread 연산자, 전개구문
// 모든 Iterable은 Spread 될 수 있다.
// 순회가 가능한 모든 것들은 펼쳐 질 수 있다.
// func(...iterable)
// [...iterable]
// {...obj}
// EcmaScript 2018
function add(a, b, c) {
  return a + b + c;
}

const nums = [1, 2, 3];
add(nums[0], nums[1], nums[2]);
// console.log(add(nums[0], nums[1], nums[2]));
// 위 줄을 간단하게 아래 줄처럼
console.log(add(...nums));

// Rest parameters
function sum(first, second, ...nums) {
  console.log(nums);
}
sum(1, 2, 0, 1, 2, 4); // [ 0, 1, 2, 4 ] , 앞에 1, 2를 제외한 뒤에 애들이 배열 형식으로 ...nums 자리에

// Array Concat
const fruits1 = ['🍏', '🥝'];
const fruits2 = ['🍓', '🍌'];
let arr = fruits1.concat(fruits2);
console.log(arr); // [ '🍏', '🥝', '🍓', '🍌' ]

arr = [...fruits1, ...fruits2];
console.log(arr); // [ '🍏', '🥝', '🍓', '🍌' ]

// Object
const ellie = { name: 'Ellie', age: 20, home: { address: 'home' } };
const updated = {
  ...ellie,
  job: 's/w engineer',
};
console.log(updated);
// {
//     name: 'Ellie',
//     age: 20,
//     home: { address: 'home' },
//     job: 's/w engineer'
//   }
