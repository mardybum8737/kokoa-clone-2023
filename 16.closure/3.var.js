// let을 사용한 경우
function loop() {
  const array = [];
  // var와 let의 차이점!
  for (let i = 0; i < 5; i++) {
    array.push(function () {
      console.log(i);
    });
  }
  return array;
}
const array = loop();
array.forEach((func) => func());

// // var를 사용한 경우
// function loop() {
//   const array = [];
//   // var와 let의 차이점!
//   for (var i = 0; i < 5; i++) {
//     array.push(function () {
//       console.log(i);
//     });
//   }
//   return array;
// }

// const array = loop();
// array.forEach((func) => func());
