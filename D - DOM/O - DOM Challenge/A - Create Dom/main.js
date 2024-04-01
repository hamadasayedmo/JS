// Start Header
let header = document.createElement('header');
let logo = document.createElement('h2');
let textLogo = document.createTextNode('Elzero')

logo.className = 'logo';

logo.append(textLogo);
header.append(logo);

let ul = document.createElement('ul');
ul.className = 'links';
let liArray = ["Home", "About", "Services", "Contact"];

for (let i = 0; i < liArray.length; i++) {
    let li = document.createElement('li');
    let liText = document.createTextNode(liArray[i]);
    li.appendChild(liText);
    ul.appendChild(li);
    li.style.cssText = 'margin-left: 10px; font-size: 15px;';
}

header.appendChild(ul);

// style header
header.style.cssText = 'display: flex; justify-content: space-between; align-items: center; background-color: white';
ul.style.display = 'flex';
ul.style.listStyle = 'none';

logo.style.color = '#23a96e';
document.body.append(header);
// End Header




// Start Content
let content = document.createElement('div');
content.setAttribute('class', 'content');

for (let i = 1; i <= 15; i++) {
    let info = document.createElement('div');
    info.setAttribute('class', 'info');
    
    let myP = document.createElement('p');
    let textP = document.createTextNode(i);

    myP.appendChild(textP);
    info.append(myP);

    let product = document.createElement('p');
    let textProduct = document.createTextNode('Product');

    product.appendChild(textProduct);
    info.appendChild(product);
    
    content.appendChild(info);

    // style info 
    info.style.cssText = 'margin: 10px; text-align: center; background-color: white; border-radius: 4px; box-shadow:rgb(0 0 0 / 9%) 1px 1px 10px 1px; font-size: 13px; ';
}

// style content
content.style.cssText = 'background-color: #ececec; display: grid; grid-template-columns: repeat(auto-fill, minmax(350px, 1fr)); gap: 15px; padding: 15px;';

document.body.append(content);
// End Content




// Start Footer
let footer = document.createElement('footer');
let paragraph = document.createElement('p');
let textParagraph = document.createTextNode('Copyright 2023');

paragraph.appendChild(textParagraph);
footer.appendChild(paragraph);

// style footer
footer.style.cssText = 'text-align: center; padding: 10px; background-color: #23a96e; color: white;';

document.body.appendChild(footer);
document.body.style.fontFamily = 'Arial';
// End Footer 