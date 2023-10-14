// JSON : JavaScript Object Notation
// 서버와 클라이언트(브라우저, 모바일) 간의 HTTP 통신을 위한
// 오브젝트 형태의 텍스트 포맷
// stringify(object): JSON
// parse(JSON): object
const ellie = {
  name: 'ellie',
  age: 20,
  eat: () => {
    console.log('eat');
  },
};

// 직렬화 Serializing : 객체를 문자열로 변환
const json = JSON.stringify(ellie); // 오브젝트를 json으로 변환
console.log(ellie); // { name: 'ellie', age: 20, eat: [Function: eat] }
console.log(json); // {"name":"ellie","age":20}
// json에 포함되는 것은 객체의 property 상태만!

// 역직렬화 Deserializing : 문자열 데이터를 자바스크립트 객체로 변환
const obj = JSON.parse(json); // json을 다시 오브젝트로 변환
console.log(obj); // { name: 'ellie', age: 20 }
