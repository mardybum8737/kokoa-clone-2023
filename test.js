class Person {
  constructor(name) {
    this.name = name;
  }

  sayHello() {
    console.log(`Hello, my name is ${this.name}`);
  }
}

const people = [new Person('Alice'), new Person('Bob'), new Person('Charlie')];

// thisArg로 Person 클래스의 인스턴스를 지정하여 sayHello 메서드를 호출합니다.
people.forEach(function () {
  this.sayHello(); // this는 Person 클래스의 인스턴스입니다.
}, people[1]);
