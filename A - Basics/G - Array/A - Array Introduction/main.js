/*
    Arrays
    - Create Arrays [Two Methods] new Array() + []
    - Access Arrays Elements
    - Nested Arrays
    - Change Arrays Elements
    - Check For Array Array.isArray(arr);
*/


// Create Array
let arr = ["Ahmed" , "fares" , "hamada"];

console.log(arr); // (3) ['Ahmed', 'fares', 'hamada']
console.log(`Hello ${arr[0]}`); // Hello Ahmed
console.log(arr[1][2]); // r


// Nested Array
let nesArr = ["Ahmed" , "fares" , "hamada" , ["Aya" , "Omer" , "Manna"]];
console.log(nesArr[3]); // ['Aya', 'Omer', 'Manna']
console.log(`Love ${nesArr[3][2]}`); // Love Manna
console.log(nesArr[3][2][0]); // M
console.log(nesArr.length); // 4


// Edit Arrays
console.log(nesArr);  // (4) ['Ahmed', 'fares', 'hamada', Array(3)]

nesArr[1] = "Kareem";
console.log(nesArr); // (4) ['Ahmed', 'Kareem', 'hamada', Array(3)]

nesArr[3] = ["Ali" , "Mohamed"]; // ["Ahmed" , "fares" , "hamada" , ["Ali" , "Mohamed"]]
console.log(nesArr); 


// Check For Array Array.isArray(arr)
console.log(Array.isArray(nesArr)); // true

let str = "Word";
console.log(Array.isArray(str)); // false