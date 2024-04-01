/*
	Spread Operator => ...Iterable
	"Allow Iterable To Expand In Place"
*/




// Spread With String
console.log("Hamada");             // Hamada
console.log(..."Hamada");          // H a m a d a
console.log([..."Hamada"]);        // [ 'H', 'a', 'm', 'a', 'd', 'a' ]

let e = [..."Hamada"];
console.log(e[2]); // m




// Concatenate Arrays
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

let allArrays = [...arr1, ...arr2];
console.log(allArrays);  // [ 1, 2, 3, 4, 5, 6 ]




// Copy Array
let copiedArray = [...allArrays];

console.log(copiedArray); // [ 1, 2, 3, 4, 5, 6 ]




// Push In Side Array
let allFriends = ['Hamada' , 'Ahmed', 'Mohamed', 'Ali'];
let thisYearFriends = ['Fares' , 'Aya', 'Ala'];

allFriends.push(...thisYearFriends);
console.log(allFriends);  // [ 'Hamada', 'Ahmed', 'Mohamed', 'Ali', 'Fares', 'Aya', 'Ala' ]




// Spread With Function
function times(...time) {
	console.log(time);   // [ 1.5, 2.5, 3.5, '5:00' ]
} 

times(1.5 , 2.5, 3.5, '5:00');




// Use With Math Object
let myNumbers = [10, 20, -100, 100, 1000, 500];

console.log(Math.max(...myNumbers)); // 1000
console.log(Math.min(...myNumbers)); //-100




// Merge Objects
let obj_1 = {
	a: 1,
	b: 2,
};

let obj_2 = {
	c: 3,
	d: 4,
};

let mergeObjects = {...obj_1, ...obj_2, e: 5};

console.log(mergeObjects); // { a: 1, b: 2, c: 3, d: 4, e: 5 }