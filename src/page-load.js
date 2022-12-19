import { header, welcome, hours, location} from './home-comp';

import image from './images/milkyway.jpg';


function initLoad() {
    
const content = document.getElementById('content');

const coverImg = new Image();
coverImg.src = image
coverImg.classList.add('cover-img')
content.appendChild(coverImg)


content.appendChild(header())
content.appendChild(welcome())
content.appendChild(hours())
content.appendChild(location())

}


export { initLoad };