/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.querySelector("#temples");
let templeList = [];

/* async displayTemples Function */
const displayTemples = (temples) => {
    templeList.forEach ((temple) => {
        const articleElement = document.createElement('article');
        const h3Element = document.createElement('h3');
        const imgElement = document.createElement('img');
        h3Element.textContent = temple.templeName;
        imgElement.src = temple.imageUrl;
        imgElement.alt = temple.location;
        articleElement.appendChild(h3Element);
        articleElement.appendChild(imgElement);
        templesElement.appendChild(articleElement);
    })
};

/* async getTemples Function using fetch()*/
const getTemples = async () => {
    try {
      const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
      const data = await response.json();
      doStuff(data);
    } catch (error) {
      console.error('Error fetching or processing data:', error);
    }
};
function doStuff(data) {
    templeList = data;
    displayTemples(templeList);
    console.log (templeList);
};
/* reset Function */
function reset() {
    console.log("Reset function called");
    templesElement.innerHTML = "";
};

/* filterTemples Function */
function filterTemples(temples) {
    reset();
    let filter = document.querySelector('#filtered').value;
    console.log('Selected filter:', filter);
    switch(filter) {
        case 'utah':
          let utahTemples = temples.filter(temple => temple.location.includes('Utah'));
          displayTemples(utahTemples);
          console.log(utahTemples);
          break;
        case 'notutah':
          let notutahTemples = temples.filter(temple => !temple.location.includes('Utah'));
          displayTemples(notutahTemples);
          console.log(notutahTemples);
          break;
        case 'older':
          let olderTemples = temples.filter(temple => new Date(temple.dedicated) < new Date(1950, 0, 1));
          displayTemples(olderTemples);
          console.log(olderTemples);
          break;
        case 'all':
          default:
            displayTemples(temples);
            break;      

    }
};

getTemples();
/* Event Listener */
console.log('Adding event listener');
document.querySelector('#filtered').addEventListener("change", () => {filterTemples(templeList)});

