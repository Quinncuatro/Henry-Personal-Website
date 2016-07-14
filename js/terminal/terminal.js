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
    $('#quinnTerm').tilda(function(command, terminal) {
	command = command.toLowerCase();
	if(command === "help") {
	    terminal.echo('Type \'help\' to see this list.\n\nclear - Clears screen\nhelp - Shows command list\nweather - Gives forecast');
	} else {
    	terminal.echo('you type command "' + command + '"');
	}
    });
});
