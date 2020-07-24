## Code Along Types of Objects

```javascript
let name = "Nick Phillips" ; //string
let age = 32;//Numbers
let isCool = true;//boolean
const friends = [ "Matt", "John", "Andrew"]//array


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
let age = 56;
let beautifulMusic = true;
let instrumentsPlayed= ["piano", "violin",]

function printFriends(array) {
    array.forEach( friend => {
        console.log(friend)
    });
}
friends.forEach(friend=> {
    printName(name)
}

```
## Examples of Fuctions
```javascript
//standard Function
function addNumbers(num1, Num2){
    return num1 + num2;

};
// function expression
const multNumbers(num1, Num2){
    return num1 * num2;

};
// arrow
function subNumbers(num1, Num2)=>{
    return num1 - num2;

};
```
# Adding classes or elements to Dom or nest in elements

```javascript
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
```
### More DOM manipulation

```javascript
// make another element
const headerThree = document.createElement('h3');
container.appendChild(headerThree);
console.log(headerThree);

//iterate throuh my friends array
const list = document.createElement('ul');
for (let i=0; i< friends.length; i++) {
    let eachFriend= friends[i];
    console.log(eachFriend);

    const listItem = document.createElement('li');
    listItem.textContent = eachFriend;
//append item to list
    list.appendChild(listItem);
//click action to see friends
}
// listening for a click
 headerThree.addEventListener('click', function() {
     container.appendChild(list);
 })

```
# Problem Solving
- [ ] Do I understand what the prompt is asking?
- [ ] Am I able to break the problem down?
- [ ] What is my strategy for solving the problem?
- [ ] Do I understand what my code is doing?
- [ ] Am I able to foresee any edge cases?
- [ ] Am I able to track the order of the code that is being executed?
- [ ] Am I able to track the values of the variables?
- [ ] Am I able to walk through my code line by line with an example?
- [ ] Do I have a working solution?

# Fizzbuzz Excercise

```javascript
function fizzBuzz(array) {
    let result =[]; // Fizz, Buzz, Fizzbuzz, Buzz, Fizz
     //pass in an array
    for (let i = 0; i < array.length; i++) {
    let num = array [i];
    console.log(num) //3,5,15...
        //conditional
    if (num % 3 === 0 && num % 5 === 0) {
            result.push('FizzBuzz');
        } else if (num % 3 === 0){
            result.push('Fizz')
        } else if (num % 5 === 0){
            result.push('Buzz')
    

        } else{
        result.push(num);

        }

 }
return result;
}
 
;

console.log(fizzBuzz([3, 5, 15, 20, 9, 7]));

```


## Summary of what I have learned so far in HTML, CSS, Javascript
    THe first thing i will say that that the coding world contains an seemingly endless amout of informations and uses for the languages. I have learned how to sharpened up my HTML  a lot more even in a week; short cuts, diffrent ways to nest elements to work for my approach of coding, different inputs, the improtant ways that html ties to javascript and other laguanges. In CSS i have learned easier wys to manipulate stylings and alignments of many differnt elements. Javascript has been the most challenging language of all. It seems the language is so vast. I have leanred anbout functions, Objects, datatyes, the different typ of functions and algoritms, APIs, contractors, classes, fetch, json, and much more. I am particularly fond on DOM manipulation, because I like how it coresponds with HTML and CSS. NO DOUBT that i will be learning musch mopre soon.
    
# Object Oriented Programing
is programming based on the concept of "objects",

```JS
const dog = {
    name: "Michael",// objects and key values
    goodBoy: true,
    gender: "girl"
}

const dogTwo = {
    name: "Rocco",
    color: 'brown'

};

dogTwo. __proto__ = dog//that exposes the internal [[Prototype]] (either an object or null) of the object through which it is accessed.


console.log(dog);
console.log(dogTwo);
console.log(dogTwo.goodBoy);
console.log(dogTwo.name);


const mountainOne = {
    height: "tall",
    beautiful: true,
    trees: true,
};
const mountainTwo = {
    height: "short",
    beautiful: false,
    trees: true,
};
mountainTwo.__proto__=mountainOne;
console.log(mountainOne)
console.log(mountainTwo)

apartOne = {
 location: "long Island",   
 rooms: 3
}
apartTwo = {
 location: "brooklyn",   
 color: "white"

}

apartTwo.__proto__ = apartOne;

apartTwo.rooms = 4;
console.log(apartTwo.rooms)
console.log(apartOne.rooms)
```
## Object Constructors
The constructor method is a special method for creating and initializing an object created within a class.
```js
function User (name) {//constructor Functions
    // this
    this.name = name;
    // retun this
}
let adam = new User('Adam');
let pete = new User('Pete');

console.log(pete.name);

console.log(adam.name);
function NBAPlaeyer(name, team, threePtShooter) {
    this.name = name;
    this.team = team;
    this.threePtShooter = threePtShooter;
    this.intro = function() {
        console.log ("hi may name is" +  this.name)
    }
}
let steph = new NBAPlaeyer( "Steph Curry", "Warriors", true)
console.log(steph);
steph.intro()//call the this.intro function above
 

function User (pianist, musician){
    this.pianist = pianist;
    this.musician = musician;
    this.myNameIs = function() {
        console.log("hi, my name is Nick")
    }
}
let nick = new User('Nick Phillips', "pianist", true);
let john = new User( "John Lennon", "musician", true)
console.log(nick)
console.log(nick.name)
nick.myNameIs()
```
## Class Objects
A class is a type of function, but instead of using the keyword function to initiate it, we use the keyword class, and the properties are assigned inside a constructor() method.
```js
// make a class object

class Car  {
    constructor( year, make, model, color) {
        this.name = year;
        this.make = make;
        this.color = color;
        this.model = model;
    }
    drive(){
        console.log("Vroom");
    }
    intro(){
        console.log('This is a ' + this.make + ' ' + this.model + " " + 'and goes');
    }
}

let tesla = new Car('2020', 'Tesla','Model S', 'White');
console.log(tesla);
tesla.drive();
tesla.intro();



class GitProfile{
    constructor( username, name, url) {
        this.username = username;
        this.name = name;
        this.url = url;
    }
    intro(){
        console.log(`My name is ${this.name} and my username is @${this.username}`)
    }
}
```
## Fetch Examples

The Fetch API provides a JavaScript interface for accessing and manipulating parts of the HTTP pipeline, such as requests and responses. ... Fetch also provides a single logical place to define other HTTP-related concepts such as CORS and extensions to HTTP.
```JS
fetch('https://api.github.com/users/maestronick1')
.then(response => {
    return response.json();
})
.then(data => {
    console.log(data);
    let gitUrl = data.url;
    console.log(gitUrl);
  let gitUserName = data.login;
  console.log(gitUserName);
  let gitName = data.name;

  let nick = new GitProfile(gitUserName, gitName, gitUrl);
  console.log(nick)

})
```
## Promise
The Promise object represents the eventual completion (or failure) of an asynchronous operation, and its resulting value.
// Promises
// ES5: Part 1
```JS
let isMomHappy = false;

// Promise
let willIGetNewPhone = new Promise(
    function (resolve, reject) {
        if (isMomHappy) {
            let phone = {
                brand: 'Samsung',
                color: 'black'
            };
            resolve(phone); // fulfilled
        } else {
            let reason = new Error('mom is not happy');
            reject(reason); // reject
        }

    }
);
let willIGetNewPhoneTwo = new Promise((resolve, reject) =>{
    if (isMomhappy) {
        const phone = {
            brand: "iphone",
            color: "red"
        }
        resolve(phone);
    }
    else {
        reject('No Phone');
    }
});

willIGetNewPhoneTwo.then(result => {
    console.log(result)
});
```
## Async / AWait
The word  “async” before a function means one simple thing: a function always returns a promise. Other values are wrapped in a resolved promise automatically.

The keyword await makes JavaScript wait until that promise settles and returns its result.

Here’s an example with a promise that resolves in 1 second:

```JS

async function printUsers() {//async functiom
    const mypoint = 'https://api.github.com/users/maestronick1';//endpoint url
    const lizzpoint = 'https://api.github.com/users/LizzWest';//endpoint url
    let nick = await fetch(mypoint).then(response => {response.json();
    console.log(nick);
    

    })
let lizz = await fetch(lizzpoint).then(response => response.json());

console.log(Lizz);
 }
printUsers();
```