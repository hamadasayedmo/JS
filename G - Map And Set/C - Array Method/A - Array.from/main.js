/*
	Array Methods
	- Array.from(Iterable, MapFunc, This)
	--- Variable
	--- String Numbers
	--- Set
	--- Using The Map Function
	--- Arrow Function
	--- Shorten The Method + Use arguments
*/


// Return Array []
console.log(
	Array.from('Hamada') // ['H', 'a', 'm', 'a', 'd', 'a']
);

let name = 'Hamada';
console.log(name.split('')); // ['H', 'a', 'm', 'a', 'd', 'a']





// Array.from
let addSelf = Array.from('12345', (e) => +e + +e);

console.log(addSelf);	  // [2, 4, 6, 8, 10]
console.log(addSelf[2]);  // 6






// Higher Order (map)
let add = [1 , 2, 3, 4, 5];
let res = add.map((e , i , arr) => (e + arr[i]));

console.log(res);    // [2, 4, 6, 8, 10]
console.log(res[2]); // 6





// practice with (set) & (Array.from)
let myArray  = [1, 1, 1, 2, 3, 4];
let mySet = new Set(myArray);

console.log(mySet); 			// Set { 1, 2, 3, 4 }
console.log(Array.from(mySet)); // [ 1, 2, 3, 4 ]




function arrayFrom() {
	return Array.from(arguments);
}

console.log(arrayFrom('Hamada', 1, 2)); // [ 'Hamada', 1, 2 ]




let revNum = Array.from("12345" , (e) => e);

console.log(revNum.reverse().join("")); // 54321