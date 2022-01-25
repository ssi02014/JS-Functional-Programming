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

const products = [
  { name: "반팔티", price: 15000 },
  { name: "긴팔티", price: 20000 },
  { name: "핸드폰케이스", price: 15000 },
  { name: "후드티", price: 30000 },
  { name: "바지", price: 25000 },
];

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

console.log(
  reduce(
    add,
    filter(
      (price) => price >= 20000,
      map((product) => product.price, products)
    )
  )
); // 75000

// 함수형 프로그래밍에서는 함수를 중첩하고 함수를 연속적으로 실행하면서 다음 과정에 더 좋은 값을 추출한다.
// 모든 함수의 실행 과정 거치면서 하나의 값으로 평가를 만들어 최종적으로 일을 수행한다.
