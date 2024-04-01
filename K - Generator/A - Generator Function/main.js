/*
    Generators
    - Generator Function Run Its Code When Required.
    - Generator Function Return Special Object [Generator Object]
    - Generators Are Iterable
*/

function* generatorNumbers() {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
}

let generator = generatorNumbers();

console.log(generator.next());       // {value: 1, done: false}
console.log(generator.next().value); // 2 
console.log(generator.next().done);  // false
console.log(generator.next());       // {value: 4, done: false}
console.log(generator.next());       // {value: undefined, done: true}
console.log(generator.next().done);  // true


for(let value of generatorNumbers()) {
    console.log(value); // 1, 2, 3, 4
}