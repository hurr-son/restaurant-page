import { createNavbar, createWelcome, createHours, createLocation} from './home-comp';

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




export { initLoad, homeLoad};