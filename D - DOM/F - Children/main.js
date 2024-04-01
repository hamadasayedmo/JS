/*
    DOM [Deal With Children]
    - children
    - childNodes
    - firstChild
    - lastChild
    - firstElementChild
    - lastElementChild
*/


let myElement = document.querySelector("div"); // Access Div

// Create Class Paragraph In First Children
myElement.children[0].setAttribute("class", "Paragraph"); 

console.log(myElement);

console.log(myElement.children);    // HTMLCollection(2) [p.Paragraph, span]
console.log(myElement.children[0]); // <p class="Paragraph">Hello p</p>

console.log(myElement.childNodes);    // NodeList(7)
console.log(myElement.childNodes[3]); // <span>Hello Span</span>


console.log(myElement.firstChild);          // Hello Div
console.log(myElement.lastChild);           // Hello

console.log(myElement.firstElementChild);   // <p class="Paragraph">Hello p</p> 
console.log(myElement.lastElementChild);    // <span>Hello Span</span> 