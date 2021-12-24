const products = [
  { name: "반팔티", price: 15000 },
  { name: "긴팔티", price: 20000 },
  { name: "핸드폰케이스", price: 15000 },
  { name: "후드티", price: 30000 },
  { name: "바지", price: 25000 },
];

const map = (f, iter) => {
  let res = [];
  for (const a of iter) {
    res.push(f(a));
  }
  return res;
};

const filter = (f, iter) => {
  const res = [];
  for (const a of iter) {
    if (f(a)) res.push(a);
  }
  return res;
};

const reduce = (f, acc, iter) => {
  if (!iter) {
    iter = acc[Symbol.iterator]();
    acc = iter.next().value;
  }
  for (const a of iter) {
    acc = f(acc, a);
  }
  return acc;
};

function go(...args) {
  return reduce((a, f) => f(a), args);
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
