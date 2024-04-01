
let theNumber = 100020003000;

console.log([...new Set(theNumber.toString())].map((e) => (e> 0 ? +e : '')).join('')); // 123

