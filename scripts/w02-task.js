/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */


/* Step 2 - Variables */
document.addEventListener("DOMContentLoaded", function() {
    let fullName = 'Jonah West';
    let currentYear = 2024;
    var profilePicture = 'images/good_pic.png';

    /* Step 3 - Element Variables */
    const nameElement = document.getElementById('name');
    const foodElement = document.getElementById('food');
    const yearElement = document.querySelector('#year');
    const imageElement = document.getElementById('img');

    /* Step 4 - Adding Content */
    nameElement.innerHTML = `<strong>${fullName}</strong>`;
    yearElement.textContent = currentYear;
    imageElement.setAttribute('src', profilePicture);
    imageElement.setAttribute('alt', `Profile image of ${fullName}`);

    /* Step 5 - Array */
    let favFoods = ['Smoothies','Steak','Chocolate','Sushi'];
    foodElement.textContent = favFoods.join(', ');

    let otherFood = 'Tacos';
    favFoods.push(otherFood);
    
    foodElement.innerHTML += `<br>${favFoods.join(', ')}`;
    favFoods.shift();

    foodElement.innerHTML += `<br>${favFoods.join(', ')}`;
    favFoods.pop();

    foodElement.innerHTML += `<br>${favFoods.join(', ')}`;
});
