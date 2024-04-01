/*
    Arrays Methods [Sort]
    - sort(Function [Opt])
    - reverse
*/

let random = [10, -5 , 9, 100, 0 , 20 , "10", -20, -10];

console.log(random);

random.sort();
console.log(random);

random.sort((a , b) => a - b) // sort math
console.log(random);

let myFriend = ["fared" , "Ahmed" , "mohamed" , "osman" , "omer"];

myFriend.sort();
console.log(myFriend);