document.addEventListener("DOMContentLoaded", () => {
    // First number, second number and operator between them
    let a;
    let b;
    let operator = "";
    let isOperator = false;
    let isEqual = false;
    const display = document.querySelector(".display");


    // Clears the display
    document.querySelector(".clear").addEventListener("click", clear)

    document.querySelectorAll(".number").forEach(number => {
        number.addEventListener("click", () => {
            AddNumber(number);
        })
    })

    // Save operator if clicked
    document.querySelectorAll(".operator").forEach(button => {
        button.addEventListener("click", () => {
            AddOperator(button);
        })
    })

    // Equal sign pressed
    document.querySelector(".equal").addEventListener("click", equalize)

    // Using dot to type decimal numbers
    document.querySelector(".dot").addEventListener("click", addDot)

    // Remove the last character
    document.querySelector(".backspace").addEventListener("click", removeLast)


    // Handle keyboards events
    //document.addEventListener("keaydown", )




    // Clears everything
    function clear () {
        display.textContent = "0";
        a = 0;
        b = 0;
        let isOperator = false;
        let isEqual = false;
        let operator = "";
    }


    // Add operator when clicked
    function AddOperator (button) {
        
        if (operator !== "" && !isOperator) {
            b = display.textContent;
            evaluate();
        }
        a = display.textContent;
        operator = button.id;
        isOperator = true;
    }


    // Add number to display when pressed
    function AddNumber (number) {
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
    }


    // Show the result when equal sign pressed
    function equalize () {
        if (operator !== "" && !isOperator) {

            b = display.textContent;
            evaluate();
            // Reset
            isEqual = true;
            a = 0;
            b = 0;
            operator = "";
        }
    }


    function evaluate () {
        // Save check against dividing by zero
        if (b != 0) {
            display.textContent = Math.round(operate(Number(a), operator, Number(b)) * 1000) / 1000;
        } else {
            display.textContent = operate(Number(a), operator, Number(b));
        }
    }


    // Add decimal dot when clicked
    function addDot () {
        // Allow to type dot only if not on screen
        if (!display.textContent.includes('.') || isOperator || isEqual) {
            // If operator pressed, new line
            if (isOperator || isEqual) {
                display.textContent = "0";
                isOperator = false;
                isEqual = false;
            }
            display.textContent += ".";
        }
    }


    // Removes last character
    function removeLast () {

        display.textContent = display.textContent.slice(0, -1);
        // If not empty display
        if (display.textContent == "") {
            display.textContent = "0";
        }
    }
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