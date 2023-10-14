const fruits = ['🍌', '🥝', '🍇', '🍓'];

// 배열 아이템을 참조하는 방법
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);
console.log(fruits.length);

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// 추가, 삭제하는 방법 중 종지 않은 방식 💩
// index로 추가하면 중간의 빈 아이템이 생기거나, 이미 존재하는 다른 아이템에 덮어 씌워질 수 있기 때문에
// fruits[6] = '🍎';
// console.log(fruits);
// 배열 마지막에 아이템을 추가하고 싶다면 차라리
fruits[fruits.length] = '🍎';
console.log(fruits);

// 삭제를 하는 안좋은 방법
// 삭제해도 빈 아이템 칸이 존재하게된다.
delete fruits[1];
console.log(fruits);
