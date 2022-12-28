let menuData = {
    
    Starters: [
        {name: 'Cosmic Calamari', 
         desc: 'Fried calamari served with a side of extraterrestrial aioli', 
         price: '25 credits' },
        {name: 'Starry Soup', 
         desc: ' A hearty soup made with space-grown vegetables and spices', 
         price: '18 credits' },
        {name: 'Alien Antipasto', 
         desc: 'A selection of intergalactic cured meats, cheeses, and vegetables', price: '30 credits' }
    ],
    
    Entrees: [
        {name: 'Wormhole Burger', 
         desc: 'A juicy patty topped with space-aged cheddar, lettuce, tomato, and wormhole sauce on a cosmic bun', 
         price: '35 credits' },
        {name: 'Red Dwarf Rib-eye', 
         desc: 'A perfectly grilled rib-eye served with a side of Teegarden c potatoes and gravy', 
         price: '50 credits' },
        {name: 'Quasar Quesadilla', 
         desc: 'A crispy quesadilla filled with space-raised chicken, cheese, and veggies, served with a side of galactic salsa', 
         price: '35 credits' }
    ],
    
    Desserts: [
        {name: 'Moon Pie', 
         desc: 'A creamy and rich pie made with Teegarden c moon dust and served with a side of stardust whipped cream', 
         price: '20 credits' },
        {name: 'Planetary Parfait', 
         desc: 'Layers of space-grown fruit, yogurt, and crunchy granola', 
         price: '15 credits' },
        {name: 'Black Hole Brownie', 
         desc: 'A warm, gooey brownie with a molten chocolate center, served with a side of space ice cream', 
         price: '18 credits' }  
    ],
    
    Drinks: [
        {name: 'Cosmic Cooler', 
         desc: 'A refreshing blend of space-grown fruit and spices', 
         price: '10 credits' },
        {name: 'Starlight Spritzer', 
         desc: 'A sparkling water with a hint of intergalactic flavor', 
         price: '8 credits' },
        {name: 'Wormhole Whiskey', 
         desc: 'A smooth, aged whiskey from the planet Teegarden c', 
         price: '18 credits' }
    ]
};

function createMenu() {
    
    let menuWrapper = document.createElement('div');
    menuWrapper.className = 'menu-wrapper'
    menuWrapper.classList.add('wrapper')

    for(let category in menuData) {
        let categoryWrapper = document.createElement('div');
        categoryWrapper.className = `${category}-wrapper`
        let categoryTitle = document.createElement('h2');
        categoryTitle.innerHTML = category;
        menuWrapper.appendChild(categoryWrapper);
        categoryWrapper.appendChild(categoryTitle);

        menuData[category].forEach(item => {
            let menuItem = document.createElement('li');
            menuItem.innerHTML = `${item.name} - ${item.price} - ${item.desc}`;
            menuItem.className = 'menu-item';
            let itemCard = document.createElement('div');
            itemCard.className = 'item-card';
            itemCard.appendChild(menuItem);
            categoryWrapper.appendChild(itemCard);
        })}
    return menuWrapper;
}

export {createMenu};