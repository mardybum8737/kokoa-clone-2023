// 배열의 함수들
// 배열 자체를 변경하는지, 새로운 배열을 반환하는지
const fruits = ['🍎', '🍌', '🥝'];

// 특정한 오브젝트가 배열인지 체크
console.log(Array.isArray(fruits)); // true
console.log(Array.isArray({})); // false

// 특정한 아이템의 위치를 찾을 때
console.log(fruits.indexOf('🍎')); // 0

// 배열안에 특정한 아이템이 있는지 확인
console.log(fruits.includes('🥝')); // true

// 추가 - 제일 뒤
let length = fruits.push('🍊'); // 배열 자체를 수정 (업데이트)
console.log(fruits);
console.log(length);

// 추가 - 제일 앞
length = fruits.unshift('🍓'); // 배열 자체를 수정 (업데이트)
console.log(fruits);
console.log(length);

// 제거 - 제일 뒤
let lastItem = fruits.pop(); // 배열 자체를 수정 (업데이트)
console.log(fruits);
console.log(lastItem);

// 제거 - 제일 앞
lastItem = fruits.shift(); // 배열 자체를 수정 (업데이트)
console.log(fruits);
console.log(lastItem);

// 중간에 추가 또는 삭제
const deleted = fruits.splice(1, 2); // 배열 자체를 수정 (업데이트)
console.log(fruits);
console.log(deleted);
fruits.splice(1, 0, '🎃', '👻'); // 배열 자체를 수정 (업데이트)
console.log(fruits);

// 잘라진 새로운 배열을 만듬
let newArr = fruits.slice(0, 3); // 기존의 배열은 그대로 두고 잘려진 새로운 배열을 생성
console.log(newArr);
console.log(fruits);

newArr = fruits.slice(-2);
console.log(newArr);
fruits.filter();

// 여러개의 배열을 붙여줌
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = arr1.concat(arr2);
console.log(arr1); // [ 1, 2, 3 ]
console.log(arr2); // [ 4, 5, 6 ]
console.log(arr3); // [ 1, 2, 3, 4, 5, 6 ]

// 순서를 거꾸로
const arr4 = arr3.reverse();
console.log(arr4); // [ 6, 5, 4, 3, 2, 1 ]

console.clear();
// 중첩 배열을 하나의 배열로 쫙 펴기
let arr = [
  [1, 2, 3],
  [4, [5, 6]],
];
console.log(arr); // [ [ 1, 2, 3 ], [ 4, [ 5, 6 ] ] ]
console.log(arr.flat()); // [ 1, 2, 3, 4, [ 5, 6 ] ]
// 배열 안에 또 다른 배열이 있으면 그걸 빼버리고 하나하나씩 풀어서 플랫하게 만들어준다.
// 1단계까지만 풀어주고 배열 안에 배열 안에 또 배열이 존재하면 배열로 남아 있다.

// 2단계까지 플랫 시키고 싶으면 괄화안에 2를 넣으면 된다. 3단계까지 원하면 3...
console.log(arr.flat(2)); // [ 1, 2, 3, 4, 5, 6 ]

// flat은 기존 배열을 수정하지않고 새로운 배열을 생성하는 것

arr = arr.flat(3);
// 특정한 값으로 배열을 채우기
arr.fill(0); // 베얄 자체를 수정
console.log(arr);

arr.fill('s', 1, 3); // end index는 포함하지 않는다.
console.log(arr);

arr.fill('a', 1); // end index 없으면 start index부터 전부
console.log(arr);

// 배열을 문자열로 합하기
let text = arr.join();
console.log(text); // 0,a,a,a,a,a
text = arr.join(' | '); // 0 | a | a | a | a | a
console.log(text);
