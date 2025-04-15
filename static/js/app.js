const clothingData = {
    hats: [
        'hat0.png', 'hat1.png', 'hat2.png', 'hat3.png'
    ],
    shirts: [
        'shirt0.png', 'shirt1.png', 'shirt2.png', 'shirt3.png', 'shirt4.png', 'shirt5.png', 'shirt6.png'
    ],
    jackets: [
        'jacket0.png', 'jacket1.png', 'jacket2.png', 'jacket3.png'
    ],
    pants: [
        'pants0.png', 'pants1.png', 'pants2.png', 'pants3.png'
    ],
    shoes: [
        'shoes0.png', 'shoes1.png', 'shoes2.png', 'shoes3.png'
    ],
    socks: [
        'socks0.png', 'socks1.png', 'socks2.png', 'socks3.png'
    ],
    dresses: [
        'dress0.png', 'dress1.png', 'dress2.png', 'dress3.png'
    ]
};

// Default clothing settings
let currentPants = 'pants0.png';
let currentShirt = 'shirt0.png';
let currentDress = 'dress0.png';

// Function to update the character with the selected clothing
function changeClothes(itemType, itemFile) {
    const itemElement = document.getElementById(`character-${itemType}`);

    if (itemElement) {
        const itemSrc = `static/assets/${itemType}/${itemFile}`;
        itemElement.src = itemSrc;
        console.log(`Changed ${itemType} to ${itemSrc}`);
    } else {
        console.error(`Element with id 'character-${itemType}' not found`);
    }

    if (itemFile === 'dress0.png' || itemFile === 'shirt0.png' || itemFile === 'pants0.png') {
        return;
    }

    if (itemType === 'dresses') {
        currentDress = itemFile;
        currentPants = 'pants0.png';
        currentShirt = 'shirt0.png';
        changeClothes('pants', currentPants);
        changeClothes('shirts', currentShirt);
    }

    if ((itemType === 'pants' || itemType === 'shirts') && currentDress !== 'dress0.png') {
        currentDress = 'dress0.png';
        changeClothes('dresses', currentDress);
    }

    if (itemType === 'pants') {
        currentPants = itemFile;
    } else if (itemType === 'shirts') {
        currentShirt = itemFile;
    }
}

// Function to show clothing items for the selected category
function showClothing(category) {
    const clothingItemsContainer = document.getElementById('clothing-items');
    clothingItemsContainer.innerHTML = '';  // Clear any previously displayed clothing items

    clothingData[category].forEach(item => {
        const imgElement = document.createElement('img');
        imgElement.src = `static/assets/${category}/${item}`;
        imgElement.alt = item;
        imgElement.classList.add('clothing-item');

        imgElement.onclick = () => {
            console.log(`Selected ${item} from ${category}`);
            changeClothes(category, item);
        };

        clothingItemsContainer.appendChild(imgElement);
    });
}

// Initially show hats when the page loads
document.addEventListener("DOMContentLoaded", function() {
    showClothing('hats');
});