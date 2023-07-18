const datebox = document.getElementById('date');
const currentDate = new Date();

// Get the individual components of the date
var year = currentDate.getFullYear();
var month = currentDate.getMonth() + 1; // Note: Month starts from 0
var day = currentDate.getDate();

// Format the date as a string
var formattedDate = year + '-' + month + '-' + day;
datebox.style = fontFamily = "Verdana";
datebox.innerHTML = formattedDate;
console.log(formattedDate);