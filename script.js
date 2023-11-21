
function add(a, b) {
	return a+b;
};

function subtract(a, b) {
	return a-b;
};

function multiply(a, b) {
  return a * b;
};

function divide(a, b) {
	return a/b;
};

function operate(firstNumber, operator, secondNumber) {
    if (operator === "+") {
        return add(firstNumber, secondNumber);
    }
    else if (operator === "-") {
        return subtract(firstNumber, secondNumber);
    }
    else if (operator === "*") {
        return multiply(firstNumber, secondNumber);
    }
    else if (operator === "/") {
        return divide(firstNumber, secondNumber);
    }
};

const numberButton = document.querySelectorAll(".number");
const clearDisplay = document.querySelector(".clear");
const display = document.querySelector('#display');
const operators = document.querySelectorAll(".op");
const equal = document.querySelector(".equal");
let firstNumber; let operator; let secondNumber; let result;

clearDisplay.addEventListener("click", () => {
    display.innerText = "";
    firstNumber = null;
    operator = null;
    secondNumber = null;
});

console.log(numberButton);

numberButton.forEach((element) => {
    let buttonContent = element.textContent;
    element.addEventListener("click", () => {
        if (display.innerText === result || display.innerText === `${firstNumber}`) {
            display.innerText = buttonContent;
        }
        else {
            display.innerText += buttonContent;
        }
    })
});

operators.forEach((element) => {
    element.addEventListener('click', () => {
    firstNumber = Number(display.textContent);
    operator = element.textContent;
    console.log(firstNumber);
})
});

equal.addEventListener("click", () => {
    secondNumber = Number(display.textContent);
    if (secondNumber === 0 && operator === "/") {
        display.innerText = "You divided by 0, no do!";
        result = display.textContent;
    }
    else {
        display.innerText = operate(firstNumber, operator, secondNumber);
        result = display.textContent;
        firstNumber = null;
        operator = null;
        secondNumber = null;
    }
})