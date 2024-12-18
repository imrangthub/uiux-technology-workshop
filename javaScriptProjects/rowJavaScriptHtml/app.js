// This is the JavaScript file that will manipulate the HTML content

// Get the elements by their IDs
const greetingElement = document.getElementById('greeting');
const clearButton = document.getElementById('clearButton');
const alertButton = document.getElementById('alertButton');
const updateButton = document.getElementById('updateButton');
const rawJsResult = document.getElementById('rawJsResult');
const clearPostButton = document.getElementById('clearPostButton');

// Function to show an alert
updateButton.addEventListener('click', function() {
  greetingElement.innerHTML = 'Hello World From Button Clieck';
});

// Function to clear the greeting message
clearButton.addEventListener('click', function() {
  greetingElement.innerHTML = '';  // Clears the message
});

clearPostButton.addEventListener('click', function() {
  rawJsResult.innerHTML = '';  // Clears the message
});


// Function to show an alert
alertButton.addEventListener('click', function() {
  alert('This is a Alert, by Row JavaScript ClickEvent !');
});


// Raw JavaScript API Call
document.getElementById('rawJsButton').addEventListener('click', function() {
  // Make the API call using Fetch (Raw JavaScript)
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => {
      // Display the results in the "rawJsResult" div
      const resultContainer = document.getElementById('rawJsResult');
      resultContainer.innerHTML = '<h2>Posts (Raw JavaScript):</h2>';
      data.forEach(post => {
        resultContainer.innerHTML += `<p><strong>${post.title}</strong></p><p>${post.body}</p><hr>`;
      });
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
});

