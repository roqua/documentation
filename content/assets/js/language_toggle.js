var switchLanguage = function(language){
  newLocation = window.location.toString().replace(/\/nl\/|\/en\//, language);
  window.location = newLocation;
};
$(document).on('click', '#en-lang', function() { switchLanguage('/en/') });
$(document).on('click', '#nl-lang', function() { switchLanguage('/nl/') });
