let nav = document.querySelector(".nav"),
searchIcon = document.querySelector("#searchIcon"),
navOpens=document.querySelector(".navOpens"),
navCloseBtn=document.querySelector("#navCloseBtn");

searchIcon.addEventListener("click", () => {
  nav.classList.toggle("open");
  nav.classList.remove("openNav");
  if (nav.classList.contains("open")) {
    return searchIcon.classList.replace("fa-search", "fa-xmark");
  } else {
    searchIcon.classList.replace("fa-xmark", "fa-search");
  }
});


navOpens.addEventListener("click",()=>{
nav.classList.add("openNav");
nav.classList.remove("open");
searchIcon.classList.replace("fa-xmark", "fa-search");
});


navCloseBtn.addEventListener("click",()=>{
    nav.classList.remove("openNav");
    });
    
