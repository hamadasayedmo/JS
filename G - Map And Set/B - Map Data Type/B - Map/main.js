/*
	- Map Data Type
	Methods
	--- set
	--- get
	--- delete
	--- clear
	--- has

	Properties
	--- size
*/


let myMap = new Map([
    [10 , 'Number'],
    ['Name', 'String'],
    [false, 'Boolean'],
])

console.log(myMap)  // Map { 10 => 'Number', 'Name' => 'String', false => 'Boolean' }

// Access Key
console.log(myMap.get(10)); 	// Number
console.log(myMap.get('Name')); // String
console.log(myMap.get(false));  // Boolean


// Delete element
myMap.delete(10); 
console.log(myMap.get(10)); // undefined


console.log(myMap);  // Map { 'Name' => 'String', false => 'Boolean' }


// has
console.log(myMap.has(10)); 	 // false
console.log(myMap.has('Name'));  // true


// clear All
myMap.clear(); 


console.log(myMap); // Empty => Map {  }