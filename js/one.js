let userInput = +prompt("Enter some numbers");

// console.log(userInput);
// console.log(typeof userInput);

// console.log(isNaN(userInput));

if (!isNaN(userInput)) {
  if (userInput % 2 === 0) {
    console.log("even");
  } else {
    console.log("odd");
  }
} else {
  console.log("Oops, looks like you made a mistake.");
}
