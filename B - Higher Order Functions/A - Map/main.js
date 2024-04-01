/*
    Higher Order Functions
    ---> is a function that accepts functions as parameters and/or returns a function.

    - Map
    --- method creates a new array
    --- populated with the results of calling a provided function on every element
    --- in the calling array.

    Syntax map(callBackFunction(Element, Index, Array) { }, thisArg)
    - Element => The current element being processed in the array.
    - Index => The index of the current element being processed in the array.
    - Array => The Current Array

    Notes
    - Map Return A New Array

    Examples
    - Anonymous Function
    - Named Function

*/

let myNumbers = [1, 2, 3, 4, 5, 6];

let newArray = [];


for(let i = 0 ; i < myNumbers.length ; i++) {
    newArray.push(myNumbers[i] + myNumbers[i]);
}

console.log(newArray); // [2, 4, 6, 8, 10, 12]


// Same Idea With Map  
let add = myNumbers.map(function (element , index , arr) {
    return element + arr[index];
} , 0);

console.log(add); // [2, 4, 6, 8, 10, 12]





// Can Use (Anonymous && Arrow) Functions
let addNext = (element , i , arr) => element + arr[i + 1];
let show = myNumbers.map(addNext);

console.log(myNumbers); // [1, 2, 3, 4, 5, 6]
console.log(show);      // [3, 5, 7, 9, 11, NaN]




// regular function 
let arr = [10, 20, 30, 40, 50];
let newArr = [];

function mulTen() {
    for(let i = 0; i < arr.length; i++) {
        newArr.push(arr[i] * 10);
    }
    console.log(newArr);
}
mulTen(); // [100, 200, 300, 400, 500]


// Used (Map && Array)
let mul = element => element * 10;
let mulTenn = arr.map(mul);

console.log(mulTenn);  // [100, 200, 300, 400, 500]  



/**************************************************************\
    Map
    - Swap Cases
    - Inverted Numbers
    - Ignore Boolean Value

\***************************************************************/


// Example 1
let swappingCases = 'elZERo';

let swap = swappingCases.split("").map((later) => {
    return (later === later.toUpperCase()) ? later.toLowerCase() : later.toUpperCase();
});

console.log(swap.join("")); // ELzerO




// Example 2
let invertedNumbers = [1, -10, -20, 15, 100, -30];

let inverted = invertedNumbers.map((num) => -num); // [-1, 10, 20, -15, -100, 30]

console.log(inverted);




// Example 3
let ignoreNumbers = "Elz123er4o";

let ignore = ignoreNumbers.split("").map((later) => {
    return isNaN(parseInt(later)) ? later : "";
})

console.log(ignore.join("")); // Elzero