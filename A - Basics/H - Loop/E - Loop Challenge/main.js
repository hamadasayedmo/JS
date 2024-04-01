/*
    Loop Challenge
*/

let myAdmins = ["Ahmed", "Osama", "Sayed", "Stop", "Samera"];
let myEmployees = ["Amgad", "Samah", "Ameer", "Omar", "Othman", "Amany", "Samia", "Anwar"];

let zeroIndex = 0;

document.write(`<div>We Have ${myAdmins.length} Admins</div>`);
document.write(`<div>We Have ${myEmployees.length} Employees</div>`);
document.write(`<hr>`);

for(let i = 0 ; i < myAdmins.length ; i++) {
    if(myAdmins[i] === "Stop") {
        break;
    }
    document.write(`<div> The Admin Team ${i+1} Is ${myAdmins[i]}`);
    document.write(`<h3>Team Members:</h3>`)
    let k = 0;
    for(let j = 0 ; j < myEmployees.length ; j++) {
        if(myAdmins[i][zeroIndex] === myEmployees[j][zeroIndex]) {
            k++;
            document.write(`<p> ${k} - ${myEmployees[j]} </p>`);
        }
    }
    document.write(`</div>`);
    document.write(`<hr>`);
}