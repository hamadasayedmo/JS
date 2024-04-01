/*
    Object
    - Intro and What Is Object
    - Testing Window Object
    - Accessing Object
*/


let user = {
    // Properties
    theName: "Hamada",
    theAge: 20,
    // Methods
    sayHello: () => `Hello ${user.theName} `,
};

console.log(user.theName);    // Hamada
console.log(user.theAge);     // 20
console.log(user.sayHello()); // Hello Hamada



let car = {
    // Properties
    type: 'G-Class',
    color: 'black',
    // Methods
    pushUp: (fast) => `running now ${fast}km`,
};

console.log(car.type);         // G-class
console.log(car.color);        // black
console.log(car.pushUp(120));  // running now 120km