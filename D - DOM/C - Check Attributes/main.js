/*
    DOM [Check Attributes]
    - Element.attributes => All attributes
    - Element.hasAttribute => true, false
    - Element.hasAttributes => true, false
    - Element.removeAttribute
*/


let myP = document.getElementsByTagName('p')[0];

// Print All Attributes In Paragraph
console.log(myP.attributes); 


// Check Attribute Is Found
console.log(myP.hasAttribute('data-src')); // true
console.log(myP.getAttribute('data-src')); // Testing

if(myP.hasAttribute('title')) {
    console.log('Found'); // Found
} 
else {
    console.log('Not Found');
}


// Check Element Has Attributes
if(myP.hasAttributes()) {
    console.log(`Has Attributes`); // Has Attributes
}


let myDiv = document.getElementsByTagName('div')[0];

if(myDiv.hasAttributes()) {
    console.log(`Has Attributes`);
}
else {
    console.log(`Has Not Attributes`); // Has Not Attributes
}


// Remove Attributes
myP.removeAttribute('data-src'); // <p class="para" title="paragraph">paragraph</p>