/*
    DOM [Deal With Elements]
    - before [Element || String]
    - after [Element || String]
    - append [Element || String]
    - prepend [Element || String]
    - remove
*/


let element = document.getElementById("my-div");
let createdP = document.createElement("p"); 

createdP.textContent = 'Paragraph';

element.appendChild(createdP); // append paragraph in last element

element.before('Before');     
element.after('After');   

element.prepend('Prepend'); // append in first element     
element.append('Append');   // append in last element     

// element.remove();  remove tits element