// Given a string, return a new string
// that replaces every occurence of 'important with 'urgent'

let advice = "Few things in life are as important as house training your pet dinosaur.";


// Given a string
// Create a new string
//   Want to replace 'important' with 'urgent'
//     Find every occurence of 'important'
// Return the new string

function giveUrgentStringVersion(string) {
  return string.replace(/important/gi, 'urgent');
}

console.log(giveUrgentStringVersion(advice));
console.log(advice);