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

function operate(a, func, b) {
  let num = func(a, b);
  let result = num.toString();
  return (displayValue = result.substring(0, 10));
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
  operation = {
    num1: displayValue,
    operator: undefined,
    num2: displayValue,
  };
});

const btn0 = document.querySelector(".button0");
btn0.addEventListener("click", () => {
  if (displayValue === "0") {
    displayValue = "";
  } else if (displayValue.length > 9) {
    return;
  }

  displayValue += "0";
  display.textContent = displayValue;
});

const btn1 = document.querySelector(".button1");
btn1.addEventListener("click", () => {
  if (displayValue === "0") {
    displayValue = "";
  } else if (displayValue.length > 9) {
    return;
  }

  displayValue += "1";
  display.textContent = displayValue;
});

const btn2 = document.querySelector(".button2");
btn2.addEventListener("click", () => {
  if (displayValue === "0") {
    displayValue = "";
  } else if (displayValue.length > 9) {
    return;
  }

  displayValue += "2";
  display.textContent = displayValue;
});

const btn3 = document.querySelector(".button3");
btn3.addEventListener("click", () => {
  if (displayValue === "0") {
    displayValue = "";
  } else if (displayValue.length > 9) {
    return;
  }

  displayValue += "3";
  display.textContent = displayValue;
});

const btn4 = document.querySelector(".button4");
btn4.addEventListener("click", () => {
  if (displayValue === "0") {
    displayValue = "";
  } else if (displayValue.length > 9) {
    return;
  }

  displayValue += "4";
  display.textContent = displayValue;
});

const btn5 = document.querySelector(".button5");
btn5.addEventListener("click", () => {
  if (displayValue === "0") {
    displayValue = "";
  } else if (displayValue.length > 9) {
    return;
  }

  displayValue += "5";
  display.textContent = displayValue;
});

const btn6 = document.querySelector(".button6");
btn6.addEventListener("click", () => {
  if (displayValue === "0") {
    displayValue = "";
  } else if (displayValue.length > 9) {
    return;
  }

  displayValue += "6";
  display.textContent = displayValue;
});

const btn7 = document.querySelector(".button7");
btn7.addEventListener("click", () => {
  if (displayValue === "0") {
    displayValue = "";
  } else if (displayValue.length > 9) {
    return;
  }

  displayValue += "7";
  display.textContent = displayValue;
});

const btn8 = document.querySelector(".button8");
btn8.addEventListener("click", () => {
  if (displayValue === "0") {
    displayValue = "";
  } else if (displayValue.length > 9) {
    return;
  }

  displayValue += "8";
  display.textContent = displayValue;
});

const btn9 = document.querySelector(".button9");
btn9.addEventListener("click", () => {
  if (displayValue === "0") {
    displayValue = "";
  } else if (displayValue.length > 9) {
    return;
  }

  displayValue += "9";
  display.textContent = displayValue;
});

const decimalBtn = document.querySelector(".decimal");
decimalBtn.addEventListener("click", () => {
  if (displayValue.includes(".") === true) {
    return;
  }
  displayValue += ".";
  display.textContent = displayValue;
});

let operation = {
  num1: undefined,
  operator: undefined,
  num2: undefined,
};

const negativePositiveBtn = document.querySelector(".negative-positive");
negativePositiveBtn.addEventListener("click", () => {
  console.log(displayValue.includes("-"));
  if (displayValue === "0") {
    return;
  } else if (displayValue.includes("-") === true) {
    displayValue = displayValue.replace("-", "");
  } else {
    let negative = "-";
    displayValue = negative.concat(displayValue);
  }
  display.textContent = displayValue;
});

const equalBtn = document.querySelector(".equal");
equalBtn.addEventListener("click", () => {
  displayValue = Number(displayValue);
  operation.num2 = displayValue;
  if (operation.num2 === 0) {
    display.textContent = "DENIED";
    return;
  }
  displayValue = operate(operation.num1, operation.operator, operation.num2);
  operation.operator = undefined;
  if (Number.isInteger(displayValue) === false) {
    displayValue = Number(displayValue).toFixed(2);
  }
  display.textContent = displayValue;
});

const addBtn = document.querySelector(".add");
addBtn.addEventListener("click", () => {
  if (operation.operator !== undefined) {
    operation.num2 = Number(displayValue);
    operate(operation.num1, operation.operator, operation.num2);
    operation.operator = addition;
    operation.num1 = Number(displayValue);
    operation.num2 = undefined;
    display.textContent = displayValue;
    displayValue = "";
  } else {
    operation.num1 = Number(displayValue);
    operation.operator = addition;
    displayValue = "";
  }
});

const subtractButton = document.querySelector(".subtract");
subtractButton.addEventListener("click", () => {
  if (operation.operator !== undefined) {
    operation.num2 = Number(displayValue);
    operate(operation.num1, operation.operator, operation.num2);
    operation.operator = subtraction;
    operation.num1 = Number(displayValue);
    operation.num2 = undefined;
    display.textContent = displayValue;
    displayValue = "";
  } else {
    operation.num1 = Number(displayValue);
    operation.operator = subtraction;
    displayValue = "";
  }
});

const multiplyButton = document.querySelector(".multiply");
multiplyButton.addEventListener("click", () => {
  if (operation.operator !== undefined) {
    operation.num2 = Number(displayValue);
    operate(operation.num1, operation.operator, operation.num2);
    operation.operator = multiply;
    operation.num1 = Number(displayValue);
    operation.num2 = undefined;
    display.textContent = displayValue;
    displayValue = "";
  } else {
    operation.num1 = Number(displayValue);
    operation.operator = multiply;
    displayValue = "";
  }
});

const divideButton = document.querySelector(".divide");
divideButton.addEventListener("click", () => {
  if (operation.operator !== undefined) {
    if (operation.num2 === 0) {
      display.textContent = "No no no";
    }
    operation.num2 = Number(displayValue);
    operate(operation.num1, operation.operator, operation.num2);
    operation.operator = divide;
    operation.num1 = Number(displayValue);
    operation.num2 = undefined;
    display.textContent = displayValue;
    displayValue = "";
  } else {
    operation.num1 = Number(displayValue);
    operation.operator = divide;
    displayValue = "";
  }
});
