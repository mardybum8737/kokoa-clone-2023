function runInDelay(seconds) {
  return new Promise((resolve, reject) => {
    if (!seconds || seconds < 0) {
      reject(new Error('seconds가 0보다 작음'));
    }
    setTimeout(resolve, seconds * 1000);
  });
}

runInDelay(2)
  .then(console.log('타이머 완료'))
  //   .catch(error => console.error(error)) 인자가 error로 중복되므로 생략
  .catch(console.error)
  .finally(() => console.log('끝났다!'));
