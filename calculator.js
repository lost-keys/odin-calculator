function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function operate(operator, a, b) {
  return window[operator](a, b);
}

function addDecimal() {
    // if no nothing has been inputted, insert 0 before the decimal
    if (!selection.length) {
      selection.push(0);
    // if selection already containts a decimal, do not insert another
    } else if (selection.includes(".")) {
      return;
    }
    selection.push(".");
}

function updateDisplay(selection) {
  const display = document.getElementById("display-container");
  display.textContent = selection.join("");
}

const operators = ["add", "subtract", "multiply", "divide"];
let a, b;
let selection = [];
const buttons = document.querySelector("#buttons-container");

buttons.addEventListener("click", (e) => {
  switch(e.target.className) {
    case "numerical":
      selection.push (e.target.textContent);
      break;
    case "clear":
      selection = [];
      break;
    case "backspace":
      selection.pop();
      break;
    case "decimal":
      addDecimal();
      break;
  }

  updateDisplay(selection);
});
