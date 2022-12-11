import './style.css';
import { header, welcome} from './initial-comp';

import image from './images/milkyway.jpg';


const initLoad = (function() {
    
    const content = document.getElementById('content');
    
    const coverImg = new Image();
    coverImg.src = image
    coverImg.classList.add('cover-img')
    content.appendChild(coverImg)


    content.appendChild(header())
    content.appendChild(welcome())

})()




