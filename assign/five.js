// //1
// {
//   for (let i = 1; i <= 10; i++) {
//     console.log(i);
//   }
// }

// //2
// {
//   for (let i = 2; i <= 20; i += 2) {
//     console.log(i);
//   }
// }

// //3
// {
//   for (let i = 10; i >= 1; i--) {
//     console.log(i);
//   }
//   console.log("Blast off!");
// }
// //------------------
// //4
// {
//   for (let i = 1; i <= 10; i++) {
//     console.log(`7 x ${i} = ${7 * i}`);
//   }
// }

// //5
// {
//   let sum = 0; //0

//   for (let i = 1; i <= 20; i++) {
//     sum += i;
//   }
//   console.log(sum);
// }

// //6
// {
//   for (let i = 1; i <= 4; i++) {
//     let line = "";
//     for (let j = 1; j <= 4; j++) {
//       line += j + " ";
//     }
//     console.log(line);
//   }
// }

// //7
// {
//   for (let row = 1; row <= 5; row++) {
//     let line = "";
//     for (let col = 1; col <= row; col++) {
//       line += "* ";
//     }
//     console.log(line);
//   }
// }

// //8
// {
//   let i = 1;
//   while (i <= 5) {
//     console.log(i);
//     i++;
//   }
// }

// //9
// {
//   let i = 1;
//   let sum = 0;
//   while (i <= 50) {
//     sum += i;
//     console.log(sum);
//     i++;
//   }
//   console.log(sum);
// }

// //-------------------------------------

// //1

// {
//   for (let i = 1; i <= 5; i++) {
//     console.log(i);
//   }
// }

// //2
// {
//   for (let i = 2; i <= 20; i += 2) {
//     console.log(i);
//   }
// }

// //3
// {
//   for (let i = 10; i >= 1; i--) {
//     console.log(i);
//   }
//   console.log("Blast off");
// }

// //4
// {
//   for (let i = 1; i <= 10; i++) {
//     console.log(`7 x ${i} = ${7 * i}`);
//   }
// }

// //5
// {
//   let sum = 0;
//   for (let i = 1; i <= 20; i++) {
//     sum += i;

//   }
//    console.log(sum);
// }

// //6
// {
//   for (let i = 1; i <= 4; i++) {
//     let line = "";
//     for (let j = 1; j <= 4; j++) {
//       line += j + " ";

//     }
//     console.log(line);

//   }
//  }

// //7
// {
//   for (let i = 1; i <= 5; i++) {
//     let line = "";
//     for (let j = 1; j <= i; j++) {
//       line += "* ";
//     }
//     console.log(line);

//   }
// }

// //8
// {
//   let i = 1;
//   while (i <= 15) {
//     console.log(i);
//     i++

//   }
// }

// //9
// {
//   let sum = 0;
//   let num = 1;
//   let count = 0;

//   while (sum < 50) {
//    sum += num;
//    //sum = sum + num;
//    count++;
//    num++;
// }

// console.log(`Final sum: ${sum}`);
// console.log(`Numbers added: ${count}`);

// }

//10

// {

//   const readlineSync = require("readline-sync");

// let choice;
//   do {
// menu = readlineSync.question("Type hello or exit: ");

// if (choice === "hello") {
//   console.log("Hello to you too!");
// }
//   } while (choice !== "exit");
//     console.log("Goodbye");

// }

//11
// {
//   for (let i = 1; i <= 100; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//       console.log(`First number divisible by both 3 and 5: ${i}`);
//       break;
//     }
//   }
// }

// //12
// {
//   for (let i = 1; i <= 10; i++) {
//     if (i === 3 || i === 6 || i === 9) {
//       continue;
//     }

//     console.log(i);
//   }
// }

// //13
// {
//   let cities = ["Mumbai", "Delhi", "Bangalore", "Chennai", "Kolkata"];

//   for (let i = 0; i < cities.length; i++) {
//     console.log(`${i}: ${cities[i]}`);
//   }
// }

// //14
// {
//   let numbers = [10, 25, 30, 45, 20];

//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
//   }
//   console.log(`Sum: ${sum}`);
// }

// //15
// {
//   let scores = [78, 92, 85, 99, 88, 76];

//   let maxScore = scores[0];

//   for (let i = 0; i <= scores.length; i++) {
//     if (scores[i] > maxScore) {
//       maxScore = scores[i];
//     }
//   }
//   console.log(maxScore);
// }

//16
{
  let teams = [
    ["Alice", "Bob"],
    ["Charlie", "David"],
    ["Eve", "Frank"],
  ];

  for (let i = 0; i < teams.length; i++) {
    for (let j = 0; j < teams[i].length; j++) {
      console.log(teams[i][j]);

      //teams.length → number of teams = 3
      //teams[i].length → number of players in the current team = 2
    }
  }
}
//17
{
  let fruits = ["Apple", "Banana", "Orange", "Mango"];

  for (let fruit of fruits) {
    console.log(fruit);
  }
}

//18
{
  let word = "LOOP";
  for (let char of word) {
    console.log(char);
  }
}

//19
{
  let sentence = "Javascript is awesome";
  let vowels = "aeiouAEIOU";
  let count = 0;

  for (let char of sentence) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  console.log(`Number of vowels: ${count}`);
}

//20
{
  for (let i = 1; i <= 30; i++) {
    if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else {
      console.log(i);
    }
  }
}

//21
{
  let original = [10, 20, 30, 40, 50];
  let reverse = [];

  for (let i = original.length - 1; i >= 0; i--) {
    reverse.push(original[i]);
  }
  console.log(reverse);
}
