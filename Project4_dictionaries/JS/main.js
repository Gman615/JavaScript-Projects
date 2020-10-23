function my_Dictionary() { // function name creation
    var Figure = { // assigning name to variable
        Species: "Dark Elf", // next few lines are key-value pairs
        Color: "Grey-blue",
        Age: 24,
        Weapon: "Wand",
        Type: "Fire",
    };
    delete Figure.Weapon; // delete statement used on element in dictionary
    document.getElementById("Dictionary").innerHTML = Figure.Weapon; // requesting to display key value that has been deleted
}