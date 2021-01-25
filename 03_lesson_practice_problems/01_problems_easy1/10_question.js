// Return a new version of the given string that ends
// just before the word 'house'

let advice = "Few things in life are as important as house training your pet dinosaur.";

// Expected return value:
// => 'Few things in life are as important as '


// Given a string
// Create a new string from the given string
//   Select the part I want
//   End before string 'house'

function giveShortStringVersion(string) {
  let newStr = '';
  let wordsArr = string.split(' ');

  for (let index = 0; index < wordsArr.length; index += 1) {
    if (wordsArr[index] !== 'house') {
      newStr += `${wordsArr[index]} `;
    } else {
      break;
    }
  }

  return newStr;
}

console.log(giveShortStringVersion(advice));
console.log(advice);