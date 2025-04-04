// Define the list of available clothing items (hats and shirts)
const clothingData = {
    hats: [
        'hat0.png',  // Placeholder hat
        'hat1.png',
        'hat2.png',
        'hat3.png'
    ],
    shirts: [
        'shirt0.png',  // Placeholder shirt
        'shirt1.png',
        'shirt2.png',
        'shirt3.png'
    ]
};

// Function to update the character with the selected clothing
function changeClothes(itemType, itemFile) {
    // Get the element for the specific clothing layer (hat or shirt)
    const itemElement = document.getElementById(`character-${itemType}`);

    // Check if the itemElement exists before setting the src
    if (itemElement) {
        const itemSrc = `static/assets/${itemType}/${itemFile}`;
        itemElement.src = itemSrc;  // Change the clothing layer (hat or shirt)
        console.log(`Changed ${itemType} to ${itemSrc}`);  // Debugging line
    } else {
        console.error(`Element with id 'character-${itemType}' not found`);
    }
}

// Function to show clothing items for the selected category (hats or shirts)
function showClothing(category) {
    const clothingItemsContainer = document.getElementById('clothing-items');
    clothingItemsContainer.innerHTML = '';  // Clear any previously displayed clothing items

    // Loop through the clothing data for the selected category (e.g., hats or shirts)
    clothingData[category].forEach(item => {
        const imgElement = document.createElement('img');
        imgElement.src = `static/assets/${category}/${item}`;
        imgElement.alt = item;
        imgElement.classList.add('clothing-item');

        // Add a click event to change the character's clothes
        imgElement.onclick = () => {
            console.log(`Selected ${item} from ${category}`);
            changeClothes(category, item);
        };

        // Append the item to the clothing items container
        clothingItemsContainer.appendChild(imgElement);
    });
}

// Initially show hats when the page loads
document.addEventListener("DOMContentLoaded", function() {
    showClothing('hats');
});