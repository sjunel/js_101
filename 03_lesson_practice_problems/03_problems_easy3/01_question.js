// Write three different ways to remove all elements from the given array

let numbers = [1, 2, 3, 4];


// Given an array
// Remove every element
//   Three different ways
// Return an empty array

numbers.length = 0;
console.log(numbers);

numbers = [1, 2, 3, 4];
numbers.splice(0, numbers.length);
console.log(numbers);

numbers = [1, 2, 3, 4];
let count = numbers.length;
while (count > 0) {
  numbers.pop();
  count -= 1;
}
console.log(numbers);