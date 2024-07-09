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
  }

  updateDisplay(selection);
});
