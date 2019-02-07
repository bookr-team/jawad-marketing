


let menuBtn = document.querySelector(".menu");
let nav = document.querySelector("nav");

console.log(menuBtn);

menuBtn.addEventListener("click", () => {
   nav.classList.toggle('menuDrp');
   menuBtn.style.backgroundColor = '#F4F4F4';
})



