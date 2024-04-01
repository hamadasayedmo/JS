/*
    DOM [Events]
    - Use Events On HTML
    - Use Events On JS
    --- onclick
    --- oncontextmenu
    --- onmouseenter
    --- onmouseleave

    --- onload
    --- onscroll
    --- onresize

    --- onfocus
    --- onblur
    --- onsubmit
*/



let myButton = document.getElementById('btn');

myButton.onclick = () => console.log('Clicked');

myButton.oncontextmenu = () => console.log('Click Right');

myButton.onmouseenter = () => console.log('Equal Hover');

myButton.onmouseleave = () => console.log('Leave');