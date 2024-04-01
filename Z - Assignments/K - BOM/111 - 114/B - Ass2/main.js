
let one = document.querySelector('#one');
let two = document.querySelector('#two');
let three = document.querySelector('#three');
let select = document.querySelector('#select');

// add the value in sessionStorage after events
one.oninput = () => {
    window.sessionStorage.setItem('text-1', one.value); 
}

two.oninput = () => {
    window.sessionStorage.setItem('text-2', two.value);
}

three.oninput = () => {
    window.sessionStorage.setItem('text-3', three.value);
}

select.onchange = function(){
    window.sessionStorage.setItem("select", select.value);
}



// get the value from sessionStorage
one.value = window.sessionStorage.getItem('text-1'); 
two.value = window.sessionStorage.getItem('text-2');
three.value = window.sessionStorage.getItem('text-3');
select.value = window.sessionStorage.getItem("select");