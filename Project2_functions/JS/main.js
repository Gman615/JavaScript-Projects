function changingColors() { // function for changing text output
    var x = "The color is indigo!"; // assigning string to a variable
    var y = x.fontcolor("indigo"); // assigning color to variable x and it becomes variable y
    document.getElementById("Third_Eye").innerHTML = y; //assigns variable to ID so it can be called
}

function newFunction() { // function for concatenating
    var sentence = "The Third Eye Chakra"; //first part of concatenation by creating a variable and assigning string
    sentence += " governs your intuition"; // adding the second part to the first part by adding to the variable
    document.getElementById("Concatenate").innerHTML = sentence; //assigns variable to ID so it can be called
}
