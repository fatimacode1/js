//Control flow with loops

//for loop

// for (initialization; condition; updation){...}
{
    for (let i = 1; i <= 5; i++) {
        console.log(i);
        
    }
}

//for loop, logic examples

//odd numbers (1 to 15)
{
    for (let i = 1; i <= 15; i +=2) {
        console.log(i);
        
    }

//even numbers (2 to 10)
for (let i = 2; i <= 10; i +=2) {
    console.log(i);
    
}


//multiplication table of 5
for (let i = 5; i <= 50; i+= 5) {
    console.log(i);
    //i = i + 5;
}
}

//infinite loops
{
    //for (let i = 1; i >= 0; i++)
}

//nested loops
{
    for (let i = 1; i <= 3; i++){
        console.log("Outer", i);

        for (let j = 1; j <= 3; j++) {
            console.log("Inner", j);
            
        }
        
    }
}

//while loop

//while (condition) {...}
{
let i = 1;

while (i <= 5) {
    console.log(i);
    i++;
    
}

let j = 1;
while (j <= 5) {
    console.log("Hi", j);
    j++;
    
}
console.log(j);


//decrement 

// let k = 5;

// while (k >= 5) {
//     console.log("Hola", k);
//     k--;
let k = 5;

while (k >= 1) {
    console.log("Hola", k);
    k--;    
}

}


//do...while loop

//do {...} while (condition);
{
let i = 0;

do {
    console.log(i);
    i++;
    
} while (i < 5);

let j = 1; 

do {
    console.log("j", j);
    j++;
    

} while (i < 5)

    let k = 10;

    do {
        console.log("Hello", k);
        k++;
        
    } while (k <= 5)

//runs at least once, even if i starts > 5
}

//loop control: break and continue

//break -> completely stop the loop
//continue -> skip the current iteration and move to the next one
{
    //break, exit the loop

    for (let i = 0; i < 10; i++) {
        if (i === 5) {
            break; 
        }
        console.log("Cai", i);
        
    }
    

//continue, skip iteration

for (let i = 0; i < 5; i++) {
    if (i === 3) {
        continue; 
    }
    console.log(i);
    
}
}
//alt+shift+down arrow key
//DRY - Don't repeat yourself

//while loop -> check for the conditions -> execute the block
//do while loop -> execute the block -> check for the conditions

//break -> Stops the entire loop
//continue -> Skips one iteration

//Iterating over arrays
{
    let cities = ["London", "Paris", "Tokyo", "New York"];

    for (let i = 0; i < cities.length; i++) {
        console.log(i, cities[i]);
        
    }
}

//nested arrays with loops
{
    let teams = [
        ["PlayerA", "PlayerB"],
        ["PlayerC", "PlayerD"]
    ];
console.log(teams[0]);
console.log(teams[1]);


for (let i = 0; i < teams.length; i++) {
    for (let j = 0; j < teams[i].length; j++) {
        console.log(teams[i][j]);
        
    }
}
}

//for...of loop
//for (element of collection) {...}
{
let colors = ["Red", "Blue", "Green"];

for (let color of colors) {
    console.log(color);
    
}

//for...of loop with strings
let language = "JavaScript";

for (let char of language) {
    console.log(char);
    
}

//nested for...of loops
let teams = [
    ["Alice", "Bob"],
    ["Charlie", "David"]
];

for (let team of teams) {
    for (let player of team) {
        console.log(player);
        
    }
}
}

//choosing the right loop
{
    //for
    //when uk the exact number of iterations
    //example: counting from 1 to 10


    //while
    //when iterations depend on a condition
    //user input validation

    //do...while 
    //when u need at least one execution
    //example: menu systems, game loops

    //for...of 
    //when iterating through arrays or strings
    //example: processing arrays elements

}

/*for → when I know how many times I need to iterate.
while → when I don't know how many iterations I'll need, and I want to keep looping while a condition is true.
do...while → when I want the code to run at least once, then check the condition.
for...of → when I want to loop through each element/value in an array or string.*/

//practical application: guessing game
{
    let movie = "Inception";
    let guess = "Titanic";

    while ((guess != movie) && (guess !== "quit")) {
        console.log("wrong!, try again");

        guess = "Inception";
    }
    if (guess === movie) {
        console.log("correct");
        
    }
}