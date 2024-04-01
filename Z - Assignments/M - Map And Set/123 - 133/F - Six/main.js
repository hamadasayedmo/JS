
let chars_1 = ["A", "B", "C", "D", "E", 10, 15, 6];

chars_1.sort().copyWithin(0, 3, 6);

console.log(chars_1); // ['A', 'B', 'C', 'A', 'B', 'C', 'D', 'E']




let chars_2 = ["A", "B", "C", 20, "D", "E", 10, 15, 6];

chars_2.sort().copyWithin(0 , 4 , 8);

console.log(chars_2); // ['A', 'B', 'C', 'D', 'A', 'B', 'C', 'D', 'E']




let chars_3 = ["Z", "Y", "A", "D", "E", 10, 1];

chars_3.copyWithin(2);

console.log(chars_3); // ["Z", "Y", "Z", "Y", "A", "D", "E"]