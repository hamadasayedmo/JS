/*
    Destructuring
    - Destructuring Array Advanced Examples
*/

let myFriends = ["Ahmed", "Sayed", "Ali", ["Shady", "Amr", ["Mohamed", "aya"]]];

// console.log(myFriends[3][2][1]); // aya

let [, , , [a, , [, b]]] = myFriends;

console.log(a); // shady

console.log(b); // aya





let friends = ['fares', [ 'ali', 'hamada']];

let [, [,x]] = friends;

console.log(x); // hamada














