const text = 'hello';
function func() {
  console.log(text);
}
func(); // hello

// 예제 1
// function outer() {
//   const x = 0;
//   function inner() {
//     console.log(`inside inner : ${x}`); // inner 함수에서 외부에 있는 x 변수에 접근이 가능
//   }
//   return inner;
// }
// outer(); // inside inner : 0

// 예제 2
function outer() {
  const x = 0;
  function inner() {
    console.log(`inside inner : ${x}`); // inner 함수에서 외부에 있는 x 변수에 접근이 가능
  }
  return inner;
}
const func1 = outer();
func1(); // inside inner : 0
