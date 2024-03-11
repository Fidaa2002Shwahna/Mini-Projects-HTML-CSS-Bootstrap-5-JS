let stars = document.querySelectorAll(".stars i");


stars.forEach((star, index1) => {
  star.addEventListener("click", () => {
    stars.forEach((innerStar, index2) => {
      index1 >= index2 ? innerStar.classList.add("active") : innerStar.classList.remove("active");
    });
  });
});
