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
window.localStorage.setItem('color', 'red');
window.sessionStorage.setItem('color', 'blue');



let input = document.querySelector('.name');

input.onblur = function() {
    window.sessionStorage.setItem('input-name', this.value);
}

if(window.sessionStorage.getItem('input-name')) {
    input.value = window.sessionStorage.getItem('input-name');
}