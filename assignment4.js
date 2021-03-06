// The anonymous function below will fire on page load

// Some things to consider
// $.ajax(); to make your requests a little easier. Or the vanilla js way, it's up to you.
// $.on(); for event handling
// Remember, selecting elements in jQuery is like selecting them in CSS
// You'll probably have to manipulate some strings
// some jQuery functions to help display results
// $.show(), $.hide(), $.slideup(), $.slidedown(), $.fadein(), $.fadeout()
// Add content from requests with something like
// $.html(), $.text(), etc.
// keyup events could be helpful to get value of field as the user types

(function() {
  // Magic!
  console.log('Keepin\'n it clean with an external script!');
  
  var data = null;
  var interests = null;
  var programming = null;
  
  $(window).on('load', function() {
    $.getJSON("http://www.mattbowytz.com/simple_api.json?data=all", function(result) {
      if (result.code == 8 && result.status == 200) {
        data = result.data;
        interests = data.interests;
        programming = data.programming;
      }
    });
  });
  
  $('.flexsearch-input').on('keyup', function() {
    $('#flexsearch-popup').html('');
    var input = $('.flexsearch-input').val();
    if (data != null && interests != null & programming != null) {
      found = false;
      if (input.length > 0) {
        $('#flexsearch-popup').show();
        for (i = 0; i < interests.length; i++) {
          if (interests[i].substring(0, input.length).toLowerCase() == input.toLowerCase()) {
            $('#flexsearch-popup').append('<li><a href="http://google.com/#q=' + interests[i].toLowerCase().replace(' ', '+') + '" target="_blank">' + interests[i] + '</a></li>');
            found = true;
          }
        }
        for (i = 0; i < programming.length; i++) {
          if (programming[i].substring(0, input.length).toLowerCase() == input.toLowerCase()) {
            $('#flexsearch-popup').append('<li><a href="http://google.com/#q=' + programming[i].toLowerCase().replace(' ', '+') + '" target="_blank">' + programming[i] + '</a></li>');
            found = true;
          }
        }
      } else {
        $('#flexsearch-popup').hide();
      }
      if (!found) {
        $('#flexsearch-popup').hide();
      }
    }
  });
})();