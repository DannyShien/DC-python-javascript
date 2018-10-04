// Javascript

// Python conversion
// Getting input

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

//String interpolation
//1. Replace quotes with backticks
//2. remose the + signs
//3. Wrap your variables in ${}
const greeting = `Hello,  ${userName} !`;
console.log(greeting);
