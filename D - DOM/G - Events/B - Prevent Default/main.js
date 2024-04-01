/*
    DOM [Events]
    - Validate Form Practice
    - Prevent Default
*/


let userName = document.querySelector('[name="userName"]');
let age = document.querySelector('[name="age"]');

document.forms[0].onsubmit = function (e) {

    let userNameValid = false;
    let ageValid = false;

    if(userName.value !== "" && userName.value.length <= 10) {
        userNameValid = true;
    }

    if(age.value !== "" ) {
        ageValid = true;
    }

    // check is empty 
    if(userNameValid == "false" || ageValid == false) {
        e.preventDefault(); // Stop Work
    }

};