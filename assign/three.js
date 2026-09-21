//1
{
  let num = -5;

  if (num > 0) {
    console.log("Positive");
  } else if (num < 0) {
    console.log("Negative");
  } else if (num === 0) {
    console.log("Zero");
  }
}

//2
{
  let age = 17;

  if (age >= 18) {
    console.log("Eligible for license");
  } else {
    console.log("Not eligible for license");
  }
}

//3
{
  let marks = 85;

  if (marks >= 90) {
    console.log("Grade: A");
  } else if (marks >= 80 && marks <= 89) {
    console.log("Grade: B");
  } else if (marks >= 70 && marks <= 79) {
    console.log("Grade: C");
  } else if (marks >= 60 && marks <= 69) {
    console.log("Grade: D");
  } else if (marks < 60) {
    console.log("Grade: F");
  }
}

//4
{
  let username = "admin";
  let password = "12345";

  if (username === "admin" && password === "12345") {
    console.log("Login sucessful");
  } else {
    console.log("Login failed");
  }
}

//5
{
  let day = "Monday";

  if (day === "Saturday" || day === "Sunday") {
    console.log("Weekend");
  } else {
    console.log("Weekday");
  }
}

//6

{
  let age = 23;

  if (age < 12) {
    console.log("$5");
  } else if (age >= 12 && age < 60) {
    console.log("$8");
  } else if (age >= 60) {
    console.log("$6");
  }
}

//7
{
  let orderTotal = 40;
  let isPremium = true;

  if (orderTotal >= 50 || isPremium) {
    console.log("Free shiping");
  }
}

//8
{
  let marks = 75;

  if (marks >= 33) {
    if (marks >= 80) {
      console.log("Pass with distinction");
    } else {
      console.log("Pass");
    }
  } else {
    console.log("Fail");
  }
}

//9
{
  let temperature = 25;
  let isRaining = false;

  if (temperature > 30) {
    console.log("Hot day");
  } else if (temperature >= 20 && temperature <= 30) {
    if (isRaining) {
      console.log("Pleasant but rainy");
    } else {
      console.log("Perfect weather");
    }
  } else {
    console.log("Cold day");
  }
}

//10
{
  let day = 7;

  switch (day) {
    case 1:
      console.log("Monday");
      break;
    case 2:
      console.log("Tuesday");
      break;
    case 3:
      console.log("Wednesday");
      break;
    case 4:
      console.log("Thursday");
      break;
    case 5:
      console.log("Friday");
      break;
    case 6:
      console.log("Saturday");
      break;
    case 7:
      console.log("Sunday");
      break;
    default: {
      console.log("Invalid day");
    }
  }
}

//11
{
  let signal = "yellow";

  switch (signal) {
    case "red":
      console.log("Stop");
      break;
    case "yellow":
      console.log("Slow down");
      break;
    case "green":
      console.log("Go");
      break;
    default: {
      console.log("Invalid signal");
    }
  }
}

//12
{
  let month = 7;

  switch (month) {
    case 12:
    case 1:
    case 2:
      console.log("Winter");
      break;
    case 3:
    case 4:
    case 5:
      console.log("Spring");
      break;
    case 6:
    case 7:
    case 8:
      console.log("Summer");
      break;
    case 9:
    case 10:
    case 11:
      console.log("Fall");
      break;
    default: {
      console.log("Invalid season");
    }
  }
}

//13
{
  let username = "";

  if (username) {
    console.log("Welcome" + username);
  } else {
    console.log("Please enter a username");
  }
}

//14
{
  let score = 0;

  if (score) {
    console.log(score);
  } else {
    console.log("no score yet");
  }
}

//15
{
  let age = 20;
  let isCitizen = true;
  let hasVoted = false;

  if (age >= 18 && isCitizen && !hasVoted) {
    console.log("You can vote");
  } else {
    console.log("You cannot vote");
  }
}

//16
{
  let total = 120;
  let isPremium = false;
  let discount;

  if (isPremium) {
    discount = total * 0.2;
  } else if (total > 100) {
    discount = total * 0.15;
  } else if (total > 50) {
    discount = total * 0.1;
  } else {
    discount = 0;
  }

  let finalAmount = total - discount;
  console.log(finalAmount);
}

//17
{
  let num = 15;
  if (num % 3 === 0 && num % 5 === 0) {
    console.log("FizzBuzz");
  } else if (num % 3 === 0) {
    console.log("Fizz");
  } else if (num % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(num);
  }
}

//18
{
  //let age = Number(prompt("Enter your age"));
  //if (age >= 18) {
  //alert("You can vote");
  //} else {
  //alert("You cannot vote");
  //}
}

//19
{
  /*
let num1 = Number(prompt("Enter any random number"));
let num2 = Number(prompt("Enter any second random number"));
let operator = Number(prompt("Enter any operator"));

let result;

switch(operator) {
case "+":
result = num1 + num2;
break;

case "-":
result = num1 - num2;
break;

case "*":
  result = num1 * num2;
  break;

case "/":
result = num1 / num2;
break;

default:
  result = "Invalid operator";
}

alert(result);
  */
}

//20
{
  /*let secretNum = 7;

let guessNum = Number(prompt("Guess the secret number"));

if (guessNum === secretNum) {
console.log("Congratulations!")
} else if (guessNum > secretNum) {
 console.log("Too High!")
 } else if (guessNum < secretNum) {
  console.log("Too low!")}
*/
}

//21
{
  let str = "Amazing";

  if ((str[0] === "A" || str[0] === "a") && str.length > 5) {
    console.log("Golden string");
  } else {
    console.log("Not a golden string");
  }
}

//22
{
  let num1 = 45;
  let num2 = 67;
  let num3 = 52;

  if (num1 > num2 && num1 > num3) {
    console.log(num1, "is the largest");
  } else if (num2 > num1 && num2 > num3) {
    console.log(num2, "is the largest");
  } else if (num3 > num1 && num3 > num2) {
    console.log(num3, "is the largest");
  }
}

//23
{
  let quarter = 2;

  switch (quarter) {
    case 1:
      console.log("Jan, Feb, Mar");
      break;
    case 2:
      console.log("Apr, May, Jun");
      break;
    case 3:
      console.log("Jul, Aug, Sep");
      break;
    case 4:
      console.log("Oct, Nov, Dec");
      break;

    default: {
      console.log("Invalid Quarter");
    }
  }
}

//24
{
  // let num = prompt("Enter any number")
  // if (num % 10 === 0) {
  //   alert("Good");
  // } else {
  //   alert("Bad");
  // }
}

//25
{
  let num = 14;

  if (num % 7 === 0 && num % 2 === 0) {
    console.log("Special number");
  } else if (num % 7 === 0 && num % 2 !== 0) {
    console.log("Lucky number");
  } else if (num % 7 !== 0) {
    console.log("Regular number");
  }
}
