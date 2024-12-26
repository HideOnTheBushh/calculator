document.addEventListener("DOMContentLoaded", () => {
    // First number, second number and operator between them
    let a;
    let b;
    let operator = "";
    let isOperator = false;
    let isEqual = false;
    const display = document.querySelector(".display");

    // Clears the display
    document.querySelector(".clear").addEventListener("click", () => {
        display.textContent = "0";
        a = 0;
        b = 0;
        let isOperator = false;
        let isEqual = false;
        let operator = "";
    })

    document.querySelectorAll(".number").forEach(number => {
        number.addEventListener("click",() => {
            // Check for leading zeros
            if (display.textContent == "0") {
                display.textContent = "";
            } 
            // Check if equal sign was pressed
            if (isEqual) {
                display.textContent = "";
                isEqual = false;
            }
            // Check if operator sign was pressed
            if (isOperator) {
                display.textContent = "";
                isOperator = false;
            }
            // Add number to display
            display.textContent += number.id;
        })
    })

    // Save operator if clicked
    document.querySelectorAll(".operator").forEach(button => {
        button.addEventListener("click", () => {
            if (operator !== "") {
                b = display.textContent;
                if (b != 0) {
                    display.textContent = Math.round(operate(Number(a), operator, Number(b)) * 100) / 100;
                } else {
                    display.textContent = operate(Number(a), operator, Number(b));
                }
            }
            a = display.textContent;
            operator = button.id;
            isOperator = true;
        })
    })

    // Show the solution
    document.querySelector(".equal").addEventListener("click", () => {
        if (operator !== "") {
            b = display.textContent;
            // Save check against dividing by zero
            if (b != 0) {
                display.textContent = Math.round(operate(Number(a), operator, Number(b)) * 100) / 100;
            } else {
                display.textContent = operate(Number(a), operator, Number(b));
            }
            // Reset
            isEqual = true;
            a = 0;
            b = 0;
            operator = "";
        }
    })
})






// Takes 3 arguments, calls function based on operator
function operate (a, operator, b) {
    if (operator === "+") {
        return add(a, b);
    } else if (operator === "-") {
        return subtract(a, b);
    } else if (operator === "x") {
        return multiply(a, b);
    } else if (operator === "/") {
        return divide(a, b);
    } else {
        return "Error";
    }
}

function add (a, b) {
    return a + b;
}

function subtract (a, b) {
    return a - b;
}

function multiply (a, b) {
    return a * b;
}

function divide (a, b) {
    if (b === 0) {
        return "Error";
    } else {
        return a / b;
    }
}