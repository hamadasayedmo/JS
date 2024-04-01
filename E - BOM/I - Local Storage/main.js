/*
    BOM [Browser Object Model]
    Local Storage
    - setItem
    - getItem
    - removeItem
    - clear
    - key

    Info
    - No Expiration Time
    - HTTP And HTTPS
    - Private Tab
*/


// set
window.localStorage.setItem('color', 'blue');
window.localStorage.fontWeight = 'bold';
window.localStorage['fontSize'] = '20px';


// get
console.log(window.localStorage.getItem('color', 'blue')); // blue
console.log(window.localStorage.fontWeight);               // bold
console.log(window.localStorage['fontSize']);              // 20px


// Remove One
window.localStorage.removeItem('color'); 


// Remove All
window.localStorage.clear();



// Get Key
console.log(window.localStorage.key(2)); // fontWeight


document.body.style.backgroundColor = window.localStorage.getItem('color', 'blue');


console.log(window.localStorage);