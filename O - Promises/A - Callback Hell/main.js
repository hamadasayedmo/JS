/*
    To Understand Ajax, Fetch, Promises

    Pyramid Of Doom || Callback Hell

    - What Is Callback
    - Callback Hell Example

    What Is Callback
    - A Function That Is Passed Into Another One As An Argument To Be Executed Later
    - Function To Handle Photos
    --- [1] Download Photo From URL
    --- [2] Resize Photo
    --- [3] Add Logo To The Photo
    --- [4] Show The Photo In Website
*/



let div = document.querySelector('.test');

function convertColor() {
    div.style.color = 'red';
}

div.addEventListener('click', convertColor);


setTimeout(() => {
    console.log('one');
    setTimeout(() => {
        console.log('two');
        setTimeout(() => {
            console.log('three');
        }, 1000);
    }, 1000);
}, 4000);