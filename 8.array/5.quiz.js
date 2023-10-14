// 퀴즈1: 주어진 배열 안의 딸기 아이템을 키위로 교체하는 함수를 만들기
// 단, 주어진 배열을 수정하지 않도록!
// input: ['🍌', '🍓', '🍇', '🍓']
// output: [ '🍌', '🥝', '🍇', '🥝' ]

/* 앨리 해답 */
// function replace(array, from, to) {
//   const duplicated = Array.from(array);
//   for (let i = 0; i < duplicated.length; i++) {
//     if (duplicated[i] === from) {
//       duplicated[i] = to;
//     }
//   }
//   return duplicated;
// }
// const array = ['🍌', '🍓', '🍇', '🍓'];
// const result = replace(array, '🍓', '🥝');
// console.log(result);

// 퀴즈2:
// 배열과 특정한 요소를 전달받아,
// 배열안에 그 요소가 몇개나 있는지 카운트 하는 함수 만들기
// input: [ '🍌', '🥝', '🍇', '🥝' ], '🥝'
// output: 2

/* 내 답안 */
// function count(array, fruit) {
//   let num = 0;
//   const copy = Array.from(array); // 숫자만 필요하니까 필요없는 줄
//   for (let i = 0; i < copy.length; i++) {
//     if (copy[i] === fruit) {
//       num++;
//     }
//   }
//   return num;
// }
// const array = ['🍌', '🥝', '🍇', '🥝'];
// const countDown = count(array, '🥝');
// console.log(countDown);

/* 앨리 답안 */
// function count(array, item) {
//   let counter = 0;
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] === item) {
//       counter++;
//     }
//   }
//   return counter;
// }
// console.log(count(['🍌', '🥝', '🍇', '🥝'], '🥝'));

// 퀴즈3: 배열1, 배열2 두개의 배열을 전달받아,
// 배열1 아이템중 배열2에 존재하는 아이템만 담고 있는 배열 반환
// input: ['🍌', '🥝', '🍇'],  ['🍌', '🍓', '🍇', '🍓']
// output: [ '🍌', '🍇' ]

// 내 답안
// function check(array1, array2) {
//   const result = new Array(); // const result = [];
//   const copy = Array.from(array1);
//   for (let i = 0; i < copy.length; i++) {
//     if (array2.includes(copy[i])) {
//       result.push(copy[i]);
//     }
//   }
//   return result;
// }
// console.log(check(['🍌', '🥝', '🍇'], ['🍌', '🍓', '🍇', '🍓']));

// 앨리 답안
function match(input, search) {
  const result = [];
  for (let i = 0; i < input.length; i++) {
    if (search.includes(input[i])) {
      result.push(input[i]);
    }
  }
}
