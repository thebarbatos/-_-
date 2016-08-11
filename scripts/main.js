alert('hello!');

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setDates() {
  var myDate = prompt('Please enter date.');
  localStorage.setItem('date', myDate);
  myHeading.innerHTML = '1' + myDate;
}
if(!localStorage.getItem('date')) {
  setDates();
} 
else {
  var storeddate = localStorage.getItem('date');
  myHeading.innerHTML = '1' + storedDate;
}
myButton.onclick = function() {
  setDates();
}




