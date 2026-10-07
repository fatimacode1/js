//day - 6 | object literals & math object

//object literals are a core structure in js used to store collection of data and more complex entities.

//creating object literals

const person = {
    name: "Fatima",
    age: 23,
    city: "Hyderabad"
};
console.log(person);

//Geographic coordinates 
let location = {
    latitude: "28.7041 N",
    longitude: "77.1025 E"
};
console.log(location);


//Student profile
const  studentProfile = {
    fullName: "Alex Rivera",
    age: 21,
    gpa: 3.8,
    city: "Seattle"
};
console.log(studentProfile);

const post = {
    username: "fatima_code",
    content: "Learning JavaScript",
    likes: 6767,
    reposts: 89,
    tags: ["javascript", "coding"]

};
console.log(post);


//accessing object values
//object.key
//object["key"]
//JS converts keys to strings automatically

const student = {
    name: "Alex",
    age: 21,
    city: "Seattle"

};

//dot notation
console.log(student.name);
console.log(student.age);

//square bracket notation
console.log(student["city"]);
console.log(student["age"]);
{
let student = {
    name: "Alex",
    age: 21,
    city: "Dubai"
};

//updating existing property
student.city = "Hyderabad";
student.age = 22;

//add new properties 
student.gender = "female";
student.grade = "A+";

console.log(student);


};

//deleting object properties
{
    let student = {
        name: "asma",
        age: 22,
        marks: 97,
        city: "hyderabad"
    };

//deleting a property
delete student.marks;

console.log(student);

//check if property exists
console.log(student.marks);
}

//object of objects (nested)

const userDatabase = {
    user1: {
        grade: "A+",
        city: "Austin"
    },
    user2: {
        grade: "B",
        city: "Denver"
    },

    user3: {
        grade: "A+",
        city: "Boston"
    }
};

//accessing nested values
console.log(userDatabase.user1.grade);
console.log(userDatabase.user2.city);


//array of objects
//[{}]
const courseList = [
{name: "Math", id: 101, credits: 3},
{name: "Physics", id: 102, credits: 4}, 
{name: "Chemistry", id: 103, credits: 5}
];

//accessing elements
console.log(courseList[0].name);
console.log(courseList[1].credits);
console.log(courseList[2].id);

//number of courses
console.log(courseList.length);


//math object
//built-in mathematical operations

//math objects
//Math.method()
//these are properties, not methods 

//mathematical constants
console.log(Math.PI);
console.log(Math.E);

//using in calculations
let radius = 5;
let circumference = 2 * Math.PI * radius;
console.log(circumference);

let area = Math.PI * radius * radius;
console.log(area);

//common math methods

//math.abs(n)
//returns absolute postivie value
console.log(Math.abs(-5));

//math.pow(a, b)
//returns a raised to power b
console.log(Math.pow(2, 3));

//Math.floor(n)
//rounds down to nearest integer
console.log(Math.floor(4.9));

//Math.ceil(n)
//rounds up to nearest integer
console.log(Math.ceil(4.9));

//Math.random()
//random decimal between 0 and 1
console.log(Math.random());

//math methods in action

//absolute value
console.log(Math.abs(-42));
console.log(Math.abs(15));

//power exponentiation
console.log(Math.pow(2, 3));
console.log(Math.pow(5, 2));

//floor (round down)
console.log(Math.floor(4, 9));
console.log(Math.floor(4.1));


//ceil (round up)
console.log(Math.ceil(4, 1));
console.log(Math.ceil(4, 9));

//random (0 to 1)
console.log(Math.random());


//Math.random() - random numbers
//returns 0 <= random < 1
//never returns exactly 1
//different every time
console.log(Math.random());
console.log(Math.random());

//random 0 - 9
let digit = Math.floor(Math.random() * 10);
console.log(digit);

//random 1 - 10
let num = Math.floor(Math.random() * 10) + 1;
console.log(num);

//random 1 - 100
let score = Math.floor(Math.random() * 100) + 1;

//random integer formula
//Math.floor(Math.random() * (max - min + 1)) + min

//(max - min + 1) = how many numbers are in my range?
//+ min = where should my range start?

//generating random integers

//random integer from 1 to 10
let step1 = Math.random();
console.log(step1);

let step2 = step1 * 10;
console.log(step2);

let step3 = Math.floor(step2);
console.log(step3);

let step4 = step3 + 1;
console.log(step4);


//simplified one line
let random = Math.floor(Math.random() * 10) + 1;
console.log(random);

//random numbers practice

//1 - 100
console.log(Math.floor(Math.random() * 100) +1);

//1 - 5
console.log(Math.floor(Math.random() * 5) + 1);

//50 to 100
console.log(Math.floor(Math.random() * 51) + 50);

//-10 to 10
console.log(Math.floor(Math.random() * 21) - 10);

//dice roll simulator
let dice1 = Math.floor(Math.random() * 6) + 1;
let dice2 = Math.floor(Math.random() * 6) + 1;
let total =  dice1 + dice2;

console.log(`Dice 1: ${dice1}`);
console.log(`Dice 2: ${dice2}`)
console.log(`Total: ${total}`);

//Math.max() & Math.min()

//Math.max()
console.log(Math.max(1, 5, 3));
console.log(Math.max(10, 20, 15));
console.log(Math.max(-1, -5, -3));


//Math.min()
console.log(Math.min(1, 5, 3));
console.log(Math.min(10, 20, 15));

//real use: find highest score 
let scores = [85, 92, 78, 95];
let highest = Math.max(...scores);
console.log(highest);








