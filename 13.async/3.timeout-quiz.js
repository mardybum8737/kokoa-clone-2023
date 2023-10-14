// 주어진 seconds가 지나면 callback 함수를 호출함
// 단, seconds가 0보다 작으면 에러를 던지자!

// 앨리 답안
function runInDelay(callback, seconds) {
  if (!callback) {
    throw new Error('callback 함수를 전달 해야함');
  }
  if (!seconds || seconds < 0) {
    throw new Error('seconds는 0보다 커야 함');
  }
  setTimeout(callback, seconds * 1000);
}

try {
  runInDelay(() => {
    console.log('콜백함수 발동');
  }, 3);
} catch (error) {}
