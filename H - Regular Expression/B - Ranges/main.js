/*
    Regular Expression

    Ranges

    - Part 1
    (X|Y) => X Or Y
    [0-9] => 0 To 9
    [^0-9] => Any Character Not 0 To 9
    Practice

    - Part 2
    [a-z]
    [^a-z]
    [A-Z]
    [^A-Z]
    [abc]
    [^abc]

*/


// - Part 1

// Range String
let tld = "Com Net Org Info Code Io";

let tldRe = /(info|org|io)/ig; // Don't Ude Space 

console.log(tld.match(tldRe)); // [ 'Org', 'Info', 'Io' ]




let str = 'How cats, rats, and bats became Halloween animals';

let strRe = /[cbr]ats/g;

console.log(str.match(strRe)); // [ 'cats', 'rats', 'bats' ]




// Range Numbers
let numbers_1 = '12345678910';
let numbersRe_1 = /[0-9]/g;

console.log(numbers_1.match(numbersRe_1)); // [ '1', '2', '3', '4', '5', '6', '7', '8', '9', '1', '0' ]




// Range Numbers Use Not(^)
let numbers_2 = '12345678910';
let numbersRe_2 = /[^0-7]/g;

console.log(numbers_2.match(numbersRe_2)); // [ '8', '9' ]




// Special Charcuterie
let specialNum = '1!23@45$67%89&10';
let specialNumRe = /[^0-9]/g;

console.log(specialNum.match(specialNumRe)); // [ '!', '@', '$', '%', '&' ]




let practice = "Os1 Os1Os Os2 Os8 Os8Os";
let practiceRe = /Os[5-9]Os/g; 
console.log(practice.match(practiceRe)); // [ 'Os8Os' ]





// - Part 2

let multiStaring = 'AaB13bc2defG!234%^&*';

let atoZSmall = /[a-z]/g;
console.log(multiStaring.match(atoZSmall));            // [ 'a', 'b', 'c', 'd', 'e', 'f' ]

let atoZCapital = /[A-Z]/g;
console.log(multiStaring.match(atoZCapital));          // [ 'A', 'B', 'G' ]

let laterCapitalAndSmall = /[a-z|A-Z]/g;
console.log(multiStaring.match(laterCapitalAndSmall)); // [ 'A', 'a', 'B', 'b', 'c', 'd', 'e', 'f', 'G' ]

let numRe = /[0-4]/g;
console.log(multiStaring.match(numRe));                // [ '1', '2', '3', '2', '3', '4' ]

let specialCharacters = /[^0-4|a-z|A-z]/g;
console.log(multiStaring.match(specialCharacters));    // [ '!', '%', '&', '*' ]