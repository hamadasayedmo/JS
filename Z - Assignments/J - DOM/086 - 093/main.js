// Assignment One 
console.log("%c Assignment One","color: red");

// let myElement = document.getElementById('elzero');
// let myElement = document.getElementsByClassName('element')[0];
// let myElement = document.getElementsByTagName('div')[0];

// let myElement = document.querySelector('div');
// let myElement = document.querySelector('#elzero');
// let myElement = document.querySelector('.element');
// let myElement = document.querySelector('[name="js"]');

// let myElement = document.querySelectorAll('div')[0];
// let myElement = document.querySelectorAll('#elzero')[0];
// let myElement = document.querySelectorAll('.element')[0];
// let myElement = document.querySelectorAll('[name="js"]')[0];

// let myElement = document.body.children[0];
// let myElement = document.body.childNodes[1];

// let myElement = document.body.firstElementChild;
// let myElement = document.body.firstChild;

// Output:=>  <div id="elzero" class="element" name="js">JavaScript</div>




// Assignment Two 
console.log("%c Assignment Two","color: red");

let myImg = document.querySelectorAll('div img');

for(let i = 0; i < myImg.length; i++) {
    myImg[i].src = 'https://elzero.org/wp-content/themes/elzero/imgs/logo.png';
    myImg[i].setAttribute('alt', 'Elzero Logo');
    myImg[i].style.backgroundColor = "#000";
    console.log(myImg[i]);
}




// Assignment Three 
console.log("%c Assignment Three","color: red");

let myInput = document.querySelector('[type="number"]');
let myDIv = document.getElementsByClassName('result')[0];


document.forms[0].oninput = function () {
    myDIv.textContent = `{${myInput.value}} USD Dollar = {${(myInput.value * 30.95).toFixed(2)}} Egyptian Pound`
}




// Assignment Four 
console.log("%c Assignment Four","color: red");

let one = document.getElementsByClassName("one")[0];
let two = document.getElementsByClassName("two")[0];

one.setAttribute('title', 'one');
two.setAttribute('title', 'two');

let textOne = one.textContent;
let textTwo = two.textContent;

one.textContent = textTwo;
two.textContent = `${textOne} ${++two.childNodes.length}`;

console.log(one); // <div class="one" title="one">One</div>
console.log(two); // <div class="two" title="two">Two 2</div>




// Assignment Five 
console.log("%c Assignment Five","color: red");

let myImgs = document.querySelectorAll('[title="async"]');

for(let i = 0; i < myImgs.length; i++) {
    if(myImgs[i].alt) {
        myImgs[i].alt = 'Old';
    }
    else {
        myImgs[i].alt = 'Elzero New';
    }

    console.log(myImgs[i]);
}
