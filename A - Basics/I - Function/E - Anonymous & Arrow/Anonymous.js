/*
Function
    - Anonymous Function
    - Calling Named Function vs Anonymous Function
    - Argument To Other Function
    - Task Without Name
    - SetTimeout
*/
console.log("%c Anonymous function" , "color: red");




let SayHello = function(userName) {
    console.log(`Hello ${userName}`);
}

SayHello("Hamada");




console.log(add(5 , 6)); // 11 => can calling function first 

function add(num1 , num2) {
    return num1 + num2;
}




let sub = function(num1 , num2) {
    return num1 - num2;
}

console.log(sub(15 , 5)); // 10 => can't calling function first  




document.getElementById("show").onclick = function() {
    document.write("<h1>Anonymous Function");
}




// Print Hello After Two Second
// setTimeout(function() {
//     console.log("hello")
// } , 2000)




function outerFunction() {
    let outerVar = "I'm from the outer function";

    function innerFunction() {
        let innerVar = "I'm from the inner function";
        console.log(innerVar);
    }

    innerFunction(); // Call the inner function
    console.log(outerVar);
}

outerFunction(); // Call the outer function

// ...outPut
// I'm from the inner function
// I'm from the outer function

