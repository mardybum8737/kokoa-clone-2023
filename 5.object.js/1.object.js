// Object literal { key : value }
// new object()
// object.create();
// key - 문자, 숫자, 문자열, 심볼
// value - 원시값, 객체 (함수)
let apple = {
  name: 'apple',
  'hello-bye': '🖐', // 특수한 경우가 아니라면 그냥 helloBye: 이런 식으로 만드는게 낫다.
  0: 1,
  ['hello-bye1']: '🖐',
};

// 속성, 데이터에 접근하기 위해서는
console.log(apple.name); // 마침표 표기법 dot notation
console.log(apple['hello-bye1']); // 대괄호 표기법 bracket notation
console.log(apple['name']);

//속성 추가
apple.emoji = '🍎';
console.log(apple['emoji']);

// 속성 삭제
delete apple.emoji;
console.log(apple);
