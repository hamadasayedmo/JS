/*
    Arrays Methods [Search]
    - indexOf(Search Element, From Index [Opt])
    - lastIndexOf(Search Element, From Index [Opt])
    - includes(valueToFind, fromIndex [Opt]) [ES7]
*/


let myFriends = ["fares" , "hamada" , "osman" , "mohamed" , "osman"];

console.log(myFriends.indexOf("osman"));      // 2
console.log(myFriends.indexOf("osman" , 2));  // 2
console.log(myFriends.indexOf("osman" , 5));  // -1 => undefined

console.log(myFriends.lastIndexOf("osman"));       // 4
console.log(myFriends.lastIndexOf("osman" , -2));  // 2

console.log(myFriends.includes("Aya"));       // false
console.log(myFriends.includes("osman"));     // true
console.log(myFriends.includes("osman" , 2)); // true


if(myFriends.indexOf("aya") === -1) {
    console.log("Not found"); // Not found
} 

if (myFriends.indexOf("osman") === 2) {
    console.log(`My Friends Osman in index: ${myFriends.indexOf("osman")}`);
    // My Friends Osman in index: 2
}