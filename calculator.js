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

const operators = ["add", "subtract", "multiply", "divide"];
let a, b, selection;
const buttons = document.querySelector("#buttons-container");

buttons.addEventListener("click", (e) => {
  if(e.target.tagName === "BUTTON") {
    selection = e.target.textContent;
    console.log(selection);
  }
});
