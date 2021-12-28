const products = [
  { name: "반팔티", price: 15000, quantity: 1, isSelected: true },
  { name: "긴팔티", price: 20000, quantity: 2, isSelected: false },
  { name: "핸드폰케이스", price: 15000, quantity: 3, isSelected: true },
  { name: "후드티", price: 30000, quantity: 4, isSelected: false },
  { name: "바지", price: 25000, quantity: 5, isSelected: false },
];

const add = (a, b) => a + b;

// const sum = (f, iter) => go(iter, map(f), reduce(add));
const sum = curry((f, iter) => go(iter, map(f), reduce(add)));

/**
 * 총 수량 go 예제
 * 
 * const totalQuantitly = (products) => {
    return go(
      products,
      map((p) => p.quantity),
      reduce((a, b) => a + b)
    );
  };
 */

/**
 * pipe를 통한 리팩토링 예제
 * const totalQuantitly = pipe(
    map((p) => p.quantity),
    reduce(add)
  );

  const totalPrice = pipe(
    map((p) => p.price * p.quantity),
    reduce(add)
  );
 */

/**
 * sum을 통한 리팩토링 예제2(curry 사용 X)
 * const totalQuantitly = (products) => sum((p) => p.quantity, products);
   const totalPrice = (products) => sum((p) => p.price * p.quantity, products);
 */

// sum을 통한 리팩토링 예제2
const totalQuantitly = sum((p) => p.quantity);
const totalPrice = sum((p) => p.price * p.quantity);

document.querySelector("#cart").innerHTML = `
  <table>
    <tr>
      <th></th>
      <th>상품 이름</th>
      <th>가격</th>
      <th>수량</th>
      <th>총 가격</th>
    </tr>
    ${go(
      products,
      sum(
        (p) => `
        <tr>
          <td><input type="checkbox" ${p.isSelected ? "checked" : ""} /></td>
          <td>${p.name}</td>
          <td>${p.price}</td>
          <td><input type="number" value="${p.quantity}" /></td>
          <td>${p.price * p.quantity}</td>
        </tr>
      `
      )
    )}
    <tr>
      <td colspan="2">합계</td>
      <td>${totalQuantitly(filter((p) => p.isSelected, products))}</td>
      <td>${totalPrice(filter((p) => p.isSelected, products))}</td>
    </tr>
  </table>
`;
