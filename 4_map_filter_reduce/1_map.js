const products = [
  { name: "반팔티", price: 15000 },
  { name: "긴팔티", price: 20000 },
  { name: "핸드폰케이스", price: 15000 },
  { name: "후드티", price: 30000 },
  { name: "바지", price: 25000 },
];

let names = [];
let prices = [];

/**
 * 함수형 프로그래밍에서는 함수가 인자와 리턴값으로 소통하는 것을 권장한다.
 * map은 고차 함수이다. 함수를 값처럼 인자로 받아서 내부에서 실행하기 때문
 * 내부의 있는 값의 다형성은 보조 함수를 통해 지원을한다.
 * 다형성이란? 형태가 같은데 다른 기능을 하는 것을 의미.(같은 동작이지만 다른 결과물이 나올때 다형이라고 생각하면 된다.)
 */

const map = (f, iter) => {
  let res = [];
  for (const a of iter) {
    res.push(f(a));
  }
  return res;
};

// for (const p of products) {
//   names.push(p.name);
// }

console.log(map((p) => p.name, products)); // [ '반팔티', '긴팔티', '핸드폰케이스', '후드티', '바지' ]
console.log(map((p) => p.price, products)); // [ 15000, 20000, 15000, 30000, 25000 ]

products.map((el) => el.name);

// -----
// map의 다형성1

// 이터러블 프로토콜을 따르는 함수를 사용하는 것은 앞으로 많은 helper 함수들과 조합성이 좋아진다.
function* gen() {
  yield 2;
  yield 3;
  yield 4;
}

console.log(map((a) => a * a, gen())); // [4, 9, 16]

// -----
// map의 다형성 2
let m = new Map();
m.set("a", 10);
m.set("b", 20);

let iter = m[Symbol.iterator]();
console.log(iter.next()); // { value: [ 'a', 10 ], done: false } key-value를 entry 형식으로 반환 [key, value]
console.log(iter.next()); // { value: [ 'b', 20 ], done: false }

console.log(map(([k, a]) => [k, a * 2], m)); // [ [ 'a', 20 ], [ 'b', 40 ] ]
console.log(new Map(map(([k, a]) => [k, a * 2], m))); // Map(2) { 'a' => 20, 'b' => 40 }
