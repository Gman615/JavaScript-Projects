function mySentence() {
    var a = "I came here to ";
    var b = "whoop up and ";
    var c = "chew bubble gum ";
    var d = "and I'm all out of bubble gum!";
    var whole_sentence = a.concat(b, c, d);
    document.getElementById("sentence").innerHTML = whole_sentence;
}

function myCut() {
    var S = "I came here to whoop up and chew bubble gum, and I'm all out of bubble gum!";
    var Se = S.slice(32,43);
    document.getElementById("piece").innerHTML = Se;
}

function thisCut() {
    var T = "I came here to whoop up and chew bubble gum, and I'm all out of bubble gum!";
    var Te = T.toUpperCase();
    document.getElementById("caps").innerHTML = Te;
}

function thatCut() {
    var U = "I came here to whoop up and chew bubble gum, and I'm all out of bubble gum!";
    var Ue = U.search("up");
    document.getElementById("search").innerHTML = Ue;
}

function Strings() {
    var V = 367;
    document.getElementById("string").innerHTML = V.toString();
}

function precise() {
    var W = 2836.987654321;
    document.getElementById("precision").innerHTML = W.toPrecision(4);
}

function fixed() {
    var X = 27.69875645;
    var Xe = X.toFixed(1);
    document.getElementById("fixed").innerHTML = Xe;
}

function things() {
    var Y = "I'm all out of bubble gum!";
    var Ye = Y.valueOf();
    document.getElementById("things").innerHTML = Ye;
}