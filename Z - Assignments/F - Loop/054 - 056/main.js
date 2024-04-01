// Assignment One 
console.log("%c Assignment One","color: red");

let friends = ["Ahmed", "Sayed", "Ali", 1, 2, "Mahmoud", "Amany"];
let index = 0;
let counter = 0;
let c = 1;

// Output
// "1 => Sayed"
// "2 => Mahmoud"

while(index < friends.length) {
    if(friends[index][counter] !== "A" && typeof friends[index] !== "number") {
        console.log(`"${c++} => ${friends[index]}"`)
    }
    index++;
}