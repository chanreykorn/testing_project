const images = ["slide01.jpg", "slide02.jpg", "slide03.jpg"];
const img = document.getElementById("img");
let slideIndex = 0;

function changeSlide() {
  slideIndex = (slideIndex + 1) % images.length;
  img.src = "slide/" + images[slideIndex];
}
setInterval(changeSlide, 3000);


let dropdown = document.getElementById("dropdown_menu");
let bars = document.getElementById("bars");
let close = document.getElementById("close");

bars.addEventListener("click", function(){
  dropdown.classList.add("active");
});
close.addEventListener("click", function(){
  dropdown.classList.remove("active");
});

const A = document.getElementById("A");
const B = document.getElementById("B");
const C = document.getElementById("C");
const D = document.getElementById("D");
const E = document.getElementById("E");
const F = document.getElementById("F");
const J = document.getElementById("J");
const K = document.getElementById("K");
const L = document.getElementById("L");
const M = document.getElementById("M");
const N = document.getElementById("N");
const O = document.getElementById("O");




A.addEventListener("click", function(){
  location = "/Comfirm Availability/Comfirm _Availability.html";
});
B.addEventListener("click", function(){
  location = "/Comfirm Availability/Comfirm _Availability.html";
});
C.addEventListener("click", function(){
  location = "/Comfirm Availability/Comfirm _Availability.html";
});
D.addEventListener("click", function(){
  location = "/Comfirm Availability/Comfirm _Availability.html";
});
E.addEventListener("click", function(){
  location = "/Comfirm Availability/Comfirm _Availability.html";
});
F.addEventListener("click", function(){
  location = "/Comfirm Availability/Comfirm _Availability.html";
});
J.addEventListener("click", function(){
  location = "/Comfirm Availability/Comfirm _Availability.html";
});
K.addEventListener("click", function(){
  location = "/Comfirm Availability/Comfirm _Availability.html";
});
L.addEventListener("click", function(){
  location = "/Comfirm Availability/Comfirm _Availability.html";
});
M.addEventListener("click", function(){
  location = "/Comfirm Availability/Comfirm _Availability.html";
});
N.addEventListener("click", function(){
  location = "/Comfirm Availability/Comfirm _Availability.html";
});
O.addEventListener("click", function(){
  location = "/Comfirm Availability/Comfirm _Availability.html";
});


let img01 = document.getElementById("img01");
let img02 = document.getElementById("img02");
let img03 = document.getElementById("img03");
let img04 = document.getElementById("img04");
let img05 = document.getElementById("img05");
let img06 = document.getElementById("img06");
let img07 = document.getElementById("img07");
let img08 = document.getElementById("img08");
let img09 = document.getElementById("img09");
let img10 = document.getElementById("img10");
let img11 = document.getElementById("img11");
let img12 = document.getElementById("img12");

img01.addEventListener("click", function(){
  location = "/sub_page/sub_01.html";
});
img02.addEventListener("click", function(){
  location = "/sub_page/sub_02.html";
});
img03.addEventListener("click", function(){
  location = "/sub_page/sub_01.html";
});
img04.addEventListener("click", function(){
  location = "/sub_page/sub_02.html";
});
img05.addEventListener("click", function(){
  location = "/sub_page/sub_01.html";
});
img06.addEventListener("click", function(){
  location = "/sub_page/sub_02.html";
});
img07.addEventListener("click", function(){
  location = "/sub_page/sub_01.html";
});
img08.addEventListener("click", function(){
  location = "/sub_page/sub_02.html";
});
img09.addEventListener("click", function(){
  location = "/sub_page/sub_01.html";
});
img10.addEventListener("click", function(){
  location = "/sub_page/sub_02.html";
});
img11.addEventListener("click", function(){
  location = "/sub_page/sub_01.html";
});
img12.addEventListener("click", function(){
  location = "/sub_page/sub_02.html";
});
