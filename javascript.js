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
  return (displayValue = result.substring(0, 9));
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
  result = operate(operation.num1, operation.operator, operation.num2);
  operation.operator = undefined;
  displayValue = Number(result);
  if (Number.isInteger(displayValue) === false) {
    result = displayValue.toFixed(2);
  }
  displayValue = result.toString();
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

const numButtons = document.querySelectorAll(".num-button");

function numEventListener() {
  for (let i = 0; i < numButtons.length; i++) {
    console.log(numButtons[i]);
    numButtons[i].addEventListener("click", () => {
      if (displayValue === "0") {
        displayValue = "";
      } else if (displayValue.length > 8) {
        return;
      }

      let num = numButtons[i].textContent;
      displayValue += num.toString();
      display.textContent = displayValue;
    });
  }
}
numEventListener();
