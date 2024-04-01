/*
    - Set vs WeakSet
    "
        The WeakSet is weak,
        meaning references to objects in a WeakSet are held weakly.
        If no other references to an object stored in the WeakSet exist,
        those objects can be garbage collected.
    "
    --
    Set     => Can Store Any Data Values
    WeakSet => Collection Of Objects Only
    --
    Set     => Have Size Property
    WeakSet => Does Not Have Size Property
    --
    Set     => Have Keys, Values, Entries
    WeakSet => Does Not Have clear, Keys, Values And Entries
    --
    Set     => Can Use forEach
    WeakSet => Cannot Use forEach

    Usage: Store objects and removes them once they become inaccessible
*/



// Set  

// Type Of Data
let mySet = new Set([1, 1, 2, 3, 'A', 'A']);

console.log(mySet); // Set { 1, 2, 3, 'A' }

// Size
console.log(`Size of mySet: ${mySet.size}`); // 'Size of mySet: 4'

// Values + Keys Alias
let iterator = mySet.keys();

console.log(iterator); // SetIterator {1, 2, 3, 'A'}

console.log(iterator.next()); // { value: 1, done: false }
console.log(iterator.next()); // { value: 2, done: false }
console.log(iterator.next()); // { value: 3, done: false }
console.log(iterator.next()); // { value: 'A', done: false }
console.log(iterator.next()); // { value: undefined, done: true }

// forEach
mySet.forEach(e => console.log(e)); // 1 2 3 'A'





// WeakSet

// Type Of Data
let myWeakSet = new WeakSet([{a: 1, b: 2}]);

console.log(myWeakSet); // WeakSet {}