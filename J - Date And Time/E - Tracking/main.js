/*
    Date And Time
    - Track Operations Time

    Search
    - performance.now()
    - performance.mark()
*/



// Start Time
let start = new Date();


// Operation
for (let i = 0; i < 100000; i++) {
    let div = document.createElement('div');
    let node = document.createTextNode(i);
    div.appendChild(node);
    document.body.appendChild(div);
}


// End Time
let end = new Date();

let duration = end - start;

console.log(duration);





// Use Performance
const t0 = performance.now();

for (let i = 0; i < 10; i++) { 
	console.log(i); 
}

const t1 = performance.now(); 

console.log(`Call to doSomething took ${t1 - t0} milliseconds.`); 