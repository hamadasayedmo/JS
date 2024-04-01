/*
    Number Challenge
*/

let a = 100;
let b = 2_00.5;
let c = 1e2;
let d = 2.4;

// Find Smallest Number In All Variables And Return Integer
console.log(Math.round(Math.min(a,b,c,d))); // 2
console.log(Math.min(parseInt(a), parseInt(b) , parseInt(c), parseInt(d))); // 2

// Use Variables a + d One Time To Get The Needed Output
console.log(Math.pow(a , Math.round(d)) ); // 10000

// Get Integer "2" From d Variable With 4 Methods
console.log(Math.round(d));
console.log(Math.floor(d));
console.log(Math.trunc(d));
console.log(parseInt(d));


// Use Variables b + d To Get This Values
console.log((Math.floor(b) / Math.ceil(d)).toFixed(2)); // 66.67 => String
console.log(Math.round(parseInt(b) / Math.ceil(d))); // 67 => Number