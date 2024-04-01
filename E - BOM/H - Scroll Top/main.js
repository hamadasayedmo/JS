/*
    BOM [Browser Object Model]
    - Practice => Scroll To Top
    - scrollX [Alias => PageXOffset]
    - scrollY [Alias => PageYOffset]
    */

// console.log(window.scrollX === window.pageXOffset);



let up = document.querySelector('button');

up.style.cssText = 'background-color: #0075ff; color: #fff; padding: 0.5em; border: none; border-radius: 0.5em; position: fixed; bottom: 20px; right: 20px; cursor: pointer; display: none; overflow: hidden';


window.addEventListener('scroll', function () {
    if(window.scrollY >= 600) {
        up.style.display = 'block';
    }
    else {
        up.style.display = 'none';
    }
})

up.addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    })
});