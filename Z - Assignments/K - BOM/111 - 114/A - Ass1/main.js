
let font = document.getElementById('fonts');
let color = document.getElementById('color');
let size = document.getElementById('font-size');

font.onchange = () => {
    window.localStorage.setItem('font', font.value);
    document.body.style.fontFamily = font.value;
}

color.onchange = () => {
    window.localStorage.setItem('color', color.value);
    document.body.style.color = color.value;
}

size.onchange = () => {
    window.localStorage.setItem('size', size.value);
    document.body.style.fontSize = size.value;
}

// get from localStorage
document.body.style.fontFamily = window.localStorage.getItem('font', font.value);
document.body.style.color = window.localStorage.getItem('color', color.value);
document.body.style.fontSize = window.localStorage.getItem('size', size.value);



font.value = window.localStorage.getItem('font', font.value);
color.value = window.localStorage.getItem('color', color.value);
size.value = window.localStorage.getItem('size', size.value);