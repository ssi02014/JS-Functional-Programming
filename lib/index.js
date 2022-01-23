const log = console.log;
const map = curry((f, iter) => {
  let res = [];
  for (const a of iter) {
    res.push(f(a));
  }
  return res;
});

const filter = curry((f, iter) => {
  const res = [];
  for (const a of iter) {
    if (f(a)) res.push(a);
  }
  return res;
});

const reduce = curry((f, acc, iter) => {
  if (!iter) {
    iter = acc[Symbol.iterator]();
    acc = iter.next().value;
  }
  for (const a of iter) {
    acc = f(acc, a);
  }
  return acc;
});

// go는 값을 리턴함
function go(...args) {
  return reduce((a, f) => f(a), args);
}

// pipe는 함수를 리턴함.
function pipe(f, ...fs) {
  return (...as) => go(f(...as), ...fs);
}

function curry(func) {
  return (arg, ...rest) => {
    if (rest.length) {
      return func(arg, ...rest); // 인자가 2개 이상 전달되었을 때 받아둔 함수 즉시 실행
    } else {
      return (...args) => func(arg, ...args); // 인자가 2개 이상이 아니면 다시 함수를 리턴
    }
    // return rest.length ? func(arg, ...rest) : (...args) => func(arg, ...args);
  };
}

module.exports = {
  log,
  curry,
  map,
  filter,
  reduce,
  go,
  pipe,
};
