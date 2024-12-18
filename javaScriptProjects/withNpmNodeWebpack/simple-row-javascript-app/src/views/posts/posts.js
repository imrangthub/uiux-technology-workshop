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
  // jQuery API Call
  $(document).ready(function() {
    $('#jqueryButton').click(function() {
      // Make the API call using jQuery
      $.get('https://jsonplaceholder.typicode.com/posts', function(data) {
        // Display the results in the "jqueryResult" div
        $('#jqueryResult').html('<h2>Posts (jQuery):</h2>');
        data.forEach(function(post) {
          $('#jqueryResult').append(`<p><strong>${post.title}</strong></p><p>${post.body}</p><hr>`);
        });
      }).fail(function() {
        console.log('Error fetching data');
      });
    });
    // Clear Raw JavaScript posts
    $('#clearRawJs').click(function() {
      $('#rawJsResult').html('');  // Clears the posts
    });
    // Clear jQuery posts
    $('#clearJQuery').click(function() {
      $('#jqueryResult').html('');  // Clears the posts
    });
  });
  