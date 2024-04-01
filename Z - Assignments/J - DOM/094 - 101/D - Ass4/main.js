let myElement = document.querySelectorAll('.element');

document.body.onclick = function() {

    for (let i = 0; i < myElement.length; i++) {
        console.log(`This Is ${myElement[i].tagName}`);
    }
};