//Variables for each of the parts of a calculator operation
let firstNumber = "";
let secondNumber = "";
let operation = "";
let total = "";

// Function to add two numbers
function add(num1, num2){
    return num1 + num2
}

// Function to subtract two numbers
function subtract(num1, num2){
    return num1 - num2
}

// Function to multiply two numbers
function multiply(num1, num2){
    return num1 * num2
}

// Function to divide two numbers
function divide(num1, num2){
    return num1 / num2
}

/*Function that takes an operator and 2 numbers 
and then calls one of the above functions on the numbers*/
function operate(operation, num1, num2) {
    
    switch (operation) {
        case '+':
            return add(num1, num2);
            
        case '-':
            return subtract(num1, num2);
    
        case '*':
            return multiply(num1, num2);
            
        case '/':
            return divide(num1, num2);
            
        default:
            return ERROR;
    }
}

// Function to save numbers entered by the user in a variable 
function recordNumber(input) {   
    firstNumber = firstNumber + input;
};

// Function to save the operator entered by the user in a variable
function recordOperator(input) {
    
    if (secondNumber == "") {
        // Move the recorded number into the secondNumber variable so it can be used later to operate
        secondNumber = firstNumber;
        firstNumber = "";
        operation = input;
    }else if (firstNumber == "") {
        operation = input;
    }else {
        // Calculate the total of the two stored numbers and move them to the secondNumber variable to free up space to record firstNumber
        total = operate(operation, +secondNumber, +firstNumber);
        secondNumber = total;
        firstNumber = secondNumber;
        operation = input;
    }
}

// Function to add a floating point number
function recordFloat(input) {
    if (firstNumber == "") {
        // Add a leading 0 if no number has been entered
        firstNumber = "0.";
    }else if (firstNumber.includes(".")) {
        // If current number already has a floating point, do nothing
    }else {
        firstNumber += ".";
    }
}

// Calculate the total of the operation if operators and operands are valid. If they are invalid, do nothing.
function recordTotal(input) {
    if (firstNumber != "" && secondNumber != "" && operation != "") {
        total = operate(operation, +secondNumber, +firstNumber);
        secondNumber = total;
        operation = "=";
        firstNumber = "";
    }
}

function clearMemory() {
    // Reset global variables when the user press clear 
    firstNumber = "";
    secondNumber = "";
    operation = "";
    total = ""; 
}

// Function to record the eventListeners and store them in a correct variable
function getInput(input) {
    let numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    let operators = ["+", "-", "*", "/"];
    let equal = ["=", "Enter"];
    let clear = ["clear"];
    let float = ["."];
    
    if (numbers.includes(input)) {
        // Record all the digits entered by the user to a single number
        recordNumber(input);
    }else if (float.includes(input)) {
        // Add a floating point number
        recordFloat(input);
    }else if (operators.includes(input)) {
        // Record the operator entered by the user in a global variable
        recordOperator(input);
    }else if (equal.includes(input)) {
        // Record the total of the operation
        recordTotal(input);
    }else if (clear.includes(input)) {
        clearMemory();
    }
}

// Function to update the content of the display section
function displayResults() {
    let currentNumber = "";
    
    if (total != "" && firstNumber == "" && operation == "=") {
        currentNumber = total;
    }else if (firstNumber != "") {
        currentNumber = firstNumber;
    }
    
    // Avoid overflow of long numbers;
    currentNumber = currentNumber.toString();

    if (currentNumber.length > 8) {
        currentNumber = currentNumber.slice(0, 8);
    }
    
    // Update the text content
    document.querySelector("#current-number").textContent =
        currentNumber;
    document.querySelector("#top-row").textContent =
        previousNumber;
    document.querySelector("#operator").textContent =
        operation;
    
    if (currentNumber == total && operation == "=") {
        document.querySelector("#top-row").textContent = ""; 
    }
}

buttons = document.querySelectorAll("button");

buttons.forEach(button => {
    button.addEventListener("click", (event) => {
        let input = event.target.value;
        getInput(input);
        displayResults();
    }); 
});

// Keyboard inputs
document.addEventListener("keypress", (event) => {
    let input = event.key;
    getInput(input);
    displayResults();
});