import './style.css';
import { initialEls } from './page-load';
import { createHomeWrapEl } from './home-comp';
import { createMenuWrapEl } from './menu-comp';
import { createContWrapEl } from './contact-comp';

const content = document.getElementById('content');
const homeEls = createHomeWrapEl()
content.appendChild(initialEls());
content.appendChild(homeEls);

const menuEls = createMenuWrapEl();
const contactEls = createContWrapEl();

function renderHomeOnClick(e) {
    if(!e.target.classList.contains('home')) {
        return
    }
        let currentWrap = document.querySelector('.wrapper');   
        content.replaceChild(homeEls, currentWrap);
}

function renderMenuOnClick(e) {
    if(!e.target.classList.contains('menu')) {
        return
    }
        let currentWrap = document.querySelector('.wrapper');
        content.replaceChild(menuEls, currentWrap);
}
    
function renderContactOnClick(e) {
    if(!e.target.classList.contains('contact')) {
        return
    }
        let currentWrap = document.querySelector('.wrapper');
        content.replaceChild(contactEls, currentWrap);
}

content.addEventListener('click', renderHomeOnClick);
content.addEventListener('click', renderMenuOnClick);
content.addEventListener('click', renderContactOnClick);







