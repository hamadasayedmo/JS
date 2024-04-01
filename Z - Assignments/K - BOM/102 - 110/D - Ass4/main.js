let myDiv = document.createElement('div');
myDiv.innerHTML = 10;

setInterval(function() {
    myDiv.innerHTML -= 1;
    if(myDiv.innerHTML == '5') {
        open('http://elzero.org', '_self');
    }
}, 1000);

document.body.appendChild(myDiv);