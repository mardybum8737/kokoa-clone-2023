// 주어진 배열에서 중복을 제거 하라
const fruits = ['🍌', '🍎', '🍇', '🍌', '🍎', '🍑'];
//  ['🍌', '🍎', '🍇', '🍑']

function removeDup(array) {
  return [...new Set(array)];
}
console.log(removeDup(fruits));

// 주어진 두 세트의 공통된 아이템만 담고 있는 세트 만들어라

const set1 = new Set([1, 2, 3, 4, 5]);
const set2 = new Set([1, 2, 3]);

// 챗gpt 도움받은 내 답안...ㅎ
// function makeSet(set1, set2) {
//   const commonSet = new Set();
//   for (const item of set1) {
//     if (set2.has(item)) {
//       commonSet.add(item);
//     }
//   }

//   return commonSet;
// }
// console.log(makeSet(set1, set2));

//앨리 답안

function findIntersection(set1, set2) {
  return new Set([...set1].filter((item) => set2.has(item)));
}
console.log(findIntersection(set1, set2));
