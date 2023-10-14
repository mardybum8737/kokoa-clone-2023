// 두개의 Tiger, Dog 클래스가 공통된 함수를 가지고 있을 경우에
// 상속을 통해서 어미 class로부터 공통된 함수를 공유할 수 있다.

// class Tiger {
//   constructor(color) {
//     this.color = color;
//   }
//   eat() {
//     console.log('먹자!');
//   }
//   sleep() {
//     console.log('잔다');
//   }
// }

// class Dog {
//   constructor(color) {
//     this.color = color;
//   }
//   eat() {
//     console.log('먹자!');
//   }
//   sleep() {
//     console.log('잔다');
//   }
//   play() {
//     console.log('놀자아~!');
//   }
// }

class Animal {
  constructor(color) {
    this.color = color;
  }
  eat() {
    console.log('동물들은 먹어야지!');
  }
  sleep() {
    console.log('동물들은 자야해..');
  }
}

class Tiger extends Animal {}
const tiger = new Tiger('노랑이');
console.log(tiger);
tiger.sleep();
tiger.eat();

class Dog extends Animal {
  constructor(color, ownerName) {
    super(color);
    this.ownerName = ownerName;
  }
  play() {
    console.log('놀자아아아!');
  }
  eat() {
    super.eat(); // super를 통해 부모에 있는 eat을 호출한 다음
    console.log('강아지가 먹을거야!'); // 추가로 원하는 동작을 수행
    // 반대로 하고 싶다면 순서만 바꿔서 작성하면 된다.
  }
  // 자식 클래스에서 부모 클래스의 함수를 덮어씌우는 것을 오버라이딩 overriding이라 한다.
}

const dog = new Dog('파랑이', '애플방');
console.log(dog);
dog.sleep();
dog.eat();
dog.play();
