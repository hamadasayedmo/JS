/*
    Array Methods
    - Length
*/

let name = ["hamada" , "sayed" , "mohamed"];

name[name.length] = "selim"; // add element to last

console.log(name); // [ 'hamada', 'sayed', 'mohamed', 'selim' ]

name.length = 2;
console.log(name); // [ 'hamada', 'sayed']