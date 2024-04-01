/*
	Array Methods
	- Array.some(CallbackFunc(Element, Index, Array), This Argument)
	--- CallbackFunc => Function To Run On Every Element On The Given Array
	------ Element => The Current Element To Process
	------ Index => Index Of Current Element
	------ Array => The Current Array Working With
	--- This Argument => Value To Use As This When Executing CallbackFunc
	--
	Using
	- Check if Element Exists In Array
	- Check If Number In Range
*/



let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; 

let check = numbers.some((e) => e > 5);

console.log(check); // true




let Names = ['Ahmed', 'Mohamed', 'Hamada', 'Ali'];

let myName = 'Hamada';

function getName(arr, val) {
	return arr.some(function(e) {
		return e == this;
	}, myName)  // this == myName
}

console.log(getName(Names, myName)); // true





let range = {
	min: 10,
	max: 20,
};

let checkNumberInRange = numbers.some(function (e) {
	// console.log(this.min); // 10
	// console.log(this.max); // 20
	return e >= this.min && e <= this.max;
}, range);

console.log(checkNumberInRange); // true




