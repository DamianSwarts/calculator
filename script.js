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
function operate(operator, num1, num2) {
    
    switch (operator) {
        case '+':
            return add(num1, num2);
            
        case '-':
            return substract(num1, num2);
    
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