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
    if (secondNumber === 0) {
        calculatorDisplay.innerHTML = "ERROR";
    } else {
        result = a / b;
    }
}

// Setup variables for operator function
let firstNumber = 0;
let operatorVariable;
let secondNumber = 0;
let firstNumberEntered;
let operatorHit = false;
let result = 0;
let equalsHit = false;

// Operator Function
const operatorFunction = function(operatorVariable, firstNumber, secondNumber) {
    operatorVariable(firstNumber, secondNumber);
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
            checkForFirstNumber();
            saveSecondNumber();
            checkForThirdNumber();
            break;
        case "eight":
            displayValue += "8";
            checkForOperatorHit();
            calculatorDisplay.innerHTML += 8;
            equalsHit = false;
            checkForFirstNumber();
            saveSecondNumber();
            checkForThirdNumber();
            break;
        case "nine":
            displayValue += "9";
            checkForOperatorHit();
            calculatorDisplay.innerHTML += 9;
            equalsHit = false;
            checkForFirstNumber();
            saveSecondNumber();
            checkForThirdNumber();
            break;
        case "four":
            displayValue += "4";
            checkForOperatorHit();
            calculatorDisplay.innerHTML += 4;     
            equalsHit = false;   
            checkForFirstNumber();
            saveSecondNumber();
            checkForThirdNumber();    
            break;
        case "five":
            displayValue += "5";
            checkForOperatorHit();
            calculatorDisplay.innerHTML += 5;
            equalsHit = false;
            checkForFirstNumber();
            saveSecondNumber();
            checkForThirdNumber();
            break;
        case "six":
            displayValue += "6";
            checkForOperatorHit();
            calculatorDisplay.innerHTML += 6;
            equalsHit = false;
            checkForFirstNumber();
            saveSecondNumber();
            checkForThirdNumber();
            break;
        case "one":
            displayValue += "1";
            checkForOperatorHit();
            calculatorDisplay.innerHTML += 1;
            equalsHit = false;
            checkForFirstNumber();
            saveSecondNumber();
            checkForThirdNumber();
            break;
        case "two":
            displayValue += "2";
            checkForOperatorHit();
            calculatorDisplay.innerHTML += 2;
            equalsHit = false;
            checkForFirstNumber();
            saveSecondNumber();
            checkForThirdNumber();
            break;
        case "three":
            displayValue += "3";
            checkForOperatorHit();
            calculatorDisplay.innerHTML += 3;
            equalsHit = false;
            checkForFirstNumber();
            saveSecondNumber();
            checkForThirdNumber();
            break;
        case "zero":
            displayValue += "0";
            checkForOperatorHit();
            calculatorDisplay.innerHTML += 0;
            equalsHit = false;
            checkForFirstNumber();
            saveSecondNumber();
            checkForThirdNumber();
            break;    
        default:
            displayValue = "0";
            checkForOperatorHit();
            calculatorDisplay.innerHTML += 0;
            equalsHit = false;
            checkForFirstNumber();
            saveSecondNumber();
            checkForThirdNumber();
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
    if (operatorHit === false) {
        return firstNumberEntered = false;
    } else {
        return firstNumberEntered = true;
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
///////////// ADD check for if secondNumber is actually 0
// Create a function to check if a third number has been entered
const checkForThirdNumber = function() {
    if (firstNumber != 0 && secondNumber != 0) {
        operatorFunction(operatorVariable, firstNumber, secondNumber);
        firstNumber = result;
        secondNumber = 0;
    }
}
///////////////////////////////////

// Create a function to check if a result has been computed
const checkForResult = function() {
    if (result != 0) {
        operatorFunction(operatorVariable, firstNumber, secondNumber);
        firstNumber = result;
        secondNumber = 0;
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
    //operatorFunction(operatorVariable, firstNumber, secondNumber);
    calculatorDisplay.innerHTML = Math.round(result * 1000000) / 1000000;
    firstNumber = result;
    secondNumber = 0;
    operatorVariable = 0;
    operatorHit = false;
    //result = 0;
    equalsHit = true;
    displayValue = 0;
    };

const divideButton = document.getElementById("divide-button").onclick = function(){
    operatorVariable = divide;
    checkForFirstNumber();
    //saveSecondNumber();
    displayValue = 0;
    operatorHit = true;
    //checkForResult();
    };

const multiplyButton = document.getElementById("multiply-button").onclick = function(){
    operatorVariable = multiply;
    checkForFirstNumber();
    //saveSecondNumber();
    displayValue = 0;
    operatorHit = true;
    //checkForResult();
};

const subtractButton = document.getElementById("subtract-button").onclick = function(){
    operatorVariable = subtract;
    checkForFirstNumber();
    //saveSecondNumber();
    displayValue = 0;
    operatorHit = true;
    //checkForResult();
};

const addButton = document.getElementById("add-button").onclick = function(){
    operatorVariable = add;
    checkForFirstNumber();
    //saveSecondNumber();
    displayValue = 0;
    operatorHit = true;
    //checkForResult();
 };