
let setOfNumbers = new Set([10]);
setOfNumbers.add(20).add(setOfNumbers.size);

console.log(setOfNumbers); // Set { 10, 20, 2 }

console.log([...setOfNumbers][2]); // 2