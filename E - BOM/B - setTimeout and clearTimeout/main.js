/*
    BOM [Browser Object Model]
    - setTimeout(Function, Timeout, Additional Params)
    - clearTimeout(Identifier)
*/




let sayMsg = function(user, age) {
    console.log(`Hello ${user}, Age Is ${age}`);
}
setTimeout(sayMsg, 4000, 'Hamada' , 20);

let counter = setTimeout(sayMsg, 3000, "Hamada", 20);

// function sayMsg(user, age) {
//     console.log(`Iam Message For ${user} Age Is : ${age}`);
// }

let btn = document.querySelector("button");

btn.onclick = function () {
    clearTimeout(counter);
};