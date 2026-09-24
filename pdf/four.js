//strings are immutable
{
  let username = "   coding_wizard      ";
  let cleanName = username.trim();
  console.log(cleanName);
}

{
  let msg = "JavaScript is Fun";
  console.log(msg.toUpperCase());
  console.log(msg.toLowerCase());
}

//toUpperCase - function
//toUpperCase() - call/inovoke the function
// - function performs its operation
// - returns the result

//String Methods with Arguments
{
  let str = "Hello World";

  console.log(str.indexOf("W"));
  console.log(str.indexOf("z"));
}

//Method Chaining
{
  let msg = "     hello   ";
  let result = msg.trim().toUpperCase();
  console.log(result);
}

//Slicing Strings
{
  let word = "Mountains";
  //start -> stop BEFORE end
  console.log(word.slice(0, 5));
  //start -> continue until the last letter
  console.log(word.slice(5));
}

//Replacing Substrings
{
  let fruit = "I love apple pie and apple juice";
  console.log(fruit.replace("apple", "cherry"));
}

//Arrays
{
  let colors = ["red", "green", "blue"];
  console.log(colors[0]);
}

//Arrays are Mutable
{
  let fruits = ["mango", "apple", "litchi"];
  console.log((fruits[0] = "banana"));
}

//Basic Array Methods
/* 
.push()
.pop()
.unshift()
.shift()
*/

//Search and Merge Methods
/*
.indexOf()
.includes()
.concat()
.reverse()
*/

//.splice()
{
  let months = ["JAN", "MAR", "APR"];
  let removed = months.splice(1, 0, "FEB");
  console.log(months);
}

//Array References
{
  console.log([1] == [1]);

  let arr1 = [1, 2, 3];
  let arr2 = arr1;
  arr2[0] = 90;

  console.log(arr1);
  console.log(arr2);
}

//Nested Arrays
{
  let grid = [
    [1, 2],
    [3, 4],
  ];
  console.log(grid[0][1]);
  console.log(grid[1][0]);
}
//grid[row][column]

//primitive = the actual value itself
/* 
let a = 10;
let b = 10;

console.log(a === b); // true
*/
//non-primitive = objects which contain multiple values or more complex data
/*
let numbers = [1, 2, 3];       // Array
let person = { name: "Omni" }; // Object
*/
