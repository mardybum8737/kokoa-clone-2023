// null, undefined
let variable;
console.log(variable); // undefined

variable = null;
console.log(variable); // null

let activeItem; // 아직 활성화된 아이템이 있는지 없는지 모르는 상태!
activeItem = null; // 활성화된 아이템이 없는 상태!

console.log(typeof null); // 확실하게 비어 있다는 것을 말해주고 싶을 때 사용한다.
console.log(typeof undefined); // 정해지지 않은 빈 공간
