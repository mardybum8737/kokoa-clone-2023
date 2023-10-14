function add(num1, num2) {
  return num1 + num2;
}

const result = add(1, 2);
console.log(result);

// 사용예제 2

let lastName = '김';
let firstName = '지수';
// let fullName = `${lastName} ${firstName}`;
// console.log(fullName);
function fullName(firstName, lastName) {
  return `${lastName} ${firstName} 🤝`;
}
//한 곳에서 수정하면 같은 함수를 사용한 모든 곳에서 적용이 되기 때문에 훨씬 편리하다.
console.log(fullName(firstName, lastName));

let lastName2 = '방';
let firstName2 = '수호';
// let fullName2 = `${lastName2} ${firstName2}`;
// console.log(fullName2);

console.log(fullName(firstName2, lastName2));
