var b = 11 //setting global variable
function Add_numbers_1() { //created function name
    document.write(20+b+"<br>"); //executing math 
}
function Add_numbers_2() { //created second function name
    document.write(b*33); //executing
}
Add_numbers_1(); //calling functions to print results
Add_numbers_2(); 

function sub_numbers_1() { //naming function
    var a=33; //local variable
    console.log(15+a*3); //math with console.log
}
function sub_numbers_2() { //naming second function
    console.log(a-15); //math with console.log
}
sub_numbers_1(); //calling funcations to print results
sub_numbers_2();

function to_drink() { //named function
    A = document.getElementById("test2").value; //creates variable based on input
    if (A >= 21) { //measures input against 21
        B = "Have a drink and enjoy responsibly!"; //prints if cust is 21 or over
    }
    else { 
        B = "You are too young to drink"; //prints if cust is under 21
    }
    document.getElementById("drink").innerHTML = B; //calls the answer based on true/false formula
}

function Time_function() { //named function
    var Time = new Date().getHours(); //creates variable for time that calls actual date and time
    var Reply; //creates variable for answer provided time input
    if (Time < 12 == Time > 0) { //takes the time generated from current time and measures it against numbers
        Reply = "It is morning time!";
    }
    else if (Time > 12 == Time < 18) { //takes the time generated from current time and measures it against numbers
        Reply = "It is the afteroon.";
    } 
    else { //if none other conditions are met, then this prints
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply; //calls the answer from the reply variable which hods the results of the true/false statement
}