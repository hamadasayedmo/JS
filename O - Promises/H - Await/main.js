
// let myPromiseOne = new Promise((res) => {
//     setTimeout(()=> {
//         res(`I'm The Good Promise`);
//     }, 3000)
// })

// function readDataOne() {
//     console.log('Before Promise');
//     myPromiseOne.then((res) => console.log(res));
//     console.log('After Promise');
// }

// readDataOne();
// Before Promise
// After Promise
// I'm The Good Promise




let myPromiseTwo = new Promise((res, rej) => {
    setTimeout(()=> {
        res(`I'm The Good Promise`);
        // rej(Error(`I'm The Bad Promise`));
    }, 3000)
})

async function readDataTwo() {
    console.log('Before Promise');
    // await myPromiseTwo.then((res) => console.log(res));
    console.log(await myPromiseTwo);
    console.log('After Promise');
}

readDataTwo();
// Before Promise
// I'm The Good Promise
// After Promise