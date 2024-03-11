//   scroll variable
let carousel = document.querySelector(".carousel");
let dragging = false,
  startscrollLeft,
  startX;
//    btn variable
let arrowbtn = document.querySelectorAll(".wrapper i");
let firstCardWidth = carousel.querySelector(".card").offsetWidth;
//===============================================================================

// mousemove
carousel.addEventListener("mousemove", (e) => {
  if (!dragging) return;
  carousel.scrollLeft = startscrollLeft - (e.pageX - startX);
});
// mousemove

// mousedown
carousel.addEventListener("mousedown", (e) => {
  dragging = true;
  carousel.classList.add("dragging");
  startX = e.pageX;
  startscrollLeft = carousel.scrollLeft;
});
// mousedown

// mouseup
carousel.addEventListener("mouseup", () => {
  dragging = false;
  carousel.classList.remove("dragging");
});
// mouseup

//========================

arrowbtn.forEach((element) => {
  element.addEventListener("click", () => {
    carousel.scrollLeft +=
      element.id === "left" ? -firstCardWidth : firstCardWidth;
  });
});
