/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: "Jonah West",
    photo: "images/good_pic.png",
    favoriteFoods : [ 'Smoothies', 'Steak', 'Chocolate', 'Sushi', 'Tacos'],
    hobbies : ['Coding', 'Reading', 'Writing'],
    placesLived: []
};

/* Populate Profile Object with placesLive objects */


myProfile.placesLived.push(
    {
        place: 'Mountain House, California',
        length: '15 years'
    },
    { 
        place: 'San Antonio, Texas',
        length: '7 years'
    },
    { 
        place: 'Scottsdale, Arizona',
        length: '1.5 years'
    }
);


/* DOM Manipulation - Output */


/* Name */
document.querySelector('#name').textContent = myProfile.name; //assign the value of the name property of the myProfile object to the HTML element with an ID of name

/* Photo with attributes */
document.querySelector('#photo').setAttribute( 'src', myProfile.photo);

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement('li'); //create an HTML <li> element 
    li.textContent = food; //place the value of the favoriteFoods array element into the textContent of this new li element
    document.querySelector('#favorite-foods').appendChild(li); //append this new <li> element with content as a child of the HTML <ul> element with an ID of favorite-foods.
});

/* Hobbies List */
myProfile.hobbies.forEach(hobby => { 
    let li = document.createElement('li'); 
    li.textContent = hobby;
    document.querySelector('#hobbies').appendChild(li);
});

/* Places Lived DataList */
myProfile.placesLived.forEach(places => {
    let place = document.createElement("dt");
    place.textContent = places.place;
    document.querySelector("#places-lived").appendChild(place);
    
    let length = document.createElement("dd");
    length.textContent = places.length;
    document.querySelector("#places-lived").appendChild(length);
});


