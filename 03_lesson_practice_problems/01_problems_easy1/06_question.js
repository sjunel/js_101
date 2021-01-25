// Given the 'ages' object, add entries for 'Marilyn' and 'Spot' to the object

let ages = { Herman: 32, Lily: 30, Grandpa: 5843, Eddie: 10 };
let additionalAges = { Marilyn: 22, Spot: 237 };


// Given an object of names as keys and ages as values
// Add more key-value pairs to the object

Object.assign(ages, additionalAges);
console.log(ages);