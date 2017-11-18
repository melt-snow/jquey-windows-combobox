(function ($) {
    $.fn.combobox = function (options) {
        var settings = $.extend({
            "target_input": 'input',    //input tag selector
            "target_select": 'select',  //select tag selector
            'z_index': 9999,               //start z-index
            'allow_magnify_input': false,  //if true expand input size
//            'send_value': false,           //if true use send options value
            'match_color': '#ddf',         //matched options background-color
            'init_data': '',         //overdrive input value/* or value(if send_value true)*/
            //it's a magic number...
            'select_arrow_width': 20       //select arrow width
        }, options);

        //set css
        this
            .css('position', 'relative')
            .css('margin', 0)
            .css('padding', 0);
        this.find(settings.target_input)
            .css('position', 'absolute')
            .css('float', 'left');
        this.find(settings.target_select)
            .css('position', 'absolute')
            .css('float', 'left');

        //multiple
        this.each(function (i, combobox) {
            var cb_input = $(combobox).find(settings.target_input);
            var cb_input_disp = cb_input;
            var cb_select = $(combobox).find(settings.target_select);

            /*
            //if send_value display input tag replacement and set default val
            if (settings.send_value === true) {
                cb_input_disp =
                    cb_input
                        .clone(true)
                        .attr('name', '')
                        .attr('id', '')
                        .val(cb_select.val(cb_input.val()).find('option:selected').text());
                cb_input.hide().after(cb_input_disp);
            }
            */

            //show
            cb_select.show();

            //set css
            cb_input_disp
                .css('z-index', settings.z_index + i * 2 + 1);
            cb_select
                .css('z-index', settings.z_index + i * 2)
                .css('font-size', cb_input_disp.css('font-size'))
                .css('margin', cb_input_disp.css('margin'))
                .css('padding', cb_input_disp.css('padding'))
                .css('font-size', cb_input_disp.css('font-size'));

            //text-align right?
            if (cb_input_disp.css('text-align') === 'right') {
                cb_input_disp.css('right', '0px');
                cb_select.css('direction', 'rtl');
            }

            //adjust height
            if (cb_input_disp.outerHeight(true) > cb_select.outerHeight(true)) {
                cb_select.height(cb_select.height() + cb_input_disp.outerHeight(true) - cb_select.outerHeight(true));
            }
            if (cb_input_disp.outerHeight(true) < cb_select.outerHeight(true)) {
                if (settings.allow_magnify_input === false) {
                    cb_select.height(cb_select.height() + cb_select.outerHeight(true) - cb_input_disp.outerHeight(true));
                } else {
                    cb_input_disp.height(cb_input_disp.height() + cb_select.outerHeight(true) - cb_input_disp.outerHeight(true));
                }
            }
            $(combobox).css('height', cb_select.outerHeight(true));

            //adjust width
            if (cb_input_disp.width() > cb_select.width() + settings.select_arrow_width) {
                cb_select.width(cb_input_disp.width() + settings.select_arrow_width);
            }
            if (cb_input_disp.width() < cb_select.width() + settings.select_arrow_width) {
                if (settings.allow_magnify_input === false) {
                    cb_select.width(cb_input_disp.width() + settings.select_arrow_width);
                } else {
                    cb_input_disp.width(cb_select.width() - settings.select_arrow_width);
                }
            }
            $(combobox).css('width', cb_select.outerWidth(true));

            //save background-color
            cb_select.find('option').each(function (i, option) {
                $(option).data('org-bg-color', $(option).css('background-color'));
            });

            //events
            // dropdown -> input
            cb_select.on('change', function (e) {
                /*
                //if send_value set real input tag val
                if (settings.send_value === true) {
                    cb_input.val($(this).val());
                }
                */
                cb_input_disp.val($(this).find('option:selected').text());
                //bg_color_clear
                cb_select.find('option').each(function (i, option) {
                    $(option).css('background-color', $(option).data('org-bg-color'));
                });
            });

            // input -> dropdown
            cb_input_disp.on('keyup', function (e) {
                cb_select.val('');
                cb_select.find('option').each(function (i, option) {
                    //bg_color_clear
                    $(option).css('background-color', $(option).data('org-bg-color'));
                    //match?
                    if (option.text.match(cb_input_disp.val())) {
                        $(option).css('background-color', settings.match_color);
                    }
                    //equal?
                    if (option.text === cb_input_disp.val()) {
                        cb_select.val(option.value);
                        cb_select.change();
                    }
                });
            });

            //default "selected" reflect
            if (settings.init_data !== '') {
                cb_input.val(settings.init_data);
            }
            //reflect selected
            if (cb_input.val()) {
                cb_input_disp.keyup();
            }
        });

        return this;
    };
})(jQuery);
