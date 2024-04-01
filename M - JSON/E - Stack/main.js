/*
    To Understand Ajax, Fetch, Promises

    Call Stack || Stack Trace
    -- JavaScript Engine Uses A Call Stack To Manage Execution Contexts
    -- Mechanism To Make The Interpreter Track Your Calls
    -- When Function Called It Added To The Stack
    -- When Function Executed It Removed From The Stack
    -- After Function Is Finished Executing The Interpreter Continue From The Last Point
    -- Work Using LIFO Principle => Last In First Out
    -- Code Execution Is Synchronous.
    -- Call Stack Detect Web API Methods And Leave It To The Browser To Handle It

    Web API
    -- Methods Available From The Environment => Browser
*/


// LIFO
function one() {
    console.log("1");
}


function two() {
    one();
    console.log("2");
}


function three() {
    two();
    console.log("3");
}


three();
// 1
// 2
// 3