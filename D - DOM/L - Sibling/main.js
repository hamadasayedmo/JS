/*
    DOM [Traversing]
    - nextSibling
    - previousSibling
    - nextElementSibling
    - previousElementSibling
    - parentElement
*/



/* 
    <div id="my-div"> 
        <span class="one">One</span>
        <!-- Comment One-->
        <span class="two">Two</span>
        <!-- Comment Two-->
        <span class="three">Three</span>
    </div>*/

let two = document.querySelector('.two');

console.log(two.nextSibling);        // <!-- Comment Two-->
console.log(two.nextElementSibling); // <span class="three">Three</span>

console.log(two.previousSibling);        // <!-- Comment One-->
console.log(two.previousElementSibling); // <span class="One">One</span>

console.log(two.parentElement); // <div id="my-div"></div>


// After two clicks the event origin color is red
two.onclick = () => {
    two.parentElement.style.color = 'red';
}