/*
    Regular Expression

    - replace
    - replaceAll
*/

let txt = "We Love Programming And @ Because @ Is Amazing";

// We Love Programming And JavaScript Because @ Is Amazing
console.log(txt.replace('@', 'JavaScript')); 

// We Love Programming And JavaScript Because JavaScript Is Amazing
console.log(txt.replaceAll('@', 'JavaScript')); 

let re = /@/g;
console.log(txt.replace(re, 'JavaScript'));
console.log(txt.replaceAll(re, 'JavaScript'));