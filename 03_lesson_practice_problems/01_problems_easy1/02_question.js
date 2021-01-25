// How to determine whether a given string ends with an exclamation mark?

let str1 = "Come over here!"; // true
let str2 = "What's up, Doc?"; // false


// Given a string
// Check the last character
// Is it an exclamation mark? true/false

function doesStringEndWithExclamationMark(string) {
  return string[string.length - 1] === '!';
}

console.log(doesStringEndWithExclamationMark(str1));
console.log(doesStringEndWithExclamationMark(str2));