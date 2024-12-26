document.addEventListener("DOMContentLoaded", () => {
    // First number, second number and operator between them
    let a;
    let b;
    let operator;
    const display = document.querySelector(".display");

    document.querySelector("#clear").addEventListener("click", () => {
        display.textContent = "0";
    })

    document.querySelectorAll(".number").forEach(number => {
        number.addEventListener("click",() => {
            if (display.textContent == "0") {
                display.textContent = "";
            }
            display.textContent += number.id;
        })
    })

    document.querySelectorAll(".operator").forEach(operator => {
        operator.addEventListener("click", () => {
            operator = operator.id;
        })
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