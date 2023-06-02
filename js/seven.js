let arr = [
  1,
  12,
  3,
  213,
  1,
  24,
  "a",
  "qwe",
  null,
  NaN,
  0,
  0,
  0,
  12,
  412,
  3,
  undefined,
];

let evenCount = 0;
let oddCount = 0;
let zeroCount = 0;

for (let i = 0; i < arr.length; i++) {
  if (typeof arr[i] === "number" && !isNaN(arr[i])) {
    if (arr[i] === 0) {
      zeroCount++;
    } else if (arr[i] % 2 === 0) {
      evenCount++;
    } else {
      oddCount++;
    }
  }
}

console.log(`Even count is ${evenCount}`);
console.log(`Odd count is ${oddCount}`);
console.log(`Zero count is ${zeroCount}`);
