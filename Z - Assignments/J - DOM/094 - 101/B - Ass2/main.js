let ourElement = document.querySelector('.our-element');
let myP = document.querySelector('p');
myP.remove();

let prvDiv = document.createElement('div');

prvDiv.setAttribute('class', 'start');
prvDiv.setAttribute('title', 'start Element');
prvDiv.setAttribute('data-value', 'start');

prvDiv.textContent = 'start';
ourElement.before(prvDiv)


let afterDiv = document.createElement('div');

afterDiv.setAttribute('class', 'end');
afterDiv.setAttribute('title', 'End Element');
afterDiv.setAttribute('data-value', 'End');

afterDiv.textContent = 'End';
ourElement.after(afterDiv)
