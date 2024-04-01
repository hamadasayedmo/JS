
class User {
    constructor(name, id)  {
        this.name = name;
        this.id = id;
    }
    get sayHello() {
        return `Hello ${this.name}`;
    }
}

// add (method) in prototype
User.prototype.sayHi = function (){
    return `Hi ${this.name}`;
}
console.log(userOne.sayHi());  // Hi hamada



// add (property) in prototype
Object.prototype.love = 'I Love';
console.log(userOne.love);     // I Love



// object
let userOne = new User('hamada', 621224); 
console.log(userOne.sayHello); // Hello hamada