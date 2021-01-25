// Using the built nested array, create a new array that contains
// all the string values in an un-nested format

let flintstones = ["Fred", "Wilma"];
flintstones.push(["Barney", "Betty"]);
flintstones.push(["Bambam", "Pebbles"]);


// Given a nested array
// Make a new array with the same elements

let newArr = flintstones.flat();
console.log(newArr);