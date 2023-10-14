// Boolean
const isTrue = true;
// const isTrue = new Boolean(true); 이렇게 작성해도 되지만 객체로 작성하면 메모리를 더 잡아먹어서 불필요
console.log(isTrue.valueOf());

/**
 *Falshy
 * 0
 * -0
 * null
 * NaN
 *undefined
 * ' '
 */

/**
 * Truthy
 * 1
 * -1
 * '0' // 문자열안에 값이 들어있기 때문에 truthy
 * 'false'
 * []
 * {} // 아무것도 안들어있지만 오브젝트 자체가 값이기 떄문에 truthy
 */
