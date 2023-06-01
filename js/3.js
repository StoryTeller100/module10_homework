// а) Использование split()
// const str = 'Hello';
// const str = 'reverse';

// б) Использование Array.from()
// const str = 'Hello';

// const reverse = Array.from(str).reverse().join('');
// console.log(reverse);

// в) Использование синтаксиса распространения ES6 (...)
// const str = 'Hello';

// const reverse = [...str].reverse().join('');
// console.log(reverse);

// г) Использование Array.prototype.reduce() функция
// function reverse(str) {
//     return str.split('').reduce((x, y) => y + x);
// }

// const str = 'Hello';
// const rev = reverse(str);
// console.log(rev);

let str = "hello";
let resStr = "";
for (let i = str.length - 1; i >= 0; i--) {
  resStr += str[i];
}

console.log(resStr);
