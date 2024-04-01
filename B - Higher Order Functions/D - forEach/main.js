/*
    - forEach
    --- method executes a provided function once for each array element.
    
    Syntax forEach(callBackFunction(Element, Index, Array) { }, thisArg)
    - Element => The current element being processed in the array.
    - Index => The index of the current element being processed in the array.
    - Array - The Current Array

    Note
    - Does not Return Anything [Undefined]
    - Break Will Not Break The Loop
*/






/*
    Higher Order Functions Challenges
*/


let myString = "1,2,3,EE,l,z,e,r,o,_,W,e,b,_,S,c,h,o,o,l,2,0,Z";

let solution = myString
.split("")
.filter((el) => {
    return isNaN(parseInt(el)) && el != ',';
})
.map((el, i, arr) => {
    return (el === arr[i + 1]) ? "" : el && (el === '_') ? " " : el && (el === 'h') ? "ho" : el;
})
.slice(0, 18)
.reduce((acc, current) => acc + current);

console.log(solution); // Elzero Web School










let allLis = document.querySelectorAll("ul li");
let allDiv = document.querySelectorAll("div div");

allLis.forEach((el) => {
    el.onclick = function () {
        console.log(this); // <li class="active">…</li>
        console.log(el.innerHTML); // One
        
        // remove active class All element
        allLis.forEach((el) => {
            el.classList.remove("active");
        });
        // add active class after click 
        this.classList.add("active");
        
        // Hide All Div
        allDiv.forEach(function (el) {
            el.style.display = "none";
        });
    };
});