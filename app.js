'use strict'

let travel = document.querySelector('.travel')
let aboutUs = document.querySelector('.about-us')
let home = document.querySelector('.main-page')
let photos = document.querySelector('.photos')
let left = document.querySelectorAll('.left')
let right = document.querySelectorAll('.right')
let topAnimate = document.querySelectorAll('.top')

window.addEventListener('scroll', scrollEvent)

function scrollEvent() {
  for(let i = 0; i < left.length; i++) {
    let itemHeight = left[i].getBoundingClientRect().top;
    const windowHeight = 150;
    if(windowHeight < window.innerHeight - itemHeight) {
      left[i].classList.add('active')
    } else {
      left[i].classList.remove('active')
    }
  }
}
scrollEvent()

window.addEventListener('scroll', scrollEvent2)

function scrollEvent2() {
  for(let i = 0; i < right.length; i++) {
    let itemHeight = right[i].getBoundingClientRect().top;
    const windowHeight = 150;
    if(windowHeight < window.innerHeight - itemHeight) {
      right[i].classList.add('active')
    } else {
      right[i].classList.remove('active')
    }
  }
}
scrollEvent2()

window.addEventListener('scroll', scrollEvent3)

function scrollEvent3() {
  for(let i = 0; i < topAnimate.length; i++) {
    let itemHeight = topAnimate[i].getBoundingClientRect().top;
    const windowHeight = 150;
    if(windowHeight < window.innerHeight - itemHeight) {
      topAnimate[i].classList.add('active')
    } else {
      topAnimate[i].classList.remove('active')
    }
  }
}
scrollEvent3()

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