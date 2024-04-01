/*
    DOM [CSS]
    - style
    - cssText
    - removeProperty(Property Name) [Inline, style]
    - setProperty(PropertyName, value) 
*/


let element = document.getElementById("my-div");

// inline style

element.style.cssText = "width: fit-content; margin: auto; padding: 5px 10px";
element.style.color = 'red';
element.style.fontSize = '40px';
element.style.textAlign = 'center';

element.style.removeProperty('color');       // remove color 'red'
element.style.setProperty('color', 'white'); // add color 'white'


// External Style

document.styleSheets[0].rules[0].style.setProperty('background-color', 'blue');