// What will the given code output?

let arr1 = [{ first: "value1" }, { second: "value2" }, 3, 4, 5];
let arr2 = arr1.slice(); // returns new array, shallow copy
arr2[0].first = 42; // element has same pointer to object, both arrays mutated
console.log(arr1);


// => [{ first: 42 }, { second: "value2" }, 3, 4, 5]