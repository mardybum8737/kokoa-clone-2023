const obj = {
  name: '엘리',
  age: 20,
};
//또는
// const obj = new Object();
// obj.name = '엘리';
// obj.age = 20;
// 이렇게도 가능하지만 불편함

// 코딩하는 시점에, 정적으로 접근이 확정됨 \\
obj.name;
obj.age;

// 동적으로 속성에 접근하고 싶을 때 대괄호 표기법 사용!
function getValue(obj, key) {
  return obj[key];
  // return obj.key; 이렇게 작성하면 key라는 이름의 key가 없어서 작동하지 않는다.
}
console.log(getValue(obj, 'name'));

function addKey(obj, key, value) {
  obj[key] = value;
}
addKey(obj, 'gender', 'female');
console.log(obj.gender);

function deleteKey(obj, key) {
  delete obj[key];
}
deleteKey(obj, 'gender');
console.log(obj);

function showProps(obj, objName) {
  let result = '';
  for (let i in obj) {
    // obj.hasOwnProperty()를 사용해서 객체의 프로토타입 체인에 존재하지 않는 속성을 제외
    if (obj.hasOwnProperty(i)) {
      result += `${objName}.${i} = ${obj[i]}\n`;
    }
  }
  console.log(result);
}
console.log(Object.keys(obj));
