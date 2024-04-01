/*
    Arithmetic Operators
    + Addition
    - Subtraction
    * Multiplication
    / Division
    ** Exponentiation (ES7)
    % Modulus (Division Remainder)
    ++ Increment [ Post / Pre ]
    -- Decrement [ Post / Pre ]
*/

console.log(10 + 20);
console.log(10 + "hamada");
console.log(typeof (10 + "hamada"));

console.log(10 - 20);
console.log(10 - "hamada"); // NaN
console.log(typeof NaN);    // number

console.log(5 * 5);

console.log(15 / 5);

console.log(5 % 15);

console.log(2 ** 4);

let num0 = 1;
console.log(num0++);  // 1
console.log(num0);    // 2

let num1 = 1;
console.log(++num1)  // 2