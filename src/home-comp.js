

function header(){
    const headerWrapEl = document.createElement('div');
    headerWrapEl.classList.add('header-wrapper');
    const headerEl = document.createElement('h1');
    headerEl.innerText = 'Next to the Wormhole';
    headerEl.classList.add('res-title');
    headerWrapEl.appendChild(headerEl)
    return headerWrapEl;
}



function welcome() {
    const welcomeWrapEl = document.createElement('div');
    welcomeWrapEl.classList.add('welcome-wrapper');
    const welcomeEl = document.createElement('p');
    
    welcomeEl.innerText = 'Welcome to Next to the Wormhole! We are a restaurant founded by space explorers who returned from a journey through a nearby wormhole. Our menu features unique dishes created using ingredients and cooking techniques from various planets and dimensions. We are a popular destination for both locals and intergalactic travelers alike. We hope you enjoy your dining experience with us!';

    welcomeEl.classList.add('welcome-message');
    
    welcomeWrapEl.appendChild(welcomeEl);
    return welcomeWrapEl;

}

function hours() {
    const hoursWrapEl = document.createElement('div');
    hoursWrapEl.classList.add('hours-wrapper');
    
    const hoursTitleEl = document.createElement('h3');
    hoursTitleEl.innerText = 'Hours'
    
    const hoursEl = document.createElement('ul');
    
    const hourMonEl = document.createElement('li');
    const hourTuesEl = document.createElement('li');
    const hourWedEl = document.createElement('li');
    const hourThursEl = document.createElement('li');
    const hourFriEl = document.createElement('li');
    const hourSatEl = document.createElement('li');
    const hourSunEl = document.createElement('li');
    
    hourMonEl.innerText = 'Monday: 8AM-9PM';
    hourTuesEl.innerText = 'Tuesday: 8AM-9PM';
    hourWedEl.innerText = 'Wednesday: 8AM-9PM';
    hourThursEl.innerText = 'Thursday: 8AM-9PM';
    hourFriEl.innerText = 'Friday: 8AM-11PM';
    hourSatEl.innerText = 'Saturday: 8AM-11PM';
    hourSunEl.innerText = 'Sunday: 8AM-5PM';
    
    hoursEl.appendChild(hourMonEl);
    hoursEl.appendChild(hourTuesEl);
    hoursEl.appendChild(hourWedEl);
    hoursEl.appendChild(hourThursEl);
    hoursEl.appendChild(hourFriEl);
    hoursEl.appendChild(hourSatEl);
    hoursEl.appendChild(hourSunEl);
    
    hoursWrapEl.appendChild(hoursTitleEl);
    hoursWrapEl.appendChild(hoursEl);
    
    return hoursWrapEl;
}

function location() {
    const locationWrapEl = document.createElement('div');
    locationWrapEl.classList.add('location-wrapper');

    const locationTitleEl = document.createElement('h3');
    locationTitleEl.innerText = 'Location';
    
    const locationEl = document.createElement('div');
    locationEl.innerText = "40.36194°N 74.038775°W, Teegarden c, Teegarden's Star, Milkyway"
    
    locationWrapEl.appendChild(locationTitleEl);
    locationWrapEl.appendChild(locationEl);


    return locationWrapEl;
}

export { header, welcome, hours, location };