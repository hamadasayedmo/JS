/*
    Function
    - What Is Function ?
    - User-Defined vs Built In
    - Syntax + Basic Usage
    - Example From Real Life
    - Parameter + Argument
    - Practical Example
*/

function sayHello(name) { // name => Parameter
    console.log(`Hello ${name}`);
}
sayHello("Hamada"); // "Hamada" => Argument


function generateYears(start , end , exclude) {
    for (let i = start; i <= end; i++) {
        if(i === exclude) continue;
        console.log(i);
    }
}
generateYears(1985 , 2023 , 2003);




// Function Return
console.log("%c Function Return" , "color : red");

function calc(num1 , num2) {
    return `${num1} + ${num2} = ${num1 + num2}`;
}    
let result = calc(1, 2);
console.log(result);

function generate(start, end) {
    for (let i = start; i <= end; i++) {
        console.log(i);
        if(i === 15) return "interrupting"; // Stop Execution
    }
}
generate(10 , 20);


// Default Parameters 
console.log("%c Default Parameters" , "color : red");

function info(name , age) {
    if(age === undefined) {
        console.log("unKnown");
    }
    console.log(`My Name Is ${name} And Age Is ${age}`);
}
info("hamada");


// ES6
console.log("%c ES6" , "color : red");

function info(name , age = "unKnown") {
    console.log(`My Name Is ${name} And Age Is ${age}`);
}
info("hamada");