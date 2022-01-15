/**
 * 제너레이터: 이터레이터이자 이터러블을 생성하는 함수. 즉, 이터레이터를 리턴하는 함수
 * 제너레이터는 well formed 이터레이터를 반환한다.
 */

function* gen() {
  yield 1;
  yield 2;
  yield 3;
  return 10; // return 값을 넣으면 done이 true일 때 value값을 줄 수 있다.
}

let iter = gen();

// 아래 iter는 이터레이터이자 이터러블이다. 따라서 [Symbol.iterator]를 실행하면 자기 자신을 반환한다.
console.log(iter[Symbol.iterator]() === iter); // true
console.log(iter); // Object [Generator] {}
console.log(iter.next()); // { value: 1, done: false }
console.log(iter.next()); // { value: 2, done: false }
console.log(iter.next()); // { value: 3, done: false }
console.log(iter.next()); // { value: 10, done: true }

// for ... of으로 순회할 때는 return은 순회하지 않음
for (const a of gen()) {
  console.log(a); // 1 2 3
}

const newGen = [...gen()];
console.log(newGen);
