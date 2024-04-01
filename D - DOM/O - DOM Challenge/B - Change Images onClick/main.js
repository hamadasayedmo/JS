let banner = document.querySelector('.banner');
let imgs = document.querySelectorAll('.images img');


for (let i = 0; i < imgs.length; i++) {
    imgs[i].addEventListener('click', (e) => {
        let myImgeSrc = e.target.getAttribute('src');
        banner.style.backgroundImage = `url("${myImgeSrc}")`;
    })
}