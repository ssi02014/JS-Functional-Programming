/**
 * 함수형 프로그래밍에서는 코드를 값으로 다루는 아이디어를 많이 사용한다.
 * 코드를 값으로 다룰 수 있기 때문에 어떠한 함수가 코드인 함수를 인자로 받아서 평가하는 시점을 원하는대로 다룰 수 있다.
 * 따라서 코드의 표현력을 높인다든지 재밌는 아이디어를 갖고 있다.
 */

const reduce = (f, acc, iter) => {
  if (!iter) {
    iter = acc[Symbol.iterator]();
    acc = iter.next().value;
  }
  for (const a of iter) {
    acc = f(acc, a);
  }
  return acc;
};

// go는 값을 리턴함
function go(...args) {
  return reduce((a, f) => f(a), args);
}

// pipe는 함수를 리턴함.
function pipe(f, ...fs) {
  return (...as) => go(f(...as), ...fs);
}

go(
  0,
  (a) => a + 1,
  (a) => a + 10,
  (a) => a + 100,
  console.log
); // 111

const f = pipe(
  (a, b) => a + b,
  (a) => a + 10,
  (a) => a + 100
); // 111

console.log(f(0, 1));
