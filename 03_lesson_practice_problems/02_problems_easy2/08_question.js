// How to check whether the objects assigned to the given variables are arrays

let numbers = [1, 2, 3, 4]; // true
let table = { field1: 1, field2: 2, field3: 3, field4: 4 }; // false


// Given variables assigned to objects
// Check if the variable holds an array

function doesVariableHoldArray(input) {
  return Array.isArray(input);
}

console.log(doesVariableHoldArray(numbers));
console.log(doesVariableHoldArray(table));