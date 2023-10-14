function magic() {
  return function calc(x) {
    return x * 42;
  };
}
function magic2(x) {
  return x * 42;
}
function magic3(x) {
  x * 42;
}

const answer = magic();
answer(1337); // 56154
magic(52);
console.log(answer(1337));
console.log(magic(52214));
console.log(magic2(5));
console.log(magic3(5));
