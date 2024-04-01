/*
    - Reduce
    --- method executes a reducer function on each element of the array,
    --- resulting in a single output value.

    Syntax
    reduce(callBackFunc(Accumulator, Current Val, Current Index, Source Array) { }, initialValue)
    - Accumulator => the accumulated value previously returned in the last invocation
    - Current Val => The current element being processed in the array
    - Index => The index of the current element being processed in the array.
    ---------- Starts from index 0 if an initialValue is provided.
    ---------- Otherwise, it starts from index 1.
    - Array => The Current Array
*/




let numbers = [10, 20, 15, 30];

let sum = numbers.reduce((acc, current, index, arr) => {

    console.log(`acc => ${acc}`); // acc => 5, acc => 15,  

    console.log(`current element => ${current}`); // 10, 20,  

    console.log(`current element index => ${index}`) // 0, 1, 

    console.log(`array => ${arr}`) // [10, 20, 15, 30] 

    console.log(acc + current); // 15, 35, 50, 80

    console.log('##########'); 

    return acc + current; 
} , 5); // 5 is Initial value.

console.log(sum); // 80




// use arrow
let num = [10, 20, 15, 30];

let add = num.reduce((acc, current) => acc + current);

console.log(add); // 75





/*********************************************
    Reduce
    - Longest Word
    - Remove Characters + Use Reduce
**********************************************/



let theBiggest = ["Bla", "Propaganda", "Other", "AAA", "Battery", "Test", "Propaganda_Two"];
let check = function (acc, current) {
    return (acc.length > current.length) ? acc : current;
}

let biggest = theBiggest.reduce(check);

console.log(biggest); // Propaganda_Two





let removeChars = ["E", "@", "@", "L", "Z", "@", "@", "E", "R", "@", "O"];

let filterConcat = removeChars.filter(element => element != "@")
.reduce((acc, current) => acc + current); // Join Use Reduce

console.log(filterConcat); // ELZERO