$(document).ready(function() {

// Get current date for "login" info
var days = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
var months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

function zerosAreHard(n) {
  if (n < 10) {
    n = "0" + n;
  }
  return n;
}

var now = new Date();
var day = days[ now.getDay() ];
var month = months[ now.getMonth() ];
var date = now.getDate();
var hours = zerosAreHard(now.getHours());
var minutes = zerosAreHard(now.getMinutes());
var seconds = zerosAreHard(now.getSeconds());
var year = now.getFullYear();
$("#lastLogin").append("Last login: " + day + " " + month + " " + date + " " + hours + ":" + minutes + ":" + seconds + " " + year);

// Type out strings on screen
$(".command").typed({
  strings: [" whoami"],
  typeSpeed: 60,
  loop: false,
}).delay(1775).queue(function(next) {
  $(".ls").removeClass('hide');
});

var myEmail = "HenryQuinnIV"+String.fromCharCode(64)+"gmail"+".com";

function addHiddenLinks() {
  var elements = document.getElementsByClassName('hiddenEmailLink');
  for(var i = 0; i < elements.length; i++) {
    elements[i].href += myEmail;
  }
}

function addHiddenHTML() {
  var elements = document.getElementsByClassName('hiddenEmail');
  for(var i = 0; i < elements.length; i++) {
    elements[i].innerHTML += myEmail;
  }
}

addHiddenLinks();
addHiddenHTML();

});
