// const str = 'Hello';

// const reverse = Array.from(str).reverse().join('');
// console.log(reverse);

let str = "hello";
let resStr = "";
for (let i = str.length - 1; i >= 0; i--) {
  resStr += str[i];
}

console.log(resStr);
