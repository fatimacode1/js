//1
{
  let car = {
    brand: "Tesla",
    model: "Model 3",
    year: 2024,
    color: "white",
  };
  console.log(car.brand);
  console.log(car.year);
}

//2
{
  let movie = {
    title: "Inception",
    director: "Christopher Nolan",
    year: 2010,
    rating: 8.8,
  };
  console.log(movie["director"]);
  console.log(movie.rating);
}

//3
{
  let student = {
    name: "John",
    age: 20,
    grade: "B",
  };
  student.grade = "A";
  student.city = "Mumbai";
  delete student.age;
  console.log(student);
}

//4
{
  let product = {
    name: "Laptop",
    price: 50000,
  };

  product.price = 45000;
  product.brand = "Dell";
  product.inStock = true;
  console.log(product);
}

//5
{
  let classroom = {
    teacher: { name: "Ms. Smith", subject: "Math" },
    student1: { name: "Alice", grade: "A" },
    student2: { name: "Bob", grade: "B+" },
  };

  console.log(classroom.teacher.name);
  console.log(classroom.student1.grade);
  console.log(classroom.student2.name);
}

//6
{
  let company = {
    engineering: { employees: 40, manager: "John" },
    sales: { employees: 25, manager: "Sarah" },
  };

  console.log(company.engineering.employees);
  console.log(company.sales.manager);
  // console.log(company["engineering"]["employees"]);
  // console.log(company["sales"]["manager"]);

  company.engineering.employees = 45;
  console.log(company.engineering.employees);
}

//7
{
  let students = [
    { name: "Emma", age: 20, grade: "A" },
    { name: "Liam", age: 21, grade: "B" },
    { name: "Olivia", age: 19, grade: "A+" },
  ];

  console.log(students[0].name);
  console.log(students[2].grade);
  console.log(students.length);
}

//8
{
  let products = [
    { id: 101, name: "Phone", price: 30000 },
    { id: 102, name: "Laptop", price: 55000 },
    { id: 103, name: "Tablet", price: 20000 },
  ];

  console.log(products[1].name);
  console.log(products[0].price);
  products[3] = { id: 104, name: "Smartwatch", price: 15000 };
  console.log(products.length);  
}

//9
{
    let posts = [
        {username: "tech_guru", content: "Learning JavaScript", likes: 150},
        {username: "code_ninja", content: "Arrays are awesome", likes: 200}
    ];

    console.log(posts[0].content);
    console.log(posts[1].likes);
    posts[0].likes = 175;
    console.log(posts[0].likes);   
}

//10
{
    let courses = [
{name:"JavaScript", duration: 40, instructor: "John"},
{name:"Python", duration: 35, instructor: "Sarah"},
{name:"React", duration: 30, instructor: "Mike"},
    ];
    console.log(courses[1].instructor);
    console.log(courses[0].duration);
    courses[2].duration = 32;
    console.log(courses[0].name);
    console.log(courses[1].name);
    console.log(courses[2].name);   
}

//11
{
    console.log(Math.PI);
    console.log(Math.pow(2, 5));
    console.log(Math.abs(-25));
   
}
//12
{
    console.log(Math.floor(7.8));
    console.log(Math.ceil(7.2));
    console.log(Math.pow(3, 4));
    console.log(Math.abs(-100)); 
}

//13
{
    console.log(Math.random());
    console.log(Math.random() * 10);
    console.log(Math.random() * 100);   
}

//14
{
    let step1 = Math.random();
    let step2 = step1 * 5;
    let step3 = step1 * 20;

    console.log(step1);
    console.log(step2);
    console.log(step3);
    
}

//15
{
    let step1 = Math.random();
    let step2 = step1 * 10;
    let step3 = Math.floor(step2);
    let step4 = step3 + 1;
    console.log(`Step 1: ${step1}`);
    console.log(step2);
    console.log(step3);
    console.log(step4);   
}

//16
{
    let random1 = Math.floor(Math.random() * 10) + 1;
    let random2 = Math.floor(Math.random() * 10) + 1;
    let random3 = Math.floor(Math.random() * 10) + 1;
    console.log(random1);
    console.log(random2);
    console.log(random3);
}

//17
{
  let random1 = Math.floor(Math.random() * 100) + 1;
    console.log(random1);   

      let random2 = Math.floor(Math.random() * 6) + 1;
    console.log(random2); 

      let random3 = Math.floor(Math.random() * 5) + 1;
    console.log(random3); 
}

//18
{
let dice = Math.floor(Math.random() * 6) + 1;
console.log(dice);

let day = Math.floor(Math.random() * 7) + 1;
console.log(day);

let month =  Math.floor(Math.random() * 12) + 1;
console.log(month);

let age = Math.floor(Math.random() * 8) + 18;
console.log(age);
}

//19
{
   let random1 =  Math.floor(Math.random() * (10 - 5 + 1)) + 5;
   console.log(random1);

    let random2 =  Math.floor(Math.random() * (100 - 50 + 1)) + 50;
   console.log(random2);

    let random3 =  Math.floor(Math.random() * (1000 - 1 + 1)) + 1;
   console.log(random3);
   
}

//20
{
    let score = Math.floor(Math.random() * 101);
    console.log(score);
    
     let temp = Math.floor(Math.random() * 51) -10;
    console.log(temp);

     let price = Math.floor(Math.random() * 401) + 100;
    console.log(price);
}

//21
{
    let colors = ["red", "green", "blue", "yellow", "purple"];

    let randomIndex = Math.floor(Math.random() * colors.length);

    console.log(colors[randomIndex]);
}

//22
{
let foods = ["Pizza", "Burger", "Pasta", "Sushi"];

  let randomIndex = Math.floor(Math.random() * foods.length);

  console.log(`Today's special: ${foods[randomIndex]}`);
  

}

//23
{
    let players = [
{ name: "Alice", score: 0 },
{ name: "Bob", score: 0 },
{ name: "Charlie", score: 0 }
];

players[0].score = Math.floor(Math.random() * 6) + 1;
players[1].score = Math.floor(Math.random() * 6) + 1;
players[2].score = Math.floor(Math.random() * 6) + 1;

console.log(players[0].score);
console.log(players[1].score);
console.log(players[2].score);
}

//24
{
    let products = [
{ name: "Phone", price: 20000, discount: 0 },
{ name: "Laptop", price: 50000, discount: 0 }
];

products[0].discount = Math.floor(Math.random() * 16) + 5;
products[1].discount = Math.floor(Math.random() * 16) + 5;

console.log(`Discount percentage for ${products[0].name} is ${products[0].discount}%`);

console.log(`Discount percentage for ${products[1].name} is ${products[1].discount}%`);
}

//25
{
    let game = {
player1: { name: "Alice", health: 100, damage: 0 },
player2: { name: "Bob", health: 100, damage: 0 }
};

game.player1.damage = Math.floor(Math.random() * 21) + 10;
game.player2.damage = Math.floor(Math.random() * 21) + 10;

console.log(`Player 1: ${game.player1.name} with damage ${game.player1.damage}`);

console.log(`Player 2: ${game.player2.name} with damage ${game.player2.damage}`);
}

//26
{
    let weather = {
monday: { temp: 0, humidity: 0 },
tuesday: { temp: 0, humidity: 0 }
};

weather.monday.temp =  Math.floor(Math.random() * 26) + 20;

weather.monday.humidity =  Math.floor(Math.random() * 41) + 40;

weather.tuesday.temp =  Math.floor(Math.random() * 26) + 20;

weather.tuesday.humidity =  Math.floor(Math.random() * 41) + 40;


console.log(weather.monday);
console.log(weather.tuesday);


}

//27
{
    let students = [
{ name: "Emma", math: 0, science: 0 },
{ name: "Liam", math: 0, science: 0 },
{ name: "Olivia", math: 0, science: 0 }
    ];

   for (let i = 0; i < students.length; i++) {
    students[i].math = Math.floor(Math.random() * 41) + 60;
    students[i].science = Math.floor(Math.random() * 41) + 60;
   }
    console.log(students);
    
}

//28
{
let tickets = [];
for (let i = 0; i < 5; i++) {
    let ticketNum = Math.floor(Math.random() 
    * (9999 - 1000 + 1)) + 1000;
    tickets.push(ticketNum);
}
console.log(tickets);

let winningNum = Math.floor(Math.random() 
    * ((9999 - 1000) + 1)) + 1000;

console.log(winningNum);


}