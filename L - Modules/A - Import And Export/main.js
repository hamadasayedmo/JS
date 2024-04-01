/*
    Modules
    - Import And Export
*/


let x = 5;

let arr = [1, 2, 3];

function sayWelcome() {
    return `Your Welcome`;
}

// تصدير
export { x, arr, sayWelcome };


console.log(x);             // 5
console.log(arr);           // [ 1, 2, 3 ]
console.log(sayWelcome());  // Your Welcome