/*
    Scope
    - Global And Local Scope
    - Block Scope [if , switch , for]
*/


// Global
let globalVar = "I'm a global variable";

function show() {
    console.log(globalVar); // Accessible
}

show();
console.log(globalVar); // Accessible




// Local
function bar() {
    var localVar = "I'm a local variable";
    
    console.log(localVar); // Accessible
}

bar();
console.log(localVar); // Not Accessible (ReferenceError)




// Block Scope [if , switch , for]
if(true) {
    var localVar = "I'm a local var - in if";
    let localLet = "I'm a local let - in if";
    
    console.log(localVar); // Accessible
    console.log(localLet); // Accessible
}
console.log(localVar); // Accessible
console.log(localLet); // Not Accessible (ReferenceError)




// Example
function exampleScope() {
    var functionScoped = "I'm function-scoped (var)";
    let blockScoped = "I'm block-scoped (let)";
    const alsoBlockScoped = "I'm block-scoped (const)";

    if (true) {
        var stillFunctionScoped = "I'm still function-scoped (var)";
        let blockScopedInsideIf = "I'm block-scoped inside the if (let)";
    }

    console.log(functionScoped); // Accessible
    console.log(blockScoped); // Accessible
    console.log(alsoBlockScoped); // Accessible
    console.log(stillFunctionScoped); // Accessible
    console.log(blockScopedInsideIf); // Not accessible (ReferenceError)
}

exampleScope();