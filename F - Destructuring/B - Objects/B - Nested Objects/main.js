/*
    Destructuring
    - Destructuring Object
    --- Naming The Variables
    --- Add New Property
    --- Nested Object
    --- Destructuring The Nested Object Only
*/


let user = {
    title: "hamada",
    age: 20,
    id: "621224",
    status: "single",

    skills: {
        html: 80,
        css: 70
    }

};

let {title, age, id, status, skills: {html: h , css: c} } = user;

console.log(title); // hamada
console.log(age);   // 20
console.log(id);    // 621224
console.log(status);// signal

console.log(h); // 80
console.log(c); // 70



// Destructuring Skills Only
let {html: skillOne, css: skillTwo} = user.skills;

console.log(skillOne); // 80
console.log(skillTwo); // 70