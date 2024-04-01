/*
    DOM [Add Event Listener]
    - addEventListener
    - Use Without On
    - Attach Multiple Events
    - Error Test

    Search
    - Capture & Bubbling JavaScript
    - removeEventListener
*/


let myP = document.querySelector('#my-p');

myP.onclick = () => {
    console.log('Message From OnClick');
}

// myP.onclick = () => {    // Error
//     console.log('Message From OnClick');
// }


myP.addEventListener('click', () => {
    console.log('Message From OnClick addEventListener 1');
})

myP.addEventListener('click', () => {
    console.log('Message From OnClick addEventListener 2');
})

// myP.addEventListener('click', 'string'); // Error


myP.onclick = () => {
    let newP = myP.cloneNode(true);
    newP.className = 'cloned';
    document.body.append(newP);
}

document.addEventListener('click', (e) => {
    if(e.target.className === 'cloned'){
        console.log('Im Cloned');
    }
});
