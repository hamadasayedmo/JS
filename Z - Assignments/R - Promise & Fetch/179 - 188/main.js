
// Use Promise
let myPromise = new Promise((resolve, reject) => {
    let req = new XMLHttpRequest();
    req.open('GET','articles.json');
    req.send();

    req.onload = function () {
        if(this.readyState === 4 && this.status === 200) {
            resolve(JSON.parse(req.responseText)); 
        }
        else {
            reject(Error('Not Found'));
        }
    }; 
});

myPromise.then(res => {
    res.length = 5;
    console.log(res)
    return res;
}).then((showData) => {
    showData.forEach(data => {
        let div = document.createElement('div');
        let h3 = document.createElement('h3');
        let p = document.createElement('p');

        div.appendChild(h3);
        div.appendChild(p);
        
        let contentH3 = document.createTextNode(data.title);
        h3.appendChild(contentH3);
        
        let contentP = document.createTextNode(data.description);
        p.appendChild(contentP);

        document.body.appendChild(div);
        
    });
});






// Use Fetch
fetch('articles.json')
    .then(res => {
        return res.json();
    })
    .then(res => {
        res.length = 5;
        console.log(res)
        return res;
    }).then((showData) => {
        showData.forEach(data => {
            let div = document.createElement('div');
            let h3 = document.createElement('h3');
            let p = document.createElement('p');

            div.appendChild(h3);
            div.appendChild(p);
            
            let contentH3 = document.createTextNode(data.title);
            h3.appendChild(contentH3);
            
            let contentP = document.createTextNode(data.description);
            p.appendChild(contentP);

            document.body.appendChild(div);
            
        });
    });






// Use Async
async function fetchData() {
    try {
        let myResponse = await fetch("articles.json");

        let allData = await myResponse.json();
        allData.length = 5;
        
        showData.forEach(data => {
            let div = document.createElement('div');
            let h3 = document.createElement('h3');
            let p = document.createElement('p');

            div.appendChild(h3);
            div.appendChild(p);
            
            let contentH3 = document.createTextNode(data.title);
            h3.appendChild(contentH3);
            
            let contentP = document.createTextNode(data.description);
            p.appendChild(contentP);

            document.body.appendChild(div);
            
        });
    } catch (err) {
        console.log(err);
    }
}

fetchData();