/*
    DOM [Events Simulation]
    - click
    - focus
    - blur
*/

let one = document.querySelector('.one');
let two = document.querySelector('.two');

window.onload = () => { 
    two.focus();
};

window.onblur = () => {
    document.links[0].click();
};

one.onblur = () => {
    two.focus();
};