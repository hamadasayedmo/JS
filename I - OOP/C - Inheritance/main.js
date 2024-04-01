
/*
    Class 
    - Inheritance
*/

class Student {
    constructor(name, id) {
        this.n = name
        this.i = id;
    };
    sayHello() {
        console.log(`Hello ${this.n}`);
    }
}

class Professor extends Student {
    constructor(name, id, salary) {
        super(name, id);
        this.s = salary;
    }
}

let myStudent = new Student('Hamada', 621224);
let myProfessor = new Professor('Gaper', 561140, 6000);

console.log(myStudent.n);    // Hamada
console.log(myStudent.i);    // 621224
myStudent.sayHello();        // Hello Hamada

console.log(myProfessor.n);  // Gaper
console.log(myProfessor.i);  // 561140
console.log(myProfessor.s);  // 6000
myProfessor.sayHello();      // Hello Gaper