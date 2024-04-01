/*
    Generators
    - Delegate Generator
*/



function* generatorNumbers() {
    yield 1;
    yield 2;
    yield 3;
}

function* generatorLetters() {
    yield 'A';
    yield 'B';
    yield 'C';
}

function* generatorAll() {
    yield* generatorNumbers();
    yield 'Hamada';
    yield* generatorLetters();
}

let generator = generatorAll();

console.log(generator.next());  // { value: 1, done: false }
console.log(generator.next());  // { value: 2, done: false }
console.log(generator.next());  // { value: 3, done: false }
console.log(generator.next());  // { value: 'Hamada', done: false }
console.log(generator.next());  // { value: 'A', done: false }
console.log(generator.next());  // { value: 'B', done: false }
console.log(generator.next());  // { value: 'C', done: false }
console.log(generator.next());  // { value: undefined, done: true }