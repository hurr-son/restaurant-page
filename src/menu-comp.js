function createStartTitleEl() {
    const startTitle = document.createElement('h3');
    startTitle.innerText = 'Starters'
    startTitle.classList.add('category-title');
    return startTitle;
}


function createCalamariEl() {
    const calCardEl = document.createElement('div');
    calCardEl.classList.add('dishcard');

    const calamariTitle = document.createElement('div');
    calamariTitle.innerText = 'Cosmic Calamari';
    calamariTitle.classList.add('dish-title');

    const calamariEl = document.createElement('p');
    calamariEl.innerText = 'Fried calamari served with a side of extraterrestrial aioli';

    calCardEl.appendChild(calamariTitle);
    calCardEl.appendChild(calamariEl);
    
    return calCardEl;
}


function createSoupEl() {
    const soupCardEl = document.createElement('div');
    soupCardEl.classList.add('dishcard');
    
    const soupTitle = document.createElement('div');
    soupTitle.innerText = 'Starry Soup';
    soupTitle.classList.add('dish-title');
    
    const soupEl = document.createElement('p');
    soupEl.innerText = 'A hearty soup made with space-grown vegetables and spices';
    
    soupCardEl.appendChild(soupTitle);
    soupCardEl.appendChild(soupEl);
    
    return soupCardEl;
}

function createAntipastoEl() {
    const antiCardEl = document.createElement('div');
    antiCardEl.classList.add('dishcard');
    
    const antiTitle = document.createElement('div');
    antiTitle.innerText = 'Alien Antipasto';
    antiTitle.classList.add('dish-title');
    
    const antiEl = document.createElement('p');
    antiEl.innerText = 'A selection of intergalactic cured meats, cheeses, and vegetables';
    
    antiCardEl.appendChild(antiTitle);
    antiCardEl.appendChild(antiEl);
    
    return antiCardEl;
}


function createEntreeTitleEl() {
    const entreeTitle = document.createElement('h3');
    entreeTitle.innerText = 'Entrees'
    entreeTitle.classList.add('category-title');
    return entreeTitle;
}

function createBurgEl() {
    const burgerCardEl = document.createElement('div');
    burgerCardEl.classList.add('dishcard');
    
    const burgerTitle = document.createElement('div');
    burgerTitle.innerText = 'Wormhole Burger';
    burgerTitle.classList.add('dish-title');
    
    const burgerEl = document.createElement('p');
    burgerEl.innerText = 'A juicy patty topped with space-aged cheddar, lettuce, tomato, and wormhole sauce on a cosmic bun';
    
    burgerCardEl.appendChild(burgerTitle);
    burgerCardEl.appendChild(burgerEl);
    
    return burgerCardEl;
}

function createRibEl() {
    const ribCardEl = document.createElement('div');
    ribCardEl.classList.add('dishcard');
    
    const ribTitle = document.createElement('div');
    ribTitle.innerText = 'Red Dwarf Rib-eye';
    ribTitle.classList.add('dish-title');
    
    const ribEl = document.createElement('p');
    ribEl.innerText = 'A perfectly grilled rib-eye served with a side of Teegarden c potatoes and gravy';
    
    ribCardEl.appendChild(ribTitle);
    ribCardEl.appendChild(ribEl);
    
    return ribCardEl;
}

function createDillaEl() {
    const dillaCardEl = document.createElement('div');
    dillaCardEl.classList.add('dishcard');
    
    const dillaTitle = document.createElement('div');
    dillaTitle.innerText = 'Quasar Quesadilla';
    dillaTitle.classList.add('dish-title');
    
    const dillaEl = document.createElement('p');
    dillaEl.innerText = 'A crispy quesadilla filled with space-raised chicken, cheese, and veggies, served with a side of galactic salsa';
    
    dillaCardEl.appendChild(dillaTitle);
    dillaCardEl.appendChild(dillaEl);
    
    return dillaCardEl;
}




export { 
    createStartTitleEl, 
    createCalamariEl, 
    createSoupEl, 
    createAntipastoEl,
    createEntreeTitleEl,
    createBurgEl,
    createRibEl,
    createDillaEl 
};