function displayCurrentDateTime() {
    const now = new Date();
    const dateString = now.toLocaleDateString(); 
    const timeString = now.toLocaleTimeString(); 
    
    const dateTimeString = `${dateString} ${timeString}`;
    
   
    const dateTimeElement = document.getElementById("currentDateTime");
    if (dateTimeElement) {
        dateTimeElement.textContent = dateTimeString;
    }
}


window.onload = displayCurrentDateTime;

////////////////////////////////////////////

function greetUser(firstName, lastName) {
    const fullName = `${firstName} ${lastName}`;
    const greeting = `Hello, ${fullName}! Welcome!`;
    return greeting;
}

// Example usage
const firstName = prompt("Enter your first name:");
const lastName = prompt("Enter your last name:");

const userGreeting = greetUser(firstName, lastName);
console.log(userGreeting);

/////////////////////////////////////////////
function addNumbers() {
    const firstNumber = parseFloat(prompt("Enter the first number:"));
    const secondNumber = parseFloat(prompt("Enter the second number:"));

    if (isNaN(firstNumber) || isNaN(secondNumber)) {
        return "Invalid input. Please enter valid numbers.";
    }

    const sum = firstNumber + secondNumber;
    return sum;
}

// Example usage
const result = addNumbers();
console.log("The sum is:", result);
///////////////////////////////////////////////////////

function calculate(num1, num2, operator) {
    let result;

    switch (operator) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            if (num2 !== 0) {
                result = num1 / num2;
            } else {
                return "Division by zero is not allowed.";
            }
            break;
        default:
            return "Invalid operator.";
    }

    return result;
}

// Example usage
const num1 = parseFloat(prompt("Enter the first number:"));
const num2 = parseFloat(prompt("Enter the second number:"));
const operator = prompt("Enter the operator (+, -, *, /):");

const results = calculate(num1, num2, operator);

// Display the result in the browser
const resultElement = document.getElementById("results");
if (resultElement) {
    resultElement.textContent = `Result: ${results}`;
} else {
    console.log("Result:", results);
}

/////////////////////////////////////

function squareNumber(number) {
    return number * number;
}

// Example usage
const inputNumber = parseFloat(prompt("Enter a number:"));
const squaredValue = squareNumber(inputNumber);
console.log(`The square of ${inputNumber} is ${squaredValue}`);

/////////////////////////////////////////////////
function factorial(number) {
    if (number === 0 || number === 1) {
        return 1;
    } else {
        return number * factorial(number - 1);
    }
}

// Examle usage

const inputNumbers = parseInt(prompt("Enter a number:"));
if (inputNumbers < 0) {
    console.log("Factorial is not defined for negative numbers.");
} else {
    const result = factorial(inputNumbers);
    console.log(`The factorial of ${inputNumbers} is ${result}`);
}
///////////////////////////////////////////////////


function displayCounting(start, end) {
    if (start <= end) {
        for (let i = start; i <= end; i++) {
            document.write(i + "<br>");
        }
    } else {
        for (let i = start; i >= end; i--) {
            document.write(i + "<br>");
        }
    }
}

// Examle usage
const startNumber = parseInt(prompt("Enter the start number:"));
const endNumber = parseInt(prompt("Enter the end number:"));

displayCounting(startNumber, endNumber);

/////////////////////////////////////////
function calculateHypotenuse(base, perpendicular) {
    function calculateSquare(side) {
        return side * side;
    }

    const baseSquare = calculateSquare(base);
    const perpendicularSquare = calculateSquare(perpendicular);

    const hypotenuseSquare = baseSquare + perpendicularSquare;
    const hypotenuse = Math.sqrt(hypotenuseSquare);

    return hypotenuse;
}

// Examle usage
const baseLength = parseFloat(prompt("Enter the length of the base:"));
const perpendicularLength = parseFloat(prompt("Enter the length of the perpendicular:"));

const hypotenuseLength = calculateHypotenuse(baseLength, perpendicularLength);
console.log(`The length of the hypotenuse is: ${hypotenuseLength}`);
///////////////////////////////////////


function calculateRectangleAreaWithValues(width, height) {
    return width * height;
}


function calculateRectangleAreaWithVariables() {
    const width = arguments[0];
    const height = arguments[1];
    return width * height;
}

const areaWithValues = calculateRectangleAreaWithValues(5, 8);
console.log(`Area with values: ${areaWithValues}`);


const widthVariable = 4;
const heightVariable = 10;
const areaWithVariables = calculateRectangleAreaWithVariables(widthVariable, heightVariable);
console.log(`Area with variables: ${areaWithVariables}`);
/////////////////////////////////////

function isPalindrome(str) {
    
    const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    

    const reversedStr = cleanedStr.split('').reverse().join('');
    return cleanedStr === reversedStr;
}

// Example usage
const inputString = prompt("Enter a string:");
const resultOfPalindrome = isPalindrome(inputString);

if (resultOfPalindrome) {
    console.log(`${inputString} is a palindrome.`);
} else {
    console.log(`${inputString} is not a palindrome.`);
}
///////////////////////////////////////

function capitalizeWords(str) {
    const words = str.split(" ");
    const capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
    return capitalizedWords.join(" ");
}

// Example usage
const writeString = prompt("Enter a string:");
const result1 = capitalizeWords(writeString);
console.log("Capitalized: " + result);

///////////////////////////////////////////////
function findLongestWord(str) {
    const words = str.split(" ");
    let longestWord = "";

    for (const word of words) {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    }

    return longestWord;
}

// Example usage
const String = prompt("Enter a string:");
const longestWord = findLongestWord(String);
console.log("Longest word: " + longestWord);

///////////////////////////////////////////////////////////

function countLetterOccurrences(str, letter) {
    let count = 0;

    for (const char of str) {
        if (char === letter) {
            count++;
        }
    }

    return count;
}

// Example usage
const input_String = 'JSResourceS.com';
const targetLetter = 'o';

const occurrences = countLetterOccurrences(input_String, targetLetter);
console.log(`The letter '${targetLetter}' appears ${occurrences} times in the string.`);

/////////////////////////////////////////////////////////


function calcCircumference(radius) {
    const circumference = 2 * Math.PI * radius;
    return `The circumference is ${circumference.toFixed(2)}`;
}


function calcArea(radius) {
    const area = Math.PI * radius ** 2;
    return `The area is ${area.toFixed(2)}`;
}

// Example usage
const circleRadius = parseFloat(prompt("Enter the radius of the circle:"));

const circumferenceResult = calcCircumference(circleRadius);
console.log(circumferenceResult);

const areaResult = calcArea(circleRadius);
console.log(areaResult);