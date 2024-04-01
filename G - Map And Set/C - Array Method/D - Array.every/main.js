/*
	Array Methods
	- Array.every(CallbackFunc(Element, Index, Array), This Argument)
	--- CallbackFunc => Function To Run On Every Element On The Given Array
	------ Element => The Current Element To Process
	------ Index => Index Of Current Element
	------ Array => The Current Array Working With
	--- This Argument => Value To Use As This When Executing CallbackFunc
	--
*/

const locations = {
	20: "Place 1",
	30: "Place 2",
	50: "Place 3",
	40: "Place 4",
};


let mainLocation = 15;

let locationsArray = Object.keys(locations);

console.log(locationsArray); // [ '20', '30', '40', '50' ]

let convertNumbers = locationsArray.map((n) => Number(n));

console.log(convertNumbers); // [ 20, 30, 40, 50 ]

let chick = convertNumbers.every((e) => e > 15);

console.log(chick); // true