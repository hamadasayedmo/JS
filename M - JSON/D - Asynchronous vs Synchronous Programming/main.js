/*
    To Understand Ajax, Fetch, Promises

    Asynchronous vs Synchronous Programming
    - Meaning

    Synchronous
    - Operations Runs in Sequence
    - Each Operation Must Wait For The Previous One To Complete
    - Story From Real Life

    Asynchronous
    - Operations Runs In Parallel
    - This Means That An Operation Can Occur while Another One Is Still Being Processed
    - Story From Real Life

    - Facebook As Example
    - Simulation

    Search
    - JavaScript Is A Single-Threaded
    - Multi Threaded Languages
*/


// Synchronous المتزامن
console.log(1);
console.log(2);
window.alert("Operator");
console.log(3);




// Asynchronous غير المتزامن 
console.log('one');
console.log('two');
setTimeout(() => console.log('Operator'), 4000);
console.log('three');