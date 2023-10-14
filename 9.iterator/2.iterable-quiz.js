// 0부터 10 이하까지 숫자의 2배를 순회하는 이터레이터 (반복자) 만들기!
// 0, 1, 2, 3 .... , 9
// 0, 2, 4, 6 ...., 18
// [Symbol.iterator](): Iterator{ next(): {value, done}};

//내 답안
// const multiple = {
//   *[Symbol.iterator]() {
//     for (let i = 0; i < 10; i++) yield i * 2;
//   },
// };
// for (const num of multiple) {
//   console.log(num);
// }

// 앨리 답안
const multiple = {
  [Symbol.iterator]() {
    const max = 10;
    let num = 0;
    return {
      next() {
        return { value: num++ * 2, done: num > max };
      },
    };
  },
};

for (const num of multiple) {
  console.log(num);
}
