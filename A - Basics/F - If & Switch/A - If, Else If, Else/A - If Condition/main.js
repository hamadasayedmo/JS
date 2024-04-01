/*
    Control Flow
    - if
    - else if
    - else

    if (Condition) {
        // Block Of Code
    }
*/

let price = 100;
let discount = false;
let discountAmount = 30;
let country = "Egypt";

if(discount === true) {
    price -= discountAmount;
}
else if (country == "Egypt") {
    price -= discountAmount + 10;
}
else if (country == "syria") {
    price -= discountAmount + 20;
}
else {
    price -= discountAmount - 20;
}
console.log(price); // 60




// Number positive or negative
let number = -10;

if (number >= 0) {
    if(number == 0) {
        console.log("Zero");
    }
    else {
        console.log("Positive");
    }
}
else {
    console.log("Negative"); // Negative
}




// Number even or odd
let value = 5;

if(value % 2 == 0) {
    console.log(`Number (${value}) Is Even`);
}
else {
    console.log(`Number (${value}) Is Odd`); // 'Number (5) Is Odd'
}

console.log((10 >= 5 ? (5 > 2 ? "true" : "false") : "false")); 