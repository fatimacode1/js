//prob - 1
{
    /*
    a) valid
    b) invalid
    c) valid
   d) invalid
   e) valid
   f) invalid
   g) valid
   h) invalid
    */
}

//prob - 2
{
    /*
    let userName = "Alice"
    ler firstPrize = 1000;
    let totalCost = 250;
    let userAge = 25;
    
    */
}

//prob - 3
{
    /*
    let email = "john@example.com";
    let isLoggedIn = true;
    const maximumAttempts = 3;
     let finalGrade = 85;
     let productPrice = 99.99;
    */
}

//prob - 4
{
    let isRaining = false;
    let isAdult = true;
    let isMatch = false;

}

//prob - 5
{
    let x = 10 //number
    x = "Hello" //string
    x = true //boolean
    console.log(typeof x);
    
}

//prob - 6
{
    let language = "JavaScript";
    console.log(language[0]); //J
    console.log(language[4]); //S
    console.log(language[language.length-1]); //t
    console.log(language.length-1); //9
    console.log(language.length); //10
    
    
    
}

//prob - 7
{
    let message1 = "Hi";
    console.log(message1);
    
    let message2 = 'It\'s a sunny day';
    console.log(message2);
    
    let message3 = "He said, \"Hello\"!";
    console.log(message3);
    
}

//prob - 8
{
    let firstName = "John";
    let lastName = "Doe";

    let fullName = firstName + " " + lastName;
    console.log(fullName);
    
    let greeting = "Hello, " + fullName + "!";
    console.log(greeting);
    
    let age = 25;

    let info = firstName + " is " + age + " years old";
    console.log(info);
    
}

//prob - 9
{
let name = "Alice";
let score = 95;
let message = `Student ${name} scored ${score} points`;
console.log(message);


let product = "Laptop";
let price = 999;
let quantity = 2;
let total = price * quantity;

let receipt = `Item: ${product}, Quantity: ${quantity}, Total: $${total}`;
console.log(receipt);
}

//prob - 10
{
let cityName = "Paris";
let temperature = 25;

let weather = `The temperature in ${cityName} is ${temperature} degrees`;
console.log(weather);

let hoursOfDay = 14;
let userName = "Bob";

let greeting = `Good afternoon, ${userName}! It's 14:00`;
console.log(greeting);

}

//prob - 11
{
    let score;
    console.log(score); //undefined

    let winner = null;
    console.log(winner); //null

    let user = { name: "Alice"};
    console.log(user.age); //undefined 
}

//prob = 12
{
    console.log(10 > 5); //true
    console.log(3 < 2); //false
    console.log(5 >= 5); //true
    console.log(8 <= 10); //true
    console.log(7 != 7); //false
    console.log(15 > 20 ); //false   
}


//prob - 13
{
    let age = 18;
    console.log(age >= 18);

    let temperature = 30;
    console.log(temperature > 25);

    let score = 75;
    console.log(score < 60);  
}

//prob - 14;
{
    console.log(5 == 5); //true
    console.log(5 === 5); //true
    console.log(5 == "5"); //true
    console.log(5 === "5"); //false
    console.log(true == 1); //true
    console.log(true === 1); //false
    console.log(0 == false); //true
    console.log(0 === false); //false    
    
}

//prob - 15
{
    let userInput = "10";
    if (userInput === 10) {
        console.log("Input is 10");
        
    }
}

//prob - 16
{
// console.log('a' > 'A');
// console.log('b' < 'c');
// console.log('apple' < 'banana');
// console.log('Z' < 'a'); 
// console.log("10" < "2");  
}

//prob - 17
{
    let str1 = "Hello";
    let str2 = "HELLO";
    console.log(str1.toLowerCase() == str2.toLowerCase());    
}

//prob - 18;
{
    let userName = "Sarah";
    let hour = 9; 
    let greeting = `Good morning, ${userName}`;
    console.log(greeting);
    
}

//prob - 19
{
    let userAge = 16;
    let minimumAge = 18;

    let isOldEnough = userAge >= minimumAge;

    console.log(isOldEnough);
    
}

//prob - 20
{
    let email = "alice@example.com";

    let firstChar = email[0];

    let isValid = firstChar >= "a" && firstChar <= "z" ;

    console.log(isValid);
    
}

//prob - 21
{
    let productName = "Wireless Mouse";
    let productPrice = 29.99;
    let inStock = true;

    let description = `Product: ${productName} | Price: $${productPrice} | In Stock: ${inStock}`;

    console.log(description);
    
}

//prob - 22
{
    let firstName = "John";
    let middleName = "Robert";
    let lastName = "Smith";

    let initials = firstName[0] + "." + middleName[0] + "." + lastName[0] + ".";
console.log(initials);

}

//prob - 23
{
    let firstPrize = "Gold";
    let userName = "Alice";
    let totalCost = 100;

let age = 19;

    if (age >= 18) {
        console.log("You can vote");
        
    }
let message = 'It\'s a beautiful day';
console.log(message);

}

//prob - 24
{
    let userInput = "25";

    if (userInput === "25") {
        console.log("Input is correct");
        
    } else {
        console.log("Input is incorrect");
        
    }
}

//prob - 25 
{
    let password = "Pass123";

    let isLongEnough = password.length >= 6;

    let startsWithUppercase = password[0] >= "A" && password[0] <= "Z";

    let endsWithNumber = password[password.length-1] >= "0" && password[password.length-1] <= "9";

    console.log(isLongEnough);
    console.log(startsWithUppercase);
    console.log(endsWithNumber);  
}
