/*
    Regular Expression
    - Input Form Validation Practice
*/


document.getElementById('register').addEventListener('submit', function (e) {
    
    let phoneInput = document.getElementById('phone').value;
    let phoneRe = /\(\d{4}\)\s\d{3}-\d{4}/g;
    
    let validationResult = phoneRe.test(phoneInput);

    if(validationResult === false) {
        e.preventDefault(); // Stop Refresh => Don't Requested
    }

})