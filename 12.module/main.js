// import { increase as increase1, getCount } from './counter.js';
import * as counter from './counter.js';

// default로 받아오는게 아니면
// import { increase as increase1 } from './counter.js';
// 이런 식으로 중괄호 안에 똑같은 이름을 사용해야한다.
counter.increase();
counter.increase();
counter.increase();
// const count = getCount();

console.log(counter.getCount());
