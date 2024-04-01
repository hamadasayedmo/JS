/*
    DOM [Create Elements]
    - Practice Product With Heading And Paragraph
*/


for (let i = 0; i < 100; i++) {
    let myElement = document.createElement("div");
    myElement.className = `Product`;

    let myH3 = document.createElement("h3");
    myElement.appendChild(myH3);

    let myTextH3 = document.createTextNode(`Product Title ${i + 1}`);
    myH3.appendChild(myTextH3);

    let myP = document.createElement("p");
    myElement.append(myP);

    let myTextP = document.createTextNode(`Product Description ${i + 1}`);
    myP.appendChild(myTextP);
    
    myP.setAttribute("title", "Paragraph"); 

    document.body.appendChild(myElement); // append Body

    console.log(myElement);
}

/* Output......
    <div class="Product">
        <h3>Product Title</h3>
        <p title="Paragraph">Product Description</p>
    </div>
*/