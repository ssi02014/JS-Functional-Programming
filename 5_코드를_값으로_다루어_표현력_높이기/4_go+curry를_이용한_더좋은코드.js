const products = [
  { name: "반팔티", price: 15000 },
  { name: "긴팔티", price: 20000 },
  { name: "핸드폰케이스", price: 15000 },
  { name: "후드티", price: 30000 },
  { name: "바지", price: 25000 },
];

const map = curry((f, iter) => {
  let res = [];
  for (const a of iter) {
    res.push(f(a));
  }
  return res;
});

const filter = curry((f, iter) => {
  const res = [];
  for (const a of iter) {
    if (f(a)) res.push(a);
  }
  return res;
});

const reduce = curry((f, acc, iter) => {
  if (!iter) {
    iter = acc[Symbol.iterator]();
    acc = iter.next().value;
  }
  for (const a of iter) {
    acc = f(acc, a);
  }
  return acc;
});

function go(...args) {
  return reduce((a, f) => f(a), args);
}

function curry(f) {
  return (a, ..._) => (_.length ? f(a, ..._) : (..._) => f(a, ..._));
}

function pipe(f, ...fs) {
  return (...as) => go(f(...as), ...fs);
}

const add = (a, b) => a + b;

console.log(
  reduce(
    add,
    map(
      (product) => product.price,
      filter((product) => product.price < 20000, products)
    )
  )
); // 30000

// 위 예제 go로 리팩토링
go(
  products,
  (products) => filter((product) => product.price < 20000, products),
  (products) => map((product) => product.price, products),
  (prices) => reduce(add, prices),
  console.log
); // 30000

// 위 go예제를 go + curry로 리팩토링 (위에 filter, map, reduce에 curry로 감쌈)
go(
  products,
  filter((product) => product.price < 20000),
  map((product) => product.price),
  reduce(add),
  console.log
); // 30000
