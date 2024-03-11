//   show password var
let passShow = document.querySelectorAll(".pw-hide");
let checkp = document.querySelector(".check");
//   show password var
//show signUp ,login form var
let signUpLink = document.querySelector("#haveAccount");
let loginForm = document.querySelector(".form-login");
let signUpForm = document.querySelector(".form-signUp");
let loginLinks = document.querySelector("#login");
//show signUp ,login form var

// password validation var
let checkStrong = document.querySelector(".checkStrong");
let checkEqual = document.querySelector(".checkEqual");
let firstPass = document.querySelectorAll(".form-signUp #password")[0];
let secondPass = document.querySelectorAll(".form-signUp #password")[1];
let signUpbtn = document.querySelector(".form-signUp .logbtn");
// password validation var

//   show password
passShow.forEach((element) => {
  element.addEventListener("click", () => {
    let inputField = element.parentElement.querySelector("input"); // Select the input field

    if (inputField.type === "password") {
      inputField.type = "text";
      element.classList.replace("fa-eye-slash", "fa-eye");
    } else {
      inputField.type = "password";
      element.classList.replace("fa-eye", "fa-eye-slash");
    }
  });
});
//show signUp ,login form
signUpLink.addEventListener("click", () => {
  loginForm.style.display = "none";
  signUpForm.style.display = "block";
});

loginLinks.addEventListener("click", () => {
  loginForm.style.display = "block";
  signUpForm.style.display = "none";
});
//show signUp ,login form

//check password
signUpbtn.addEventListener("click", () => {
  if (firstPass.value != secondPass.value) {
    let txt = document.createTextNode("not the same password");
    checkEqual.appendChild(txt);
  }
  let checkPass =
    /(?=(.*[0-9]))(?=.*[\!@#$%^&*()\\[\]{}\-_+=~`|:;"'<>,./?])(?=.*[a-z])(?=(.*[A-Z]))(?=(.*)).{8,}/;
  if (checkPass.test(firstPass.value)) {
    let text = document.createTextNode("strong password");
    checkStrong.appendChild(text);
  } else {
    let text = document.createTextNode("weake password");
    checkStrong.appendChild(text);
  }
});
//check password
