// return을 명시적으로 하지 않으면 자동으로 undefined이 반환됨

function add(a, b) {
  return a + b;
}

const result = add(1, 2);
console.log(result);

function print(text) {
  console.log(text);
}
// 굳이 return 명령을 하지 않아도 됨

// return을 함수 중간에 하게 되면 함수가 종료됨
// 사용예: 조건이 맞지 않는 경우 함수 도입부분에서 함수를 일찍이 종료함!
function print(num) {
  if (num < 0) {
    return; // 이 경우 return undefined를 줄였다고 생각해도 된다.
  }
  console.log(num);
}

print(5);
