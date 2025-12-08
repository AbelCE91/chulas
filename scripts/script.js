let imgHome = [
    "img/restaurante.png",
    "img/arepas.png",
    "img/costillar.jpg"
]

let index = 0

function init() {
    document.getElementById("imgSlider").style.backgroundImage = `url(${imgHome[index]})`;

     setInterval(function changeImg() {
        nextImg();
    }, 3000); // cada 3 segundos

}

function nextImg() {
    index = (index + 1) % imgHome.length;
    document.getElementById("imgSlider").style.backgroundImage = `url(${imgHome[index]})`;
}

function backImg() {
    index = (index - 1 + imgHome.length) % imgHome.length;
    document.getElementById("imgSlider").style.backgroundImage = `url(${imgHome[index]})`;
}

