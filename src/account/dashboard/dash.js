// Get the values from localStorage
const name = localStorage.getItem('signup-name');
const email = localStorage.getItem('email');

// Select the <h3> elements by their IDs
const nameElement = document.getElementById('user-name');
const emailElement = document.getElementById('user-email');

// Set the text content of the <h3> elements with the corresponding values
nameElement.textContent = name;
emailElement.textContent = email;