// The given function unnecessarily uses two 'return' statements
// to return boolean values. Rewrite it so that it only has
// one 'return' statement and doesn't explicitly use 'true' or 'false'.
// Write at least two different solutions.

function isColorValid(color) {
  if (color === "blue" || color === "green") {
    return true;
  } else {
    return false;
  }
}


// Given a function declaration
// Refactor to only have one return and not use true/false
//   At least two solutions

function isBlueOrGreen1(color) {
  return (color === "blue") || (color === "green");
}

function isBlueOrGreen2(color) {
  return !((color !== "blue") && (color !== "green"));
}

console.log(isBlueOrGreen2('blue'));
console.log(isBlueOrGreen2('green'));
console.log(isBlueOrGreen2('red'));