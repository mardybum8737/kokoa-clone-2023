// switch도 조건문 conditional statement
// if와는 조금 성격이 다르다.
// 정해진 범위 안의 값에 대해 특정한 일을 해야 하는 경우 switch를 사용할 수 있다.
let day = 3; // 0 : 월요일, 1 : 화요일... 6: 일요일
let dayName;
if (day === 0) {
  dayName = '월요일';
} else if (day === 1) {
  dayName = '화요일';
} else if (day === 2) {
  dayName = '수요일';
} else if (day === 3) {
  dayName = '목요일';
} else if (day === 4) {
  dayName = '금요일';
} else if (day === 5) {
  dayName = '토요일';
} else if (day === 6) {
  dayName = '일요일';
}
console.log(dayName);

day = 10; // 0 : 월요일, 1 : 화요일... 6: 일요일
switch (day) {
  case 0:
    dayName = 'monday';
    break; // break를 안쓰면 '일요일'이 출력된다.
  case 1:
    dayName = 'tuesday';
    break;
  case 2:
    dayName = 'wednesday';
    break;
  case 3:
    dayName = 'thursday';
    break;
  case 4:
    dayName = 'friday';
    break;
  case 5:
    dayName = 'saturday';
    break;
  case 6:
    dayName = 'sunday';
    break;
  default:
    console.log('해당하는 요일이 없음!');
}
console.log(dayName);

let condition = '리자몽'; // okay, good -> 좋음! , bad -> 나쁨!
let text;
switch (condition) {
  case '고오스':
  case '무우마':
    text = '고스트!';
    break; // 브레이크 깜빡해서 버그 걸리는 경우가 많다.
  case '리자몽':
    text = '불!';
    break;
}
console.log(text);
