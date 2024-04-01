// Convert String To Array

let theName = "Elzero";

console.log([...theName]);

console.log([...new Set(theName)]);

console.log(Array.from(theName));

console.log(theName.split(''));

let emptyArray = [];
for (let i = 0; i < theName.length; i++) {
    emptyArray.push(theName[i]);
}
console.log(emptyArray);

console.log(Object.assign([], theName));

// All Print [ 'E', 'l', 'z', 'e', 'r', 'o' ]