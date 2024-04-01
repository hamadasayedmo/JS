
const myObject = {
    a: 1,
    b: 2,
}

Object.defineProperty(myObject, 'c', {
    // Descriptor
    writable: false,
    enumerable: false,
    configurable: false,
    value: 2,
})


// Property الى Up date مينفعش اعمل writable: false لو 
myObject.c = 5; 


// Property الى Loop مينفعش اعمل enumerable: false لو 
for(let prop in myObject) {                      
    console.log(`${prop} ${myObject[prop]}` );  // 'a 1' 
}                                               // 'b 2'


// Property مينفعش احذف او اعدل في  configurable: false لو 
console.log(delete myObject.c); // false

console.log(myObject); // {a: 1, b: 2, c: 2}'





/*
Object Meta Data And Descriptor
- Define Multiple Properties
- Check Descriptors
*/

const myObj = {
a: 1,
b: 2,
};

Object.defineProperties(myObj, {
    c: {
        configurable: true,
        value: 3,
    },
    d: {
        configurable: true,
        value: 4,
    },
    e: {
        configurable: true,
        value: 5,
    },
});

console.log(myObject);

// Check Descriptors
console.log(Object.getOwnPropertyDescriptor(myObj, "d"));
console.log(Object.getOwnPropertyDescriptors(myObj));