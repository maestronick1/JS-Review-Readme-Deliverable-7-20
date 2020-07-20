##Code Along
```javascript
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
###examples of Fuctions
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