/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: "Michelle Villacis",
    photo: {
        src: "images/Yo.jpg",
        alt: "My profile picture"
    },
    favoriteFoods: [
        'Sushi',
        'Ceviche',
        'Encebollado',
        'Chocolate Cake',
        'French Fries'
    ],
    hobbies: [
        'Reading',
        'Dancing',
        'Baking',
        'Pilates'
    ],
    placesLived: [],
};


/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push(
    {
        place:'Quito, EC',
        length: '5 years'
    },
    {
        place: 'Valle delos Chillos, EC',
        length: '11 years'
    },
    {
        place: 'Portoviejo, EC',
        length: '7 years'
    }
);

/* DOM Manipulation - Output */

/* Name */
document.querySelector('#name').textContent = myProfile.name;

/* Photo with attributes */
document.querySelector('#photo').src = myProfile.photo.src;
document.querySelector('#photo').alt = myProfile.photo.alt;

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement('li');
    li.textContent = food;
    document.querySelector('#favorite-foods').appendChild(li);
})

/* Hobbies List */
myProfile.hobbies.forEach(hobbie => {
    let li = document.createElement ('li');
    li.textContent = hobbie;
    document.querySelector('#hobbies').appendChild(li);
})

/* Places Lived DataList */

const placesElement = document.querySelector("#places-lived");
function generateListMarkup(list, templateCallback) {
    const htmlList = list.map(templateCallback);
    return htmlList.join("");
}
function placesTemplate(place) {
    return `<dt>${place.place}</dt><dd>${place.length}</dd>`;
}
placesElement.innerHTML = generateListMarkup(
    myProfile.placesLived,
    placesTemplate
);