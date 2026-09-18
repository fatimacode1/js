//1
{
  let num = -5;

  if (num > 0) {
    console.log("Positive");
  } else if (num < 0) {
    console.log("Negative");
  } else if ((num = 0)) {
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
  let marks = 99;

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