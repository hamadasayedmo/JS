
let myDiv = document.createElement('div');
myDiv.innerHTML = 10;

let counter = setInterval(function() {
    myDiv.innerHTML -= 1;
    if (myDiv.innerHTML === '0') {
        clearInterval(counter);
    }
}, 1000);

document.body.appendChild(myDiv);