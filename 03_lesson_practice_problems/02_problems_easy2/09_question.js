// Before CSS, used spaces to align things on the screen.
// If have a 40-character wide table, how to center the given title
// above the table with spaces?

let title = "Flintstone Family Members";


// Given a string
// Want to center string above a 40-char table
//   How many characters in the given string
//   40 = characters + 2x; solve for x

let result = (40 - title.length) / 2;
console.log(result);

// Include 7.5 character spaces before and after the title