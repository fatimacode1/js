//if statemnt

let driverAge = 23;
if (driverAge >= 18) {
  console.log("Eligible for a license.");
}
{
}
//else if statement
let score = 75;

if (score >= 90) {
  console.log("Grade: A+");
} else if (score >= 75) {
  console.log("Grade: A");
} else if (score >= 33) {
  console.log("Grade: B");
}

//else statemnt

let temp = 15;

if (temp > 30) {
  console.log("It's hot!");
} else if (temp > 20) {
  console.log("It's warm!");
} else {
  console.log("It's cold!");
}

//Nested conditional statements
let marks = 80;

if (marks >= 33) {
  if (marks >= 80) {
    console.log("Outstanding");
  } else {
    console.log("Pass");
  }
} else {
  console.log("Better luck next time!");
}

//Logical AND
console.log(5 > 3 && 10 > 2); //true

//Logical OR
console.log(5 > 10 || 10 > 2); //true

//Logical NOT
console.log(!(5 > 3)); //false

//Example

let age = 25;
let hasLicense = true;

//Using AND
if (age >= 18 && hasLicense) {
  console.log("Can drive!");
}

//Using OR
let isWeekend = true;
let isHoliday = false;

if (isWeekend || isHoliday) {
  console.log("Time to relax!");
}

//Using NOT
let isRaining = false;
if (!isRaining) {
  console.log("Let's go outside");
}

//falsy values
/*
false
0
""
null
undefined
NaN
0n
*/

//Switch statement

let signal = "yellow";

switch (signal) {
  case "red":
    console.log("Stop");
    break;
  case "yellow":
    console.log("Caution");
    break;
  case "green":
    console.log("Go");
    break;
  default:
    console.log("Invalid Signal");
}

//alert
//prompt

//1.

let num = 5;

if (num % 10 === 0) {
  console.log("Good");
} else {
  console.log("Bad");
}

//2.

/*
let name = prompt("What's your name?");
console.log("Hello,", name);

let age = prompt("How old are you?");
console.log("You are ", age, " years old")

alert(`${name} is ${age} years old`)
*/

//3.

let quarter = 1;
switch (quarter) {
  case 1:
    console.log("JAN, FEB, MAR");
    break;
  case 2:
    console.log("APR, MAY, JUN");
    break;
  case 3:
    console.log("JUL, AUG, SEP");
    break;
  case 4:
    console.log("OCT, NOV, DEC");
    break;
  default:
    console.log("Wrong Quarter");
}
