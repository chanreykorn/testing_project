
let dropdown = document.getElementById("dropdown_menu");
let bars = document.getElementById("bars");
let close = document.getElementById("close");
let facebook = document.getElementById("facebook");
let twitter = document.getElementById("twitter");
let google = document.getElementById("google");
let youtube = document.getElementById("youtube");
let linkedin = document.getElementById("linkedin");




bars.addEventListener("click", function(){
    dropdown.classList.add("active");
});
close.addEventListener("click", function(){
    dropdown.classList.remove("active");
});


// Footer icon link//
facebook.addEventListener("click", function(){
    window.location = "https://web.facebook.com/profile.php?id=100070704646897";
});
twitter.addEventListener("click", function(){
    window.location = "https://twitter.com/chanreykorn";
});
google.addEventListener("click", function(){
    window.location = "https://myaccount.google.com/?utm_source=OGB&utm_medium=app";
});
youtube.addEventListener("click", function(){
    window.location = "https://www.youtube.com/@tonight_sad";
});
linkedin.addEventListener("click", function(){
    window.location = "https://line.me/ti/p/hl6LLAaAZd";
});

