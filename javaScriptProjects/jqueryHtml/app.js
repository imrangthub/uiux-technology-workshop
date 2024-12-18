// This is the JavaScript file that will manipulate the HTML content using jQuery

// When the document is ready, run the function
$(document).ready(function() {

  // Function to update the greeting message
  $('#updateButton').click(function() {
    $('#greeting').text('Hello World From Button Click');
  });

  // Function to clear the greeting message
  $('#clearButton').click(function() {
    $('#greeting').text('');  // Clears the message
  });

  // Function to show an alert
  $('#alertButton').click(function() {
    alert('This is an Alert, by jQuery ClickEvent!');
  });


  // jQuery API Call
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

