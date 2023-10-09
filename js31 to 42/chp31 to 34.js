function updateDateTime() {
    const now = new Date();
    const datetimeElement = document.getElementById('datetime');
    datetimeElement.textContent = now.toLocaleString();}

  updateDateTime();

  // Update the date and time every second
  setInterval(updateDateTime, 1000);
////////////////////////////////////////////

// Array of month names
const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  
  
  const currentDate = new Date();
  
 
  const currentMonthIndex = currentDate.getMonth();
  const currentMonthName = monthNames[currentMonthIndex];
  
  alert(`Current Month: ${currentMonthName}`);
//////////////////////////////////////////////////////
// Array of day names
const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];


const current_Date = new Date();


const currentDayIndex = current_Date.getDay();
const currentDayName = dayNames[currentDayIndex];


alert(`Current Day: ${currentDayName}`);

//////////////////////////////////////////
// Array of day names
const daysName = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];


const cDate = new Date();


const cDayIndex = cDate.getDay();
const cDayName = daysName[cDayIndex];


if (cDayName === "Saturday" || cDayName === "Sunday") {
  alert("It's Fun day");
} else {
  alert("It's not Fun day");
}
//////////////////////////////////////////
// Get the current date
const currentDate1 = new Date();

const currentDayOfMonth = currentDate1.getDate();


if (currentDayOfMonth < 16) {
  alert("First fifteen days of the month");
} else {
  alert("Last days of the month");
}
/////////////////////////////
const recentDate = new Date();
const minutesSince1970 = Math.floor((recentDate.getTime() - recentDate.getTimezoneOffset() * 60 * 1000) / (60 * 1000));

console.log(`Minutes since midnight, Jan. 1, 1970: ${minutesSince1970}`);
////////////////////////////////////////////////

const name = new Date();
const currentHour = name.getHours();

if (currentHour < 12) {
  alert("It's AM");
} else {
  alert("It's PM");
}
///////////////////////////////////////////

const laterDate = new Date(2020, 11, 0);

console.log("Last day of the last month of 2020:", laterDate);
////////////////////////////////////////////


const ramadanStartDate = new Date(2015, 5, 18); 


const currentDates = new Date();


const timeDifference = currentDates - ramadanStartDate;


const daysPassed = Math.floor(timeDifference / (1000 * 60 * 60 * 24));


alert(`Number of days passed since 1st Ramadan: ${daysPassed} days`);
/////////////////////////////////////////


const beginningOf2015 = new Date(2015, 0, 1); 


const referenceDate = new Date(); 


const timeDifferenceInSeconds = Math.floor((referenceDate - beginningOf2015) / 1000);

document.write(`Seconds elapsed between the reference date and the beginning of 2015: ${timeDifferenceInSeconds} seconds`);

//////////////////////////////////////////////////////


const now = new Date();

const currentHours = now.getHours();


nowDate.setHours(currentHours + 1);


document.write(`Original Date: ${nowDate}<br>`);
document.write(`Date an Hour Ahead: ${nowDate}`);
////////////////////////////////////////////////////


const todayDate = new Date();


alert(`Original Date: ${todayDate}`);


todayDate.setFullYear(todayDate.getFullYear() - 100);


console.log(`Date 100 Years Back: ${todayDate}`);

/////////////////////////////
const userAge = prompt("Please enter your age:");


const currentYear = new Date().getFullYear();
const birthYear = currentYear - parseInt(userAge);


document.write(`Your birth year is: ${birthYear}`);
///////////////////////////////////

// Customer details
const customerName = prompt("Enter customer name:");
const currentMonth = prompt("Enter current month:");
const numberOfUnits = parseFloat(prompt("Enter number of units consumed:"));
const chargesPerUnit = parseFloat(prompt("Enter charges per unit:"));
const latePaymentSurcharge = parseFloat(prompt("Enter late payment surcharge:"));


const netAmountPayable = numberOfUnits * chargesPerUnit;

const grossAmountPayable = netAmountPayable + latePaymentSurcharge;

document.write("<h2>K-Electric Bill</h2>");
document.write(`<p><strong>Customer Name:</strong> ${customerName}</p>`);
document.write(`<p><strong>Current Month:</strong> ${currentMonth}</p>`);
document.write(`<p><strong>Number of Units:</strong> ${numberOfUnits.toFixed(2)}</p>`);
document.write(`<p><strong>Charges per Unit:</strong> ${chargesPerUnit.toFixed(2)}</p>`);
document.write(`<p><strong>Net Amount Payable (within Due Date):</strong> ${netAmountPayable.toFixed(2)}</p>`);
document.write(`<p><strong>Late Payment Surcharge:</strong> ${latePaymentSurcharge.toFixed(2)}</p>`);
document.write(`<p><strong>Gross Amount Payable (after Due Date):</strong> ${grossAmountPayable.toFixed(2)}</p>`);

