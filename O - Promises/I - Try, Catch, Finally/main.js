

let myPromiseTwo = new Promise((res, rej) => {
    setTimeout(()=> {
        // res(`I'm The Good Promise`);
        rej(Error(`I'm The Bad Promise`));
    }, 3000)
})

async function readDataTwo() {
    console.log('Before Promise');
    // await myPromiseTwo.then((res) => console.log(res));
    
    try { // هل
        console.log(await myPromiseTwo);
    } catch(err) {
        console.log(err);
    } finally {
        console.log('After Promise');
    }
}

readDataTwo();
// Before Promise
// Error: I'm The Bad Promise
// After Promise