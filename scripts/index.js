// Javascript

// Python conversion

// ===== ===== ===== Getting input ===== =====

//using var and camelCase
var promptText = 'What is your name? '
var userName = prompt(promptText);

//uses string concatenation
var greeting = 'Hello, ' + userName + '!';
console.log(greeting);

// === using let and const 
//Rule of thumb: use const until you get an error

const promptText = 'What is your name? '
let userName =prompt(promptText);

// ===== ===== ===== String interpolation ===== =====
//1. Replace quotes with backticks
//2. remove the + signs
//3. Wrap your variables in ${}
const greeting = `Hello, ${userName}!`;
console.log(greeting);

// ===== ===== ===== Madlibs ===== =====
//Hard-coding insead of prompting
//-In real like, when you want
//you'll create an HTML form. 
const name = `Stanley`;
const subject = ``;

const finalText = `${name}'s favorite subject in school is ${subject}.`;

console.log(finalText);

// Start with a hard-coded value
// until you know your program works. 
// Then switch to prompting the user. 

// ===== ===== ===== if, else if statement ===== =====
let theDay = prompt(`Day (0-6)?`);

// To convert from a string to a number, 
// use parseInt and provide base 10 as an argument
theDay = parseInt(theDay, 10);

//const theDay = 5; 
let dayName = `Invalid choice, buddy.`;

// You must use parenthese for your condition!!
// "Loose" queality is ==
// "Strict" equality is ===
// By default, use strict equality, === "threequals"

if (theDay === 0) { //And curly braces !
    // You can leave off the curly braces, 
    // but your 'body' can only have one statement.
    // Any statement after the first will get run
    // regardless of whether the condition is true or
    // not.

    dayName = `Sunday`;
} else if (theDay === 1) {
    dayName = `Monday`;
} else if (theDay === 2) {
    dayName = `Tuesday`;
} else if (theDay === 3) {
    dayName = `Wednesday`;
} else if (theDay === 4) {
    dayName = `Thursday`; 
} else if (theDay === 4) {
    dayName+ `Friday`; 
} else if (theDay === 5) {
    dayName = `Saturday`;
}

// The body of an if statement
// is surrounded by curly braces. 
// And does not require a semi-colon after the curley braces. 

console.log(dayName);

// ===== ===== ===== tip calculator ===== =====

const LEVEL_GOOD = 'good'; 
const LEVEL_FAIR = 'fair'; 
const LEVEL_BAD = 'bad'; 

const TIP_GOOD = 0.2; 
const TIP_FARI = 0.15; 
const TIP_BAD = 0.1; 

// Processing ===========
const totalBill = parseFloart(`100`); 
const levelOfService = 'good'; 


let tip = 0.0; 

if (levelOfService === LEVEL_GOOD) {
    tip = totalBill * TIP_GOOD; 
} else if (levelOfService === LEVEL_FAIR) {
    tip = totalBill *TIP_FAIR; 
} else if (levelOfService === LEVEL_BAD) {
    tip = totalBill * TIP_BAD;
} else {
    console.log(`Invalid. They can't be that bad`)
}

// Result ==============
console.log(`Tip amount: ${tip.toFixed(2)}`); 
console.log(`Total amount: ${(totalBill + tip).toFixed(2)}`);

// ===== ===== ===== LOOPS ===== =====

for (let count = 0; count < 10; count ++) {
    console.log(count);
}

// ===== ===== ===== ARRAYS ===== =====
// ===== ===== LEETSPEAK ===== =====
const text = `you wish you were batman`; 

const lettersToConvert = ['A', 'E', 'G', 'I', 'O', 'S', 'T'];
const numbers          = [4,    3,   6,   1,   0,   5,   7]; 

const textToTranslate = text.toUpperCase(); 
let translation = ``;
 //ES6 stlye of array iteration
 //Basically the equicalent of python's for loop
 //for (let lettter of text.toUpperCaes())

for (let letter of textToTranslate) {
    //console.log(letter);
    // console.log(lettersToConvert.indexOf(letter) !== -1) {
    let index = lettersToConvert.indexOf(letter);
    
    //Check to see if the current letter is in `letterToConvert`
    if (index !== -1) {
        //if so, grab the index

        //use the index to grab the corresonding item from `numbers`
        translation = translation + number[index];
    }else {
        //else, just use the origianl letter
        translation = translation + letter; 
    }
}

console.log(translation); 

// ===== ===== ===== OBJECTS ===== =====
const text = `you wish you were batman`;

//'objects in JavaScript
// is bassically a "dictionary" in Python. 

//Backticks does not work when declaring 'keys' but okay as 'values' 
const lettersToNumbers = {
    'A': '4', 
    'E': '3',
    'G': '6',
    'I': '1', 
    'O': '0', 
    'S': '5', 
    'T': '7' 
};

const textToTranslate = text.toUpperCase();
let translation = ``;

// Let's loop through the strings to translate
for (let letter of textToTranslate) {
    // If the letter is a key in out "dictionary" 
    const replacement = lettersToNumbers[letter];

    // and its value is not 'falsey': false, null, undefined, 0, '', NAN
    if (lettersToNumbers[letter]) {
        console.log(`${letter} is ${lettersToNumbers[letter]}`);
        translation = translation + lettersToNumbers[letter]
    } else {
        console.log(`${letter} stays the same`);
        translation = translation + letter;
    }
    // use the translation.
    // Otherwise, just use the original letter. 
    
}
    

// ===== ===== ===== FUNCTION ===== ======
const textToTranslate = `you wish you were batman`;

// const textToTranslate = text.toUpperCase();
// let translation = ``;

// A function that accepts a letter as an argument. 
// It will return either the translation 
// or the original letter. 

// Equivalent python: 
// def translate(letter):
function translate(letter) {
    letter = letter.toUpperCase();
    const lettersToNumbers = {
        'A': '4', 
        'E': '3',
        'G': '6',
        'I': '1', 
        'O': '0', 
        'S': '5', 
        'T': '7' 
    };

    const replacement = lettersToNumbers[letter];
    // if (replacement) {
    //     return replacement;
    // } else {
    //     return letter; 
    // }

    // Return replacement if its truthy
    // else return letter
    return replacement || letter;
}

function translateSentence(sentence) {
    let translation = ``;

    for (let character of sentence) {
        translation = translation + translate(character);
    }

    return translation;
    
}

console.log(translateSentence(textToTranslate));
// console.log(translation);

