/*
    Async
    - Async Before Function Mean This Function Return A Promise
    - Async And Await Help In Creating Asynchronous Promise Behavior With Cleaner Style
*/



// Syntax One
function getOne() {
    return new Promise((res, rej) => {
        let user = [];
        if(user.length > 0) {
            res('user found');
        }
        else {
            rej('no user found');
        }
    })
}

getOne().then(
    (resVal) => console.log(resVal),
    (rejVal) => console.log('rejected', rejVal)
)




// Syntax Two
function getTwo() {
    let user = ['hamada'];
    if(user.length > 0) {
        return Promise.resolve('user found');
    }
    else {
        return Promise.reject('no user found');
    }

}

getTwo().then(
    (resVal) => console.log(resVal),
    (rejVal) => console.log('rejected', rejVal)
)




// Syntax Three
async function getThree() {
    let user = ['hamada'];
    if(user.length > 0) {
        return 'user found';
    }
    else {
        return 'no user found';
    }
}

// return a promise
console.log(getThree());

getThree().then(
    (resVal) => console.log(resVal),
    (rejVal) => console.log('rejected', rejVal)
)