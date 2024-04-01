/*
    String Methods
    - indexOf(Value [Mand], Start [Opt] 0)
    - lastIndexOf(Value [Mand], Start [Opt] Length)
    - slice(Start [Mand], End [Opt] Not Include End)
    - repeat(Times) [ES6]
    - split(Separator [Opt], Limit [Opt])
*/

let a = "hamada sayed mohamed";

console.log(a.indexOf("s")); // 7
console.log(a.indexOf("s" , 8)); // Start Search index 8 => -1 empty
console.log(a.indexOf("e")); // 10 

console.log(a.lastIndexOf("e")); // 18

console.log(a.slice(0)); // hamada sayed mohamed
console.log(a.slice(7 , 12)); // sayed

console.log(a.repeat(2)); // hamada sayed mohamedhamada sayed mohamed

console.log(a.split(" ",(2))); // Return Array ['hamada', 'sayed']