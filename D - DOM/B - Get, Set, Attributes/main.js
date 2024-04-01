/*
    DOM [Get / Set Elements Content And Attributes]
    - innerHTML
    - textContent
    - Change Attributes Directly
    - Change Attributes With Methods
    --- getAttribute
    --- setAttribute

    Search
    - innerText
*/

let myElement = document.querySelector(".js");

console.log(myElement.innerHTML);   // JavaScript <span>&lt;Div&gt;</span>
console.log(myElement.textContent); // JavaScript <Div>

myElement.innerHTML = "Text From <span>Main.js</span> File";
myElement.textContent = "Text From <span>Main.js</span> File";

console.log(myElement.innerHTML);   // Text From &lt;span&gt;Main.js&lt;/span&gt; File
console.log(myElement.textContent); // Text From <span>Main.js</span> File


// Add Attributes To Image & modification
document.images[0].src = 'http://google.com';
document.images[0].alt = 'google';
document.images[0].id = 'pic';


// Add Attributes To Links
document.links[0].href = 'http://facebook.com';
document.links[0].className = 'link';
document.links[0].target = '_blank';



// Attributes
let myLink = document.querySelector(".link");

console.log(myLink.getAttribute("class")); // link
console.log(myLink.getAttribute("href"));  // http://facebook.com

myLink.setAttribute("href", "http://instagram.com")
myLink.setAttribute("title", "instagram")