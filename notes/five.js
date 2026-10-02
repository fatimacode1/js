// for (let i = 1; i <= 5; i++) {
//     console.log(i, "Hello");

// }

// //for loop

// //when you know exactly how many times u want to repeat something
// {
//     for (let i = 1; i <= 5; i++) {
//         console.log(i);
//         //i = i + 1;

//     }

//     //print odd numbers from 1 to 15

//     for (let i = 1; i <= 15; i+=2) {
//         console.log(i);
//         //i = i + 2

//     }

//     //print even numbers from 2 to 10

//     for (let i = 2; i <=10; i+=2) {
//         console.log(i);

//     }

//     //multiplication table of 5
//     for (let i = 1; i <= 10; i++) {
//         console.log(5*i);

//     }

//     //countdown from 10 to 1

//     for (let i = 10; i >= 1; i--) {
//         console.log(i);

//     }

//     console.log("Blast off!");

// }

// //infinite loops
// {

//     //1. missing updation

//     // for (let i = 1; i <= 5) {
//     //     console.log(i);

//     //i never changes, so i <= 5 is always true

//     // }

//     //2. wrong updation direction

//     // for (let i = 1; i >= 0; i++) {
//     //     console.log(i);

//     // }

//     //i keep increasing, so i >= 0 is always true

//     //omitting the condition
//     // for (let i = 1; ; i++) {
//     //     console.log(i);

//     // }

//     //no condition means, always true

//     //1. fixed version - proper updation
//     for (let i = 1; i <= 5; i++) {
//         console.log(i);

//     }

//     //2. fixed version - correct direction

//     for (let i = 10; i >= 0; i--) {
//         console.log(i);

//     }

//     //4.infinite loop with while

//     // let count = 0;

//     // while (count < 5) {
//     //     console.log(count);
//     //     //forgot to increment count

//     // }

//     //5. fixed while loop

//     let count = 0;
//     while (count < 5) {
//         console.log(count);
//         count++;

//     }

// }

// //nested for loops
// {
//     // for (let i = 1; i <= outerLimit; i++) {
//     //     for (let j = 1; j <= innerLimit; j++) {

//     //     }
//     // }

//     //1. basic nested loop
//     for (let i = 1; i <= 3; i++) {
//         console.log("Outer loop", i);

//         for (let j = 1; j <= 3; j++) {
//             console.log("Inner loop", j);

//         }

//     }

//     //2. multiplication table (1 to 5)

//     for (let i = 1; i <= 5; i++) {
//         let row = "";
//         for (let j = 1; j <= 5; j++) {
//          row += (i * j) + "\t";

//          //row = row + something
//          //row += something
//          //row += (i * j) + "\t";
//          //row = row + (i * j) + "\t";
//         }
//         console.log(row);

//     }

//     //3. pattern printing - right triangle

//     for (let i = 1; i <= 5; i++) {
//         let pattern = "";
//         for (let j = 1; j <= i;  j++) {
//             pattern += "* ";
//         }
//         console.log(pattern);

//     }

//     //4. number grid
//      for (let row = 1; row <= 4; row++) {
//         let line = "";

//         for (let col = 1; col <= 4; col++) {
//             line += `(${row}, ${col})`;
//         }
//         console.log(line);

//      }

//      //5. inverted triangle pattern

//      for (let i = 5; i>= 1; i--) {
//         let pattern = "";

//         for (let j = 1; j <= i; j++) {
//             pattern += "* ";
//         }
//         console.log(pattern);

//      }

//      //example
//      for (let i = 0; i <= 10; i++) {
//         for (let j = 0; j <= 10; j++) {
//             console.log(`${i} x ${j} = ${i * j}`);

//         }
//         console.log("-----------");

//      }

//      //example

//      for (let i = 1; i <= 5; i++) {
//         for (let j = 1; j <= i; j++) {
//             console.log(j, " ");

//         }
//         // console.log("\n");

//      }

//      //grid

//      for (let row = 1; row <= 4; row++){
//         // console.log("row:", row);
//         let line = "";
//         for (let col = 1; col <= 4; col++){
//             // console.log("col", col);

//             // console.log(row, col);

//             line += `(${row}, ${col})`;
//             //line += something
//             // line = line + something

//         }
//         console.log(line);

//      }
//     }

// //while loop

// //initialization
// /*
// let i = 1;

// while (condition) {
// //code to execute
// //updation (inside the loop)
// i++;
// }
// */
// // {

// //     //1. count from 1 to 5
// //     let i = 1;
// //     while ( i <= 5) {
// //         console.log(i);
// //         i++;

// //     }
// // }

// //example 1 - count from 1 to 5
// let i = 1;
// while (i <= 5) {
//     console.log(i);
//     i++;

// //exmaple 2 - sum numbers until target reached
// let sum = 0;
// let num = 1;

// while (sum < 50) {
//     sum += num;
//     //sum = sum + num;
// console.log(`Added ${num}, sum is now ${sum}`);
// num++;

// }
// console.log(`Final sum: ${sum}`);

//example 3: password validation

// const readlineSync = require("readline-sync");
// let password = "";
// let attempts = 0;

// while (password !== "secret123" && attempts < 3) {
//     password = readlineSync.question("Enter password: ");
//     attempts++;
//     console.log("attempts = ", attempts);

//     if (password === "secret123") {
//         console.log("Access granted");

//     } else if (attempts < 3){
//         console.log(`Wrong password, ${3 - attempts} attempts remaining`);

//     } else {
//         console.log("Access denied, too many attemps");

//     }

//     console.log(password);

// }

//again

// const readlineSync = require("readline-sync");
// let password = "";
// let attempts = 0;

// while (password !== "secret1234" && attempts < 3) {
//     password = readlineSync.question("Enter password: ");
// attempts++;
//     if (password === "secret123") {
//         console.log("Access granted");

//     } else if (
//         attempts < 3) {
//         console.log(`Wrong password, ${ 3 - attempts} attempts remaining`);

//     } else {
//         console.log(`Access denied. Too many attempts`);

//     }

// }

//Example 4: Halving until below threshold

// let number = 1000;

// while (number > 1) {
//     number = number / 2 ;
//     console.log(number);

//halving = divide by 2
//threshold = the limit
//until below threshold = keep going until you cross that limit
// }

//Example 5: Finding First Power of 2 Greater Than Value

// let target = 1000;
// let power = 1;
// let exponent = 0;

// while (power <= target) {
//     exponent++;
//     power = 2 ** exponent;
// }

// console.log(`2^${exponent} = ${power} is the first power of greater than ${target}`);

// }

//do...while loop
//executes the code block at least once before checking the condition
/*

do {
//code to execute
//runs at least once
} while (condition);
*/

//{
//example 1: menu system

// const readlineSync = require("readline-sync");

//     let choice;

//     do {
//         console.log("menu:");
//         console.log("1. play");
//         console.log("2. settings");
//         console.log("3. exit");
//         choice = readlineSync.question("Enter your choice: ");

//         if (choice === "1") {
//             console.log("Starting game...");
//         } else if (choice === "2") {
//             console.log("Opening settings...");

//         }

//     } while (choice !== "3")
// console.log("Goodbye!");

/*
1 -> Play -> continue menu
2 -> Settings -> continue menu
3 -> Exit -> stop menu
*/

//example 2: dice roll until six

// let roll;
// let attempts = 0;

// do {
//     roll = Math.floor(Math.random() * 6) + 1;

//Generate a random whole number from 1 to 6 and store it in roll

//Math.random()
//This gives random decimal number from 0 up to, but not including 1
//It will never be exactly 1

//Math.random() * 6
//0.7
//0.7 x 6 = 4.2

//Math.floor(...)
//Math.floor(Math.random() * 6) + 1
//Means round down to the nearest whole number
//     attempts++;
//     console.log(`Roll ${attempts}: ${roll}`);

// } while (roll !== 6);

// console.log(`Got a 6 after ${attempts} attempts!`);

//example 3: input validation - must be positive
// const readlineSync = require("readline-sync");
// let number;

// do {
//     number = readlineSync.question("Enter a positive number: ");
//     number = Number(number);

//     if (number <= 0 || isNaN(number)) {
//         console.log("Invalid input. Please enter a positive number: ");

//     }
// }  while (number <= 0 || isNaN(number));

// console.log(`You entered: ${number}`);

//type conversion
//Number() - a JS function that converts a value into a number
//Number(value) = convert the value into a number
//Other common type-conversion
//String(value);
//Number(value);
//Boolean(value);
//isNaN() - checks whether something isn't a valid number

//example 4: countdown with at least one execution

// let count = 0;

// do {
//     console.log(`Count: ${count}`);
//     count++;

// } while (count < 0)

// //while loop

// let countt = 0;

// while (countt < 0) {
//     console.log(`Countt: ${countt}`);
//     countt++;
// }

//while loop: CHECK -> RUN
//do...while loop: RUN -> CHECK

//example 5: ATM withdrawal
// const readlineSync = require("readline-sync");
// let balance = 1000;
// let continueTransaction;

// do {
//     let amount = Number( readlineSync.question(`Balance: $${balance}. Enter withdrawal amount: `));

//     if (amount > 0 && amount <= balance) {
//         balance -= amount;
//         //balance = balance - amount
//         console.log(`Withdrew $${amount}. New balance: $${balance}`);

//     } else {
//         console.log(`Invalid amount`);

//     }
//     continueTransaction = readlineSync.question("Another transaction? (yes/no): ");
// } while (continueTransaction === "yes" && balance > 0);

// console.log(`Final balance: $${balance}`);

// }

//loop control: break and continue

//  {
//break - exit the loop completely, regardless of the condition

//example 1: find first number divisible by 7

// for (let i = 1; i <= 100; i++) {
//     if (i % 7 === 0) {
//         console.log(`First number divisible by 7: ${i}`);
//         break;
//     }
// }

// //example 2: search in array

// let fruits = ["apple", "banana", "orange", "grape", "mango"];
// let searchFor = "orange";
// let found = false;

// for (let i = 0; i < fruits.length; i++) {
//     if (fruits[i] === searchFor) {
//         console.log(`Found ${searchFor} at index ${i}`);
//         found = true;
//         break;

//     }
// }

// if (!found) {
//     console.log(`${searchFor} not found`);
// }

//example 3: password attempts limit
// const readlineSync = require("readline-sync");
// let correctPassword = "secret123";
// let maxAttempts = 3;

// for (let attempt = 1; attempt <= maxAttempts; attempt++) {
//     let password = readlineSync.question(`Attempt ${attempt}: Enter password: `);

//     if (password === correctPassword) {
//         console.log("Access granted!");
//         break;
//     } else if (attempt === maxAttempts) {
//         console.log("Access denied. No more attempts.");

//     } else {
//         console.log("Wrong password. Try again.");

//     }
// }

//continue - skip the current iteration and jump to the next one

//example 4: print numbers, skip 3
// for (let i = 0; i <= 5; i++) {
//     if (i === 3) {
//         continue;
//     }

//     console.log(i);

// }

// //example 5: print only even numbers using continue

// for (let i = 1; i <= 10; i++) {
//     if (i % 2 !== 0) {
//         continue;
//     }
//     console.log(i);

// }
//  }

//  //Iterating over arrays

// {
//     //using for loop with .length

//     //example 1: print all array elements
//     let cities = ["London", "Paris", "Tokyo", "New York", "Sydney"];

//     for (let i = 0; i < cities.length; i++) {
//         console.log(`${i}: ${cities[i]}`);

//     }

// //example 2: calculate sum of numbers

// let scores = [85, 92, 78, 95, 88];
// let sum = 0;

// for (let i = 0; i < scores.length; i++) {
//     sum += scores[i];
//     //sum = sum + scores[i];
//     //sum = 0 + 85
//     //sum = 85

//     /*
//     sum = 0

// 0 → 0 + 85  = 85
// 1 → 85 + 92 = 177
// 2 → 177 + 78 = 255
// 3 → 255 + 95 = 350
// 4 → 350 + 88 = 438

//     */
// }

// let average = sum /scores.length;
// console.log(`Total: ${sum}, Average: ${average}`);

// //example 3: find the maximum value

// let numbers = [23, 67, 12, 89, 45, 91, 34];
// let max = numbers[0];

// for (let i = 1; i < numbers.length; i++) {
//     if (numbers[i] > max) {
//         max = numbers[i];
//     }
// }

// console.log(`Maximum value: ${max}`);

// //example 4: reverse print an array

// let colors = ["red", "green", "blue", "yellow"];

// console.log("Original order:");
// for (let i = 0; i < colors.length; i++) {
//     console.log(colors[i]);

// }

// //\n - newline
// console.log("\nReverse order");
// for (let i = colors.length - 1; i >= 0; i--) {
//     console.log(colors[i]);

// }

// //example 5: filter array

// let ages = [12, 25, 17, 30, 15, 40, 19];
// let adults = [];

// for (let i = 0; i < ages.length; i++) {
//     if (ages[i] >= 18) {
//     adults.push(ages[i]);
//     }
// }
// console.log("Adults", adults);

// //nested arrays
// //matrix or table structure

// //example 6: iterate through 2d array

// let teams = [
//     ["Alice", "Bob"],
//     ["Charlie", "David"],
//     ["Eve", "Frank"]
// ];

// for (let i = 0; i < teams.length; i++) {
//     console.log(`Team ${i + 1}:`);

// for (let j = 0; j < teams.length; j++) {
//     console.log(` - ${teams[i][j]}`);
// //teams[0][0]
// //teams[i] - gives u the whole team
// //teams[i][j] - gives you one person inside that team

// }
// }

// //example 7: 2D array

// let grades = [
//     [85, 90, 78],
//     [92, 88, 95],
//     [76, 82, 80]
// ];

// for (let student = 0; student < grades.length; student++) {
//     let sum = 0;
//     for (let test = 0; test < grades[student].length; test++) {
//         sum += grades[student][test];
//     }
//     let average = sum / grades[student].length;
//     console.log(`Student ${student + 1} average: ${average.toFixed(2)}`);

// }

// //example 8: matrix addition
// let matrix1 = [[1,2], [3,4]];
// let matrix2 = [[5,6], [7,8]];
// let result = [];

// for (let i = 0; i < matrix1.length; i++) {
//     result[i] = [];
//     for (let j = 0; j < matrix1[i].length; j++) {
//         result[i][j] = matrix1[i][j] + matrix2[i][j];

//     }
// }
// console.log(result);

// /*
// Outer loop i → rows
// Inner loop j → columns
// [i][j] → specific value at row i, column j
// */
// }

// //for...of loop
// //iterate through collections (arrays, strings)

// /*

// for (let element of collection) {
// //use element directly
// }
// */
// {
// //ex 1: iterate through array
// let colors = ["Red", "Blue", "Green", "Yellow"];

// for (let color of colors) {
//     console.log(color);

// }

// //example 2: sum array elements
// let prices = [19.99, 29.99, 49.99, 9.99];
// let total = 0;

// for (let price of prices) {
//     total += price;

// }

// console.log(`Total $${total.toFixed(2)}`);

// //example 3: iterate through string
// let word = "JavaScript";

// for (let char of word) {
//     console.log(char);

// }

// //example 4: count vowels in string

// let sentence = "Hello Word";
// let vowels = "aeiouAEIOU";
// let count = 0;

// for (let char of sentence) {
//     if (vowels.includes(char)) {
//         count++;
//     }
// }
// console.log(`Number of vowels: ${count}`);

// //example 5: nested for...of with 2D array
// let departments = [
//     ["Alice", "Bob", "Charlie"],
//     ["David", "Eve"],
//     ["Frank", "Grace", "Henry", "Ivy"]
// ];

// for (let department of departments) {
// for (let employee of department) {
//     console.log(employee);

// }
// }
// }

//practical application: guessing game
{
  //     //ex. 1: fav movie guessing game
  // const readlineSync = require("readline-sync");

  //     let favMovie = "Inception";
  //     let guess = "";

  //     while (guess !== favMovie && guess !== "quit") {
  //         guess = readlineSync.question("Guess my fav movie or type (or type 'quit' to give up): ");

  //         if (guess === favMovie) {
  //             console.log("Correct! You guessed it!");
  //         } else if (guess === "quit") {
  //             console.log(`You gave up. It was ${favMovie}`);

  //         } else {
  //             console.log(`Wrong! try again`);

  //         }
  //     }

  //ex. 2: number guessing game with hints

  //      const readlineSync = require("readline-sync");
  // let secretNum = Math.floor(Math.random() * 100) + 1;

  // let guess = 0;
  // let attempts = 0;

  // while (guess !== secretNum) {
  //     guess = Number(readlineSync.question("Guess a number between 1 and 100: "))
  //     attempts++;

  //     if (guess === secretNum) {console.log(`Correct! You guessed it in ${attempts} attempts!`);
  //     } else if (guess < secretNum) {
  //         console.log(`Too low! Try higher.`);

  //     } else {
  //         console.log(`Too high! try lower.`);

  //     }
  // }

  //ex. 3: word scramble game
  //   const readlineSync = require("readline-sync");

  //   let words = ["javascript", "programming", "computer", "developer"];

  //   let word = words[Math.floor(Math.random() * words.length)];
  //   let scrambled = word
  //     .split("")

  //     //turns it into an array of individual characters
  //     //["c", "o", "m", "p", "u", "t", "e", "r"]

  //     .sort(() => Math.random() - 0.5)

  //     //randomly rearranges the characters
  //     //["p", "r", "c", "u", "t", "o", "m", "e"]
  // /*
  // Positive → change/swap the order
  // Negative → keep the order

  // 0.3  → positive → swap
  // -0.3 → negative → keep

  // */
  //     .join("");

  //   //combines them into one string
  //   //"prcutome"

  //   /*
  // split → break word apart
  // sort → rearrange characters
  // join → put them back together
  //   */
  //   console.log(`Unscramble  this word: ${scrambled}`);

  //   let guess = "";

  //   while (guess !== word) {

  //     guess = readlineSync.question(`Your answer: `).toLowerCase();

  //     if (guess === word) {
  //       console.log(`Correct`);
  //     } else {
  //       console.log(`Try again!`);
  //     }
  //   }

  //ex. 4: rock, paper, scissors (best of 3)
//   const readlineSync = require("readline-sync");

//   let playerWins = 0;
//   let computerWins = 0;
//   let choices = ["rock", "paper", "scissors"];

//   while (playerWins < 2 && computerWins < 2) {
//     let playerChoice = readlineSync
//       .question("Choose: rock, paper, or scissors: ")
//       .toLowerCase();
//     let computerChoice = choices[Math.floor(Math.random() * 3)];

//     console.log(`You: ${playerChoice}, Computer: ${computerChoice}`);

//     if (playerChoice === computerChoice) {
//       console.log("It's a tie!");
//     } else if (
//       (playerChoice === "rock" && computerChoice === "scissors") ||
//       (playerChoice === "paper" && computerChoice === "rock") ||
//       (playerChoice === "scissors" && computerChoice === "paper")
//     ) {
//       playerWins++;
//       console.log(
//         `You win this round! Score: You ${playerWins} - ${computerWins} Computer`,
//       );
//     } else {
//       computerWins++;
//       console.log(
//         `Computer wins this round! Score:${playerWins} - ${computerWins} Computer`,
//       );
//     }
//   }

//   if (playerWins > computerWins) {
//     console.log(`You won the game!`);
//   } else {
//     console.log(`Computer won the game!`);
//   }

//ex. 5: simple quiz game
 const readlineSync = require("readline-sync");
let questions = [
{ q: "What is 5 + 3?", a: "8" },
{ q: "Capital of France?", a: "paris" },
{ q: "How many days in a week?", a: "7" }
];

let score = 0;

for (let item of questions) {
    let answer =  readlineSync.question(item.q).toLowerCase();


    if (answer === item.a.toLowerCase()) {
        console.log("Correct!");
        score++;
    } else {
        console.log(`Wrong! The answer was ${item.a}`);
        
    }
}
console.log(`Final Score: ${score}/${questions.length}`);

}
