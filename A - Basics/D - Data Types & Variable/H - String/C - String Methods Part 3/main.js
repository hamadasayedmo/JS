/*
    String Methods
    - substring(Start [Mand], End [Opt] Not Including End)
    --- Start > End Will Swap
    --- Start < 0 It Start From 0
    --- Use Length To Get Last Character
    - substr(Start [Mand], Characters To Extract)
    --- Start >= Length = ""
    --- Negative Start From End
    - includes(Value [Mand], Start [Opt] Default 0) [ES6]
    - startsWith(Value [Mand], Start [Opt] Default 0) [ES6]
    - endsWith(Value [Mand], Length [Opt] Default Full Length) [ES6]
*/

let a = "Elzero Web School";

console.log(a.length);  // 17

console.log(a.substring(2 , 6));   // zero
console.log(a.substring(6 , 2));   // zero

console.log(a.substring(-10 , 6));  // Elzero
console.log(a.substring(a.length - 5 , a.length - 3));  // ch

console.log(a.substr(7 ,  3));  // Web 

console.log(a.includes("Web"));  // true
console.log(a.includes("Web" , 8));  // false

console.log(a.startsWith("E"));  // true
console.log(a.startsWith("z" , 2));  // true

console.log(a.endsWith("l"));  // true
console.log(a.endsWith("ro" , 6));  // true
