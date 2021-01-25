// Given a number and an array, determine whether the number
// is included in the array

let numbers = [1, 2, 3, 4, 5, 15, 16, 17, 95, 96, 99];

let number1 = 8;  // false
let number2 = 95; // true


// Given an array
// Given numbers
// Need to access each array element at its index
// Is the number at that array index? true/false

function doesArrayIncludeNumber(arr, num) {
  return arr.includes(num);
}

console.log(doesArrayIncludeNumber(numbers, number1));
console.log(doesArrayIncludeNumber(numbers, number2));