// 원시타입은 값이 복사되어 전달됨
let a = 1;
let b = a; // 1

b = 2;
console.log(a);
console.log(b); // a는 1 b는 2가 출력되어 나온다. 

// 객체타입은 참조값 (메모리주소, 레퍼런스)가 복사되어 전달됨
let apple = {
  name: '사과',
};

let orange = apple;
orange.name = '오렌지';

console.log(orange.name);
console.log(apple.name); // 오렌지로 바뀌어있다.
