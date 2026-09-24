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

  playlist.unshift("Song0");

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

  months.splice(3, 0, "Apr");

  console.log(months);

  console.log(
    months.indexOf("Apr") === months.indexOf("Mar") + 1 &&
      months.indexOf("Apr") === months.indexOf("May") - 1,
  );
}

//20
{
  let students = ["Alice", "Bob", "Charlie", "David", "Eve"];
  students.splice(2, 1);
  students.splice(2, 0, "Frank", "Grace");
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
    ["X", "O", "X"],
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
    ["Charlie", 92, 88, 95],
  ];
  console.log(scores[0][2]);
  console.log(scores[2][0]);
  console.log((scores[1][1] + scores[1][2] + scores[1][3]) / 3);

  scores[1][1] = 82;
  console.log(scores);
}

//4.1

//1
{
  let numbers = [10, 20, 30, 40, 50, 60, 70];
  let elements = numbers.slice(2, 5);
  let last = numbers.slice(-3);

  console.log(elements);
  console.log(last);
  console.log(numbers);
}

//2
{
  let songs = ["Song1", "Song2", "Song3", "Song4", "Song5", "Song6"];

  let morningPlaylist = songs.slice(0, 3);
  let eveningPlaylist = songs.slice(-2);

  console.log(morningPlaylist);
  console.log(eveningPlaylist);
  console.log(songs.slice(-5));
}

//3
{
  let colors = ["red", "green", "blue", "yellow", "purple", "orange"];
  let removed = colors.splice(2, 2);
  console.log(removed);
  console.log(colors);
}

//4
{
  let numbers = [1, 2, 3, 7, 8, 9];
  let insert = numbers.splice(3, 0, 4, 5, 6);
  console.log(numbers);
}

//5
{
  let fruits = ["banana", "apple", "mango", "cherry", "orange"];
  fruits.sort();
  console.log(fruits);

  let nums = [5, 10, 1, 100, 25];
  nums.sort((a, b) => a - b);
  console.log(nums);
}

//6
{
  let scores = [78, 92, 85, 88, 95, 73];
  scores.sort((a, b) => a - b);
  console.log(scores);
  scores.sort((a, b) => b - a);
  console.log(scores);
}

//7
{
  let words = ["JavaScript", "is", "awesome"];
  console.log(words.join(" "));
  console.log(words.join("-"));
  console.log(words.join(""));
}

//8
{
  let dateArray = ["2024", "12", "25"];
  console.log(dateArray.join("/"));
  console.log(dateArray.join("-"));

  let time = ["14", "30", "00"];
  console.log(time.join(":"));
}

//9
{
  let numbers = [1, 2, 3, 4, 5];
  let result = numbers.toString();
  console.log(result);
  console.log(typeof result);

  let joined = numbers.join();

  console.log(joined);
  console.log(result === joined);

  //Both without arguments return array elements as a string separated by commas
}

//10
{
  let grid = [
    [1, 2],
    [3, 4],
    [5, 6],
  ];
  let nestedArray = grid.toString();
  console.log(nestedArray);

  let joinedNestedArray = grid.join();
  console.log(joinedNestedArray);

  //Both give the same result here bc join() without an argument uses a comma as the separator just like toString()
}

//11
{
  let arr1 = new Array();
  let arr2 = new Array(5);
  let arr3 = new Array(10, 20, 30);
  console.log(arr1, arr1.length);
  console.log(arr2, arr2.length);
  console.log(arr3, arr3.length);
}

//12
{
  let arr1 = new Array(4);
  arr1[0] = "a";
  arr1[1] = "b";
  arr1[2] = "c";
  arr1[3] = "d";

  console.log(arr1);

  let arr2 = ["a", "b", "c", "d"];

  console.log(arr2);

  //Array literal is easier bc we can create array and add all the values in one line
}

//13
{
  let arr1 = [1, 2, 3];
  console.log(Array.isArray(arr1));

  let arr2 = "hello";
  console.log(Array.isArray(arr2));

  let arr3 = 123;
  console.log(Array.isArray(arr3));

  let arr4 = { name: "John" };
  console.log(Array.isArray(arr4));
}

//14
{
  let data = [1, 2, 3];
  console.log(Array.isArray(data));
  if (Array.isArray(data)) {
    console.log(`It's an array with ${data.length} elements`);
  } else {
    console.log(`Not an array`);
  }
  data = "hello";
  console.log(Array.isArray(data));
}

//15
{
  let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];

  console.log(matrix[0][2]);
  console.log(matrix[2][0]);
  console.log(matrix[1][1]);
  matrix[1][1] = 50;
  console.log(matrix);
}

//16
{
  let seats = [
    ["Alice", "Bob", "Charlie"],
    ["David", "Eve", "Frank"],
  ];

  console.log(seats[0][1]);
  console.log(seats[1][2]);

  let temp = seats[0][0];
  seats[0][0] = seats[1][2];
  seats[1][2] = temp;

  console.log(seats);
}

//17
{
  let grades = [
    ["John", 85, 90, 88],
    ["Sarah", 92, 88, 95],
    ["Mike", 78, 85, 80],
  ];

  console.log(grades[0][2]);
  console.log(grades[1][0]);
  console.log((grades[2][1] + grades[2][2] + grades[2][3]) / 3);
}

//18
{
  let game = [
    ["X", "O", "X"],
    ["O", "X", "O"],
    ["O", "X", "X"],
  ];

  console.log(game[0][0]);
  console.log(game[1][1]);
  game[2][2] = "O";
  console.log(game);
  console.log(game[0]);
  console.log(game[1]);
  console.log(game[2]);
}

//19
{
  let items = [10, 20, 30, 40, 50];
  console.log(items.length);
  items.length = 3;
  console.log(items);
  console.log(items[4]);

  //Setting length to a smaller number removes elements from the end of the array.
}

//20
{
  let numbers = [1, 2, 3];
  numbers[10] = 99;
  console.log(numbers);
  console.log(numbers.length);
  console.log(numbers[5]);

  //An array can have a length of 11 even though it only contains actual values at indexes 0, 1, 2, and 10. The spaces in between are called empty slots (a sparse array).
}

//21
{
  let words = ["hello", "WORLD", "JavaScript"];
  let cleanWords = [];
  cleanWords.push(words[0].trim());
  cleanWords.push(words[1].trim());
  cleanWords.push(words[2].trim());

  cleanWords.sort();

  let result = cleanWords.join(" ");
  console.log(result);
}

//22
{
  let morningTasks = ["Exercise", "Breakfast", "Study"];
  let eveningTasks = ["Dinner", "Reading", "Sleep"];

  let combine = morningTasks.concat(eveningTasks);

  combine.splice(3, 0, "Lunch");
  combine.sort();
  console.log(combine);
}

//23
{
  let original = [1, 2, 3, 4, 5];

  let reference = original;
  let copy = original.slice();
  copy[0] = 88;

  console.log(original);
  console.log(reference);
  console.log(copy);

  //reference points to the same array as original
  //while copy is a separate array created using slice()
}

//24
{
  let colors = ["red", "green", "blue"];
  let palette1 = colors;
  let palette2 = colors;

  palette1.push("Yellow");
  console.log(colors);
  console.log(palette1);
  console.log(palette2);

  // colors, palette1, and palette2 all reference the same array,
  // so changing it through palette1 changes all three
}

//25
{
  let numbers = [10, 20, 30, 40, 50];
  let removed = numbers.shift();
  numbers.push(removed);
  console.log(numbers);

  removed = numbers.shift();
  numbers.push(removed);
  console.log(numbers);
}

//26
{
  let items = ["apple", "banana", "cherry", "date", "banana"];

  console.log(items.indexOf("banana"));
  let removed = items.splice(1, 1);
  console.log(removed);
  console.log(items);
  console.log(items.includes("banana"));
}

//27
{
  let data = [5, 10, 15, 20, 25];
  let index = 7;

  if (index < data.length) {
    console.log(data[index]);
  } else {
    console.log("Index out of bounds");
  }

  index = 2;
  if (index < data.length) {
    console.log(data[index]);
  } else {
    console.log("Index out of bounds");
  }
}

//28
{
  let input = [1, 2, 3];
  console.log(Array.isArray(input));

  if (Array.isArray(input) && input.length > 0) {
    console.log(input[0]);
  }
  input = "hello";
  if (Array.isArray(input) && input.length > 0) {
    console.log(input[0]);
  } else {
    console.log("Not an array");
  }
}

//29
{
  let cart = [];
  cart.push("Laptop", "Mouse", "Keyboard");
  console.log(cart.length);
  let removed = cart.pop();
  console.log(removed);

  let remainingItems = cart.join(", ");
  console.log(remainingItems);
}

//30
{
  let highScores = [150, 200, 180, 220, 190];
  highScores.sort((a, b) => b - a);
  console.log(highScores[0]);
  console.log(highScores.slice(0, 3));

  console.log("Top 3 scores: " + highScores.slice(0, 3).join(" | "));
}

//31
{
  let allScores = [85, 92, 78, 95, 88, 73, 90];

  let copy = allScores.slice();
  let sorted = copy.sort((a, b) => a - b);
  console.log(sorted);

  let removed = sorted.shift();
  console.log(removed);

  let removing = sorted.pop();
  console.log(removing);

  console.log(sorted);

  let avg =
    (sorted[0] + sorted[1] + sorted[2] + sorted[3] + sorted[4]) / sorted.length;

  console.log(avg);
}

//32
{
  let tasks = ["Task1", "Task2", "Task3", "Task4"];

  let firstTask = tasks.shift();
  tasks.push(firstTask);

  tasks.splice(1, 0, "Task2.5");

  let taskIndex = tasks.indexOf("Task3");
  tasks.splice(taskIndex, 1);

  console.log("1. " + tasks[0]);
  console.log("2. " + tasks[1]);
  console.log("3. " + tasks[2]);
  console.log("4. " + tasks[3]);
}

//33

{
  let numbers = [1, 10, 2, 20, 3, 30];
  numbers.sort();
  console.log(numbers);

  numbers.sort((a, b) => a - b);
  console.log(numbers);

  // Without a compare function, sort() treats the numbers as strings
  // and sorts them alphabetically. With (a, b) => a - b, they are
  // sorted numerically from smallest to largest.
}

//34
{
  let sparse = [1, , , 4, , 6];
  console.log(sparse.length);
  console.log(sparse[2]);
  console.log(sparse.push(7));
  console.log(sparse, sparse.length);
}



