const { reduce } = require("../lib");

const add = (a, b) => a + b;

// range
const range = (length) => {
  const result = [];
  let idx = -1;

  while (++idx < length) {
    result.push(idx);
  }

  return result;
};

const list1 = range(4); // 바로 [1, 2, 3, 4]라는 배열로 평가
console.log(list1);
console.log(reduce(add, list1));

// 느긋한 L.range
const L = {};
L.range = function* (length) {
  let idx = -1;

  while (++idx < length) {
    yield idx;
  }
};

const list2 = L.range(4);
console.log(list2); // Object [Generator] {}
console.log(reduce(add, list2));

// 테스트 코드
function test(name, time, func) {
  console.log(name);
  while (time--) func();
  console.timeEnd("end", name);
}

test("range", 10, () => reduce(add, range(1000000))); // 489.07592ms
test("L.range", 10, () => reduce(add, L.range(1000000))); // 295.78125ms
