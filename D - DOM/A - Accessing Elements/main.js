/*
    DOM
    - What Is DOM
    - DOM Selectors
    --- Find Element By ID
    --- Find Element By Tag Name
    --- Find Element By Class Name
    --- Find Element By CSS Selectors
    --- Find Element By Collection
    ------ title
    ------ body
    ------ images
    ------ forms
    ------ links
*/



let getElementById = document.getElementById('get-id'); 
console.log(getElementById.innerHTML); // Hello Id


let getElementsClassName = document.getElementsByClassName('get-class');
console.log(getElementsClassName[0]); 


let getElementsTagName = document.getElementsByTagName('p');
console.log(getElementsTagName[1]);


let querySelector = document.querySelector('.get-class');
console.log(querySelector); // Access First Element


let querySelectorAll = document.querySelectorAll('.get-class');
console.log(querySelectorAll[1]); // Access All Element



console.log(document.title); // Learn DOM JS
console.log(document.body);
console.log(document.forms[0].One.value); // Hello
console.log(document.links[1].href); // https://www.facebook.com/