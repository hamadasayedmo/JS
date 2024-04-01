
//========================== Create JSON FILE ====================================//



//============================ Two =====================================//

let reqJson = new XMLHttpRequest();
reqJson.open('GET', "articles.json");
reqJson.send();
console.log(reqJson);

reqJson.onreadystatechange = function() {
    if(this.readyState === 4 && this.status === 200) {
        console.log(this.responseText);
        console.log("Date Loading");
    }
}



//============================ Three ==================================//

let req = new XMLHttpRequest();
req.open('GET', "articles.json");
req.send();


req.onreadystatechange = function() {
    
    if(this.readyState === 4 && this.status === 200) {
        
        let mainData = JSON.parse(this.responseText);
        console.log(mainData);
        
        // for (let i in mainData) {
        //     mainData[i].section = "All";
        // }

        mainData.forEach(article => {
            article.section = "All";
        });
        
        
        // convert to json
        let updatedData = JSON.stringify(mainData);
        console.log(updatedData);

        
//============================ Four ===============================//
        
        for (let i = 0; i < mainData.length; i++) {
            let div = document.createElement("div");
            div.id = 'data';

            div.style.cssText = `background: #004766; padding: 5px 15px; margin: 10px auto
            0px; color: #fff; font: bold 17px arial; width: 400px; border-radius: 10px`;

            let h2 = document.createElement("h2");
            let p1 = document.createElement("p");
            let p2 = document.createElement("p");
            let p3 = document.createElement("p");

            div.appendChild(h2);
            div.appendChild(p1);
            div.appendChild(p2);
            div.appendChild(p3);

            let name = document.createTextNode(mainData[i].name);
            let title = document.createTextNode(mainData[i].title);
            let section = document.createTextNode(mainData[i].section);
            let content = document.createTextNode(mainData[i].content);

            h2.appendChild(name);
            p1.appendChild(title);
            p2.appendChild(section);
            p3.appendChild(content);

            document.body.appendChild(div);

        }
    }
}
