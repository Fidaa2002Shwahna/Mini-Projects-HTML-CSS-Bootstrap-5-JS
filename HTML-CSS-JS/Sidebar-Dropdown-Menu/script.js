let barIcon = document.querySelector("#barIcon") ,
  nav = document.querySelector(".sidebar"),
  btn = document.querySelectorAll(".btn"),
  subLinks = document.querySelector(".subLinks"),
  reverse=document.querySelector(".reverse");

barIcon.addEventListener("click", () => {
  nav.classList.toggle("open");
  if (nav.classList.contains("open")) {
    barIcon.classList.add("change");
  } else {
    barIcon.classList.remove("change");
  }
});

btn.forEach((e) => {
  e.addEventListener("click", () => {
    subLinks.classList.add("appear");
    nav.classList.add("disappear");
  });
});

reverse.addEventListener("click",()=>{
    subLinks.classList.remove("appear");
    nav.classList.remove("disappear");
});


// preloader
window.addEventListener("load", function() {
  const preloader = document.getElementById("preloader");
  preloader.style.display = "none";
});