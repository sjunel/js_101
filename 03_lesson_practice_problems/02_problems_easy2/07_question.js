// Considering the given object, create an array from the object
// that contains only two elements: Barny's name and number

let flintstones = {
  Fred: 0,
  Wilma: 1,
  Barney: 2,
  Betty: 3,
  Bambam: 4,
  Pebbles: 5
};
// [ 'Barney', 2 ]


// Given an object with multiple key-value pairs
// Make an array from one key-value pair from it
//   Make a nested array from the object
//   Select for what I want

let newArr = Object.entries(flintstones)[2];
console.log(newArr);