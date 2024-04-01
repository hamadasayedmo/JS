/*
    DOM [Create Elements]
    - createElement
    - createComment
    - createTextNode
    - createAttribute
    - appendChild
*/


let myElement = document.createElement("div");
let myAttr = document.createAttribute("data-set");
let myText = document.createTextNode("Product One"); 
let myComment = document.createComment("This Is Comment"); 

myElement.className = "product";
myElement.setAttribute("title", "Test"); // Add Attribute To Element
myElement.setAttributeNode(myAttr);      // Create Attribute Value Is Empty

// Append Text To Element
myElement.appendChild(myText);


// Append Comment To Element
myElement.appendChild(myComment);


// Append Element To Body
document.body.appendChild(myElement);