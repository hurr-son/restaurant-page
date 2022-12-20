import { createNavbar, createWelcome, createHours, createLocation} from './home-comp';
import { createStartTitleEl, createCalamariEl, createSoupEl, createAntipastoEl, createEntreeTitleEl, createBurgEl, createRibEl,createDillaEl } from './menu-comp';
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
    content.appendChild(createWelcome());
    content.appendChild(createHours());
    content.appendChild(createLocation());
}


function menuLoad() {
    const content = document.getElementById('content');
    content.appendChild(createStartTitleEl());
    content.appendChild(createCalamariEl());
    content.appendChild(createSoupEl());
    content.appendChild(createAntipastoEl());
    content.appendChild(createEntreeTitleEl());
    content.appendChild(createBurgEl());
    content.appendChild(createRibEl());
    content.appendChild(createDillaEl());


}

function contactLoad() {

}

export { initLoad, homeLoad, menuLoad };