// 오브젝트는 단 하나의 prototype을 가리 킬수 있다. (부모는 단 하나!)
// 하지만! 여러 개의 함수들을 상속하고 싶다!
// Mixin!
const play = {
  play: function () {
    console.log(`${this.name} 놀아요!`);
  },
};

const sleep = {
  sleep: function () {
    console.log(`${this.name} 자요!`);
  },
};

const eat = {
  eat: function () {
    console.log(`${this.name} 먹어요!`);
  },
};

function Dog(name) {
  this.name = name;
}

Object.assign(Dog.prototype, play, sleep, eat);
const dog = new Dog('멍멍');
console.log(dog); // Dog { name: '멍멍' }
dog.play(); // 멍멍 놀아요!
dog.sleep(); // 멍멍 자요!
dog.eat(); // 멍멍 먹어요!

// 자바스크립트에서 class는 결국 prototype을 베이스로 하고 있기 때문에
class Animal {}
class Tiger extends Animal {
  constructor(name) {
    super();
    this.name = name;
  }
}

Object.assign(Tiger.prototype, play, sleep, eat);
const tiger = new Tiger('어흥');
tiger.play(); // 어흥 놀아요!
tiger.sleep(); // 어흥 자요!
tiger.eat(); // 어흥 먹어요!
