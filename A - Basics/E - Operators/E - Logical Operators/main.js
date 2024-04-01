/*
    Logical Operators
    - ! Not
    - && And
    - || Or
*/

console.log(!false); // true
console.log(!true); // false

console.log(!(10 == "10")); // false

console.log((10 == "10") && (typeof 'hamada' === typeof 'sayed') && 10 > 3); // true

console.log((10 === "10") || (typeof 'hamada' !== typeof 'sayed') && 10 > 30); // false