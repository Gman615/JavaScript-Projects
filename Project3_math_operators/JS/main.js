function multiFunction() { // multiplication function name
    var x = 879*769; // creating a variable with a result from multiplication
    document.getElementById("multiply").innerHTML = "879 * 769 = " + x; // creating ID for result to be displayed
}

function diviFunction() { //division function name
    var y = 1237/68; // creating a variable with a result from division
    document.getElementById("division").innerHTML = "1237 / 68 = " + y; // creating ID for result to be displayed
}

function manyMath() { // creating function name
    var z = 237 / 3 * 6 / 3 + 4; // math problem with result stored as variable
    document.getElementById("math").innerHTML = "237 divided by 3 times 6 divided by 3 plus 4 equals " + z; // creating ID for result to be displayed with text
}

function modulusMath() { // modulus function name
    var a = 367 % 8; // storing modulus answer as variable
    document.getElementById("modulus").innerHTML = "The remainder of 367 divided by 8 is " + a; // creating ID to get variable with text
}

function negation_Operator() { // negation function naming
    var b = 37; //storing a value in a variable
    document.getElementById("negative").innerHTML = -b; // using - sign to make variable negative
}

function increment() { // naming function
    c = 8; // stored value with variable
    c++; // incremented variable
    document.getElementById("inc").innerHTML = c; // used ID to display variable
}

function decrement() { // naming function
    d = 15; // stored value with variable
    d--; // decremented variable
    document.getElementById("dec").innerHTML = d; // used ID to display variable
}

function randomNumber() { // naming function
    e = Math.random() * 100; //setting peramenters for random number finding and storing that random value in a variable
    document.getElementById("random").innerHTML = e; // used ID to display random variable
}

function rounding() { // naming function
    f = Math.round(37.51); // used math rounding object and stored value in variable
    document.getElementById("round").innerHTML = f; // used ID to display variable
}