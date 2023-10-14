// 삼항 조건 연산자 Ternary operator
// if 문을 간단히 작성할 수 있는 방법
// 조건식 ? 참인경우 : 거짓인경우
let fruit = 'apple';
if (fruit === 'apple') {
  console.log('🍎');
} else if (fruit === 'orange') {
  console.log('🍊');
} else {
  console.log('🍕');
}

fruit === 'apple' ? console.log('🍎') : console.log('🍕');

let emoji = fruit === 'apple' ? '🍎' : '🍕'; // fruit이 apple인지 아닌지에 따라 사과 이모지나 피자 이모지가 emoji에 할당된다.
console.log(emoji);
