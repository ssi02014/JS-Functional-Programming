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

go(
  L.range(10),
  L.filter((n) => n % 2),
  L.map((n) => n + 10),
  take(2),
  console.log
);

/* 
  map, filter 계열 함수들이 가지는 결합 법칙 

  - 사용하는 데이터가 무엇인지
  - 사용하는 보조 함수가 순수 함수라면 무엇이든지
  - 아래와 같이 결합한다면 둘 다 결과가 같다.

  [[mapping, mapping], [filtering, filtering], [mapping, mapping]]
  =
  [[mapping, filtering, mapping], [mapping, filtering, mapping]]
*/
