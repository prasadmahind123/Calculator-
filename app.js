let string = "";
let justEvaluated = false;
let buttons = document.querySelectorAll(".button");
let inputField = document.querySelector(".cal-input");

// Add event listener for keydown events
// This will allow keyboard input for the calculator
document.addEventListener("keydown", (e) => {
  e.preventDefault();  // Prevent default behavior for key presses

  if (e.key === "=" || e.key === "Enter") {
    string = eval(string).toString();
    justEvaluated = true;
  } else if (e.key === "Backspace") {
    string = string.substring(0, string.length - 1);
  } else if (e.key === "c") {
    string = "";
  } else if (e.key === "s") {
    string = (Number(string) ** 2).toString();
    justEvaluated = true;
  } else if (
    (e.key >= "0" && e.key <= "9") ||
    e.key === "." ||
    e.key === "%" ||
    e.key === "+" ||
    e.key === "-" ||
    e.key === "*" ||
    e.key === "/"
  ) {
    if (justEvaluated && "0123456789".includes(e.key)) {
      // If the last action was an evaluation and a number is pressed, start fresh
      string = e.key;
    } else {
      string += e.key;
    }
    justEvaluated = false;
  }

  inputField.value = string;
});

// Add event listeners to all buttons

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {

    let value = e.target.innerHTML; // Get the button value

    if (value == "=") {
      string = eval(string).toString();
      justEvaluated = true;
    } else if (value == "AC") {
      string = "";
      justEvaluated = false;
    } else if (value == "DEL") {
      string = string.substring(0, string.length - 1);
    } else if (value == "sqr") {
      string = (Number(string) ** 2).toString();
      justEvaluated = true;
    } else {
      if (justEvaluated && !isNaN(value)) {
        string = value; // Start new if number clicked after result
      } else {
        string += value;
      }
      justEvaluated = false;
    }

    // Update the input field with the current string
    inputField.value = string;   
  });
});
