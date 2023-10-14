// Bubbling up, propagating
function a() {
  throw new Error('error!');
}

function b() {
  try {
    a();
  } catch (error) {
    console.log('생각해보니 이 에러는 내가 핸들링 하기 힘들다..');
    throw error;
  }
}

function c() {
  b();
}

try {
  c();
} catch (error) {
  console.log('Catched in c!');
}
console.log('done!');
