'use stirct'

const cats = [
    "img/1.png",
    "img/2.png",
    "img/3.png",
    "img/4.png",
    "img/5.png",
    "img/6.png",
    "img/7.png",
    "img/8.png",
    "img/9.png",
  ];
let currentSlide = 0;

let next = document.querySelector('.next');
let prev = document.querySelector('.prev');
let photos = document.querySelectorAll('.img-group');




next.onclick = () =>{
    if(currentSlide === cats.length - 1){
        currentSlide = 0;
    }else{
    currentSlide++;
}
    updateSlide();
}


prev.onclick = () =>{
    if(currentSlide === 0){
        currentSlide = cats.length - 1;
    }else{
        currentSlide--;
    }
    updateSlide();
}

function updateSlide(){
    document.querySelector(".img-proup__gallery").src = cats[currentSlide]
}
