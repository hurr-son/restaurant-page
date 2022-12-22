import { createNavbar, createHomeWrapEl } from './home-comp';
import { createMenuWrapEl } from './menu-comp';
import { createContWrapEl } from './contact-comp';

import image from './images/milkyway.jpg';


function initialEls() {
    

const initialWrap = document.createElement('div');
initialWrap.classList.add('initial-wrapper');

const coverImg = new Image();
coverImg.src = image;
coverImg.classList.add('cover-img');
initialWrap.appendChild(coverImg);
initialWrap.appendChild(createNavbar());

return initialWrap;

}




export { initialEls };