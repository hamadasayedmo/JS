/*
    Switch Statement
    switch(expression) {
        Case 1:
        // Code Block
        break;
        Case 2:
        // Code Block
        break;
        Default:
        // Code Block
    }
    - Default Ordering
    - Multiple Match
    - ===
*/

let day = "A";

switch (day) {
    case 1:
        console.log("Saturday");
        break;
    case 2:
        console.log("Sunday");
        break;
    case 3:
    case 4:
        console.log("Monday");
        break;
    default:
        console.log("Unknown Day");
}




// Simple Calculator
let op = '*', 
    num1 = 10, 
    num2 = 10;

switch(op) {
    case '+':
        console.log(`${num1} ${op} ${num2} = ${num1 + num2}`);
        break;
    case '-':
        console.log(`${num1} ${op} ${num2} = ${num1 - num2}`);
        break;
    case '*':
        console.log(`${num1} ${op} ${num2} = ${num1 * num2}`);
        break;
    case '/':
        console.log(`${num1} ${op} ${num2} = ${num1 / num2}`);
        break;
    default:
        console.log(`Invalid operator: ${op}`);
}