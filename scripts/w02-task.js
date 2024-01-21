/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = 'Michelle Villacis Rodriguez';
let currentYear = new Date().getFullYear();
let profilePicture = 'images/Yo.jpg';



/* Step 3 - Element Variables */
const nameElement = document.getElementById ('name');
const foodElement = document.getElementById ('food');
const yearElement = document.querySelector ('#year');
const imageElement = document.querySelector ('img');



/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
document.querySelector ('#year').textContent = currentYear;
imageElement.setAttribute ('src', profilePicture);
imageElement.setAttribute ('alt', `Profile image of ${fullName}`);




/* Step 5 - Array */
let myfavoritefood = ['Sushi','Ceviche','Encebollado','Chocolate Cake', 'French Fries'];
foodElement.innerHTML = `${myfavoritefood}`

let dessert = 'Passion fruit Ice cream';
myfavoritefood.push(dessert);
foodElement.innerHTML += `<br>${myfavoritefood}`;

myfavoritefood.shift();
foodElement.innerHTML += `<br>${myfavoritefood}`;

myfavoritefood.pop();
foodElement.innerHTML += `<br>${myfavoritefood}`;

