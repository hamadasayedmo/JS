
// merge arrays (5) طرق

let numbersOne = [1, 2, 3];
let numbersTwo = [4, 5, 6];

// one 
console.log([...numbersOne, ...numbersTwo]);

// two 
console.log(
    [...Array.from(numbersOne), ...Array.from(numbersTwo)] 
);

// three 
console.log(numbersOne.concat(numbersTwo));

// four 
let emptyArray = [];

emptyArray.push(...numbersOne, ...numbersTwo);

console.log(emptyArray);

// five
numbersOne.push(...numbersTwo);
console.log(numbersOne);