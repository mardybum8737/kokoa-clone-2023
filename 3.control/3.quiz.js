// 퀴즈
let num = 101;
// num의 숫자가 짝수이면 👍, 홀수라면 👎을 출력하도록

if (num % 2 === 0) {
  console.log('👍');
} else {
  console.log('👎');
}

// ternary
let emoji = num % 2 === 0 ? console.log('👍') : console.log('👎');
// 위 코드를 더 간단하게 쓰는 방법
let emoji = num % 2 === 0 ? '👍' : '👎';
console.log(emoji);