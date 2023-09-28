// Add Function
const add = function(a, b) {
	result = a + b;
};
// Subtract Function
const subtract = function(a, b) {
	result = a - b;
};
// Multiply Function
const multiply = function(a, b) {
    result = a * b;
  };
// Divide Function
const divide = function(a, b) {
    result = a / b;
}

// Setup variables for operator function
let firstNumber = 0;
let operatorVariable;
let secondNumber = 0;
let firstNumberEntered;
let operatorHit = false;
let result;
let equalsHit = false;

// Operator Function
const operatorFunction = function(operatorVariable, firstNumber, secondNumber) {
    operatorVariable(firstNumber, secondNumber);
    calculatorDisplay.innerHTML = result;
}

// Check if operator has been hit function
const checkForOperatorHit = function() {
    if (operatorHit === true) {
        calculatorDisplay.textContent = "";
        secondNumber = parseInt(displayValue);
    } else if (equalsHit === true) {
        calculatorDisplay.textContent = "";
    }
}

// Setup variables for display function
let displayValue = 0;

// Display Numbers Function
const displayFunction = function(buttonPushed) {
    // Find display value from button pushed and display it in the calculator display div
    switch (buttonPushed) {
        case "seven":
            displayValue += "7";
            checkForOperatorHit();
            calculatorDisplay.innerHTML += 7;
            equalsHit = false;
            break;
        case "eight":
            displayValue += "8";
            checkForOperatorHit();
            calculatorDisplay.innerHTML += 8;
            equalsHit = false;
            break;
        case "nine":
            displayValue += "9";
            checkForOperatorHit();
            calculatorDisplay.innerHTML += 9;
            equalsHit = false;
            break;
        case "four":
            displayValue += "4";
            checkForOperatorHit();
            calculatorDisplay.innerHTML += 4;     
            equalsHit = false;       
            break;
        case "five":
            displayValue += "5";
            checkForOperatorHit();
            calculatorDisplay.innerHTML += 5;
            equalsHit = false;
            break;
        case "six":
            displayValue += "6";
            checkForOperatorHit();
            calculatorDisplay.innerHTML += 6;
            equalsHit = false;
            break;
        case "one":
            displayValue += "1";
            checkForOperatorHit();
            calculatorDisplay.innerHTML += 1;
            equalsHit = false;
            break;
        case "two":
            displayValue += "2";
            checkForOperatorHit();
            calculatorDisplay.innerHTML += 2;
            equalsHit = false;
            break;
        case "three":
            displayValue += "3";
            checkForOperatorHit();
            calculatorDisplay.innerHTML += 3;
            equalsHit = false;
            break;
        case "zero":
            displayValue += "0";
            checkForOperatorHit();
            calculatorDisplay.innerHTML += 0;
            equalsHit = false;
            break;    
        default:
            displayValue = "0";
            checkForOperatorHit();
            calculatorDisplay.innerHTML += 0;
            equalsHit = false;
            break;
    }
};

// Create dom element for calculator display
let calculatorDisplay = document.getElementById("calculator-display");

// Create dom elements for each number button and trigger display function when clicked
const sevenButton = document.getElementById("seven").onclick = function(){
    displayFunction("seven");};
const eightButton = document.getElementById("eight").onclick = function(){ 
    displayFunction("eight");};
const nineButton = document.getElementById("nine").onclick = function(){ 
    displayFunction("nine");};
const fourButton = document.getElementById("four").onclick = function(){      
    displayFunction("four");};
const fiveButton = document.getElementById("five").onclick = function(){    
    displayFunction("five");};
const sixButton = document.getElementById("six").onclick = function(){ 
    displayFunction("six");};
const oneButton = document.getElementById("one").onclick = function(){ 
    displayFunction("one");};
const twoButton = document.getElementById("two").onclick = function(){ 
    displayFunction("two");};
const threeButton = document.getElementById("three").onclick = function(){ 
    displayFunction("three");};
const zeroButton = document.getElementById("zero").onclick = function(){ 
    displayFunction("zero");};

// Create a function to check if first number has been entered
const checkForFirstNumber = function() {
    if (firstNumber != 0) {
        return firstNumberEntered = true;
    } else {
        return firstNumberEntered = false;
    }
}

// Create a function to save second number
const saveSecondNumber = function() {
    if (firstNumberEntered === true) {
        secondNumber = parseInt(displayValue);
    } else {
        firstNumber = parseInt(displayValue);
    }
}

// Create dom elements for each operator button and trigger the applicable operator function when clicked
const clearButton = document.getElementById("clear-button").onclick = function(){ 
    calculatorDisplay.textContent = "";
    firstNumber = 0;
    secondNumber = 0;
    operatorVariable = 0;
    result = 0;
    equalsHit = true;
    displayValue = 0;
};

const equalsButton = document.getElementById("equals-button").onclick = function(){
    operatorFunction(operatorVariable, firstNumber, secondNumber);
    firstNumber = 0;
    secondNumber = 0;
    operatorVariable = 0;
    operatorHit = false;
    result = 0;
    equalsHit = true;
    displayValue = 0;
    };

const divideButton = document.getElementById("divide-button").onclick = function(){
    operatorVariable = divide;
    checkForFirstNumber();
    saveSecondNumber();
    displayValue = 0;
    operatorHit = true;
    };

const multiplyButton = document.getElementById("multiply-button").onclick = function(){
    operatorVariable = multiply;
    checkForFirstNumber();
    saveSecondNumber();
    displayValue = 0;
    operatorHit = true;};

const subtractButton = document.getElementById("subtract-button").onclick = function(){
    operatorVariable = subtract;
    checkForFirstNumber();
    saveSecondNumber();
    displayValue = 0;
    operatorHit = true;};

const addButton = document.getElementById("add-button").onclick = function(){
    operatorVariable = add;
    checkForFirstNumber();
    saveSecondNumber();
    displayValue = 0;
    operatorHit = true;
    };