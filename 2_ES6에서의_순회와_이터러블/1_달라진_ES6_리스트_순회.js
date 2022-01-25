// 기존과 달라진 ES6에서의 리스트 순회
// (기존)
const list = [1, 2, 3];
for (var i = 0; i < list.length; i++) {
  console.log(list[i]); // 1 2 3
}

const str = "abc";
for (var i = 0; i < str.length; i++) {
  console.log(str[i]); // a b c
}

// (ES6)
for (const v of list) {
  console.log(v); // 1 2 3
}

for (const v of str) {
  console.log(v); // a b c
}
