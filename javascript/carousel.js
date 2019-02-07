// setInterval(() => {


// }, 1000)

let carousel = document.querySelector('.carousel');
let imgs = carousel.querySelectorAll('.mainIMG');
let index = 0;

imgs[index].style.display = 'block';


window.addEventListener('load', () => {
    setInterval( () => {
    if (index === 0) {
        index = imgs.length;
    }
    imgs.forEach(item => item.style.display = 'none')
    imgs[--index].style.display = 'block';
}, 2000)
})
