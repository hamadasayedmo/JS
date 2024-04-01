// Assignment One 

// Test Case 1
let num1 = 9; // "009"

if (num1 < 10) {
    console.log(`00${num1}`);
}

// Test Case 2
let num2 = 20; // "020"

if (num2 > 10 && num2 < 100) {
    console.log(`0${num2}`);
}

// Test Case 3
let num3 = 110; // "110"

if (num3 >= 100) {
    console.log(`${num3}`);
}




// Assignment Two 

let num4 = 9;
let str = "9";
let str2 = "20";

if(num4 == str) {
    console.log(`${num4} Is The Same Value As ${str}`);
}

if(num4 == str && typeof num4 != typeof str) {
    console.log(`${num4} Is The Same Value As ${str} But Not The Same Type`);
}

if(num4 != str2 && typeof num4 !== typeof str2) {
    console.log(`${num4} Is Not The Same Value Or The Same Type As ${str2}`);
}

if(str != str2) {
    if(typeof str === typeof str2) {
        console.log(`${str} Is The Same Type As ${str2} But Not The Same Value`);
    } 
}

// -- Output
//      "{num1} Is The Same Value As {str}"
//      "{num1} Is The Same Value As {str} But Not The Same Type"
//      "{num1} Is Not The Same Value Or The Same Type As {str2}"
//      "{str} Is The Same Type As {str2} But Not The Same Value"




// Assignment Three
let numOne = 10;
let numTwo = 30;
let numThree = "30";


if(numThree > numOne && typeof numThree !== typeof numTwo) {

    console.log("30 Is Larger Than 10 And Type string Not The Same Type As number");
    
    if(numThree > numOne && numThree == numTwo && typeof numThree !== typeof numTwo) {
        console.log("30 Is Larger Than 10 And Value Is The Same As 30 And Type string Not The Same Type As number");
    }
    
    if(numThree !== numOne && typeof numThree !== typeof numTwo) {
        console.log(`${numThree} Value And Type Is Not The Same As ${numOne} And Type Is Not The Same As ${numTwo}`);
    }
}

// -- Needed Output
    // "30 Is Larger Than 10 And Type string Not The Same Type As number"
    // "30 Is Larger Than 10 And Value Is The Same As 30 And Type string Not The Same Type As number"
    // "{num3} Value And Type Is Not The Same As {num1} And Type Is Not The Same As {num2}"




// Assignment Four
// Edit What You Want Here

let Num1 = 11;
let Num2 = 10;
let Num3 = 11;
let Num4 = 33;

/*
    Do Not Edit Below This Line
    Needed Output
    True 7 Times
*/

// Condition 1

if (Num1 > Num2) {
    console.log("True");
} else {
    console.log("False");
}

// Condition 2

if (Num1 > Num2 && Num1 < Num4) {
    console.log("True");
} else {
    console.log("False");
}

// Condition 3

if (Num1 > Num2 && Num1 === Num3) {
    console.log("True");
} else {
    console.log("False");
}

// Condition 4

if ((Num1 + Num2) < Num4) {
    console.log("True");
} else {
    console.log("False");
}

// Condition 5

if ((Num1 + Num3) < Num4) {
    console.log("True");
} else {
    console.log("False");
}

// Condition 6

if ((Num1 + Num2 + Num3) < Num4) {
    console.log("True");
} else {
    console.log("False");
}

// Condition 7

if (Num4 - (Num1 + Num3) + Num2 === 21) {
    console.log("True");
} else {
    console.log("False");
}