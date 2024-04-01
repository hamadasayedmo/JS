/*
    - Filter
    --- method creates a new array
    --- with all elements that pass the test implemented by the provided function.

    Syntax filter(callBackFunction(Element, Index, Array) { }, thisArg)
    - Element => The current element being processed in the array.
    - Index => The index of the current element being processed in the array.
    - Array => The Current Array
*/


// Get Friends With Name Start With H
let friends = ['Hamada', 'Ahmed', 'Hal', 'Harem', 'Hosea', 'Ali'];

let filterFriends = friends.filter(element => element.startsWith('H'));

console.log(filterFriends); // ['Hamada', 'Hal', 'Harem', 'Hosea']




// Get Even Number Only
let numbers = [11, 10, 8, 5, 3, 2, 1, 0];

let evenNum = numbers.filter(num =>  num % 2 === 0).sort((a , b) => a - b);

console.log(evenNum); // [ 0, 2, 8, 10 ]




// Get words have six characters 
const words = ['spray', 'limit', 'exuberant', 'elite', 'destruction', 'present'];

let result = words.filter((word) => word.length > 6);

console.log(result);
// Expected output: Array ["exuberant", "destruction", "present"]





/**************************************************
Filter
- Filter Longest Word By Number
***************************************************/

// Filter Words More Than 4 Characters
let sentence = "I Love Foxed Code Too Playing Much";

let smallWords = sentence.split(" ").filter((word) => word.length <= 4);

console.log(smallWords);
// Expected output: Array ['I', 'Love', 'Code', 'Too', 'Much']




// Ignore Numbers
let ignoreNumbers = "Elz123er4o";

let ignore = ignoreNumbers.split("").filter((char) => isNaN(parseInt(char)));

console.log(ignore.join(""));
// Expected output: Elzero
// If Use (!) => isNaN(parseInt(char)) return numbers '1234'





// Filter Strings + Multiply
let mix = "A13BS2ZX";

let mixedContent = mix.split("").filter((num) => {
    return !isNaN(parseInt(num));
}).map((element) => {
    return element * element;
}).join("");

console.log(mixedContent);
// Expected output: 194





// Git String with arr
let arr = [1, 'Hamada', 2, 'Fares', 3, 'Kareem'];

let filterName = arr.filter((element) => typeof element === 'string');

console.log(filterName);
// Expected output: array ['Hamada', 'Fares', 'Kareem']