// write out pseudocode (both casual and formal) that does the following:
// a function that takes an array of strings, and returns a string 
// that is all those strings concatenated together


// Given an array of strings.
// Declare a function that accepts one parameter.
// Iterate through the array to expose each element.
// Concatenate each exposed element to a local variable that permanently holds 
//   the concatenated string.
// Return the local variable.

// START
// # Given an array of strings
// SET function with one parameter
// SET localVariable that permanently holds the concatenated string
// WHILE the number of iterations is less than or equal to the number of array elements
//   SET element = the exposed element in that iteration
//   localVariable += element
// PRINT localVariable
// END