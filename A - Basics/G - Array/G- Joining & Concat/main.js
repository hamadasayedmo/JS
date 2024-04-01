/*
    Arrays Methods [Joining]
    - concat(array, array) => Return A New Array
    - join(Separator) => return string
*/


let myFriends = ["Ahmed" , "Fared" , "Ali" , ["Osama" , "Ameer"]];
let student = ["Aya" , "gan" , "manna" , "Noah"];
let names = ["nasser" , "Sayed" , "youse"];

let allFriends = myFriends.concat(names , student , "gmail" , [1 , 2 , 3]);
console.log(allFriends);
console.log(allFriends.length); // 15

// join => return string
console.log(allFriends.join());
console.log(allFriends.join(""));
console.log(allFriends.join("|"));
console.log(allFriends.join(" @ "));
console.log(allFriends.join(" @ ").toUpperCase());