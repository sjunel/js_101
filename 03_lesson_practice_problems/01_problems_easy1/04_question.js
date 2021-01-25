// Using the given string, create a new string that
// contains all lowercase letters except the first character

let munstersDescription = "the Munsters are CREEPY and Spooky.";
// => The munsters are creepy and spooky.


// Given a string
// Create new string
//   Want first character in uppercase
//     Select first character
//     Make it uppercase
//   Want rest of the string in lowercase
//     Select rest of the string
//     Make them lowercase

let firstChar = munstersDescription[0].toUpperCase();
let otherChar = munstersDescription.substring(1).toLowerCase();
let newStr = firstChar + otherChar;

console.log(newStr);
console.log(munstersDescription);