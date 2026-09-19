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
{
    let mixed = 
}