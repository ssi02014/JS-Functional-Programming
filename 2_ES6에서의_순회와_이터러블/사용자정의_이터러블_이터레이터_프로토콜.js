// 사용자 정의 이터러블 이터레이터 예제
const iterable = {
  [Symbol.iterator]() {
    let i = 3;
    return {
      next() {
        return i === 0
          ? { value: undefined, done: true }
          : { value: i--, done: false };
      },
      [Symbol.iterator]() {
        return this;
      },
    };
  },
};

// 이터레이터가 자기 자신을 반환하는 [Symbol.iterator]() 메서드를 갖고있으면 well formed 이터러블/이터레이터라고 한다.
let iterator = iterable[Symbol.iterator]();
iterator.next();

console.log(iterator[Symbol.iterator]() === iterator); // true 자기 자신을 반환

for (const el of iterator) {
  console.log(el); // 2 1
}
