// Random Color
document.addEventListener("click", function () {
    let red = Math.round(Math.random() * 255);
    let green = Math.round(Math.random() * 255);
    let blue = Math.round(Math.random() * 255);
    document.body.style.backgroundColor = `rgba(${red},${green},${blue})`;
});