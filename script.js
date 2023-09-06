 
const seconds = document.querySelector(".seconds .number"),
minutes = document.querySelector(".minutes .number"),
hours = document.querySelector(".hours .number"),
days = document.querySelector(".days .number");

let secValue,
minValue,
hourValue,
dayValue;

// Get the initial values of the counters from localStorage
secValue = Number(localStorage.getItem("secValue") || 11);
minValue = Number(localStorage.getItem("minValue") || 2);
hourValue = Number(localStorage.getItem("hourValue") || 2);
dayValue = Number(localStorage.getItem("dayValue") || 9);

const timeFunction = setInterval(() => {
secValue--;

if (secValue === 0) {
  minValue--;
  secValue = 60;
}
if (minValue === 0) {
  hourValue--;
  minValue = 60;
}
if (hourValue === 0) {
  dayValue--;
  hourValue = 24;
}

if (dayValue === 0) {
  clearInterval(timeFunction);
}

// Save the current values of the counters to localStorage
localStorage.setItem("secValue", secValue);
localStorage.setItem("minValue", minValue);
localStorage.setItem("hourValue", hourValue);
localStorage.setItem("dayValue", dayValue);

seconds.textContent = secValue < 10 ? `0${secValue}` : secValue;
minutes.textContent = minValue < 10 ? `0${minValue}` : minValue;
hours.textContent = hourValue < 10 ? `0${hourValue}` : hourValue;
days.textContent = dayValue < 10 ? `0${dayValue}` : dayValue;
}, 1000); //1000ms = 1s


// Function to validate the form
function validateForm() {
  var email = document.getElementById("email").value;

  if (email === "") {
      alert("Hi There! Fill in with your email address");
      return false; // Prevent form submission
  }

  // Additional email validation
  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email.match(emailPattern)) {
      alert("Please enter a valid email address.");
      return false; // Prevent form submission
  }

  return true; // Allow form submission
}


