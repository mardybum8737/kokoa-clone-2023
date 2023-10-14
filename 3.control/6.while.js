// while (조건) {}
// 조건이 false가 될 때까지 {} 코드를 반복 실행

let num = 5;
while (num >= 0) {
  console.log(num);
  num--;
}

let isActive = false;
let i = 0;
while (isActive) {
  console.log('아직 살아있다.');
  if (i === 1000) {
    break;
  }
  i++;
}

do {
  console.log('아직살아있다!');
} while (isActive);

// 조건이 맞을 때만 사용하고 싶다면 while을 한번은 꼭 실행시키고 싶다면 do while을 사용한다.