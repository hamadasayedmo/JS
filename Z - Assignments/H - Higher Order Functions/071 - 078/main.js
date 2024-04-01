// Assignment One 
console.log("%c Assignment One","color: red");

let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];

let filterStr = mix.map((element) => {
    return (typeof element !== 'number') ? element : "";
})
.reduce((acc, current) => acc + current);

console.log(filterStr); // Elzero




// Assignment Two 
console.log("%c Assignment Two","color: red");

let myString = "EElllzzzzzzzeroo";

let removeLetters = myString.split("").filter((element, i, arr) => {
    return arr[i] !== arr[i + 1];
})
.reduce((acc, current) => acc + current);

console.log(removeLetters); // Elzero




// Assignment Three 
console.log("%c Assignment Three","color: red");

let myArray = ["E", "l", "z", ["e", "r"], "o"];

let flatArray = myArray // myArray.flat() => concat Array
    .reduce((acc, cur) => acc.concat(cur), []) 
    .join("");

console.log(flatArray); // Elzero




// Assignment Four 
console.log("%c Assignment Four","color: red");

let numAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];

let filterArr = numAndStrings.map(el => -el).filter(el => el);
    

console.log(filterArr); // [-1, -10, 10, 20, -5, -3]





// Assignment Five 
console.log("%c Assignment Five","color: red");

let numbers = [2, 12, 11, 5, 10, 1, 99];

let newNum = numbers.reduce((acc, current) => {
    return (current % 2 != 0) ? acc + current : acc * current;
});

console.log(newNum); // 500