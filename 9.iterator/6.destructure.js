// 구조 분해 할당 Destructuring Assignment
// 데이터 뭉치 (그룹화)를 쉽게 만들 수 있다.
const fruits = ['🍏', '🥝', '🍓', '🍌'];
const [first, second, ...others] = fruits;
console.log(fruits[0]); // 🍏
console.log(first); // 🍏
console.log(second); // 🥝
console.log(others); // [ '🍓', '🍌' ]

const point = [1, 2, 8];
const [x, y, z = 0] = point;
console.log(x); // 1
console.log(y); // 2
console.log(z); // 8,
// 구조분해할당을 할 때 z값에 0을 할당하더라도
// 변수 선언할 때 8을 할당했던 것이 우선순위가 높으므로 8이 출력된다.

function createEmoji() {
  return ['apple', '🍎'];
}
// const array = createEmoji();
const [title, emoji] = createEmoji();
console.log(title); // apple
console.log(emoji); // 🍎

const ellie = { name: 'Ellie', age: 20, job: 's/w engineer' };
// function display(person) {
//     console.log('이름', person.name);
//     console.log('나이', person.age);
//     console.log('직업', person.job);
function display({ name, age, job }) {
  console.log('이름', name);
  console.log('나이', age);
  console.log('직업', job);
}
display(ellie);
// 이름 Ellie
// 나이 20
// 직업 s/w engineer

const { name, age, job: occupation, pet = '강아지' } = ellie;
console.log(name); // Ellie
console.log(age); // 20
console.log(occupation); // s/w engineer , ellie의 key가 job에서 occupation으로 변화
console.log(pet); //강아지
