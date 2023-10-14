// 퀴즈1: 주어진 배열 안의 딸기 아이템을 키위로 교체하는 함수를 만들기
// 단, 주어진 배열을 수정하지 않도록!
// input: ['🍌', '🍓', '🍇', '🍓']
// output: [ '🍌', '🥝', '🍇', '🥝' ]

// 퀴즈1 앨리 답안
// function replace(array, from, to) {
//   return array.map((item) => (item === from ? to : item));
// }
// 좀더 풀어서 적은 버전
// function replace(array, from, to) {
//     return array.map(item => {
//         if(item === from) {
//             return to;
//         } else {
//             return item;
//         }
//     })
// }

// const array = ['🍌', '🍓', '🍇', '🍓'];
// const result = replace(array, '🍓', '🥝');
// console.log(result);

// 퀴즈 1 내 답안
// function replace(array, from, to) {
//   const duplicated = Array.from(array);
//   const replacing = duplicated.map((item) => {
//     if (item === from) {
//       return (item = to);
//     } else {
//       return item;
//     }
//   });
//   return replacing;
// }
// const array = ['🍌', '🍓', '🍇', '🍓'];
// const result = replace(array, '🍓', '🥝');
// console.log(result);

// 퀴즈2:
// 배열과 특정한 요소를 전달받아,
// 배열안에 그 요소가 몇개나 있는지 카운트 하는 함수 만들기
// input: [ '🍌', '🥝', '🍇', '🥝' ], '🥝'
// output: 2

// 퀴즈2 내 답안
// function count(array, it) {
//   const filtering = array.filter((item) => item === it);
//   const num = filtering.length;
//   return num;
// }
// console.log(count(['🍌', '🥝', '🍇', '🥝','🍇','🍇'], '🍇'));

// 퀴즈2 앨리 답안1
// function count(array, item) {
//   return array.reduce((count, value) => {
//     if (value === item) {
//       count++;
//     }
//     return count;
//   }, 0);
// }
// console.log(count(['🍌', '🥝', '🍇', '🥝'], '🥝'));

// 퀴즈2 앨리 답안2
// function count(array, item) {
//   return array.filter((value) => value === item).length;
// }
// console.log(count(['🍌', '🥝', '🍇', '🥝'], '🥝'));

// 퀴즈3: 배열1, 배열2 두개의 배열을 전달받아,
// 배열1 아이템중 배열2에 존재하는 아이템만 담고 있는 배열 반환
// input: ['🍌', '🥝', '🍇'],  ['🍌', '🍓', '🍇', '🍓']
// output: [ '🍌', '🍇' ]

// 퀴즈3 앨리 답안
// function match(input, search) {
//   return input.filter((item) => search.includes(item));
// }
// console.log(match(['🍌', '🥝', '🍇'], ['🍌', '🍓', '🍇', '🍓']));
// 출력 : [ '🍌', '🍇' ]

// 퀴즈 4
// 5 이상(보다 큰)의 숫자들의 평균

const nums = [3, 16, 5, 25, 4, 34, 21];
// function cacul(arr) {
//   const filter = arr.filter((item) => item > 5);
//   const total = filter.reduce((sum, value) => {
//     sum += value;
//     return sum;
//   }, 0);
//   const average = total / filter.length;
//   return average;
// }
// const result = cacul(nums);
// console.log(result);
const result2 = nums //
  .filter((num) => num > 5) // [16, 25, 34, 21];
  .reduce((avg, num, _, array) => avg + num / array.length, 0);
console.log(result2);
