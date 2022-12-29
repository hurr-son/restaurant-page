import './style.css';
import image from './images/dusty-planet.jpg';
import { createNavbar } from './home-comp';
import { createHomeWrapEl } from './home-comp';
import { createMenu } from './menu-comp';
import { createContWrapEl } from './contact-comp';



window.addEventListener('load', function(){
    const coverImg = new Image();
    coverImg.src = image;
    coverImg.classList.add('cover-img');
    
    const homeEls = createHomeWrapEl();
    
    content.appendChild(coverImg);
    content.appendChild(createNavbar());
    content.appendChild(homeEls);
})

function renderHomeOnClick(e) {
    if(!e.target.classList.contains('home')) {
        return;
    }
    
    const homeEls = createHomeWrapEl();
    let currentWrap = document.querySelector('.wrapper');   
    content.replaceChild(homeEls, currentWrap);
}

function renderMenuOnClick(e) {
    if(!e.target.classList.contains('menu')) {
        return;
    }
    
    const menuEls = createMenu();
    let currentWrap = document.querySelector('.wrapper');
    content.replaceChild(menuEls, currentWrap);
}

function renderContactOnClick(e) {
    if(!e.target.classList.contains('contact')) {
        return;
    }
    
    const contactEls = createContWrapEl();
    let currentWrap = document.querySelector('.wrapper');
    content.replaceChild(contactEls, currentWrap);
}

content.addEventListener('click', renderHomeOnClick);
content.addEventListener('click', renderMenuOnClick);
content.addEventListener('click', renderContactOnClick);







