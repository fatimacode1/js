//prob - 1
{

    let firstName = "Barbie";
    let age = 20;
    let isStudent = true;
    let favColor = "Pink";
    let numOfSiblings = 3;

//prob - 2

console.log(typeof firstName);
console.log(typeof age);
console.log(typeof isStudent);
console.log(typeof favColor);
console.log(typeof numOfSiblings);
}


//prob - 3
{
let score;
console.log(score); //undefined
console.log(typeof score); //undefined
let winner = null; 
console.log(winner); //null
console.log(typeof winner); //object

//undefined - variable exists but no value has been assigned to it yet
//null - inentional absence of value
}

//prob - 4
{
    let firstName = "Barbie";
    let lastName = "Robertz";
    let fullName = `${firstName} ${lastName}`;
    console.log(fullName);
    
}

//prob 5
{
    let a = "5";
    let b = 3;
    let result = a + b;
    console.log(result); //53
    console.log(typeof result); //string
    
    //with +, if one value is a string, JS converts the other value to a string
    //+ is special because it can means addition OR string concatenation

}

//prob - 6
{
    let num1 = 45;
    let num2 = 12;
    console.log(num1 + num2);
    console.log(num1 - num2);
    console.log(num1 * num2);
    console.log(num1 / num2);
    console.log(num1 % num2);  
}

//prob - 7
{
    let Celsius = 25;
    let Fahrenheit = (Celsius * 9/5) + 32;
    console.log(`${Celsius} is equal to ${Fahrenheit}`);
    
}

//prob - 8
{
    let radius = 7;
    let circumference = 2 * Math.PI * radius;
    let area = Math.PI * radius * radius;
    
    console.log(circumference.toFixed(2));
    console.log(area.toFixed(2));  
}

//prob - 9

{
 let notebooks = 45 * 3;
 let pens = 15 * 2;
 let backpack = 850 * 1;

 let subTotal = notebooks + pens + backpack;
 let discount = subTotal * 0.10;
 let finalTotal = subTotal - discount;

  console.log(subTotal);
  console.log(discount);
  console.log(finalTotal);
}

//prob - 10
{
    let num = 17;
    let result;
    if (num % 2 === 0 ) {
       result = "even"
    } else {
        result = "odd";
        
    }
    console.log(result);
    
}

//prob - 11
{
console.log(10+5*2); //20
console.log((10+5)*2); //30
console.log(20/4+3*2); //11
console.log(2**3+5); //13
console.log((8+2) / 5*3); //6
}

//prob - 12
{
    let result = ((10+20) * 5) / 3;
}

//prob - 13
{

    let finalResult = ((15 + 5) * 3 - 10) * 4;
}

//prob - 14
{
    let balance = 5000;

    balance += 15000;
    console.log(balance);
    
    balance -= 8000;
    console.log(balance);

    balance += 5000;
    console.log(balance);

    balance -= 3000;
    console.log(balance);
}

//prob - 15;

{
    let amount = 10000;

    amount *= 1.10;
    console.log(amount);

     amount *= 1.10;
    console.log(amount);

     amount *= 1.10;
    console.log(amount);
}

//prob - 16
{
    let x = 10;
    let y = x++; 
    console.log(x, y); //x = 11, y = 10;

    let a = 10;
    let b = ++a;
    console.log(a, b); //a = 11, b = 11;

//Due to pre-increament and post-increment
//a++ - use -> increase
//--a - increase -> use
    
}

//prob - 17
{
    let countdown = 10;
    console.log(countdown--);   
}

//prob - 18
{
    let num = 5;
    let newNum = num++; //num = 6, newNum = 5;
    newNum = ++num; //num = 7 , newNum = 7;
}

//prob - 19
{
 //NaN
 //typeof NaN is number
}

//prob - 20
{
    let value1 = 100;
    console.log(Number.isNaN(value1));
    let value2 = "test" / 2;
    console.log(Number.isNaN(value2));
    let value3 = 0/0;
    console.log(Number.isNaN(value3));
    let value4 = "123";
    console.log(Number.isNaN(value4));
   
}

//prob - 21
{
    let math = 85;
    let science = 92;
    let english = 78;
    let history = 88;
    let computer = 95;

    let average = (math + science + english + history + computer) / 5;
    console.log(`Your average grade is ${average}`);
    
}

//prob - 22
{
    let currentYear = 2026;
    let birthYear = 2004;
    let age = currentYear - birthYear;
    console.log(`In ${currentYear}, you are ${age} years old`);
    
}

//prob - 23
{
    let a = 10;
    let b = 20;
    
    a = a + b;
    b = a - b;
    a = a - b;

}

//prob - 24
{
let number = 456;

let firstDigit = Math.floor(number / 100);
let secondDigit = Math.floor(number / 10) % 10;
let lastDigit = number % 10;

let sum = firstDigit + secondDigit + lastDigit;

console.log(sum);

}