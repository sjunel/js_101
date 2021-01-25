// Determine whether the name 'Dino' appears in the given strings?
// Check each string separately.

let str1 = "Few things in life are as important as house training your pet dinosaur.";
let str2 = "Fred and Wilma have a pet dinosaur named Dino.";


// Given strings
// Search string, do separate searches
// Includes string 'Dino'? true/false

function doesStringHaveDino(string) {
  return string.includes('Dino');
}

console.log(doesStringHaveDino(str1));
console.log(doesStringHaveDino(str2));