// Declaration of variables
let toggleBtn = document.querySelector(".toggle-btn");
let toggleBtnIcon = document.querySelector(".toggle-btn i");
let dropdownMenu = document.querySelector(".dropdown-menu");

// Toggle button click event handler
toggleBtn.onclick = function () {
  dropdownMenu.classList.toggle("open");
  const isOpen = dropdownMenu.classList.contains("open");

  toggleBtnIcon.classList = isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars";
};
