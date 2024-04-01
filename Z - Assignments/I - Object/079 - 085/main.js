// Assignment One 
console.log("%c Assignment One","color: red");

let member = {
    name: "Hamada",
    age: 20,
    country: "Egypt",
    fullDetails: function() {
        return `My Name Is ${this.name}, My Age Is ${this.age}, I Live in ${this.country}`;
    },
};

console.log(member.name); // Hamada
console.log(member.age); // 20
console.log(member.country); // Egypt
console.log(member.fullDetails());  // My Name Is Hamada, My Age Is 20, I Live in Egypt




// Assignment Two 
console.log("%c Assignment Two","color: red");

let objMethodOne = {
    property: "Method One",
};
console.log(objMethodOne.property); // "Method One"


let objMethodTwo = new Object();
objMethodTwo.property = "Method Two";
console.log(objMethodTwo.property); // "Method Two"


let objMethodThree = Object.create({
    property: "Method Three",
});
console.log(objMethodThree.property); // "Method Three"


let objMethodFour = Object.assign({
    property: "Method Four",
});
console.log(objMethodFour.property); // "Method Four"




// Assignment Three 
console.log("%c Assignment Three","color: red");

let a = 1;

let threeNumbers = {
    b: 2,
    c: 3,
    d: 4,
};

let twoNumbers = {
    e: 5,
    f: 6,
};

let finalObject = Object.assign({a}, threeNumbers, twoNumbers);
console.log(finalObject);

/*
    a: 1
    b: 2
    c: 3
    d: 4
    e: 5
    f: 6
*/