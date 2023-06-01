let userInput = +prompt('Enter some numbers'); //qwe

// console.log(userInput)
// console.log(typeof userInput)

// console.log(isNaN(userInput));

if(!isNaN(userInput)){
   if(userInput % 2 === 0){
    console.log('chetnoe');
   }else{
    console.log('nechetnoe');
   }
}else{
    console.log('oops');
}

let a = 10;
let b = '10';

console.log(typeof a );
console.log(typeof b );
console.log(a === b);