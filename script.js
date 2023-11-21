
function add(a, b) {
	return a+b;
};

function subtract(a, b) {
	return a-b;
};

function multiply(array) {
  return array.reduce((product, current) => product * current);
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
let firstNumber; let operator; let secondNumber;

clearDisplay.addEventListener("click", () => {
    display.innerText = "";
});

console.log(numberButton);

numberButton.forEach((element) => {
    let buttonContent = element.textContent;
    element.addEventListener("click", () => {
    document.querySelector("#display").innerText += buttonContent;
    })
});

operators.forEach((element) => {
    element.addEventListener('click', () => {
    firstNumber = Number(display.textContent);
    display.innerText = "";
    operator = element.textContent;
})
});

equal.addEventListener("click", () => {
    secondNumber = Number(display.textContent);
    if (secondNumber === 0 && operator === "/") {
        display.innerText = "You divided by 0, no do!";
    }
    else {
        display.innerText = operate(firstNumber, operator, secondNumber);
    }
})