/*
    For Loop...
        Syntax...
        for (variable , condition , i++) {
            code to be execute
        }
*/

// print number from 1 to 5
for(let i = 1 ; i <= 5 ; i++) {
    console.log(i);
}




// print each element of the array
const fruits = ["apple","banana","orange","grape"];

for(let i = 0 ; i < fruits.length ; i++) {
    console.log(`${i} : ${fruits[i]}`);
}




// print string only of the array
const myFriends = [1 , 2 ,"Hamada" , 3 , "Osama" , "Ali" , 5 , "sayed"];

let onlyName = [];

for(let i = 0 ; i < myFriends.length ; i++) {
    if(typeof myFriends[i] === "string") {
        onlyName.push(myFriends[i]);
    }
}
console.log(onlyName);




// nested loop
for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        console.log(`${i}${j}`);
    }
}

for (let i = 1; i <= 5; i++) {
    let pattern = '';
    for (let j = 1; j <= i; j++) {
        pattern += '*';
    }
    console.log(pattern);
}
/*
    *
    **
    ***
    ****
    *****
*/ 






/*
    Loop For Advanced Example
*/

let product = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor", "iPhone"];
let i = 0;

for (;;) {
    console.log(product[i]);
    i++;
    if(i === product.length) break;
}
