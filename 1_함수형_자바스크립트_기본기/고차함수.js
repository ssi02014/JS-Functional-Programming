/**
 * 고차 함수는 함수를 값으로 다루는 함수이다. 보통 2가지 종류가 있다.
 * 1. 함수를 인자로 받아서 실행하는 함수 -> apply1, times
 * 2. 함수를 만들어 리턴하는 함수 (클로저를 만들어 리턴하는 함수) -> addMaker
 */

// apply
const apply1 = (f) => f(1);
const add2 = (a) => a + 2;
const subtract = (a) => a - 1;

console.log(apply1(add2)); // 3
console.log(apply1(subtract)); // 0

// 위 예시는 다음과 같다.
const apply2 = () => ((a) => a + 2)(1);
console.log(apply2()); // 3

// times
const times = (f, n) => {
  let i = -1;
  while (++i < n) f(i);
};

times(console.log, 3); // 0 1 2
times((a) => console.log(a + 10), 3); // 10, 11, 12

// addMaker
// (b) => a + b 함수가 a를 계속 기억한다. 이러한 함수를 클로저 함수라고 한다.
const addMaker = (a) => (b) => a + b;
const add10 = addMaker(10);
console.log(add10(5)); // 15
