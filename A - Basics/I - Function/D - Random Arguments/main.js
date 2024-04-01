/*
    Function - Random Argument Challenge
    ====================================
    Create Function showDetails
    Function Accept 3 Parameters [a, b, c]
    Data Types For Info Is
    - String => Name
    - Number => Age
    - Boolean => Status
    Argument Is Random
    Data Is Not Sorted Output Depend On Data Types
    - Use Ternary Conditional Operator
*/

let user , age , bool;

function showDetails(a,b,c) {
    let newArray= [];
    newArray.push(a,b,c);
    for(let i = 0; i < newArray.length ; i++) {
        if(newArray[i] === 'string') {
            user = newArray[i];
        }
        else if (newArray[i] === 'number') {
            age = newArray[i];
        }
        else {
            bool = newArray[i];
        }
    }
    if(bool === true) {
        bool = "Available";
    }
    else {
        bool = "Not Available";
    }
    console.log(`Hello ${user}, Your Age Is ${age}, You Are ${bool} For Hire`)

}


// Use Ternary Operator
function showDetails(a , b , c) {
    let emptyArray = [];
    emptyArray.push(a , b , c);
    for(let i = 0; i < emptyArray.length; i++) {
        typeof emptyArray[i] === 'string'
        ? user = emptyArray[i]
        : typeof emptyArray[i] === 'number'
        ? age = emptyArray[i]
        : bool =  emptyArray[i];
    }
    bool == true ? (bool = "Available") : (bool = "Not Available");
    console.log(`Hello ${user}, Your Age Is ${age}, You Are ${bool} For Hire`)
}

showDetails("Osama", 38, true);  // "Hello Osama, Your Age Is 38, You Are Available For Hire"
showDetails(38, "Osama", true);  // "Hello Osama, Your Age Is 38, You Are Available For Hire"
showDetails(true, 38, "Osama");  // "Hello Osama, Your Age Is 38, You Are Available For Hire"
showDetails(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"