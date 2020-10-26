function Vote_Function() { // creating funciton name
    var Age, Can_Vote; //setting variable names
    Age = document.getElementById("Age").value; //giving ID to variable
    Can_Vote = (Age < 18) ? "You are not old enough to vote":"You are old enough to vote"; //using a ternary operator
    document.getElementById("Vote").innerHTML = Can_Vote; //giving a true/false value to the vote ID with variable
} 

function Vehicle(Make, Model, Year, Color) { 
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML = "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model + " manufactured in " + Erik.Vehicle_Year;
}

function Pet(Type, Color, Size) { //setting up class
    this.Pet_Type = Type;
    this.Pet_Color = Color;
    this.Pet_Size = Size;
}
var Siri = new Pet("dog", "brown and black", 45); //using new to create different variables with different data
var Alexa = new Pet("cat", "white", 15); //using new to create different variables with different data
var Sally = new Pet("lizard", "green and black", 1); //using new to create different variables with different data
var Coleen = new Pet("snake", "green and brown", 15); //using new to create different variables with different data
function petFunction() { //naming function that utilizes classes above
    document.getElementById("New_and_This").innerHTML = "Alexa owns a " + Alexa.Pet_Type + " with a " + Alexa.Pet_Color + " colored coat and it weighs " + Alexa.Pet_Size + " lbs"; // uses this and new to specify who's data is who's and create a sentence that can be adjusted
}

function thisFunction() { //naming function that is being called from HTML
    document.getElementById("Nested_Function").innerHTML = Multi(); //creating ID so that the variable can be stored and called in HTML
    function Multi() { //naming nested function
        var x = 33; //creating a variable
        function Times_ten() {x *= 10} //another nested function
        Times_ten(); //calling nested function
        return x; //calling answer after function has been performed when we called it on previous line
    }
}



