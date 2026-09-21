//1
{
    let userInput = "   HeLLO JaVaScRiPt   ";
    let cleanInput = userInput.trim().toLowerCase();
    console.log(userInput);
    console.log(cleanInput);       
}

//2
{
    let email = " USER@EXAMPLE.COM ";
    let formattedEmail = email.trim().toLowerCase();
    console.log(formattedEmail);
    
}

//3
{
    let sentence = "JavaScript is awesome and JavaScript is fun";
    console.log(sentence.indexOf("awesome"));
    console.log(sentence.indexOf("JavaScript"));
    console.log(sentence.indexOf("Python"));
    
    
}

//4
{
    let message = "Welcome to coding class";
    if (message.indexOf("coding") !== -1) {
        console.log("Found coding");
        
    } else {
        console.log("Coding not found");
        
    }

    
}

//5
{
    let rawData = "    MESSY iNpuT  ";
    let processedData = rawData.trim().toLowerCase();
    console.log(rawData);
    console.log(processedData);
    
    
    
}

//6
{
    let password = "  MyP@ssw0rd123  ";
    let securePassword = password.trim().toUpperCase().slice(0, 8); 
    console.log(securePassword);
    
}

//7
{
    let fullName = "Alexander Hamilton";
    let firstName = fullName.slice(0, 9);
    let lastName = fullName.slice(10);
    console.log(firstName);
    console.log(lastName);
    
    
}

//8
{
    let phone = "9876543210";
    let areaCode = phone.slice(0, 3);
    let lastFour = phone.slice(-4);
    console.log(`Area code: ${areaCode}, Last four: ${lastFour}`);
}

//9
{
    let announcement = "The event will happen on Monday and Monday only";
    let UpdatedAnnouncement = announcement.replace("Monday", "Friday"); 

    console.log(announcement);
    console.log(UpdatedAnnouncement);
    
    
}

//10
{
    let template = "Hello NAME, welcome to our website";
    let personalizedMessage = template.replace("NAME", "Alice");
    console.log(personalizedMessage);
    
}

//11
{
    let colors = ["red", "green", "blue", "yellow"];
    console.log(colors);
    console.log(colors[0]);
    console.log(colors[colors.length - 1]);
    console.log(colors.length);   
}

//12
{
    let scores = [85, 92, 78, 90, 88];
    console.log(scores[2]);
    scores[0] = 95;
    console.log(scores);
    console.log(scores[0] + scores[1]);
}

//13
{
    let playlist = [];
    playlist.push("Song1");
    playlist.push("Song2");

    let removed = playlist.pop();

    playlist.unshift("Song0")
    
    console.log(playlist);
    console.log(removed);
    
    
}

//14
{
    let queue = ["First", "Second", "Third"];
    let served1 = queue.shift();
    queue.push("Fourth");
    let served2 = queue.shift();

    console.log(queue);
    console.log(served1);
    console.log(served2);
    
    
    
}

//15
{
    let fruits = ["apple", "banana", "mango", "orange", "banana"];
    console.log(fruits.indexOf("mango"));
    console.log(fruits.indexOf("banana"));
    console.log(fruits.indexOf("grape"));
    
}

//16
{
    let inventory = ["laptop", "mouse", "keyboard", "monitor"];
    console.log(inventory.includes("laptop"));
    console.log(inventory.includes("printer"));

    if (inventory.includes("mouse")) {
        console.log("available");
        
    } else {
        console.log("not available");
        
    }

      if (inventory.includes("printer")) {
        console.log("available");
        
    } else {
        console.log("not available");
        
    }
    
}

//17
{
 let morningClasses = ["Math", "English", "Science"];
 let afternoonClasses = ["History", "Art", "PE"];
 let fullSchedule = morningClasses.concat(afternoonClasses);
 console.log(fullSchedule);
 console.log(fullSchedule.length);
 
    
}

//18
{
    let numbers = [1, 2, 3, 4, 5];
    console.log(numbers.reverse());
    console.log(numbers);
    
    
}

//19
{
    let months = ["Jan", "Feb", "Mar", "May", "Jun"];

    months.splice(3,0, "Apr");

    console.log(months);

    console.log(months.indexOf("Apr") === months.indexOf("Mar") +1 && months.indexOf("Apr") === months.indexOf("May")-1);
    
    
}

//20
{
    let students = ["Alice", "Bob", "Charlie", "David", "Eve"];
    students.splice(2,1);
    students.splice(2, 0,  "Frank", "Grace")
    console.log(students);
    
}

//21
{
    let original = [1, 2, 3];
    let reference = original;
    reference[0] = 99;
    console.log(original);
    console.log(reference);  

    //Both original and reference change bc both point to the same array in memory
}

//22
{
    let arr1 = [1, 2, 3];
    let arr2 = [1, 2, 3];

    console.log(arr1 == arr2);
    console.log(arr1 === arr2);

    //Both are false bc arrays are compared by reference not by their contents. They both are different arrays
}

//23
{
    let board = [
["X", "O", "X"],
["O", "X", "O"],
["X", "O", "X"]
];

console.log(board[0][1]);
console.log(board[2][2]);
board[1][1] = "O";
console.log(board);
}

//24
{
    let scores = [
["Alice", 85, 90, 92],
["Bob", 78, 85, 88],
["Charlie", 92, 88, 95]
];
console.log(scores[0][2]);
console.log(scores[2][0]);
console.log((scores[1][1] + scores[1][2] + scores[1][3])/3);

scores[1][1] = 82;
console.log(scores);




}