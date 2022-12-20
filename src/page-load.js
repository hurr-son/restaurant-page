import { createNavbar, createHomeWrapEl } from './home-comp';
import { createMenuWrapEl } from './menu-comp';
import { createContWrapEl } from './contact-comp';

import image from './images/milkyway.jpg';


function initLoad() {
    
const content = document.getElementById('content');

const coverImg = new Image();
coverImg.src = image;
coverImg.classList.add('cover-img');
content.appendChild(coverImg);
content.appendChild(createNavbar());

}


function homeLoad() {
    const content = document.getElementById('content');
    content.appendChild(createHomeWrapEl());
}


function menuLoad() {
    const content = document.getElementById('content');
    content.appendChild(createMenuWrapEl())
}

function contactLoad() {
    const content = document.getElementById('content');
    content.appendChild(createContWrapEl());
}

export { initLoad, homeLoad, menuLoad, contactLoad };