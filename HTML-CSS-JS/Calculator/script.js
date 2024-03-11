document.addEventListener("DOMContentLoaded", function () {
  // Select all buttons
  let buttons = document.querySelectorAll(".clacBody .btns li");
  // Select the input field by name
  let inputValue = document.getElementsByName("inputScreen")[0];
  let inputString = ""; // Initialize the input string

  // Add click event listener to each button
  buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
      if (!button.classList.contains("not")) {
        inputValue.value += e.target.innerHTML;
        inputString += e.target.innerHTML;
      }

      if (button.classList.contains("equal")) {
        try {
          inputValue.value = eval(inputString); // Calculate and display result
        } catch (error) {
          inputValue.value = "Error"; // Display "Error" in case of calculation issues
        }
        inputString = ""; // Reset the input string after calculation
      }

      if (button.classList.contains("turn")) {
        inputValue.value = null; // Reset to placeholder value
      }
    });
  });
});
