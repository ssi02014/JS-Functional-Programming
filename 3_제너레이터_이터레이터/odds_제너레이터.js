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

let iter = odds(10);
console.log(iter.next()); // { value: 1, done: false }
console.log(iter.next()); // { value: 3, done: false }
console.log(iter.next()); // { value: 5, done: false }
console.log(iter.next()); // { value: 7, done: false }
console.log(iter.next()); // { value: 9, done: false }
console.log(iter.next()); // { value: undefined, done: true }

for (let el of odds(15)) {
  console.log(el); // 1 3 5 7 9 11 13 15
}
