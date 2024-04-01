

let myP = document.querySelector('#my-p').cloneNode(true);
let myDiv = document.querySelector('div');

myP.id = `${myP.id}-cloned`; // editing id in new cloned

console.log(myP); // <p id="my-p-cloned" class="my-p">…</p>

myDiv.appendChild(myP);