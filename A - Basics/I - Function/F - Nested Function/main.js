/*
    Function
    - Function Inside Function
    - Return Function
*/



// Example 1
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




// Example 2
function sayMessage(fName, lName) {
    let message = `Hello`
    // Nested Function
    function concatMsg() {
        return `${message} ${fName} ${lName}`;
    }
    return concatMsg();
}

console.log(sayMessage("Hamada", "Sayed")); // Hello Hamada Sayed




// Example 3
function sayMessage(fName, lName) {
    let message = `Hello`;
    // Nested Function
    function concatMsg() {
        // Nested Function
        function getFullName() {
            return `${fName} ${lName}`;
        }
        return `${message} ${getFullName()}`; // Hello , call getFullName()
    }
    return concatMsg();
}

console.log(sayMessage("Osama", "Mohamed")); // Hello Hamada Sayed