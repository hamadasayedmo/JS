/*
    BOM [Browser Object Model]
    - stop()
    - print()
    - focus()
    - scrollTo(x, y || Options)
    - scroll(x, y || Options)
    - scrollBy(x, y || Options)
*/

// window.stop(); // stop reload

// let myNweWindow = window.open('http://google.com','_blank' , 'width=500,height=500');

// myNweWindow.focus();

// window.print()

// window.scrollTo(400, 550);

window.scrollBy({
    top: 4000,
    left: 5050,
    behavior: 'smooth'
})