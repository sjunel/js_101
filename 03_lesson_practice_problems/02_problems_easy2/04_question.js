// Starting with the given string, show two different ways to put
// another string in front of it

let famousWords = "seven years ago...";


// Given a string
// Add another string to the given string

let revisedfamousWords1 = 'Four score and ' + famousWords;
console.log(revisedfamousWords1);

let revisedfamousWords2 = 'Four score and '.concat(famousWords);
console.log(revisedfamousWords2);