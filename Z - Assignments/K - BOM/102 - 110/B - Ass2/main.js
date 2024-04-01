
let popup = document.createElement('div');
popup.className = 'popup';

let h2 = document.createElement('h2');
h2.textContent = 'Welcome'; 

let p = document.createElement('p');
p.textContent = 'Welcome To Elzero Web School'; 

popup.appendChild(h2);
popup.appendChild(p);

document.body.appendChild(popup);

let closeButton = document.createElement('button');
closeButton.className = 'close';
closeButton.textContent = 'X';

popup.appendChild(closeButton);


// work after 5 scend
setTimeout(() => {
    popup.style.display = 'block';
}, 5000);

// close the popup
closeButton.addEventListener('click', function() {
    // popup.style.display = 'none';
    popup.remove();
});
