// Assignment One
// Examples
console.log(100_000); // 100000
console.log(100000); // 100000
console.log(5e4 + 5e4); // 100000

// Your Solutions
console.log(Math.round(parseFloat("100000.4"))); // 100000
console.log(Math.round(100000.4)); // 100000
console.log(Math.trunc(100000.6)); // 100000
console.log(Math.ceil (99999.1)); // 100000
console.log(Math.floor(100000.9)); // 100000
console.log(Math.pow(10 , 5)); // 100000
console.log(Math.max(80000 , 90000 , 100000 , 70000)); // 100000
console.log(Number(100000.4.toFixed(0))); // 100000
console.log(Number(100000)); // 100000
console.log(parseInt("100000 Hamada")); // 100000




// Assignment Two
console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991




// Assignment Three
console.log(`${Number.MAX_SAFE_INTEGER}`.length); // 9007199254740991




// Assignment Four
let myVar = "100.56789 Views";

console.log(parseInt(myVar)); // 100
console.log(+(parseFloat(myVar).toFixed(2))); // 100.57




// Assignment Five
let num = 10;

console.log(Number.isInteger(num) + Number.isInteger(num)); // 2




// Assignment Six
let flt = 10.4;

console.log(Math.round(flt)); // 10
console.log(Math.floor(flt)); // 10
console.log(Math.trunc(flt)); // 10
console.log(parseInt(flt)); // 10
console.log(flt.toFixed()); // 10




// Assignment Seven
console.log(Math.round(Math.random() * 4)); // 0 || 1 || 2 || 3 || 4