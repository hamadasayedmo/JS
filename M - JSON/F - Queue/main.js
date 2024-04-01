

// FIFO
console.log('one');
setTimeout(() => console.log('three'), 0);
setTimeout(() => console.log('four'), 0);
console.log('two');

let x = 5;
x++;
console.log(x);

/*
    ... Output
    - one
    - two
    - 6
    - three
    - four
*/