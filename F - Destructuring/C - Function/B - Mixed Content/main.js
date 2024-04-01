/*
    Destructuring
    - Destructuring Mixed Content
*/

const user = {
    theName: "Hamada",
    theAge: 20,
    skills: ["HTML", "CSS", "JavaScript"],
    addresses: {
        egypt: "Cairo",
        ksa: "Riyadh",
    },
};


let {
    theName: n,
    theAge: a,
    skills: [one, two, three],
    addresses: { egypt: eg, ksa: ri},
} = user;

console.log(`Name: ${n}`);                  // Name: Hamada
console.log(`Age: ${a}`);                   // Age: 20

console.log(`Skill One: ${one}`);           // Skill One: HTML
console.log(`Skill Two: ${two}`);           // Skill Two
console.log(`Skill Three: ${three}`);       // Skill Three: JavaScript

console.log(`Address 1: ${eg}`);            // Address 1: Cairo
console.log(`Address 2: ${ri}`);            // Address 2: Riyadh