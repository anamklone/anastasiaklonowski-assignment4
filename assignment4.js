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
      console.log(result);
      if (result.code == 8 && result.status == 200) {
        data = result.data;
        console.log(data);
        interests = data.interests;
        programming = data.programming;
        console.log(interests);
        console.log(programming);
      }
    });
  });
  
  $('.flexsearch-input').on('keyup', function() {
    var input = $('.flexsearch-input').val();
    console.log(input);
  });
})();