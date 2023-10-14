// 접근자 프로퍼티 (Accessor)
// 클래스의 상태처럼 변수처럼 보이기는 하는데 실제로는 함수를 말한다.

class Player {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  get fullName() {
    // ** 우리가 함수를 호출하는 것은 특정한 일을 수행하기 위해서인데, 여기쓰인 함수는 속성에 가깝기 때문에
    return `${this.firstName} ${this.lastName}`; // 속성의 한 부분이라 간주되는 이런 함수들을 다른 속성들처럼 부르고 싶을 때 get을 사용한다.
  } // 행위는 아닌데 set 되어서 들어오는 숫자를 조금더 제어하고 싶을 때 (ex. 어떤 숫자를 set할 때 0이하 숫자는 0으로 표시한다던가)

  set fullName(value) {
    console.log(value);
  }
}

const player = new Player('Jimmy', 'Buttler');
console.log(player.firstName);
console.log(player.fullName); // 함수로 만들어야 호출하는 순간에 데이터가 업데이트 되어서 보여지기 때문에 함수식으로 만드는 것
// player.fullName 이런 식으로 접근을 하면 get fullName
player.fullName = 'Lebron James';
// Lebron James라는 새로운 이름을 할당하면 set fullName을 불러온다
