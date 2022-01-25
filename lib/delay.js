const { curry } = require("./index");

const L = {};
L.range = function* (length) {
  let idx = -1;

  while (++idx < length) {
    yield idx;
  }
};

L.map = curry(function* (func, iter) {
  let cur;
  iter = iter[Symbol.iterator]();

  while (!(cur = iter.next()).done) {
    const value = cur.value;
    yield func(value);
  }
});

L.filter = curry(function* (func, iter) {
  let cur;
  iter = iter[Symbol.iterator]();

  while (!(cur = iter.next()).done) {
    const value = cur.value;
    if (func(value)) {
      yield value;
    }
  }
});

module.exports = L;
