

// Map
let mapUser = {theName: 'Hamada'};

let myMap = new Map([
	[mapUser , 'object value'],
]);

mapUser = null;
console.log(myMap); // Map { { theName: 'Hamada' } => 'object value' }






// WeakMap
let WeakMapUser = {theName: 'Hamada'};

let myWeakMap = new WeakMap([
	[WeakMapUser , 'object value'],
]);


WeakMapUser = null;
console.log(myWeakMap); // WeakMap {}