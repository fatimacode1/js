//1
{
    let driverAge = 23;
    if (driverAge >= 18) {
        console.log("Eligible for license");     
    }
}

//2
{
    let temperature = 35;
    if (temperature > 30) {
        console.log("It's hot outside!");
    }
}

//3
{
    let password = "Secure1234";
    if (password.length >= 8) {
        console.log("Strong password");
        
    }
}

//4
{
    let score = 75;

    if (score >= 90){
        console.log("Grade: A+");
        
    } else if (score >= 75) {
        console.log("Grade: A");
        
    } else if (score >= 60) {
        console.log("Grade: B");
        
    } else if (score >= 33) {
        console.log("Grade: C");
        
    }
}

//5 
{
    let speed = 85;

    if (speed > 100) {
        console.log("Heavy fine");
        
    } else if (speed > 80) {
        console.log("Warning");
        
    } else if (speed > 60) {
        console.log("Normal speed");
        
    }
}

//6
{
    let age = 35;

    if (age >= 60) {
        console.log("Senior citizen");
        
    } else if (age >= 18) {
        console.log("Adult");
        
    } else if (age >= 13) {
        console.log("Teenager");
        
    }
}

//7
{
let num = 50;

if (num > 10) {
    console.log("Greater than 10"); 
    
} else if (num > 30) {
    console.log("Greater than 30");
    
} else if (num > 40) {
    console.log("Greater than 40");
    
}
}

//8
{
let age = 16;
if (age >= 18) {
    console.log("Can vote");
    
} else {
    console.log("Cannot vote");
    
}
}

//9
{
    let num = 7;

    if (num % 2 === 0) {
        console.log("even");
        
    } else {
        console.log("odd");
        
    }
}

//10
{
    let temp = 15;

    if (temp > 30) {
        console.log("Hot");
        
    } else if (temp > 20) {
        console.log("Warm");
        
    } else if (temp > 10) {
        console.log("Cool");
        
    } else {
        console.log("Cold");
        
    }
}

//11
{
    let username = "admin";
    let password = "1234";

    if (username === "admin" && password === "1234") {
        console.log("Login sucessful");
        
    } else {
        console.log("Invalid credentials");
        
    }
}

//12
{
    let marks = 85;

    if (marks >= 33) {
    if (marks >= 80) {
        console.log("Outstanding");
        
    } else {
        console.log("Pass");
        
    }
    } else {
        console.log("Better luck next time!");
        
    }
}

//13
{
    let age = 25;
    let isStudent = true;

    if (age < 18) {
        console.log("Child ticket: $5");
        
    } else {
        if (isStudent) {
            console.log("Student ticket: $8");
            
        } else {
            console.log("Adult ticket: $12");
            
        }
    }
}

//14
{

    let num = 15;
if (num > 0) {
    if (num % 2 === 0) {
        console.log("Positive even number");
        
    } else {
    console.log("Positive odd number");
    
    }
} else if (num < 0) {
    console.log("Negative number");
    
} else {
    console.log("Zero");
    
}

}

//15
{
    let age = 25;
    let hasLicense = true;

    if (age >= 18 && hasLicense) {
        console.log("Can drive");
        
    } else {
        console.log("Cannot drive");
        
    }
}

//16
{
    let score = 85;

    if (score >= 80 && score <= 100) {
        console.log("Grade A");
        
    }
}

//17
{
    let username = "admin";
    let password = "secret";

    if (username === "admin" && password === "secret") {
        console.log("Access granted");
        
    } else {
        console.log("Access denied");
        
    }
}

//18 
{
    let isWeekend = true;
    let isSunny = true;

    if (isWeekend && isSunny) {
        console.log("Let's go to the beach");
        
    }
}

//19
{
    let day = "Saturday";

    if (day === "Saturday" || day === "Sunday") {
        console.log("It's the weekend!");
        
    }
}

//20 
{
    let age = 65;

    if (age < 5 || age > 60) {
        console.log("Free admission");
        
    } else {
        console.log("Regular price");
        
    }
}

//21
{
    let isHoliday = false;
    let isBirthday = true;

    if (isHoliday || isBirthday) {
        console.log("Day off!");
        
    }
}

//22
{
    let isEmergency = true;
    let isVIP = false;

    if (isEmergency || isVIP) {
        console.log("Priority access");
        
    }
}

//23
{
    let isLoggedIn = false;

    if (!isLoggedIn) {
        console.log("Please log in");
        
    }
}

//24
{
    let isWeekend = false;

    if (!isWeekend) {
        console.log("Time to work!");
        
    }
}

//25
{
    let str = "absbsbssj";

    if((str[0] === 'A'||  str[0] === 'a') && str.length > 5) {
        console.log("Golden string");
        
    } else {
        console.log("Not a golden string");
        
    }
}

//26
{
    let num1 = 5
    let num2 = 3
    let num3 = 9;

    let largest;

    if (num1 >= num2 && num1 >= num3) {
        largest = num1; 
    } else if (num2 >= num1 && num2 >= num3) {
        largest = num2;
    } else {
        largest = num3;
    }
    console.log(largest);
}

//27
{
    let total = 67;
    if (total > 100) {
        let discount = total * 0.2;
        total = total - discount;
        console.log(total);

    } else if (total > 50) {
        let discount = total * 0.1;
        total = total - discount;   
        console.log(total);
         
    } else {
console.log(total);

    }
}

//28
{
    let year = 2020;

    if ((year % 4 === 0 && year % 100 !==0) || (year % 400 === 0)) {
        console.log(`${year} is a leap year`);
        
    } else {
        console.log(`${year} is not a leap year`);
        
    }
}