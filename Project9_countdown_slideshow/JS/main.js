function countdown() { //countdown name
    var seconds = document.getElementById("seconds").value; //giving seconds a value based on input

    function tick() { //naming a subprogram
        seconds = seconds - 1; //decrementing the count on the seconds veriable
        timer.innerHTML = seconds; 
        setTimeout(tick, 1000); //gives the timer a ticking time
    if(seconds == -1) { //true false statment to stop counting
        alert("Time's up!");
    }
        }
    tick();
}
//Java part of slideshow
var slideIndex = 1;
showSlides(slideIndex);

//moving forward/backward through slideshow
function plusSlides(n) {
    showSlides(slideIndex += n);
}

//Thumbnail image ctrl
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides"); //calls photos
    var dots = document.getElementsByClassName("dot"); //dots for images
    if (n > slides.length) {slideIndex = 1} // true/false logic to see if you can continue to scroll or not
    if(n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += "active";
}