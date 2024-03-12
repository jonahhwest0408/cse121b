/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add (number1, number2) {
    return number1 + number2;
}

document.querySelector('#addNumbers').addEventListener('click', function() {
    let addNumber1 = Number(document.querySelector('#add1').value);
    let addNumber2 = Number(document.querySelector('#add2').value);
    let result = add(addNumber1, addNumber2);
    document.querySelector('#sum').value = result;
});


/* Function Expression - Subtract Numbers */
const subtract = function(subtract1, subtract2) {
    return subtract1 - subtract2;
};

const subtractNumbers = function() {
    let subtract1 = Number(document.querySelector("#subtract1").value);
    let subtract2 = Number(document.querySelector("#subtract2").value);
    let result = subtract(subtract1, subtract2);
    document.querySelector('#difference').value = result;
};

document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers);


/* Arrow Function - Multiply Numbers */
const multiply = (number1, number2) => number1 * number2;

const multiplyNumbers = () => {
    let factor1 = Number(document.querySelector('#factor1').value);
    let factor2 = Number(document.querySelector( '#factor2' ).value);
    let result = multiply(factor1, factor2);
    document.querySelector('#product').value = result;
};

document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers);



/* Open Function Use - Divide Numbers */
const divide = (number1, number2) =>  number1 / number2;

const divideNumbers = () => {
    let dividend = Number(document.querySelector('#dividend').value);
    let divisor = Number(document.querySelector('#divisor').value);
    let quotient = divide(dividend, divisor);
    document.querySelector('#quotient').value = quotient;
};

document.querySelector('#divideNumbers').addEventListener('click', divideNumbers);

/* Decision Structure */
// Add event listener for the Get Total Due button
document.getElementById('getTotal').addEventListener('click', function() {
    let subtotal = parseFloat(document.getElementById('subtotal').value);
    let isMember = document.getElementById('member').checked;
    if (isMember) {
        subtotal *= 0.8; 
    }

    let totalSpan = document.getElementById('total');
    totalSpan.textContent = '$' + subtotal.toFixed(2); 
});


/* ARRAY METHODS - Functional Programming */

/* Output Source Array */
let numberArray = [1,2,3,4,5,6,7,8,9,10,11,12,13];
document.getElementById('array').textContent = numberArray.join(', ');

/* Output Odds Only Array */
const oddNumbers = numberArray.filter(number => number % 2 === 1);
document.getElementById('odds').textContent = oddNumbers.join(', ');

/* Output Evens Only Array */
const evenNumbers = numberArray.filter(number => number % 2 ===  0 );
document.getElementById('evens').textContent = evenNumbers.join(',  ');

/* Output Sum of Org. Array */
const sumOfArray = numberArray.reduce((sum, number) => sum + number);
document.getElementById('sumOfArray').textContent = sumOfArray;

/* Output Multiplied by 2 Array */
const multiplyArray = numberArray.map(number => number * 2);
document.getElementById('multiplied').textContent = multiplyArray.join(', ')

/* Output Sum of Multiplied by 2 Array */
const sumOfMultiply = multiplyArray.reduce((sum, number) => sum + number, 0);
document.getElementById('sumOfMultiplied').textContent = sumOfMultiply;
