/*
    Object
    - Nested Object And Trainings
*/

let available = true;

let user = {
    name: "Hamada",
    age: 20,
    skills: ["HTML", "CSS", "JS"],
    available: false,
    addresses: {
        ksa: "Riyadh",
        egypt: {
            one: "Cairo",
            two: "Alx",
        },
    },
    checkAv: function () {
        if (user.available === true) {
            return `Free For Work`;
        } 
        else {
            return `Not Free`;
        }
    },
};

console.log(user.name);
console.log(user.age);
console.log(user.available);
console.log(user.addresses.ksa);
console.log(user.addresses.egypt.one);
console.log(user.addresses.egypt.two);
console.log(user["addresses"]["egypt"].two);
console.log(user.checkAv());