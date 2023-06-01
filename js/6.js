function checkArrElements(arr) {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== arr[0]) {
      return false;
    }
  }
  return true;
}

let array = [1, 1, 1, 1, 1, 1];
let array2 = [12, 312, 3, 12, 3, 12];

let result = checkArrElements(array2);
console.log(result);
