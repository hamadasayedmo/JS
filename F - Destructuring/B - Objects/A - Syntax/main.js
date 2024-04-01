/*
    Destructuring
    - Destructuring Object
*/


let user = {
    title: "hamada",
    age: 20,
    id: "621224",
    status: "single"
};

// console.log(user.title); // hamada

let title = user.title;
let age = user.age;
let id = user.id;
let status = user.status;

// console.log(name); // hamada

({title: name , age , id, status} = user);

console.log(name); // hamada
console.log(age);  // 20