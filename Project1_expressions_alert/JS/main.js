alert("WHOA!!!!!"); // Using the Alert method

var root = ("You are safe and connected "); // creating a variable
var root = root.fontcolor("red"); // assigning a color to the text
document.write(root); // printing the variable using the document.write method

var x = "I understand my feelings", y = " and I am in control of my life."; //creating 2 variables with strings
var x = x.fontcolor("orange"); // assigned a color to x because I wanted to
var y = y.fontcolor("yellow"); // assigned a color to y because I wanted to
document.write(x + y); // concatenating those strings together with an expression

function displayDate() {
    document.getElementById("demo").innerHTML = Date();
}