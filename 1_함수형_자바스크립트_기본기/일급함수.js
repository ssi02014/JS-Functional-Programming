/**
 * 평가: 코드가 계산(Evaluation)되어 값을 만드는 것
 * 일급 객체
  - 값으로 다룰 수 있다.
  - 변수에 담을 수 있다.
  - 함수의 인자로 사용될 수 있다.
  - 함수의 결과로 사용될 수 있다.
 *  일급 함수
  - 자바스크립트에서 함수는 일급이다.
  - 즉, 함수가 값으로 다룰 수 있다.
  - 조합성과 추상화의 도구
 */

const add5 = (a) => a + 5;
console.log(add5); // [Function: add5]
console.log(add5(5)); // 10

const f1 = () => () => 1;
console.log(f1()); // [Function (anonymous)]

const f2 = f1();
console.log(f2); // [Function (anonymous)]
console.log(f2()); // 1
