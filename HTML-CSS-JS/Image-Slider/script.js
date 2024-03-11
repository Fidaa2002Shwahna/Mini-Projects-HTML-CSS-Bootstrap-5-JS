// variable declaration=================================
var sliderImage = Array.from(
  document.querySelectorAll(".slides-container img") // sliderImage
);
var imagesCount = sliderImage.length; //sliderImage length

var currentSlide = 1; //current slide

var SlideNumberElement = document.getElementById("slide-number"); //slide-number Element
var prev = document.getElementById("prev"); //prev slide-control
var next = document.getElementById("next"); //next slide-control
// variable declaration=================================

//handle click on prevous and next buttons
prev.onclick = prevSlide;
next.onclick = nextSlide;

//create main ul=====================
var indicatesElement = document.createElement("ul");
indicatesElement.setAttribute("id", "indicates-ul");

//create li element
for (var i = 1; i <= imagesCount; i++) {
  var indicatesItem = document.createElement("li");
  indicatesItem.setAttribute("data-index", i);
  indicatesItem.appendChild(document.createTextNode(i));
  //append li to ul
  indicatesElement.appendChild(indicatesItem);
}

//add ul to indicates div
document.getElementById("indicates-ul").appendChild(indicatesElement);
var indicates = document.getElementById("indicates-ul");
var Bullets = Array.from(document.querySelectorAll("#indicates-ul li"));

for (var i = 0; i < Bullets.length; i++) {
  Bullets[i].onclick = function () {
    currentSlide = parseInt(this.getAttribute("data-index"));
    check();
  };
}

check();

//create main ul================================

function nextSlide() {
  if (next.classList.contains("disabled")) {
    return;
  } else {
    currentSlide++;
    check();
  }
}
function prevSlide() {
  if (prev.classList.contains("disabled")) {
    return;
  } else {
    currentSlide--;
    check();
  }
}

function check() {
  SlideNumberElement.textContent = "slide #" + currentSlide;
  removeAllActive();
  sliderImage[currentSlide - 1].classList.add("active");

  indicatesElement.children[currentSlide - 1].classList.add("active");
  if (currentSlide === 1) {
    prev.classList.add("disabled");
  } else {
    prev.classList.remove("disabled");
  }
  //
  if (currentSlide === imagesCount) {
    next.classList.add("disabled");
  } else {
    next.classList.remove("disabled");
  }
}

function removeAllActive() {
  sliderImage.map((img) => {
    img.classList.remove("active");
  });

  Bullets.map((li) => {
    li.classList.remove("active");
  });
}
