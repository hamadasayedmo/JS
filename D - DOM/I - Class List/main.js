/*
    DOM [Class List]
    - classList
    --- length
    --- contains
    --- item(index)
    --- add
    --- remove
    --- toggle
*/


// <div id="my-div" class="one two show test">Class List</div>

let element = document.getElementById("my-div");


console.log(element.classList);
console.log(typeof element.classList);

console.log(element.classList.contains('Hamada')); // d'nt have class name: Hamada => false
console.log(element.classList.contains('one'));    // have class name: one => true

console.log(element.classList.item('0')); // search index '0' is value => one
console.log(element.classList.item('2')); // search index '2' is value => show

element.onclick = () => {
    element.classList.add('add-one', 'add-two'); // append this class in the element
    element.classList.remove('show', 'test');    // delete this class in the element
    element.classList.toggle('one');             // append & delete 
}