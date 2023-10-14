// const apple = {
//   name: 'apple',
//   display: function () {
//     console.log(`${this.name}: 🍎`);
//   },
// };

// const orange = {
//   name: 'orange',
//   diplay: function () {
//     console.log(`${this.name}: 🍊`);
//   },
// };

// 위 코드와 같이 반복적인 코드를 사용해서 객체를 만드는 것보다 템플릿으로 만드는 방법을 사용하기 위해서 생성자 함수 사용
// 생성자 함수

// console.log(apple);
// console.log(orange);

function Fruit(name, emoji) {
  //Fruit의 F처럼 대문자를 사용하면 생성자 함수를 사용할 수 있다.
  this.name = name;
  this.emoji = emoji;
  this.display = () => {
    console.log(`${this.name}: ${this.emoji}`);
  };
  // return this; // 생략해도 괜찮다. 생성자 함수에서는 자동으로 return이 이루어진다.
}

const kiwi = new Fruit('kiwi', '🥝');
const orange = new Fruit('orange', '🍊');
console.log(kiwi);
console.log(orange);
console.log(kiwi.name);
console.log(kiwi.emoji);
kiwi.display();
