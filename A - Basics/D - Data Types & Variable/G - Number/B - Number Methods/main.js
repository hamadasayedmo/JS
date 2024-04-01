/*
    Number Methods
    - Two Dots To Call A Methods
    - toString()
    - toFixed()
    - parseInt()
    - parseFloat()
    - isInteger() [ES6]
    - isNaN() [ES6]
*/

console.log((100).toString());                  // "100"
console.log(100.0.toString());                  // "100"

console.log((100.50).toFixed(2));               // "100.50"

console.log(parseInt("100 Hamada"));            // 100    
console.log(parseInt("Hamada 100 Hamada"));     // NaN
console.log(parseInt("100.500 Osama"));         // 100
console.log(parseFloat("100.500 Osama"));       // 100.5

console.log(Number.isInteger("100"));           // false 
console.log(Number.isInteger(100.500));         // false  
console.log(Number.isInteger(100));             // true 

console.log(Number.isNaN("Hamada" / 20));       // true 