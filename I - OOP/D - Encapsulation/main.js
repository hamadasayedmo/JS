/*
    Encapsulation
    - Class Fields Are Public By Default.
    - Guards The Data Against Illegal Access.
    - Helps To Achieve The Target Without Revealing Its Complex Details.
    - Will Reduce Human Errors.
    - Make The App More Flexible And Manageable.
    - Simplifies The App.
*/



class Student {
    #g;
    constructor(name, id, gpa) {
        this.n = name;
        this.i = id;
        this.#g = gpa;
    };
    getGpa () {
        return parseFloat(this.#g);
    }    
}

class Professor extends Student {
    // Private
    #s;
    constructor(name, id, gpa, salary) {
        super(name, id, gpa);
        this.#s = salary;
    }
}


let myStudent = new Student('Hamada', 621224, '2.4 B+');
let myProf  = new Professor('gaper', 621224, '2.5 B+', 5000);

console.log(myStudent.n);           // Hamada
console.log(myStudent.getGpa());    // 2.4

console.log(myProf.getGpa());       // 2.4
console.log(myProf.#s);             // Syntax Error