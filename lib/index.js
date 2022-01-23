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

function curry(f) {
  return (a, ..._) => (_.length ? f(a, ..._) : (..._) => f(a, ..._));
}

module.exports = {
  curry,
  map,
  filter,
  reduce,
  go,
  pipe,
};
