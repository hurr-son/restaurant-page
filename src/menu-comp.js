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


export { createStartTitleEl, createCalamariEl, createSoupEl, createAntipastoEl };