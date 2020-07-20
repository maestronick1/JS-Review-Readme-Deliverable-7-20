let name = "Nick Phillips" ;
let age = 32;
let isCool = true;
const friends = [ "Matt", "John", "Andrew"]


const tesla ={
    industry: "cars",
    founder:    "Musk",
    year:        "2003",
    memebers:   ["Straubel", "eberhart"],
    stockTicker: "TSLA",
    vehicles: {
        vehicleOne: "Model S",
        vehicleTwo: "Model X",
        vehicleThree: "Model J",


    },
    print: function (){
        console.log("The CEO of TEsla is ' + this.ceo");
    }
}
tesla.stockPrice = 1643.00;
console.log(tesla)
console.log(name);
console.log(age);
console.log(isCool);
console.log(friends);
console.log(tesla.vehicles.vehicleThree)
console.log(tesla.vehicles.vehicleTwo)

tesla.print();


// make your own object
let composer = "Bethoven";
let ageDeath = 56;
let beautifulMusic = true;
let instrumentsPlayed= ["piano", "violin",]

function printFriends(array) {
    array.forEach( friend => {
        console.log(friend)
    });
}
const container = document.querySelector('.container');
console.log(container);

const headerTwo = document.createElement('h2');
headerTwo.textContent = 'My First JS Review';
console.log(headerTwo);
//move h2 into container class
container.appendChild(headerTwo);
// two ways to add  a class to headerTwo
headerTwo.classList.add('subtitle');

//headerTwo.setAttribute('class', 'header-two');
headerTwo.classList.remove('header-two');
console.log(headerTwo)

