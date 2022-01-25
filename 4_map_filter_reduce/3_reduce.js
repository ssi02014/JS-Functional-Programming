const nums = [1, 2, 3, 4, 5];
const products = [
  { name: "반팔티", price: 15000 },
  { name: "긴팔티", price: 20000 },
  { name: "핸드폰케이스", price: 15000 },
  { name: "후드티", price: 30000 },
  { name: "바지", price: 25000 },
];

let total = 0;
for (const n of nums) {
  total += n;
}
console.log(total);

// ------
// reduce 함수로 리팩토링
const add = (a, b) => a + b;
const totalPrice = (totalPrice, product) => totalPrice + product.price;

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

console.log(add(add(add(add(add(0, 1), 2), 3), 4), 5)); // 15
console.log(reduce(add, 0, nums)); // 15
console.log(reduce(add, nums)); // 15
console.log(reduce(totalPrice, 0, products)); // 105000
