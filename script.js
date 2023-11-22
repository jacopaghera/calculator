
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
const del = document.querySelector(".delete");
let firstNumber; let operator; 
let secondNumber; let result; let buttonContent;

function clearDisp() {
    display.innerText = "";
    firstNumber = undefined;
    operator = undefined;
    secondNumber = undefined;
};

function clickOperatorButton() {
    if (firstNumber !== undefined) {
        secondNumber = Number(display.textContent);
        display.innerText = operate(firstNumber, operator, secondNumber);
    };
    firstNumber = Number(display.textContent);
    secondNumber = undefined;
}

function clickNumberButton() {
    if (display.textContent === result || display.textContent === `${firstNumber}`) {
        display.innerText = buttonContent;
    }
    else if (buttonContent === "." && display.textContent.indexOf(".") > -1) {
        //do nothing
    }
    else {
        display.innerText += buttonContent;
    }
};

function clickEqualButton() {
    secondNumber = Number(display.textContent);
    if (firstNumber === undefined) {
        display.innerText = "Please insert at least one other number";
        result = display.textContent;
    }
    else if (secondNumber === 0 && operator === "/") {
        display.innerText = "You divided by 0, no do!";
        result = display.textContent;
    }
    else {
        display.innerText = Number((operate(firstNumber, operator, secondNumber)).toFixed(3));
        result = display.textContent;
        firstNumber = undefined;
        operator = undefined;
        secondNumber = undefined;
    }
};

function clickDeleteButton() {
    if (display.innerText === `${firstNumber}` || display.innerText === result) {
        //do nothing
    }
    else {
        let displayedNumber = display.textContent;
        let newNumber = displayedNumber.slice(0, displayedNumber.length-1);
        display.innerText = newNumber;
    }
}

clearDisplay.addEventListener("click", () => {
   clearDisp();
});

numberButton.forEach((element) => {
    buttonContent = element.textContent;
    element.addEventListener("click", () => {
        clickNumberButton();
    })
});

operators.forEach((element) => {
    element.addEventListener('click', () => {
        clickOperatorButton();
        operator = element.textContent;
    })
});

equal.addEventListener("click", () => {
    clickEqualButton();
})

del.addEventListener("click", () => {
   clickDeleteButton();
});