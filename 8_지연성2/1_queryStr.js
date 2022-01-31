const { go, reduce, curry, map, pipe } = require("../lib");

const queryStr = pipe(
  Object.entries,
  map(([key, value]) => `${key}=${value}`),
  reduce((acc, cur) => `${acc}&${cur}`)
);

console.log(queryStr({ limit: 10, offset: 10, type: "notice" }));
