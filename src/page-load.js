import { createNavbar, createWelcome, createHours, createLocation} from './home-comp';
import { createStartTitleEl, createCalamariEl, createSoupEl, createAntipastoEl, createEntreeTitleEl, createBurgEl, createRibEl,createDillaEl, createDessertTitleEl,
createPieEl, createParfEl, createBrownieEl, createDrinkTitleEl, createCoolerEl,
createSpritEl, createWhiskEl } from './menu-comp';

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
    content.appendChild(createDessertTitleEl());
    content.appendChild(createPieEl());
    content.appendChild(createParfEl());
    content.appendChild(createBrownieEl());
    content.appendChild(createDrinkTitleEl());
    content.appendChild(createCoolerEl());
    content.appendChild(createSpritEl());
    content.appendChild(createWhiskEl());


}

function contactLoad() {

}

export { initLoad, homeLoad, menuLoad };