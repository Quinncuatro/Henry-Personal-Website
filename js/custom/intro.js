$(document).ready(function() {
// Type out strings on screen
  $(".command").typed({
    strings: [" whoami"],
    typeSpeed: 60,
    loop: false,
  }).delay(1775).queue(function(next) {
    $(".ls").removeClass('hide');
  });
});
