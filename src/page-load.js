import { createNavbar } from './home-comp';


import image from './images/dusty-planet.jpg';


function initialEls() {
    

const initialWrap = document.createElement('div');
initialWrap.classList.add('initial-wrapper');

const coverImg = new Image();
coverImg.src = image;
coverImg.classList.add('cover-img');


// const credLink = document.createElement('a');
// credLink.href = "https://unsplash.com/@daniele71043";
// credLink.innerText = 'Photo by Daniele Colucci';



initialWrap.appendChild(coverImg);
initialWrap.appendChild(createNavbar());


return initialWrap;

}




export { initialEls };