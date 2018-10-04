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
//2. remose the + signs
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

// comment