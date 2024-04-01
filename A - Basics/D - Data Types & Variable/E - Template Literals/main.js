/*
    Template Literals (Template Strings)
*/

let a = 'we love';
let b = 'javascript';
let c = 'and';
let d = 'programming';


// we love javascript and programming
console.log(a + " " + b + " " + c + " " + d);
console.log(`${a} ${b} ${c} ${d}`);

let name = "Hamada";
let title = "Full Stack";

let markup = `
    <div class="card">
        <div class="chip">
        <h1>${name} </h1>
        <p>${title} </p>
        </div>
    </div>
`;

document.write(markup);