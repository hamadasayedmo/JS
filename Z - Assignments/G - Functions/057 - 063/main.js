// Assignment One 
console.log("%c Assignment One","color: red");

function sayHello(theName , theGender) {
    if(theGender !== undefined) {
        if(theGender === 'Male') {
            console.log(`Hello Mr ${theName}`);
        }
        else {
            console.log(`Hello Mis ${theName}`);
        }
    } else {
        console.log(`Hello ${theName}`);
    }
}

sayHello("Hamada", "Male"); // "Hello Mr Hamada"
sayHello("Aya", "Female"); // "Hello Miss Aya"
sayHello("Fares"); // "Hello Fares"




// Assignment Two 
console.log("%c Assignment Two","color: red");

function calculate(num1 , num2 , op) {
    if(op !== undefined) {
        switch(op) {
            case 'add':
                console.log(num1 + num2);
                break;
            case 'subtract':
                console.log(num1 - num2);
                break;
            case 'multiply':
                console.log(num1 * num2);
                break;
        }
    }
    else {
        if(num2 === undefined) {
            console.log('Second Number Not Found');
        }
        else {
            console.log(num1 + num2);
        }
    }
    
}

calculate(20); // Second Number Not Found
calculate(20, 30); // 50
calculate(20, 30, 'add'); // 50
calculate(20, 30, 'subtract'); // -10
calculate(20, 30, 'multiply'); // 600




// Assignment Three 
console.log("%c Assignment Three","color: red");

function ageInTime(theAge) {
    if(theAge > 10 && theAge < 100) {
        let months = theAge * 12;
        let days = months * 30;
        let hours = days * 24;
        let minutes = hours * 60;
        let seconds = minutes * 60;
        
        console.log(`${months}: Months`);
        console.log(`${days}: Days`);
        console.log(`${hours}: Hours`);
        console.log(`${minutes}: Minutes`);
        console.log(`${seconds}: seconds`);
    }
    else {
        console.log(`Age Out Of Range`);
    }
}

ageInTime(38);
ageInTime(110); 

// outPut
// 456: Months
// 13680: Days
// 328320: Hours
// 19699200: Minutes
// 1181952000: seconds
// Age Out Of Range




// Assignment Four 
console.log("%c Assignment Four","color: red");

function checkStatus(a,b,c) {
    let emptyArray = [];
    emptyArray.push(a,b,c);

    for(let i = 0 ; i < emptyArray.length ;i++) {
        typeof emptyArray[i] === "string"
        ? user = emptyArray[i]
        : typeof emptyArray[i] === "number"
        ? age = emptyArray[i]
        : bool = emptyArray[i];
    }
    bool == true ? bool = "Available" : bool = "Not Available";
    console.log(`Hello ${user}, Your Age Is ${age}, You Are ${bool} For Hire`)
}

checkStatus("Osama", 38, true);  // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(38, "Osama", true);  // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(true, 38, "Osama");  // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"




// Assignment Five 
function createSelectBox(startYear, endYear) {
    document.write(`<select>`)
    for(let i = startYear; i <= endYear; i++) {
        document.write(`<option value=${i}> ${i} </option>`)
    }
    document.write(`</select>`)
}

createSelectBox(2000, 2021);




// Assignment Six 
console.log("%c Assignment Six","color: red");

function multiply(...numbers) { // Rest Parameters
    let mul = 1;
    
    for(let i = 0 ; i < numbers.length ; i++) {
        if(typeof numbers[i] === "string") {
            continue;
        }
        else {
            mul *= Math.floor(numbers[i]);
        }
    }

    console.log(mul);
}

multiply(10, 20); // 200
multiply("A", 10, 30); // 300
multiply(100.5, 10, "B"); // 1000