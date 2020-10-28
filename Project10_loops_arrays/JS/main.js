function Call_Loop() { //naming for loop function
    var y = ""; //creating variables
    var x=30;
    while(x > -1) { //while loop
        y += "<br>"+x;
        x--;
    }
    document.getElementById("Loop").innerHTML = y;
}

function aFunction() { //length of string
    var a = "I'm here to kick ass and chew bubble gum, and I'm all out of bubble gum!";
    var b = a.length;
    document.getElementById("test").innerHTML = b
}

var instruments= ["Guitar", "Banjo", "Harmonica", "Keyboards", "Drums", "Bass", "Synthesizer"] //array with elements
var x = ""; //setting variables
var y;
function for_Loop() {
    for(y = 0; y < instruments.length; y++) { //for loop
    x += instruments[y] + "<br>"; //creates
    }
    document.getElementById("List_of_instruments").innerHTML = x;
}

function array_Function() { //naming function for this array
    var TMNT_pics = [];
    TMNT_pics [0] = "Leonardo"; //elements
    TMNT_pics [1] = "Raphael";
    TMNT_pics [2] = "Donatello";
    TMNT_pics [3] = "Michelangelo";
    document.getElementById("Array").innerHTML = "This is the turtle named " + TMNT_pics[2] + ".";
}

function constant_function() { // using the const keyword
    const Teams_sports = {city:"Anaheim", sport:"baseball", mascot:" Angels"};
    Teams_sports.city = "Los Angeles"; //changing info
    Teams_sports.color = "red and white"; //adding info
    document.getElementById("Constant").innerHTML = "The " + Teams_sports.city + Teams_sports.mascot + " play " + Teams_sports.sport + " and they wear " + Teams_sports.color;
}

var a = 55; //using let to show how scope works
function cFunction() {
{
    let a = 33; //using let to show how scope works
    document.getElementById("test2").innerHTML = a;
}
    document.getElementById("test3").innerHTML = a;
}

function dFunction() {
    return Math.PI*2;
}
document.getElementById("test4").innerHTML = dFunction();

let team = { //using let keyword to create object
    sport: "basketball ", //properties
    league: "NBA ",
    city: "Portland ",
    mascot: "Trail Blazers ",
    colors: "black and red",
    description : function() { //method
        return "The " + this.city + this.mascot + "play " + this.sport + "in the " + this.league + "and they wear " + this.colors + ".";
    }
};
document.getElementById("test5").innerHTML = team.description();

var c = ""; //using the break statement
var d;
for (d=0; d < 20; d++) {
    if (d === 19) { break; }
    c += d + "<br>";
}
document.getElementById("test6").innerHTML = c;

var e = ""; //using the continue statement
var f;
for (f=20; f>0; f--) {
    if (f===13) { continue; }
    e += f + "<br>";
}
document.getElementById("test7").innerHTML = e;



