// Write two distinct ways of reversing the given array without mutating
// the original array. Use 'reverse' for the first solution
// and 'sort' for the second.
// Can do it using 'forEach' method?

let numbers = [1, 2, 3, 4, 5];
numbers.reverse();
console.log(numbers); // [ 5, 4, 3, 2, 1 ]

numbers = [1, 2, 3, 4, 5];
numbers.sort((num1, num2) => num2 - num1);
console.log(numbers); // [ 5, 4, 3, 2, 1 ]


// Given an array of numbers
// Create a new array
//   Want to reverse the element order
//     1. 'reverse' method
//     2. 'sort' method
//     3. 'forEach' method

numbers = [1, 2, 3, 4, 5];

let reversedArr1 = numbers.slice().reverse();
console.log(reversedArr1);
console.log(numbers);

let reversedArr2 = numbers.concat([]).sort((num1, num2) => num2 - num1);
console.log(reversedArr2);
console.log(numbers);

let reversedArr3 = [];
numbers.forEach(num => {
  reversedArr3.unshift(num);
});
console.log(reversedArr3);
console.log(numbers);