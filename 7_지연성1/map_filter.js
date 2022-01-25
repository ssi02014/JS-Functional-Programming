/*
  지연 평가
  이터러블 중심 프로그래밍에서의 지연 평가(Lazy Evaluation)
  - 지연 평가는 게으른 평가라는 의미 속에 영리한 평가라는 의미가 내포되어 있다. 즉, 게으르지만 가장 영리하게 평가하는 것이다.
  - 제때 계산법
  - 느긋한 계산법
  - 제너레이터/이터레이터 프로토콜을 기반으로 구현
 */

// L.map
const L = {};
L.map = function* (func, iter) {
  for (const el of iter) {
    yield func(el);
  }
};

L.filter = function* (func, iter) {
  for (const el of iter) {
    if (func(el)) {
      yield el;
    }
  }
};

const iteratorMap = L.map((a) => a + 10, [1, 2, 3]); // (*) 이상태 까지는 아무것도 평가가 되지 않음.
console.log(iteratorMap.next()); // (**) next를 통해서 내가 평가한 만큼의 값만 가져온다.
console.log(iteratorMap.next());
console.log(iteratorMap.next());
console.log(iteratorMap.next());

// console.log([...iteratorMap]); // [11, 12, 13]

const iteratorFilter = L.filter((a) => a % 2, [1, 2, 3, 4]);
console.log(iteratorFilter.next());
console.log(iteratorFilter.next());
console.log(iteratorFilter.next());
