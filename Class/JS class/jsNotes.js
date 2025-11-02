//"use strict"; To use strictly JS modern codes.
// const is used for variables that can't change values.
//alert( 1 / 0 ); return infinity. Alert itself shows a message in a modal window and wait for the user to press OK
//alert( "not a number" / 2 ); returns NaN. However, NaN ** 0 returns 1
//Maximum number entry is +-(253-1) i.e. 9007199254740992. Nothing above or below it.
//BigInt type was recently added to the language to represent integers of arbitrary length.*
//Types of Quotes: Double, Single and Back Ticks.
//Backticks are “extended functionality” quotes. They allow us to embed variables and expressions into a string by wrapping them in ${…}
// example alert( `the result is ${1 + 2}` ); displays the result is 3. double quotes will display the result is ${1 + 2}.
//let takes boolean too. E.g. let isGreater = 4 > 1; let isGreater = true;
//let takes null too. e.g let noAnswer = null;
/*If-else handles expected conditions as part of normal flow.
Try-catch handles unexpected errors/exceptions to prevent crashes.
*/

/*
TYPEOF returns a string with the type name

typeof undefined // "undefined"

typeof 0 // "number". Can be re-represented with typeof(0), typeof("sdsd")

typeof 10n // "bigint"

typeof true // "boolean"

typeof "foo" // "string"

typeof Symbol("id") // "symbol"

typeof Math // "object"  (1)

typeof null // "object"  (2)

typeof alert // "function"  (3)
*/

/* PROMPT accepts two arguments. It shows a modal window with a text message, an input field for the visitor, and the buttons OK/Cancel
 example: result = prompt(title, [default]);
The square brackets around default in the syntax above denote that the parameter is optional, not required.
The visitor can type something in the prompt input field and press OK. Then we get that text in the result.

Example:
let age = prompt('How old are you?', 100);

alert(`You are ${age} years old!`); This displays 100 by default in the input field but can be changed 

/*CONFIRM function shows a modal window with a question and two buttons: OK and Cancel.
example: 
let isBoss = confirm("Are you the boss?");
alert( isBoss ); //shows true if okay is clicked and false for Cancel/Esc.
*/