function getReceipt() {
    var text1 = "<h3>You Ordered:<h3>"; //This initializes our string so it can get passed from function to function, growing line by line into a full receipt
    var runningTotal = 0; //variable for pizzas purchased
    var sizeTotal = 0; //stores the value of the total size of pizza ordered
    var sizeArray = document.getElementsByClassName("size"); //stores the size checked in the sizeArray
    for (var i = 0; i < sizeArray.length; i++) { //running count of pizzas ordered, loop created
        if (sizeArray[i].checked) { //if a field was checked
            var selectedSize = sizeArray[i].value; //creates a variable with the size selected, turns that into a value
            text1 = text1+selectedSize+"<br>"; //shows the saved text above
        }
    }
    if (selectedSize === "Personal Pizza") { //changes variable for sizeTotal once a size is selected
        sizeTotal = 6;
    } else if (selectedSize === "Medium Pizza") {
        sizeTotal = 10;
    } else if (selectedSize === "Large Pizza") {
        sizeTotal = 14;
    } else if (selectedSize === "Extra Large Pizza") {
        sizeTotal = 16;
    } else if (selectedSize === "Mega Pizza") {
        sizeTotal = 20;
    }
    runningTotal = sizeTotal; //stores the size total variable in the runningTotal variable
    console.log(selectedSize+" = $"+sizeTotal+".00"); //logging the total amounts of what has been selected with some strings to convey meaning to the numbers
    console.log("size text1: "+text1);
    console.log("subtotal: $"+runningTotal+".00");
    getTopping(runningTotal,text1); 
};

function getTopping(runningTotal,text1) { //takes stored information from above and uses it with a new function for selecting toppings
    var toppingTotal = 0; //setting new variables to keep track of toppings selected
    var selectedTopping = []; //creates an empty array to put values of toppings into
    var toppingArray = document.getElementsByClassName("toppings"); //refers to class name in HTML doc to store a variable of toppings selected
    for (var j = 0; j < toppingArray.length; j++) { //running count of toppings added, for loop created
        if (toppingArray[j].checked) { //conditional statement for toppings being selected
            selectedTopping.push(toppingArray[j].value); //pushes toppings selected into the array
            console.log("selected topping item: ("+toppingArray[j].value+")"); //callse the current array
            text1 = text1+toppingArray[j].value+"<br>"; //concatenates string from first function of what was ordered
        }
    }
    var toppingCount = selectedTopping.length; //creates a variable that counts number of toppings added with .length, which tells the size of the current array
    if (toppingCount > 1) { //conditional statement created 
        toppingTotal = (toppingCount - 1); //subtracting 1 for the free topping
    } else {
        toppingTotal = 0; //otherwise topping total is 0 if it is < 1
    }
    runningTotal = (runningTotal + toppingTotal);
    console.log("total selected topping items: "+toppingCount); //concatenates strings of variables selected by cust input
    console.log(toppingCount+" topping - 1 free topping = "+"$"+toppingTotal+".00"); //FREE TOPPING
    console.log("topping text1: "+text1);
    console.log("Purchase Total: "+"$"+runningTotal+".00");//shows $$$ amount
    document.getElementById("showText").innerHTML=text1;
    document.getElementById("totalPrice").innerHTML = "<h3>Total: <strong>$"+runningTotal+".00"+"</strong></h3>"; //the last 2 lines here work with the ids at the end of the HTML page, take all the stored information and display 
};    