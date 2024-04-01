
let a = 1;
let b = 12;
let c = 123;
let d = 1234;
let e = 12345;

let friends = ['hamada', 'sayed', 'mohamed', 'aya', 'ali'];


[b , c , d , e , f , g] = friends; // destructuring

console.log(a); // 1

console.log(b , c , d , e , f); // 'hamada' 'sayed' 'mohamed' 'aya' 'ali

console.log(g);          // undefined
console.log(friends[5]); // undefined


let [x, y, , z] = friends; // destructuring skip mohamed

console.log(x, y, z); // 'hamada' 'sayed' 'aya'