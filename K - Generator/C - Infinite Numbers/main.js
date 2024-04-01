/*
    Generators
    - Generate Infinite Numbers
    - Use Return Inside Generators
*/

function* generatorNumbers() {
    let index = 0;

    while(true) {
        yield index++;
    }
}


let generator = generatorNumbers();

console.log(generator.next());  // { value: 0, done: false }
console.log(generator.next());  // { value: 1, done: false }
console.log(generator.next());  // { value: 2, done: false }
console.log(generator.next());  // { value: 3, done: false }
console.log(generator.next());  // { value: 4, done: false }
console.log(generator.next());  // { value: 5, done: false }