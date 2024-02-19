const charactersElement = document.querySelector("#characters");
let charactersList = [];

const displayCharacters = (characters) => {
    characters.forEach ((character) => {
        const articleElement = document.createElement('article');
        const h3Element = document.createElement('h3');
        const imgElement = document.createElement('img');
        h3Element.textContent = character.name;
        h3Element.classList.add(character.house.toLowerCase());
        imgElement.src = character.image;
        imgElement.alt = character.name;
        articleElement.appendChild(h3Element);
        articleElement.appendChild(imgElement);
        charactersElement.appendChild(articleElement);
    })
};

const getCharacters = async () => {
    try {
        const response = await fetch ("https://raw.githubusercontent.com/Laboratoria/LIM011-data-lovers/master/src/data/potter/potter.json");
        const data = await response.json();
        doStuff(data)
    } catch(error) {
        console.error('Error fetching or processing data:', error);
    }
};
function doStuff(data) {
    charactersList = data;
    displayCharacters(charactersList);
    console.log (charactersList)
};
/* reset Function */
function reset() {
    console.log('Reset function called');
    charactersElement.innerHTML = '';
};
getCharacters()

/* filterCharacters Function */
function filterCharacters(characters) {
    reset();
    let filter = document.querySelector('#filtered').value;
    console.log('Selected filter:', filter);
    switch(filter) {
        case'gryffindor':
          let gryffindorCharacters = characters.filter(character => character.house.includes('Gryffindor'));
          displayCharacters(gryffindorCharacters);
          console.log(gryffindorCharacters);
          break;
        case'slytherin':
          let slytherinCharacters = characters.filter(character => character.house.includes('Slytherin'));
          displayCharacters(slytherinCharacters);
          console.log(slytherinCharacters);
          break;
        case'ravenclaw':
          let ravenclawCharacters = characters.filter(character => character.house.includes('Ravenclaw'));
          displayCharacters(ravenclawCharacters);
          console.log(ravenclawCharacters);
          break;
        case'hufflepuff':
          let hufflepuffCharacters = characters.filter(character => character.house.includes('Hufflepuff'));
          displayCharacters(hufflepuffCharacters);
          console.log(hufflepuffCharacters);
          break;
        case'all':
          default:
            displayCharacters(characters);
            break;
    }
};

/* event listener */
document.querySelector('#filtered').addEventListener("change", () => { filterCharacters(charactersList) });
