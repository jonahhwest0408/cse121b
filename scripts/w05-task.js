/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.getElementById('temples');
let templeList = {}

/* async displayTemples Function */
const displayTemples = (temples) => {
    templesElement.innerHTML = " ";

    temples.forEach(temple => {

        const article = document.createElement('article');
        const templeName = document.createElement('h3');
        const img = document.createElement('img');
        img.src = temple.imageUrl;
        img.alt = temple.location;
        article.appendChild(templeName);
        article.appendChild(img);
        templesElement.appendChild(article);
    });
}

/* async getTemples Function using fetch()*/

const getTemples = async () => {
    try {
        const response = await fetch('https://byui-cse.github.io/cse121b-ww-course/resources/temples.json');
        if (!response.ok) {
            throw new Error('Failed to fetch temple data');
        }
        templeList = await response.json();
        displayTemples(templeList); 
    } catch (error) {
        console.error('Error fetching temple data:', error);
    }
}


/* reset Function */

const reset = function() {
    templesElement.innerHTML = "";
};

/* filterTemples Function */


const filterTemples = function(temples) {
    reset();
    const filter = document.getElementById('filtered').value;
    switch(filter) {
        case 'utah':
            displayTemples(temples.filter(temple => temple.location.includes('Utah')));
            break;
        case 'notutah':
            displayTemples(temples.filter(temple => !temple.location.includes('Utah')));
            break;
        case 'older':
            displayTemples(temples.filter(temple => {
                const dedicationDate = new Date(temple.dedicated);
                return dedicationDate.getFullYear() < 1950;
            }));
            break;
        case 'all':
            displayTemples(templeList);
            break;
        default:
            break;
    }
};



/* Event Listener */

document.querySelector('#filtered').addEventListener('change', () => {
    filterTemples(templeList)
});

getTemples();