// Write two one-line expressions to count number of lowercase 't' characters
// in each of the given strings

let statement1 = "The Flintstones Rock!";
let statement2 = "Easy come, easy go.";


// Given strings
// How many 't' characters in the string
//   Only two one-line expressions
//   Go through each character, is it a 't'

let result = statement1.match(/t/g);
console.log(result ? result.length : 0);

let result2 = statement2.match(/t/g);
console.log(result2 ? result2.length : 0);