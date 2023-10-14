function Cat(name) {
  this.name = name;
  // 2. arrow 함수를 사용: arrow 함수는 렉시컬 환경에서의 this를 기억해요!
  this.printName = () => {
    console.log(`고양이의 이름을 출력한다옹: ${this.name}`);
  };
  //   // 1. bind 함수를 이용해서 수동적으로 바인딩 해주기
  //   this.printName = this.printName.bind(this);
}

function Dog(name) {
  this.name = name;
  this.printName = function () {
    console.log(`강아지의 이름을 출력한다멍: ${this.name}`);
  };
}

const cat = new Cat('냐옹');
const dog = new Dog('멍멍');
cat.printName(); // 고양이의 이름을 출력한다옹: 냐옹
dog.printName(); // 강아지의 이름을 출력한다멍: 멍멍

dog.printName = cat.printName;
dog.printName(); // 고양이의 이름을 출력한다옹: 냐옹

function printOnMonitor(printName) {
  console.log('모니터를 준비하고!, 전달된 콜백을 실행!');
  printName();
}
// 고정되지 않고 동적인 this
printOnMonitor(cat.printName);
// 모니터를 준비하고!, 전달된 콜백을 실행!
// 고양이의 이름을 출력한다옹: 냐옹
