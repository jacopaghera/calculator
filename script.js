
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
        return multiply (firstNumber, secondNumber);
    }
    else if (operator === "/") {
        return divide(firstNumber, secondNumber);
    }
};

const numberButton = document.querySelectorAll(".number");
const clearDisplay = document.querySelector(".clear");
const display = document.querySelector('#display')
clearDisplay.addEventListener("click", () => {
    display.innerText = ""
})
console.log(numberButton);

numberButton.forEach((element) => {
    let buttonContent = element.textContent;
    element.addEventListener("click", () => {
        let displayValue = document.querySelector("#display").innerText += buttonContent;
        return(displayValue);
    })
});