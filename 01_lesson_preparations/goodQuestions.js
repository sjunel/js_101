let number = 5;

function test(number) { // 'number' parameter shadows 'number' variable and has function scope
    number = 3;
}

test(number);
console.log(number); // => 5