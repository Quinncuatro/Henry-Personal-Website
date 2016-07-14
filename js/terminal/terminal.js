(function($) {
    $.fn.tilda = function(eval, options) {
        if ($('body').data('tilda')) {
            return $('body').data('tilda').terminal;
        }
        this.addClass('tilda');
        options = options || {};
        eval = eval || function(command, term) {
            term.echo("you don't set eval for tilda");
        };
        var settings = {
            prompt: '[hquinn@HenryNeeds~]$ ',
            name: 'quinnTerm',
            height: 200,
            enabled: false,
            greetings: 'Running HELP returns a list of commands',
            keypress: function(e) {
                if (e.which == 96) {
                    return false;
                }
            }
        };
        if (options) {
            $.extend(settings, options);
        }
        this.append('<div class="td"></div>');
        var self = this;
        self.terminal = this.find('.td').terminal(eval, settings);
        var focus = false;
        $(document.documentElement).keypress(function(e) {
            if (e.which == 96) {
                self.slideToggle('fast');
                self.terminal.focus(focus = !focus);
                self.terminal.attr({
                    scrollTop: self.terminal.attr("scrollHeight")
                });
            }
        });
        $('body').data('tilda', this);
        this.hide();
        return self;
    };
})(jQuery);

jQuery(document).ready(function($) {

  var owmlat;
  var owmlng;
  var city;
  var temp;
  var condition;

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      owmlat = position.coords.latitude;
      owmlng = position.coords.longitude;
      $.getJSON("http://api.openweathermap.org/data/2.5/weather?lat=" + owmlat + "&lon=" + owmlng + "&units=imperial&appid=5a568e3028dd86de7e8e40c01bcb98d0").then(function(result) {
        city = result.name;
        temp = result.main.temp;
        condition = result.weather[0].main;
      });
    });
  }

  $('#quinnTerm').tilda(function(command, terminal) {
    command = command.toLowerCase();
    if(command === "help") {
      terminal.echo('CMD     - DESC\n--------------\nclear   - Clears screen\nhelp    - Shows command list\nweather - Gives forecast\n--------------');
    } else if(command === "weather") {
      terminal.echo('City - ' + city + '\nTemp - ' + temp + '&#8457;' + '\nCond - ' + condition);
    } else {
      terminal.echo('you type command "' + command + '"');
    }
  });
});

