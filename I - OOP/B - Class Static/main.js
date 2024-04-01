

class Student {
    // Static Property
    count = 0;
    static salary = 4000;
    
    // Static Method
    static coin() {
        return `${this.salary} Egp`;
    }
};


let hamada = new Student;

// Use Object
console.log(hamada.count);  // 0
console.log(Student.count); // undefined

// Use Static
console.log(hamada.salary);   // undefined
console.log(Student.salary);  // 4000

console.log(Student.coin());  // 4000 Egp