//.indexOf()

//Finding a substring 
{
    let sentence = "I love JavaScript";
    console.log(sentence.indexOf("love"));
    console.log(sentence.indexOf("Java"));    
    
}

//Case sensitivity
{
    let word = "JavaScript";
    console.log(word.indexOf("java")); //-1
    console.log(word.indexOf("Java")); //0
       
}

//Checking if substring exists
{
    let message = "Welcome to coding";
    if (message.indexOf("coding") !== -1) {
        console.log("Found the word coding!");
        
    }
}

//.slice()

//Using negative indices from end
{
    let lang = "JavaScript";
    console.log(lang.slice(-6));
    console.log(lang.slice(0, -6));
    
    
}

//Getting first and last character
{
    let name = "Barbie";
    console.log(name.slice(0, 1));
    console.log(name.slice(-1));
    
    
}

//Arrays

//Arrays with different data types
{
    let mixed = ["hello", 42, true, 3.14];
    console.log(mixed);
    
}

//Changing an element
{
    let fruits = ["mango", "apple", "litchi"];
    fruits[0] = "banana";
    console.log(fruits);
    
}

//Changing last element
{
    let colors = ["red", "blue", "green", "yellow"];
    colors[colors.length - 1] = "pink";
console.log(colors);
}

//Arrays vs Strings mutability
{
    let arr = ["a", "b", "c"];
    arr[0] = "z";
    console.log(arr);

    let str = "abc";
    str[0] = "z";
    console.log(str); //doesn't work
    
    
}

//Upadting based on a condition 
{
    let scores = [85,90, 75, 88];
    if (scores[2] < 80) {
        scores[2] = 80;
    }
    console.log(scores);
    
}

//Basic Array Methods

{
    /*
    .push()
    .pop()
    .unshift()
    .shift()
    */
}

//Search and Merge Methods
{
    /*
    .indexOf()
    .includes()
    .concat()
    .reverse()
    
    */
}

//.splice()
{
//Inserting elements
let months = ["Jan", "Mar", "Apr"];
months.splice(1,0, "Feb");
console.log(months);

//Removing elements
let colors = ["red", "green", "blue", "yellow"];
colors.splice(2,1);
console.log(colors);


//Replacing elements
let fruits = ["apple", "banana", "mango"];
fruits.splice(1, 1, "orange");
console.log(fruits);

//Removing and adding multiple elements
let numbers = [1, 2, 5, 6];
numbers.splice(2,0, 3,4);
console.log(numbers);


//Removing multiple elements
let items = ["a", "b", "c", "d", "e"];
items.splice(1, 3);
console.log(items);

 
}

//Nested Arrays
{
    let grid = [[1,2], [3,4]];
    console.log(grid[0]);
    console.log(grid[0][1]);
    
    
}

//.sort()
{

//Sorting strings alphabetically
    let fruits = ["banana", "apple", "cherry", "mango"];
    fruits.sort();
    console.log(fruits);
    

//Sorting numbers | undexpected behaviour
let numbers = [10, 5, 40, 1000];
numbers.sort()
console.log(numbers);


//Sorting numbers correctly with compare function
let scores = [85, 92, 78, 95, 88];
scores.sort((a , b) => a - b);
console.log(scores);

//Sorting in descending order
let values = [3,1,4,1,5,9,2,6];
values.sort((a, b) => b - a);
console.log(values);

//Case-insensitive string sorting
let names = ["barbie", "skipper", "staicy", "chelsea"];
names.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
console.log(names);


}

//.join()
{
    let colors = ["red", "green", "blue"];
    let result = colors.join();
    console.log(result);

    let date = ["2026", "09", "22"];
    let formatted = date.join("-");
    console.log(formatted);
    
    
}

//.toString()
{
    let numbers = [1, 2, 3, 4, 5];
    console.log(numbers.toString());
    
    // let str = numbers.toString();
    // console.log(str);
    // console.log(typeof str);
    
//toString vs join
let fruits = ["apple", "banana", "mango"];
console.log(fruits.toString());
console.log(fruits.join());
//same result


}

//Creating Arrays with Array() constructor
{
    //Creating empty array
    let arr1 = new Array();
    console.log(arr1);
    console.log(arr1.length);
    
    //Creating array with specific length
    let arr2 = new Array(5);
    console.log(arr2);
    console.log(arr2.length);

    //Creating array with elements
    let arr3 = new Array(1, 2, 3, 4);
    console.log(arr3);

    //Array literal vs constructor
    let literal = [5];
    let constructor = new Array(5);
    console.log(literal);
    console.log(constructor);
    
    //Filling array after creation
    let numbers = new Array(3);
    numbers[0] = 10;
    numbers[1] = 20;
    numbers[2] = 30;
    console.log(numbers);
    
}

//Array.isArray()
{
    let arr = [1, 2, 3];
    console.log(Array.isArray(arr));
    console.log(typeof arr);
    
    
}

//Array length
{

    let data = [1, 2, 3, 4, 5];
    data.length = 0;
    console.log(data);
    
}