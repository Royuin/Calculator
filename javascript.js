function addition(a, b) {
  return a + b;
}

function subtraction(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function operate(func, a, b) {
  return func(a, b);
}

let displayValue = "0";

const display = document.querySelector(".display");

display.textContent = displayValue;

const clearbtn = document.querySelector(".clear");
clearbtn.addEventListener("click", () => {
  if (displayValue === "0") {
    return;
  }

  displayValue = "0";
  display.textContent = displayValue;
});

const btn0 = document.querySelector(".button0");
btn0.addEventListener("click", () => {
  if (displayValue === "0") {
    return;
  }

  displayValue += "0";
  display.textContent = displayValue;
});

const btn1 = document.querySelector(".button1");
btn1.addEventListener("click", () => {
  if (displayValue === "0") {
    displayValue = "";
  }

  displayValue += "1";
  display.textContent = displayValue;
});

const btn2 = document.querySelector(".button2");
btn2.addEventListener("click", () => {
  if (displayValue === "0") {
    displayValue = "";
  }

  displayValue += "2";
  display.textContent = displayValue;
});

const btn3 = document.querySelector(".button3");
btn3.addEventListener("click", () => {
  if (displayValue === "0") {
    displayValue = "";
  }

  displayValue += "3";
  display.textContent = displayValue;
});

const btn4 = document.querySelector(".button4");
btn4.addEventListener("click", () => {
  if (displayValue === "0") {
    displayValue = "";
  }

  displayValue += "4";
  display.textContent = displayValue;
});

const btn5 = document.querySelector(".button5");
btn5.addEventListener("click", () => {
  if (displayValue === "0") {
    displayValue = "";
  }

  displayValue += "5";
  display.textContent = displayValue;
});

const btn6 = document.querySelector(".button6");
btn6.addEventListener("click", () => {
  if (displayValue === "0") {
    displayValue = "";
  }

  displayValue += "6";
  display.textContent = displayValue;
});

const btn7 = document.querySelector(".button7");
btn7.addEventListener("click", () => {
  if (displayValue === "0") {
    displayValue = "";
  }

  displayValue += "7";
  display.textContent = displayValue;
});
