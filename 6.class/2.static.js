// static 정적 프로퍼티, 메서드

class Fruit {
  static MAX_FRUITS = 4; // 클래스 레벨의 프로퍼티이기 때문에 각 인스턴스에서는 수정할 수 없다.
  constructor(name, emoji) {
    this.name = name;
    this.emoji = emoji;
  }

  display = () => {
    console.log(`${this.name}: ${this.emoji}`);
  };
  //인스턴스 레벨의 메서드

  static makeRandomFruit() {
    return new Fruit('banana', '🍌');
  }
  //클래스 레벨의 메서드,함수 여기서 한번 정의하고 재사용될 수 있다
  // 클래스 레벨의 메서드에서는 this를 참조할 수 없음
}

// console.log(Fruit.name) 이것은 템플릿에 불과하기 때문에 호출 할 수 없다.
// Fruit.display(); 클래스안의 함수를 그대로 호출 할 수 없다.

const banana = Fruit.makeRandomFruit();
console.log(banana);

const kiwi = new Fruit('kiwi', '🥝');
const orange = new Fruit('orange', '🍊');
console.log(kiwi);
console.log(orange);
console.log(kiwi.name);
console.log(kiwi.emoji);
kiwi.display();

Math.pow();
