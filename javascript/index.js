


let menuBtn = document.querySelector(".menu");
let nav = document.querySelector("nav");

console.log(menuBtn);

// menuBtn.addEventListener("click", () => {
//    nav.classList.toggle('menuDrp');

// })


$(function(){
   $('.menu').on('click', function() {
      $('nav').slideToggle(500);
     if (nav.style.display == 'block') { $('nav').css('display','flex') };
   })
});

