const { go, range, reduce, map, filter, take } = require("../lib");
const L = require("../lib/delay");

go(
  range(10),
  map((n) => n + 10),
  filter((n) => n % 2),
  take(2),
  console.log
);

go(
  L.range(10),
  L.map((n) => n + 10),
  L.filter((n) => n % 2),
  take(2),
  console.log
);
