// 객체를 손쉽게 만들 수 있는 템플릿
// 1. 생성자 함수 (오래된 고전적인 방법)
// 2. 클래스 ✨

class Fruit {
  // 생성자: new 키워드로 객체를 생성할 때 호출되는 함수
  constructor(name, emoji) {
    this.name = name;
    this.emoji = emoji;
  }
  //   fucntion display = () => {    //이렇게 하면 안됨
  //     console.log(`${this.name}: ${this.emoji}`);
  // display () {} // 이건 괜찮음
  display = () => {
    console.log(`${this.name}: ${this.emoji}`);
  };
}

// kiwi는 Fruit 클래스의 인스턴스이다.
const kiwi = new Fruit('kiwi', '🥝');
// orange는 Fruit 클래스의 인스턴스이다.
const orange = new Fruit('orange', '🍊');
console.log(kiwi);
console.log(orange);
console.log(kiwi.name);
console.log(kiwi.emoji);
kiwi.display();

//obj는 객체이고, 어떤 클래스의 인스턴스도 아니다.
const obj = { name: 'ellie' };
