

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
}

const numberButton = document.querySelectorAll(".number");
console.log(numberButton);
for (let i = 0; i<numberButton.length; i++) {
    numberButton[i].addEventListener("click", () => {
        let buttonContent = numberButton.textContent;
        let displayValue = document.querySelector("#display").innerText = buttonContent;
        return(displayValue);
    })
}