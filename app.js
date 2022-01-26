'use strict'

let travel = document.querySelector('.travel')
let aboutUs = document.querySelector('.about-us')
let home = document.querySelector('.main-page')
let photos = document.querySelector('.photos')
let left = document.querySelectorAll('.left')
let right = document.querySelectorAll('.right')
let topAnimate = document.querySelectorAll('.top')

let list = [...left, ...right, ...topAnimate]

window.addEventListener('scroll', scrollEvent)

function scrollEvent() {
  for(let i = 0; i < list.length; i++) {
    let itemHeight = list[i].getBoundingClientRect().top;
    const windowHeight = 150;
    if(windowHeight < window.innerHeight - itemHeight) {
      list[i].classList.add('active')
    } else {
      list[i].classList.remove('active')
    }
  }
}
scrollEvent()

document.addEventListener('click', (e) =>{
  if(!e.target.matches('.menu-elements')){
    return
  }
  switch (e.target.innerText) {
    case 'About':
      aboutUs.scrollIntoView({ behavior: 'smooth' });
      break;
    case 'Home':
      home.scrollIntoView({ behavior: 'smooth' });
      break;
    case 'Travel':
      travel.scrollIntoView({ behavior: 'smooth' });
      break;
    default:
      break;
  }
})
document.addEventListener('click', (e) =>{
  if(!e.target.matches('.footer__menu-elements')){
    return
  }
  switch (e.target.innerText) {
    case 'ABOUT':
      aboutUs.scrollIntoView({ behavior: 'smooth' });
      break;
    case 'HOME':
      home.scrollIntoView({ behavior: 'smooth' });
      break;
    case 'TRAVEL':
      travel.scrollIntoView({ behavior: 'smooth' });
      break;
    case 'GALLERY':
      photos.scrollIntoView({ behavior: 'smooth' });
      break;
    default:
      break;
  }
})