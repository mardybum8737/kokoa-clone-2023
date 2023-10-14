// 프로토타입을 베이스로 한 객체지향 프로그래밍
class Animal {
  constructor(name, emoji) {
    this.name = name;
    this.emoji = emoji;
  }
  printName = function () {
    console.log(`${this.name} ${this.emoji}`);
  };
}

class Dog extends Animal {
  constructor(name, emoji, owner) {
    super(name, emoji);
    this.owner = owner;
  }

  play = () => {
    console.log('같이 놀자용!');
  };
}

class Tiger extends Animal {
  hunt = () => {
    console.log('사냥하자! ..🐇..');
  };
}

const dog1 = new Dog('멍멍', '🐶', '엘리');
dog1.play(); // 같이 놀자용!
dog1.printName(); // 멍멍 🐶
const tiger1 = new Tiger('어흥', '🐯');
tiger1.printName(); // 어흥 🐯
tiger1.hunt(); // 사냥하자! ..🐇..

// 상속도 확인은 instanceof
console.log(dog1 instanceof Dog); // true
console.log(dog1 instanceof Animal); // true
console.log(dog1 instanceof Tiger); // false
console.log(tiger1 instanceof Dog); // false
console.log(tiger1 instanceof Animal); // true
console.log(tiger1 instanceof Tiger); // true
