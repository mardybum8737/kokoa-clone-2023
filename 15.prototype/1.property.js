const dog = { name: '와우', emoji: '🐶' };

console.log(Object.keys(dog)); // [ 'name', 'emoji' ]
console.log(Object.values(dog)); // [ '와우', '🐶' ]
console.log(Object.entries(dog)); // [ [ 'name', '와우' ], [ 'emoji', '🐶' ] ]

console.log('name' in dog); // true, 강아지 안에 'name'이라는 key가 있는지 묻는 것
console.log(dog.hasOwnProperty('name')); // 마찬기지로 'name'이라는 이름의 property가 있는 지 확인
// 다시 복습
// A JavaScript property is a member of an object that associates a key with a value.
// A JavaScript object is a data structure that stores a collection of properties.

// 오브젝트의 각각의 프로퍼티는 프로퍼티 디스크립터라고 하는 객체로 저장됨
const descriptors = Object.getOwnPropertyDescriptors(dog);
console.log(descriptors);
//
// {
//   name: { value: '와우', writable: true, enumerable: true, configurable: true },
//   emoji: { value: '🐶', writable: true, enumerable: true, configurable: true }
// }
// writable : 값 수정 여부
// enumerable : 값을 열거 할 수 있는지, iterate 할 수 있는지
// configurable : 속성 값을 수정할 수 있는지, 아니면 완전히 삭제 할 수 있는지

const desc = Object.getOwnPropertyDescriptor(dog, 'name');
console.log(desc);
// { value: '와우', writable: true, enumerable: true, configurable: true }

Object.defineProperty(dog, 'name', {
  value: '알밤',
  writable: false,
  enumerable: false,
  configurable: false,
});
console.log(dog.name); // 알밤
console.log(Object.keys(dog)); // [ 'emoji' ], 더 이상 열거될 수 없음

delete dog.name;
console.log(dog.name); // 알밤 (업데이트가 불가능하기 때문에)

const student = {};
Object.defineProperties(student, {
  firstName: {
    value: '영희',
    writable: true,
    enumerable: true,
    configurable: true,
  },
  lastName: {
    value: '김',
    writable: true,
    enumerable: true,
    configurable: true,
  },
  fullName: {
    get() {
      return `${this.lastName} ${this.firstName}`;
    },
    set(name) {
      [this.lastName, this.firstName] = name.split(' ');
    },
    configurable: true,
  },
});
console.log(student); // { firstName: '영희', lastName: '김' }
console.log(student.fullName); // 김영희
