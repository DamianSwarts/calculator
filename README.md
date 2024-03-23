# Calculator Project

This project is a simple calculator application built with JavaScript, HTML, and CSS. It is the final project of The Odin Project's curriculum.

## Project Description

The calculator has the following functionalities:

- Basic arithmetic operations: addition, subtraction, multiplication, and division.
- The ability to chain multiple operations together.
- Handling both mouse clicks and keyboard inputs.
- Displaying the results of calculations.

## Code Overview

The JavaScript code consists of several functions that handle the logic of the calculator:

- `add(num1, num2)`, `subtract(num1, num2)`, `multiply(num1, num2)`, `divide(num1, num2)`: These functions perform the basic arithmetic operations.
- `operate(operation, num1, num2)`: This function takes an operator and two numbers, and calls the appropriate arithmetic function.
- `recordNumber(input)`, `recordOperator(input)`, `recordFloat(input)`, `recordTotal(input)`: These functions handle the recording of user input into the appropriate variables.
- `clearMemory()`: This function resets the global variables when the user presses clear.
- `getInput(input)`: This function records the eventListeners and stores them in the correct variable.
- `displayResults()`: This function updates the content of the display section.

The HTML and CSS files contain the structure and styling for the calculator, respectively.

Please note that this is a basic implementation of a calculator and does not handle more complex mathematical operations or error handling.

## Usage

To use the calculator, simply enter the numbers and operators by clicking the buttons on the calculator or using your keyboard. The result of the operation will be displayed on the calculator's screen.

## Project Status

This project is complete and fulfills the requirements of The Odin Project's curriculum.