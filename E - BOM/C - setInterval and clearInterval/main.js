/*
    BOM [Browser Object Model]
    - setInterval(Function, Milliseconds, Additional Params)
    - clearInterval(Identifier)
*/




let div = document.querySelector("div");

function countdown() {
    div.innerHTML -= 1;
    
    if(div.innerHTML === "0") {
        clearInterval(counter);
    }
}

let counter = setInterval(countdown , 1000);