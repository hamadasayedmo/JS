/*
    - Set Data Type
    Syntax: new Set(Iterable)
    -- Object To Store Unique Values
    -- Cannot Access Elements By Index

    Properties:
    - size

    Methods:
    - add
    - delete
    - clear
    - has
*/


let data = [1, 1, 1, 2 ,3];
let uniqueData = new Set([1, 1, 1, 2 ,3]);

console.log(data); // [1, 1, 1, 2 ,3]
console.log(uniqueData); // Set {1, 2, 3}

console.log(uniqueData.size); // 3


// add element not in set 
uniqueData.add(11); 
console.log(uniqueData); // Set {1, 2, 3, 11}


// delete element in set 
uniqueData.delete(1); 
console.log(uniqueData); // Set {2, 3, 11}


// search element 
console.log(uniqueData.has(2)); // true


// clear All
uniqueData.clear()
console.log(uniqueData); // Set { }