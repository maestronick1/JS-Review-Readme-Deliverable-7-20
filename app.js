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
//click change element
headerTwo.addEventListener('click', function(){
    headerTwo.textContent = 'Nick' ;
});
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

    list.appendChild(listItem);
//click action to see friends
}

 headerThree.addEventListener('click', function() {
     container.appendChild(list);
 });

 // problem solving
 // what do i start with
 // what do i hope to end up with

 // understand the problem
 // where the issue start and ..

 // break it into baby steps
 
 
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


//const array = [['taylor', 'rome', 'adam'], 'rome']; // => true
// isInside(['pete', 'adam', 'taylor'], 'fred'); // => false
        
        function isInside(array, ele){
            for(let i = 0; i < array.length; i++){
                if(array[i] == ele){
                    console.log(true);
                }else{
                    console.log(false);
                }
                
            }
        
        }
    
      isInside(['taylor', 'peter', 'adam'], 'rome'); 
