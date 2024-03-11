let formOpenBtn = document.querySelector(".form-open");
let formCloseBtn = document.querySelector(".form-close");

let signUpForm = document.querySelector(".signUp-form");
let loginForm = document.querySelector(".login-form"); // Corrected variable name
let formContainer = document.querySelector(".form-container");

let loginBtn = document.querySelector("#login");
let signUpBtn = document.querySelector("#signUp");
let pwShowHide = document.querySelectorAll(".pw-hide");

//===========================================================

formOpenBtn.addEventListener("click", () => {
  formContainer.classList.add("show");
});

formCloseBtn.addEventListener("click", () => {
  formContainer.classList.remove("show");
});

signUpBtn.addEventListener("click", (e) => {
  signUpForm.style.display = "block";
  loginForm.style.display = "none";
});

loginBtn.addEventListener("click", () => {
  signUpForm.style.display = "none";
  loginForm.style.display = "block";
});

pwShowHide.forEach((element) => {
  element.addEventListener("click", () => {
    let res = element.parentElement.querySelector("input");

    if (res.type === "password") {
      res.type = "text";
      element.classList.replace("fa-eye-slash", "fa-eye");
    } else {
      res.type = "password";
      element.classList.replace("fa-eye", "fa-eye-slash");
    }
  });
});
