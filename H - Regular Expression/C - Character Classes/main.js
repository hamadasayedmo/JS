/*
    Regular Expression
    Character Classes
    . => matches any character, except newline or other line terminators.
    \w => matches word characters. [a-z, A-Z, 0-9 And Underscore]
    \W => matches Non word characters
    \d => matches digits from 0 to 9.
    \D => matches non-digit characters.
    \s => matches whitespace character.
    \S => matches non whitespace character.
    \b => matches at the beginning or end of a word.
    \B => matches NOT at the beginning/end of a word.
*/



let email = "O@@@g...com O@g.com O@g.net A@Y.com O-g.com o@s.org 1@1.com";

// (.)
let dot = /./g;
console.log(email.match(dot)); // Match All

// (\w)
let wordSmall = /\w/g;
console.log(email.match(wordSmall)); // Don't Match (Spaces & Special Characters)

// (\W)
let wordCapital = /\W/g;
console.log(email.match(wordCapital)); // Match (Spaces & Special Characters)

let valid = /\w@\w.(com|net)/g;
console.log(email.match(valid)); // [ 'O@g.com', 'O@g.net', 'A@Y.com', '1@1.com' ]





let chessStory = 'He played the King in a8 and she moved her Queen in c2.';

// (\d)
let digit = /\d/g;
console.log(chessStory.match(digit)); // [ '8', '2' ]

// (\D)
let nonDigit = /\D/g;
console.log(chessStory.match(nonDigit)); // Match All Don't => (Number)

// (\s)
let spaceSmall = /\s/g;
console.log(chessStory.match(spaceSmall)); // Match All Space 

// (\S)
let spaceCapital = /\S/g;
console.log(chessStory.match(spaceCapital)); // Match All (Character + dot(.)) 





let names = "Sayed 1Spam 2Spam 3Spam Spam4 Spam5 Osama Ahmed Alamo";

// (\b)
let re = /(\bSpam|Spam\b)/g;  // beginning or end (Spam)
console.log(names.match(re)); // [ 'Spam', 'Spam', 'Spam', 'Spam', 'Spam' ]


let text = "HELLO, LOOK AT YOU!"; 

// (\B)
let patternStart = /LO\B/;             // Start
console.log(text.match(patternStart)); // index: 7

let patternEnd = /\BLO/;               // End
console.log(text.match(patternEnd));   // index: 3




// Test Return (true | false)
console.log(re.test(names)); // true
console.log(/(\bSpam|Spam\b)/g.test('Hamada')); // false
console.log(/(\bSpam|Spam\b)/g.test('5Spam'));  // true