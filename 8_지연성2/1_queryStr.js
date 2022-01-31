const { go, reduce, curry, map, pipe } = require("../lib");
const L = require("../lib/delay");

const join = curry((seperator = ",", iterator) => {
  return reduce((a, b) => `${a}${seperator}${b}`, iterator);
});

const queryStr = pipe(
  L.entries,
  L.map(([key, value]) => `${key}=${value}`),
  join("&")
);

function* a() {
  yield 10;
  yield 11;
  yield 12;
  yield 13;
  yield 14;
  yield 15;
}

console.log(queryStr({ limit: 10, offset: 10, type: "notice" }));
console.log(join("&", [1, 2, 3, 4]));
console.log(join("&", a()));
