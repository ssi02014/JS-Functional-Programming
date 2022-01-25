const log = console.log;

const map = curry((func, iter) => {
  const result = [];
  let cur;
  iter = iter[Symbol.iterator]();

  while (!(cur = iter.next()).done) {
    const value = cur.value;
    result.push(func(value));
  }
  return result;
});

const filter = curry((func, iter) => {
  const result = [];
  let cur;
  iter = iter[Symbol.iterator]();

  while (!(cur = iter.next()).done) {
    const value = cur.value;
    if (func(value)) result.push(value);
  }
  return result;
});

const reduce = curry((func, acc, iter) => {
  let cur;

  if (!iter) {
    iter = acc[Symbol.iterator]();
    acc = iter.next().value;
  } else {
    iter = iter[Symbol.iterator]();
  }

  while (!(cur = iter.next()).done) {
    const value = cur.value;
    acc = func(acc, value);
  }
  return acc;
});

const range = (length) => {
  const result = [];
  let idx = -1;

  while (++idx < length) {
    result.push(idx);
  }

  return result;
};

const take = curry((limit, iter) => {
  const result = [];
  let cur;
  iter = iter[Symbol.iterator]();

  while (!(cur = iter.next()).done) {
    const value = cur.value;
    result.push(value);
    if (result.length === limit) return result;
  }
  return result;
});

// go는 값을 리턴함
function go(...args) {
  return reduce((a, func) => func(a), args);
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
  range,
  take,
};
