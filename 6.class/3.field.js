// 접근제어자를 이용해 캡슐화할 수 있다.
// private(#), public(기본), protected

class Fruit {
  #name;
  #emoji; // constructor에서 주어지는 데이터라면 생략이 가능하다
  #type = '과일'; // 인스턴스가 만들어질 때 초기화 되어야한다면 생성자 밖에서
  // 설정할 수 있다.
  constructor(name, emoji) {
    this.#name = name;
    this.#emoji = emoji;
  }
  #display = () => {
    console.log(`${this.#name}: ${this.#emoji}`);
  };
}

const kiwi = new Fruit('kiwi', '🥝');
const orange = new Fruit('orange', '🍊');
console.log(kiwi);
console.log(orange);

// kiwi.#name = '오렌지'; // #field는 외부에서 접근이 불가능
