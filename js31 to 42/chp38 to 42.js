function power(a, b) {
    return Math.pow(a, b);
  }
  
  // Example usage
  const result = power(2, 3); // 2 raised to the power of 3 = 8
  console.log(result); // Output: 8
  
  /////////////////////////////////////
  function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
      return true; // It's a leap year
    } else {
      return false; // It's not a leap year
    }
  }
  
  // Example usage
  const yearToCheck = 2024;
  if (isLeapYear(yearToCheck)) {
    console.log(yearToCheck + " is a leap year.");
  } else {
    console.log(yearToCheck + " is not a leap year.");
  }

  //////////////////////////////////////

  function calculateTriangleArea(a, b, c) {
    // Calculate the semi-perimeter (s)
    const s = (a + b + c) / 2;
  
    // Calculate the area using Heron's formula
    const area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
  
    return area;
  }
  
  // Example usage with side lengths a, b, and c
  const sideA = 5;
  const sideB = 6;
  const sideC = 7;
  
  const triangleArea = calculateTriangleArea(sideA, sideB, sideC);
  console.log("The area of the triangle is: " + triangleArea);

  ///////////////////////////////////////////////

  function calculateAverage(subject1, subject2, subject3) {
    return (subject1 + subject2 + subject3) / 3;
  }
  
  function calculatePercentage(totalMarks, maxMarks) {
    return (totalMarks / maxMarks) * 100;
  }
  
  function mainFunction(subject1, subject2, subject3, maxMarksPerSubject) {
    const averageMarks = calculateAverage(subject1, subject2, subject3);
    const totalMarks = subject1 + subject2 + subject3;
    const percentage = calculatePercentage(totalMarks, maxMarksPerSubject * 3);
  
    console.log("Average Marks:", averageMarks);
    console.log("Percentage:", percentage, "%");
  }
  
  // Example usage
  const subject1Marks = 80;
  const subject2Marks = 75;
  const subject3Marks = 90;
  const maxMarksPerSubject = 100;
  
  mainFunction(subject1Marks, subject2Marks, subject3Marks, maxMarksPerSubject);

  ///////////////////////////////////////////////////

  function customIndexOf(str, char) {
    for (let i = 0; i < str.length; i++) {
      if (str[i] === char) {
        return i;
      }
    }
    return -1; // Character not found
  }
  
  // Example usage
  const inputString = "Hello, world!";
  const searchChar = "o";
  
  const index = customIndexOf(inputString, searchChar);
  if (index !== -1) {
    console.log(`The character "${searchChar}" is found at index ${index}.`);
  } else {
    console.log(`The character "${searchChar}" was not found in the string.`);
  }

///////////////////////////////////////////////////////////

function removeVowels(sentence) {
    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    let result = "";
  
    for (let i = 0; i < sentence.length; i++) {
      if (!vowels.includes(sentence[i])) {
        result += sentence[i];
      }
    }
  
    return result;
  }
  
  // Example usage
  const inputSentence = "Hello, this is a sample sentence.";
  const sentenceWithoutVowels = removeVowels(inputSentence);
  console.log(sentenceWithoutVowels);

/////////////////////////////////////////////////////////// 

function countSuccessiveVowels(text) {
    text = text.toLowerCase(); // Convert text to lowercase for easier comparison
    let count = 0;
  
    for (let i = 0; i < text.length - 1; i++) {
      const currentChar = text[i];
      const nextChar = text[i + 1];
  
      switch (currentChar) {
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':
          if (nextChar === 'a' || nextChar === 'e' || nextChar === 'i' || nextChar === 'o' || nextChar === 'u') {
            count++;
          }
          break;
        default:
          
      }
    }
  
    return count;
  }
  
  // Example usage
  const sentence = "This is an example sentence containing some vowels.";
  const numberOfSuccessiveVowels = countSuccessiveVowels(sentence);
  console.log("Number of occurrences of successive vowels:", numberOfSuccessiveVowels);
  
//////////////////////////////////////////////////////

function convertToMeters(kilometers) {
    return kilometers * 1000;
  }
  
  function convertToFeet(kilometers) {
    return kilometers * 3280.84;
  }
  
  function convertToInches(kilometers) {
    return kilometers * 39370.1;
  }
  
  function convertToCentimeters(kilometers) {
    return kilometers * 100000;
  }
  
  function printConversions(kilometers) {
    const meters = convertToMeters(kilometers);
    const feet = convertToFeet(kilometers);
    const inches = convertToInches(kilometers);
    const centimeters = convertToCentimeters(kilometers);
  
    console.log(`Distance in meters: ${meters} meters`);
    console.log(`Distance in feet: ${feet} feet`);
    console.log(`Distance in inches: ${inches} inches`);
    console.log(`Distance in centimeters: ${centimeters} centimeters`);
  }
  
  // Example usage
  const distanceInKilometers = parseFloat(prompt("Enter the distance between two cities in kilometers:"));
  if (!isNaN(distanceInKilometers)) {
    printConversions(distanceInKilometers);
  } else {
    console.log("Invalid input. Please enter a valid number.");
  }

///////////////////////////////////////////////////////////////  

function convertToMeters(kilometers) {
  return kilometers * 1000;
}

function convertToFeet(kilometers) {
  return kilometers * 3280.84;
}

function convertToInches(kilometers) {
  return kilometers * 39370.1;
}

function convertToCentimeters(kilometers) {
  return kilometers * 100000;
}

function printConversions(kilometers) {
  const meters = convertToMeters(kilometers);
  const feet = convertToFeet(kilometers);
  const inches = convertToInches(kilometers);
  const centimeters = convertToCentimeters(kilometers);

  console.log(`Distance in meters: ${meters} meters`);
  console.log(`Distance in feet: ${feet} feet`);
  console.log(`Distance in inches: ${inches} inches`);
  console.log(`Distance in centimeters: ${centimeters} centimeters`);
}

// Example usage
const distanceInKilometersIs = parseFloat(prompt("Enter the distance between two cities in kilometers:"));
if (!isNaN(distanceInKilometersIs)) {
  printConversions(distanceInKilometersIs);
} else {
  console.log("Invalid input. Please enter a valid number.");
}
//////////////////////////////////////////////////////////////////////////

function calculateOvertimePay(hoursWorked) {
    const regularHours = 40; // Regular working hours
    const hourlyRate = 12.00; // Overtime pay rate per hour
  
    if (hoursWorked > regularHours) {
      const overtimeHours = hoursWorked - regularHours;
      const overtimePay = overtimeHours * hourlyRate;
      return overtimePay;
    } else {
      return 0;
    }
  }
  
  // Example usage
  const hoursWorked = parseFloat(prompt("Enter the number of hours worked:"));
  
  if (!isNaN(hoursWorked)) {
    const overtimePay = calculateOvertimePay(hoursWorked);
    console.log(`Overtime pay: Rs. ${overtimePay.toFixed(2)}`);
  } else {
    console.log("Invalid input. Please enter a valid number of hours.");
  }