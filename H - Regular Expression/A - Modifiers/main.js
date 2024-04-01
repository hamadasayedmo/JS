/*
    Regular Expression

    Syntax
    /pattern/modifier(s);
    new RegExp("pattern", "modifier(s)")

    Modifiers => Flags
    i => case-insensitive
    g => global
    m => Multiline

    Search Methods
    - match(Pattern)

    Match
    -- Matches A String Against a Regular Expression Pattern
    -- Returns An Array With The Matches
    -- Returns null If No Match Is Found.
*/

let myString = 'Hello hamada Sayed I Love Hamada';


// let regex = /Hamada/; // =>  /Pattern/ Modifier
// console.log(myString.match(regex)); // index 26


// let regex = /Hamada/i; // =>  /Pattern/ Modifier
// console.log(myString.match(regex)); // index 6


let regex = /Hamada/ig; // =>  /Pattern/ Modifier
console.log(myString.match(regex)); // [ 'hamada', 'hamada' ]