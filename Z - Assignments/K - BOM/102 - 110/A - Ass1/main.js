
let promptMsg = prompt("Print Number From – To", "Example: 5-20");
let promptNum = promptMsg.split("-").sort((a, b) => a - b);

let firstNumber = promptNum[0];
let lastNumber = promptNum[1];

for(let i = Number(firstNumber); i <= lastNumber; i++){
    let num = document.createElement("div");
    num.innerHTML = i;
    document.body.appendChild(num);
}



// let count = setInterval(function() {
//     let num = document.createElement("div");
//     num.innerHTML = firstNumber++;
//     if(num.innerHTML === lastNumber){
//         clearInterval(count)
//     }
//     document.body.appendChild(num);
// }, 0)
