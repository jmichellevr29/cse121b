/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add (number1, number2) {
    return number1 + number2;
}
function addNumbers (add1, add2) {
    let addNumber1 = Number(document.querySelector('#add1').value);
    let addNumber2 = Number(document.querySelector('#add2').value);
    document.querySelector('#sum').value = add(addNumber1, addNumber2);
}
document.querySelector('#addNumbers').addEventListener('click', addNumbers);

/* Function Expression - Subtract Numbers */
function subtract (number1, number2) {
    return number1 - number2;
}
function subtractNumbers (subtract1, subtract2) {
    let subNumber1 = Number(document.querySelector('#subtract1').value);
    let subNumber2 = Number(document.querySelector('#subtract2').value);
    document.querySelector('#difference').value = subtract(subNumber1, subNumber2);
}
document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers)

/* Arrow Function - Multiply Numbers */
const Multiply = (number1, number2) => number1 * number2;

const multiplyNumbers = () => {
    const factor1 = Number(document.querySelector('#factor1').value);
    const factor2 = Number(document.querySelector('#factor2').value);
    document.querySelector('#product').value = Multiply(factor1, factor2);
}
document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers)

/* Open Function Use - Divide Numbers */
const Divide = (number1, number2) => number1/number2;

const divideNumbers = () => {
    const dividend = parseFloat(document.querySelector('#dividend').value);
    const divisor = parseFloat(document.querySelector('#divisor').value);
    document.querySelector('#quotient').value = Divide(dividend, divisor);
}
document.querySelector('#divideNumbers').addEventListener('click', divideNumbers)

/* Decision Structure */
function getTotal () {
    let subtotal = parseFloat (document.querySelector('#subtotal').value);
    if (document.getElementById('member').checked){
        subtotal = subtotal - subtotal * 0.20;
    } 
    document.querySelector('#total').textContent = `$ ${subtotal.toFixed(2)}`;
}
document.querySelector('#getTotal').addEventListener('click', getTotal)
/* ARRAY METHODS - Functional Programming */
/* Output Source Array */

let numbersArray = [1,2,3,4,5,6,7,8,9,10,11,12,13];
document.querySelector('#array').textContent = numbersArray.join(',');

/* Output Odds Only Array */
let oddsNumbers = numbersArray.filter(number => number % 2 === 1);
document.querySelector('#odds').textContent = oddsNumbers.join(',');

/* Output Evens Only Array */
let evenNumbers = numbersArray.filter(number => number % 2 === 0);
document.querySelector('#evens').textContent = evenNumbers.join(',')

/* Output Sum of Org. Array */
let sum = numbersArray.reduce((sum, number) => sum + number, 0)
document.querySelector('#sumOfArray').textContent = `${sum}`;

/* Output Multiplied by 2 Array */
let multiply = numbersArray.map(number => number *2);
document.querySelector('#multiplied').textContent = `${multiply}`

/* Output Sum of Multiplied by 2 Array */
document.querySelector('#sumOfMultiplied').innerHTML = multiply.reduce((sum, number) => sum + number, 0);
