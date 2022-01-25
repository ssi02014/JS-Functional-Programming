const { go, reduce, curry } = require("../lib");

const add = (a, b) => a + b;
// range와 L.range
const range = (length) => {
  const result = [];
  let idx = -1;

  while (++idx < length) {
    result.push(idx);
  }

  return result;
};

const L = {};
L.range = function* (length) {
  let idx = -1;

  while (++idx < length) {
    yield idx;
  }
};

//take
const take = (limit, iter) => {
  const result = [];

  for (const el of iter) {
    result.push(el);
    if (result.length === limit) return result;
  }
  return result;
};

console.log(take(5, range(100))); // [0, 1, 2, 3, 4]
console.log(take(5, L.range(100))); // [0, 1, 2, 3, 4]

/*
  만약 range(100000)이라면 0~100000 까지의 배열을 만들고 거기서 5개를 뽑기 때문에 비효율적임. 
  
  하지만 L.range는 0~100000 까지의 배열을 만들지 않고 딱 5개의 값만 가진 배열을 만들기 때문에 효율적임
*/

// go와 curry를 이용한 take
const takeWithCurry = curry((limit, iter) => {
  const result = [];

  for (const el of iter) {
    result.push(el);
    if (result.length === limit) return result;
  }
  return result;
});

go(range(10000), takeWithCurry(5), reduce(add), console.log); // 10
go(L.range(10000), takeWithCurry(5), reduce(add), console.log); // 10
