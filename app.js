'use strict'

let travel = document.querySelector('.travel')
let aboutUs = document.querySelector('.about-us')
let home = document.querySelector('.main-page')
let photos = document.querySelector('.photos')

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