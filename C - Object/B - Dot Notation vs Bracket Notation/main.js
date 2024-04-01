/*
    Object
    - Dig Deeper
    - Dot Notation vs Bracket Notation
    - Dynamic Property Name
*/


const person = {
    'first name': 'Fared',
    'last name': 'Mohamed'
};

console.log(person['first name']); // Accessing using bracket notation
console.log(person['last name']); // Accessing using bracket notation



const propertyName = 'firstName';
const user = {
    firstName: 'John',
    lastName: 'Doe'
};

console.log(user[propertyName]); // Accessing a dynamic property name