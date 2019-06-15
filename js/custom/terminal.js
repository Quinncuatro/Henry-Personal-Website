$(function() {
  doTheNeedful();

  var data = [
  { 
    action: 'type',
    strings: ["whoami^400"],
    output: $('.henry-resume').html(),
    postDelay: 1000
  }
];
  
  runScripts(data, 0);
});

function runScripts(data, pos) {
    var prompt = $('.prompt'),
        script = data[pos];
    if(script.clear === true) {
      $('.history').html(''); 
    }
    switch(script.action) {
        case 'type':
          // cleanup for next execution
          prompt.removeData();
          $('.typed-cursor').text('');
          prompt.typed({
            strings: script.strings,
            typeSpeed: 30,
            callback: function() {
              var history = $('.history').html();
              history = history ? [history] : [];
              history.push('[hquinn@HenryNeeds ~]$ ' + prompt.text());
              if(script.output) {
                $(".terminal-data").removeClass('hide');

                // history.push(script.output);
                // prompt.html('');
                // $('.history').html(history.join('<br>'));


              }
              // scroll to bottom of screen
              $('section.terminal').scrollTop($('section.terminal').height());
              // Run next script
              pos++;
              if(pos < data.length) {
                setTimeout(function() {
                  runScripts(data, pos);
                }, script.postDelay || 1000);
              }
            }
          });
          break;
        case 'view':
          break;
    }
}

function doTheNeedful() {
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

  $("#currentLogin").append("Current login: " + day + " " + month + " " + date + " " + hours +
  ":" + minutes + ":" + seconds + " " + year);

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

  function addCopyrightYear() {
    var now = new Date();
    var year = now.getFullYear();

    var elements = document.getElementsByClassName('copyrightYear');
    for(var i =0; i < elements.length; i++) {
      elements[i].innerHTML += year;
    }
  }
  
  addHiddenLinks();
  addHiddenHTML();
  addCopyrightYear();
}
