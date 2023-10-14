function a() {
  return 1;
}

function b() {
  return a() + 1;
}

function c() {
  return b() + 1;
}

const result = c();
console.log(result); // 3

// 자바스크립트는 동기적으로 실행되기 때문에 무거운 작업을 수행하는데 적합하지 않다

// 자바스크립트 엔진에 있는 Call Stack은 한번에 하나의 작업만 수행할 수 있다.
// 실행 순서 역시 기억하고 있다.
// 우리가 비동기적으로 수행하기 위해서는 자바스크립트 런타임 환경, 호스트 환경에서 제공해주는
// 다양한 API를 사용해야한다. 대부분의 API들은 병렬적으로 처리해준다.
// 우리가 원하는 콜백함수를 던져 놓으면 API 비동기적 작업이 끝나고 나면
// 등록해놓은 콜백함수를 Task Queue에 넣게 된다.
// 자바스크립트의 Event Loop는 Call Stack과  Task Queue를 감시하며
// Call Stack이 비어있을 때만 Task Queue에 있는 콜백함수를 Call Stack으로 옮긴다
