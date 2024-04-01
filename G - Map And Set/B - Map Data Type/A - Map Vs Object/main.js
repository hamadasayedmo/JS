/*
	- Map Data Type
	Syntax: new Map(Iterable With Key/Value)
	-- Map vs Object
	--
	------ Map => Does Not Contain Key By Default
	------ Object => Has Default Keys
	--
	------ Map => Key Can Be Anything [Function, Object, Any Primitive Data Types]
	------ Object => String Or Symbol
	--
	------ Map => Ordered By Insertion
	------ Object => Not 100% Till Now
	--
	------ Map => Get Items By Size
	------ Object => Need To Do Manually
	--
	------ Map => Can Be Directly Iterated
	------ Object => Not Directly And Need To Use Object.keys() And So On
	--
	------ Map => Better Performance When Add Or Remove Data
	------ Object => Low Performance When Comparing To Map
*/


// Object
let myObject = {
	10: "Number",
	'10': "String",
}

// Override Number
console.log(myObject[10]); // String


// Object Not Have Default Value
let EmptyObject = Object.create(null);
console.log(EmptyObject); // {}


// Size In (Objects)
let sizeObject = Object.keys(myObject).length; 
console.log(sizeObject); // 1




// Map
let myMap = new Map();
myMap.set(10, 'Number');
myMap.set('10', 'String');


console.log(myMap.get(10));    // Number
console.log(myMap.get('10'));  // String


// Size In (Map)
console.log(myMap.size); // 2