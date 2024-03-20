let medications = {
	'Lactated Ringers' : {'id':'13ab7','amount':100,'amountType':'L','expDate':'12/30/2029'},
	'Levothyroxine' : {'id':'at342','amount':2000,'amountType':'ct','expDate':'03/18/2021'},
	'Rosuvastatin' : {'id':'gr5423','amount':1500,'amountType':'ct','expDate':'09/01/2020'},
	'Albuterol' : {'id':'iuy6532','amount':1325,'amountType':'ct','expDate':'01/01/2023'},
	'Esomeprazole' : {'id':'mnb78932','amount':23145,'amountType':'ct','expDate':'10/01/2021'}
}

let aID = medications['Lactated Ringers']['id'];
console.log(aID);

let bestDate = medications.Albuterol.expDate;
console.log(bestDate);

let selectedMedication = 'Lactated Ringers';
let bestByDate = medications[selectedMedication]['expDate'];
console.log(bestByDate);

console.log(medications.Albuterol.expDate);


const person = {
    name: {
        first: 'Bob',
        last: 'Jones'
    },
    age: 32,
    bio: function () {
      console.log(`${this.name.first} ${this.name.last} is ${this.age} years old.`);
    },
    introduceSelf: function () {
      console.log(`Hi! I'm ${this.name.first} ${this.name.last}.`);
    },
  };
  
  person.name;
  person.name.first; //or person['name']['first];
  person.age;
  person.bio(); 
  person.introduceSelf();


  const persons = {
    name: ["Bob", "Smith"],
    age: 32,
  };
  
  function logProperty(propertyName) {
    console.log(persons[propertyName]);
  }
  
  logProperty("name");
  // ["Bob", "Smith"]
  logProperty("age");
  // 32
  