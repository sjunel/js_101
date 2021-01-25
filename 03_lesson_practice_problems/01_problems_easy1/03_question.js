// Determine whether the given object contains an entry for 'Spot'?

let ages = { Herman: 32, Lily: 30, Grandpa: 402, Eddie: 10 };


// Given an object with people's names as keys and their ages as values
// Check the keys
// Is 'Spot' included? true/false

let nameKeys = Object.keys(ages);

console.log(nameKeys.includes('Spot'));