/**
 * 이터러블/이터레이터 프로토콜
 * 이러터블: 이터레이터를 리턴하는 [Symbol.iterator]()를 가진 값
 * 이터레이터: { value, done } 객체를 리턴하는 next()를 가진 값
 * 이터러블/이터레이터 프로토콜: 이터러블을 for ... of, 전개 연사자 등과 함께 동작하도록 한 규약
 */

/**
 * Array 이터러블이며, arr[Symbol.iterator]를 통해 iterator를 리턴하기 때문에
 * for ... of 문을 통해 순회할 수 있기 때문에 이터러블/이터레이터 프로토콜을 따른다고 할 수 있다.
 * Map과 Set도 이터러블/이터레이터 프로토콜을 따른다.
 */
const arr = [1, 2, 3];

console.log(arr[Symbol.iterator]); // [Function: values]

for (const el of arr) {
  console.log(el); // 1 2 3
}

const set = new Set([1, 2, 3]);

for (const el of set) {
  console.log(el); // 1 2 3
}

const map = new Map([
  ["a", 1],
  ["b", 2],
  ["c", 3],
]);

for (const el of map) {
  console.log(el); // [ 'a', 1 ] [ 'b', 2 ] [ 'c', 3 ]
}

// 이터레이터 예제1 (Array)
let iterator = arr[Symbol.iterator]();
console.log(iterator); // Object [Array Iterator] {}
console.log(iterator.next()); // { value: 1, done: false }
console.log(iterator.next()); // { value: 2, done: false }
console.log(iterator.next()); // { value: 3, done: false }
console.log(iterator.next()); // { value: undefined, done: true }

const arr1 = [1, 2, 3];
const iter1 = arr1[Symbol.iterator]();
iter1.next();

for (let el of iter1) {
  console.log(el); // 2 3
}

/* 이터레이터 예제2 (Map)
 * map의 keys(), values(), entires() 메서드는 이터레이터를 리턴함.
 * 따라서 for ... of문을 통해 각각의 key나 value 등을 뽑아낼 수 있음.
 *
 * 왜? map.values()와 같은 메서드의 반환 값은 [Map Iterator]이며,
 * 이를 다시 [Symbol.iterator]로 확인해보면, 또 [Symobl.iterator]를 갖고 있음.
 * 이 반환 된 [Symbol.iterator]를 통해 다시 for ... of 순회를 한다.
 * 추가적으로 이 반환된 [Symbol.iteraotr]는 자기 자신을 반환한다. (73번 줄)
 */
const map1 = new Map([
  ["a", 1],
  ["b", 2],
  ["c", 3],
]);

let iter2 = map1.values();
console.log(map1.values()); // [Map Iterator] { 1, 2, 3 }
console.log(iter2[Symbol.iterator]); // [Function: [Symbol.iterator]]

let iter3 = iter2[Symbol.iterator]();
console.log(iter3 === iter2); // true
console.log(iter3.next()); // { value: 1, done: false }
console.log(iter3.next()); // { value: 2, done: false }
console.log(iter3.next()); // { value: 3, done: false }
console.log(iter3.next()); // { value: undefined, done: true }

for (let el of map1.values()) {
  console.log(el); // a b c
}

// 전개 연산자
// 만약 a[Symbol.iterator] = null을 하면 전개 연산자 사용 X
const a = [1, 2];
console.log([...a, ...arr, ...set, ...map.values()]); // [ 1, 2, 1, 2, 3, 1, 2, 3, 1, 2, 3 ]
