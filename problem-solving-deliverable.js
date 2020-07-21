// JS Problem Solving
// Practice pair programming for each problem. Switch roles every 10 mins. Be sure to console.log to make sure that you got a working solution. Ask yourself the following questions with each problem:

// [ ] Do I understand what the prompt is asking?
// [ ] Am I able to break the problem down?
// [ ] What is my strategy for solving the problem?
// [ ] Do I understand what my code is doing?
// [ ] Am I able to foresee any edge cases?
// [ ] Am I able to track the order of the code that is being executed?
// [ ] Am I able to track the values of the variables?
// [ ] Am I able to walk through my code line by line with an example?
// [ ] Do I have a working solution?
// 1. isInside
// // Write a function `isInside(array, ele)` that returns true if `ele` is an element
// inside of the `array`, false otherwise.
//
// HINT: use indexOf
//
 //const array = (['taylor', 'rome', 'adam'], 'rome'); // => true
 //isInside(['pete', 'adam', 'taylor'], 'fred'); // => false
 function isInside(array, ele){
    for(let i = 0; i < array.length; i++){
        if(array[i] == ele){
            return(true);
        }
         //}else{
         //   return(false);
        
        
     }

 }

console.log(isInside(['taylor', 'rome', 'adam'], 'rome')); 
// 2. reverseStr
// Write a function `reverseStr(str)` that takes in a string as a parameter and
// returns the string but with the characters in reverse.
//
// Examples:
//
// reverseStr('bootcamp'); //=> 'pmactoob'
// reverseStr('General Assembly'); //=> 'ylbmessA lareneG'

function reverseStr(str) {
     //console.log(str.length);
    // let result = [];
     //for (let i = 0; i < str.length;i++) {
       //  let result = str[i];
         
     
    return str.split('').reverse().join('');

    }

console.log(reverseStr('testing'));



// 3.luckySevens
// Write a function `luckySevens(max)` that returns an array of all numbers up
// to max (inclusive) that are divisible by 7.
//
// Examples:
//
// luckySevens(25); // => [ 7, 14, 21 ]
// luckySevens(42);  => [ 7, 14, 21, 28, 35, 42 ]
result = [];
function luckySevens(max){
    for (let i = 1; i <= max ;i++) {
        if(i % 7 ==0){
        result.push(i);
       // console.log(result.push(i))
        }
        
        
    }
    
    return result
   // console.log(result)     
}

console.log(luckySevens(42));
// 4. copyMachine
// Write a function `copyMachine(element, num)` that takes in an element and a number
// it should return an array of length `num` that is filled with `element`.
//
// Examples:
//
// copyMachine('candy', 0); // => []
// copyMachine('candy', 2); // => [ 'candy', 'candy' ]
// copyMachine('bread', 4); // => [ 'bread', 'bread', 'bread', 'bread' ]
// copyMachine(11, 6); // => [ 11, 11, 11, 11, 11, 11 ]

function copyMachine(element , num){
    const result= [];
    for(i = 0; i < num; i++){
        result.push(element);
        
        
    }
    return result;
  

}
console.log(copyMachine("taxes", 7))
// 5. everyOtherWord
// Write a function `everyOtherWord(sentence)` that takes in a sentence and returns
// an array containing every other word in that sentence.
//
// Examples:
//
// everyOtherWord('hello how are you doing on this lovely day?'); // => [ 'hello', 'are', 'doing', 'this', 'day?' ]
// everyOtherWord('the weather is wonderful'); // => [ 'the', 'is' ]


function everyOtherWord(sentence){
    const result=[];
    let splitSentence = sentence.split(" ");
    console.log(splitSentence)
    for(i = 0; i < splitSentence.length; i++){
       if(!(i % 2 )){
       result.push(splitSentence[i]);
        
       }
    
        
    }
    return result;    

}
console.log(everyOtherWord('the music is beautiful tonight'));
// 6. wordYeller
// Write a function `wordYeller(sentence)` that takes in a sentence string as
// input. It should return the sentence where every word has an exclamation
// point behind it, except words that already have punctuation. Punctuation
// marks are ". , ! ? ; :"


//
// Example 1
// let sent = "Stop it now! Please, wont you stop?";
// let yelledWords = wordYeller(sent);
// yelledWords === "Stop! it! now! Please, wont! you! stop?"; // => true
//
// Example 2
// let words = "Go to the store and grab the following: milk, bread, run, and cake";
// wordYeller(words) === "Go! to! the! store! and! grab! the! following: milk, bread, run, and! cake!"; // => true


// 7. arraySubstring
// Write a function `arraySubstring(words, str)` that takes in an array of
// strings and a string as arguments and returns an array where each element is
// replaced with true if the string is a substring of the element and false if
// it is not.
//
// Examples:

// arraySubstring(["hello", "history", "helix", "hellos"],"hel")
// => [true, false, true, true]
// arraySubstring(["prefix", "problems", "pragmatic", "prefer"], "pre")
// => [true, false, false, true]
function arraySubstring(words, str) {
    let anotherArray = [];
    for(i = 0; i< words.length; i++) {
       if (words[i].includes(str)) {
           anotherArray.push('true');
        } else {
        anotherArray.push('false');

    }

}
return anotherArray;
}
console.log(arraySubstring(["prefix", "problems", "pragmatic", "prefer"], "pre"));
    

//8 .evenCaps
// Write a function venCaps(sentence) that takes in a sentence as an
// argument and returns the same string with each even index being
// capitalized. Index 0 counts as even.
function evenCaps(sentence){
let emptyArray = [];
let splitASentence = sentence.split('');
for (i=0; i< splitASentence.length; i++){
     if(i % 2 ===0 ){
         emptyArray.push(splitASentence[i])
     }else {
         emptyArray.push(splitASentence[i].toUpperCase());

     }
    
    }
    let tranformed = emptyArray.join("");
    return tranformed;
}
console.log(evenCaps("I like playing the piano"));
// Examples:
//
// evenCaps("Tom got a small piece of pie")
// => "ToM GoT A SmAlL PiEcE Of pIe"
// evenCaps("the book is in front of the table")
// => "ThE BoOk iS In fRoNt oF ThE TaBlE"