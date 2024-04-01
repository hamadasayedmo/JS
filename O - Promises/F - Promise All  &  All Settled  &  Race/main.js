
let promiseOne = new Promise((res, rej) => {
    setTimeout(() => {
        rej('Promise One');  // reject
    }, 5000)
})

let promiseTwo = new Promise((res, rej) => {
    setTimeout(() => {
        res('Promise Two');  // resolve
    }, 1000)
})

let promiseThree = new Promise((res, rej) => {
    setTimeout(() => {
        res('Promise Three');  // resolve
    }, 2000)
})



// if Promise have one reject return rejected
Promise.all([promiseOne, promiseTwo, promiseThree]).then(
    (resVal) => console.log(resVal),
    (rejVal) => console.log(`Rejected ${rejVal}`),
);
// if all promises is resolve => ['Promise One', 'Promise Two', 'Promise Three']



Promise.allSettled([promiseOne, promiseTwo, promiseThree]).then(
    (resVal) => console.log(resVal),
    (rejVal) => console.log(`Rejected ${rejVal}`),
);
// return all date 
// {status: 'rejected', reason: 'Promise One'}
// {status: 'fulfilled', value: 'Promise Two'}
// {status: 'fulfilled', value: 'Promise Three'}



// if promise resolve || reject print this
Promise.race([promiseOne, promiseTwo, promiseThree]).then(
    (resVal) => console.log(resVal),
    (rejVal) => console.log(`Rejected ${rejVal}`),
);
// Promise Two