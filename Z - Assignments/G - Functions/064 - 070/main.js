// Assignment One 
console.log("%c Assignment One","color: red");

function getDetails(zName , zAge , zCountry) {
    
    function namePattern(zName) {
        let newArray = zName.split(" ");
        let fName = newArray[0];
        let lName = newArray[1][0].toUpperCase();
        return `Hello ${fName} ${lName}.`;
    }

    function ageWithMessage(zAge) {
        return `Your Age Is ${parseInt(zAge)}`;
    }

    function countryTwoLetters(zCountry) {
        return `You Live In ${zCountry.slice(0, 2).toUpperCase()}`;
    }

    function fullDetails() {
        return `${namePattern(zName)}, ${ageWithMessage(zAge)}, ${countryTwoLetters(zCountry)}`;
    }
    
    return fullDetails();
    
}
console.log(getDetails("Hamada Sayed", "20 Is My Age", "Egypt"));
// Hello Hamada S., Your Age Is 20, You Live In EG
console.log(getDetails("Fares ali", "38 Is The Age", "Syria"));
// Hello Fares A., Your Age Is 38, You Live In SY




// Assignment Two 
console.log("%c Assignment Two","color: red");

// Example 1
function normal() {
    return `Iam A Normal Function`;
}
console.log(normal()); // Iam A Normal Function


const arrow = () => `Iam A Arrow Function`;
console.log(arrow()); // Iam A Arrow Function


/* ===================== */ 


// Example 2
function urlCreate(protocol, web, tld) {
    return `${protocol}://www.${web}.${tld}`;
}

console.log(urlCreate("https", "elzero", "org")); // https://www.elzero.org


let url = (protocol, web , tld) => `${protocol}://www.${web}.${tld}`;
console.log(url("https", "elzero", "org")); // https://www.elzero.org




// Assignment Three 
console.log("%c Assignment Three","color: red");

// Example 1
function checker(zName) {
    return function (status) {
        return function (salary) {
            return status === "Available" ? `${zName}, My Salary Is ${salary}` : `Iam Not Available`;
        };
    };
}

console.log(checker("Osama")("Available")(4000)); // Osama, My Salary Is 4000
console.log(checker("Ahmed")("Not Available")()); // Iam Not Available



/* ===================== */ 



// Example 2
let checkerArrow = (zName) => {
    return (status) => 
    (salary) => 
    status === "Available" ? `${zName}, My Salary Is ${salary}` : `Iam Not Available`;        
    
};

console.log(checkerArrow("Hamada")("Available")(8000)); // Osama, My Salary Is 4000
console.log(checkerArrow("Fares")("Not Available")()); // Iam Not Available




// Assignment Four 
console.log("%c Assignment Four","color: red");

let sum = 0;
function specialMix(...data) {
        
    let result = 0;
    for(let i = 0; i < data.length; i++) {
        // search number
        if(isNaN(parseInt(data[i])) === false) {
            result += parseInt(data[i]);
        }
    }
    if(result === 0) {
        return `All Is Strings`;
    }
    return result;
    
}

console.log(specialMix(10, 20, 30)); // 60
console.log(specialMix("10Test", "Testing", "20Cool")); // 30
console.log(specialMix("Testing", "10Testing", "40Cool")); // 50
console.log(specialMix("Test", "Cool", "Test")); // All Is Strings