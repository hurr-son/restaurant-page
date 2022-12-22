function createMenuTitleEl() {
    const menuTitleEl = document.createElement('h2');
    menuTitleEl.innerText = 'Menu'
    return menuTitleEl;
}

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

function createDessertTitleEl() {
    const dessertTitle = document.createElement('h3');
    dessertTitle.innerText = 'Desserts'
    dessertTitle.classList.add('category-title');
    return dessertTitle;
}


function createPieEl() {
    const pieCardEl = document.createElement('div');
    pieCardEl.classList.add('dishcard');
    
    const pieTitle = document.createElement('div');
    pieTitle.innerText = 'Moon Pie';
    pieTitle.classList.add('dish-title');
    
    const pieEl = document.createElement('p');
    pieEl.innerText = 'A creamy and rich pie made with Teegarden c moon dust and served with a side of stardust whipped cream';
    
    pieCardEl.appendChild(pieTitle);
    pieCardEl.appendChild(pieEl);
    
    return pieCardEl;
}

function createParfEl() {
    const parfCardEl = document.createElement('div');
    parfCardEl.classList.add('dishcard');
    
    const parfTitle = document.createElement('div');
    parfTitle.innerText = 'Planetary Parfait';
    parfTitle.classList.add('dish-title');
    
    const parfEl = document.createElement('p');
    parfEl.innerText = 'Layers of space-grown fruit, yogurt, and crunchy granola';
    
    parfCardEl.appendChild(parfTitle);
    parfCardEl.appendChild(parfEl);
    
    return parfCardEl;
}

function createBrownieEl() {
    const brownieCardEl = document.createElement('div');
    brownieCardEl.classList.add('dishcard');
    
    const brownieTitle = document.createElement('div');
    brownieTitle.innerText = 'Black Hole Brownie';
    brownieTitle.classList.add('dish-title');
    
    const brownieEl = document.createElement('p');
    brownieEl.innerText = 'A warm, gooey brownie with a molten chocolate center, served with a side of space ice cream';
    
    brownieCardEl.appendChild(brownieTitle);
    brownieCardEl.appendChild(brownieEl);
    
    return brownieCardEl;
}

function createDrinkTitleEl() {
    const drinkTitle = document.createElement('h3');
    drinkTitle.innerText = 'Drinks'
    drinkTitle.classList.add('category-title');
    return drinkTitle;
}

function createCoolerEl() {
    const coolerCardEl = document.createElement('div');
    coolerCardEl.classList.add('dishcard');
    
    const coolerTitle = document.createElement('div');
    coolerTitle.innerText = 'Cosmic Cooler';
    coolerTitle.classList.add('dish-title');
    
    const coolerEl = document.createElement('p');
    coolerEl.innerText = 'A refreshing blend of space-grown fruit and spices';
    
    coolerCardEl.appendChild(coolerTitle);
    coolerCardEl.appendChild(coolerEl);
    
    return coolerCardEl;
}

function createSpritEl() {
    const spritzCardEl = document.createElement('div');
    spritzCardEl.classList.add('dishcard');
    
    const spritzTitle = document.createElement('div');
    spritzTitle.innerText = 'Starlight Spritzer';
    spritzTitle.classList.add('dish-title');
    
    const spritzEl = document.createElement('p');
    spritzEl.innerText = 'A sparkling water with a hint of intergalactic flavor';
    
    spritzCardEl.appendChild(spritzTitle);
    spritzCardEl.appendChild(spritzEl);
    
    return spritzCardEl;
}

function createWhiskEl() {
    const whiskCardEl = document.createElement('div');
    whiskCardEl.classList.add('dishcard');
    
    const whiskTitle = document.createElement('div');
    whiskTitle.innerText = 'Wormhole Whiskey';
    whiskTitle.classList.add('dish-title');
    
    const whiskEl = document.createElement('p');
    whiskEl.innerText = 'A smooth, aged whiskey from the planet Teegarden c';
    
    whiskCardEl.appendChild(whiskTitle);
    whiskCardEl.appendChild(whiskEl);
    
    return whiskCardEl;
}

function createMenuWrapEl() {
    const menuWrapEl = document.createElement('div');
    menuWrapEl.classList.add('menu-wrapper');
    menuWrapEl.classList.add('wrapper');
    
    menuWrapEl.appendChild(createMenuTitleEl());
    menuWrapEl.appendChild(createStartTitleEl());
    menuWrapEl.appendChild(createCalamariEl());
    menuWrapEl.appendChild(createSoupEl());
    menuWrapEl.appendChild(createAntipastoEl());
    menuWrapEl.appendChild(createEntreeTitleEl());
    menuWrapEl.appendChild(createBurgEl());
    menuWrapEl.appendChild(createRibEl());
    menuWrapEl.appendChild(createDillaEl());
    menuWrapEl.appendChild(createDessertTitleEl());
    menuWrapEl.appendChild(createPieEl());
    menuWrapEl.appendChild(createParfEl());
    menuWrapEl.appendChild(createBrownieEl());
    menuWrapEl.appendChild(createDrinkTitleEl());
    menuWrapEl.appendChild(createCoolerEl());
    menuWrapEl.appendChild(createSpritEl());
    menuWrapEl.appendChild(createWhiskEl());
    
    return menuWrapEl;
}

export { createMenuWrapEl };