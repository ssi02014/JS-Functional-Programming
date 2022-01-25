function* infinity(i = 0) {
  while (true) yield i++;
}

function* limit(limitNumber, iter) {
  for (const el of iter) {
    yield el;
    if (el === limitNumber) return;
  }
}

function* odds(limitNumber) {
  for (const el of limit(limitNumber, infinity(1))) {
    if (el % 2) yield el;
  }
}

console.log(...odds(10)); // 1 3 5 7 9
console.log([...odds(10), ...odds(20)]); // [1, 3, 5, 7, 9, 11, 13, 15, 17, 19]
const [head, ...tail] = odds(5);
console.log(head, tail); // 1, [3, 5] -> 구조 분해
