var type = 8; // setting variable
document.write(typeof type); //executing typeof

function newFunction() { //creating function name
    var x = 0/0; //setting variable to see if a number
    document.getElementById("question").innerHTML = x; //requesting value to display in HTML
}

function thisFunction() { // creating function name
    var y = isNaN('This is clearly not a number'); //setting variable as a string
    document.getElementById("test").innerHTML = y; // requesting info to display answer
}

function thatFunction() { //creating function name
    var z = isNaN(300); // setting variable with NaN
    document.getElementById("test2").innerHTML = z; //requesting variable to display answer
}

function whatFunction() { //creating function name
    var a = 2E310; //setting variable
    document.getElementById("test3").innerHTML = a; //showing number is infinity with variable above
}

function whichFunction() { //creating function name
    var b = -2E310; //setting variable
    document.getElementById("test4").innerHTML = b; //showing number as negative infinity with variable above
}

function aFunction() { //creating function name
    var c = (8>3); //setting variable
    document.getElementById("test5").innerHTML = c; //showing value as true from variable above
}

function bFunction() { //creating function name
    var d = (8<3); //setting variable
    document.getElementById("test6").innerHTML = d; //showing value as false from variable above
}

function cFunction() { //creating function name
    var e = (8*9); //setting variable
    console.log(e); //sending number to be displayed in the console log
    document.getElementById("test7").innerHTML = e; //calling variable to be displayed in text with a click
}

function dFunction() { //creating function name
    var f = ("10"+37); //setting variable
    document.getElementById("test8").innerHTML = f; //showing amount as concatenated string
}

function eFunction() { //creating function name
    var g = (18>69);
    console.log(g); //sending number to be displayed in the console log
    document.getElementById("test9").innerHTML = g; //calling variable to be displayed in browser
}

function fFunction() { //creating function name
    var h = (16==16); //setting variable
    document.getElementById("test0").innerHTML = h; //showing if value is true or false
}

function gFunction() { //creating function name
    var i = (16==8); //setting variable
    document.getElementById("testA").innerHTML = i; //showing a false answer with variable above
}

function hFunction() { //creating function name
    var j = ("87"==="87"); // setting variable
    document.getElementById("testB").innerHTML = j; //showing a true answer with same value and type from variable above
}

function iFunction() { //creating function name
    var k = ("Thirty-three"===67); //setting variable
    document.getElementById("testC").innerHTML = k; //showing a false answer with different value and type from variable above
}

function jFunction() { //creating function name
    var l = ("Thirty-three"===33); //setting variable
    document.getElementById("testD").innerHTML = l; // showing a false answer with same value but different type from variable above
}
function kFunction() { //creating function name
    var m = (47===87); //setting veriable
    document.getElementById("testE").innerHTML = m; //showing a false answer with same type but diff value from variable above
}

function lFunction() { //creating function name
    var n = (33>16 && 10>4); //setting amounts for variable
    document.getElementById("testF").innerHTML = n; //showing a true answer with and from variable above
}

function mFunction() { //creating function name
    var o = (16>33 && 10>4); //setting amounts for variable
    document.getElementById("testG").innerHTML = o; //showing a false answer with and from variable above
}

function nFunction() { //creating function name
    var p = (33>16 || 4>10); //setting amounts for variable
    document.getElementById("testH").innerHTML = p; //showing a true answer with or from variable above
}

function oFunction() { //creating function name
    var q = (16>33 || 4>10); // setting amounts for variable
    document.getElementById("testI").innerHTML = q; // showing a false answer with or from variable above
}

function pFunction() { //creating function name
    document.getElementById("testJ").innerHTML = !(5>9); //showing a true answer with not from variable above
}

function qFunction() { //creating function name
    document.getElementById("testK").innerHTML = !(9>7); //showing a false answer with not from variable above
}