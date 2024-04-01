
let myDiv = document.createElement('div');
myDiv.innerHTML = 10;

let counter = setInterval(function() {
    myDiv.innerHTML -= 1;
    
    if(myDiv.innerHTML == '5') {
        window.open('https://elzero.org', '_blank', "width=400,height=400,left=200,top=10");
    }

    // stop counter
    if(myDiv.innerHTML === '0') {
        clearInterval(counter);
    }
}, 1000);

document.body.appendChild(myDiv);