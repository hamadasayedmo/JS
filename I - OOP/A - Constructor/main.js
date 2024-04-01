

// Constructor 
// function Car(name, model, color) {
    
//     this.name = name;
//     this.model = model;
//     this.color = color;
    
// };

// Car.prototype.start = function() {
//     console.log(`Start ${this.name}`);
// };
// Car.prototype.stop = function() {
//     console.log(`Stop ${this.name}`);
// };




// New Syntax
class Car {
    constructor(name, model, color) {
        // Properties
        this.name = name || "Unknown";
        this.model = model > 2015 ? model : "is old model";
        this.color = color;

    };

    // Methods 
    updateName(newName) {
        this.name = newName;
    }
    start() {
        console.log(`Start ${this.name}`);
    }
    stop() {
        console.log(`Stop ${this.name}`);
    }
};



// Object
let bmw = new Car('', 2010, 'blue');

bmw.start();             // Start BMW
console.log(bmw.name);   // Unknown

bmw.updateName('kui')
console.log(bmw.name);   // kui

console.log(bmw.model);  // is old model
console.log(bmw.color);  // blue



// instanceof == return (true | false) 
console.log(bmw instanceof Car);        // true
console.log(bmw.constructor === Car);   // true


console.log(typeof Car); // function
console.log(typeof bmw); // object








// function Student(name, age, id) {
//     this.name = name;
//     this.age = age;
//     this.id = id;
//     this.address = function(address) {
//         console.log(`I'm Live In ${address}`);
//     }
// }

// Student.prototype.hourWork = function(hour) {
//     console.log(`I'm Work ${hour} Hour In Week`);
// };



class Student {
    constructor(name, age, id) {
        this.name = name;
        this.age = age;
        this.id = id;
        this.address = function(address) {
            console.log(`I'm Live In ${address}`);
        }
    };
    
    hourWork(hour) {
        console.log(`I'm Work ${hour} Hour In Week`);
    }
};


let hamada = new Student('Hamada', 20, 621224);

hamada.address('Egypt');  // I'm Live In Egypt
console.log(hamada.name); // Hamada
hamada.hourWork(20);      // I'm Work 20 Hour In Week