(function ($) {
    $.fn.combobox = function (options) {
        var settings = $.extend({
            'sel_input': 'input:eq(0)',      //input tag selector
            'sel_select': 'select:eq(0)',    //select tag selector
            'z_index': 9999,                    //start z-index
            'allow_magnify_input': false,    //if 1 expand input size
            //magic number
            'select_arrow_width': 20
        }, options);

        //set css
        this
            .css('position', 'relative')
            .css('margin', 0)
            .css('padding', 0);
        this.find(settings.sel_input)
            .css('position', 'absolute')
            .css('float', 'left');
        this.find(settings.sel_select)
            .css('position', 'absolute')
            .css('float', 'left');

        //multiple
        this.each(function (i, combobox) {
            var cb_input = $(combobox).find(settings.sel_input);
            var cb_select = $(combobox).find(settings.sel_select);

            //show
            cb_select.show();

            //set css
            cb_input
                .css('z-index', settings.z_index + i * 2 + 1);
            cb_select
                .css('z-index', settings.z_index + i * 2)
                .css('font-size', cb_input.css('font-size'))
                .css('margin', cb_input.css('margin'))
                .css('padding', cb_input.css('padding'))
                .css('font-size', cb_input.css('font-size'));

            //text-align right?
            if (cb_input.css('text-align') === 'right') {
                cb_input.css('right', '0px');
                cb_select.css('direction', 'rtl');
            }

            //adjust height
            if (cb_input.outerHeight(true) > cb_select.outerHeight(true)) {
                cb_select.height(cb_select.height() + cb_input.outerHeight(true) - cb_select.outerHeight(true));
            }
            if (cb_input.outerHeight(true) < cb_select.outerHeight(true)) {
                if (settings.allow_magnify_input === false) {
                    cb_select.height(cb_select.height() + cb_select.outerHeight(true) - cb_input.outerHeight(true));
                } else {
                    cb_input.height(cb_input.height() + cb_select.outerHeight(true) - cb_input.outerHeight(true));
                }
            }
            $(combobox).css('height', cb_select.outerHeight(true));

            //adjust width
            if (cb_input.width() > cb_select.width() + settings.select_arrow_width) {
                cb_select.width(cb_input.width() + settings.select_arrow_width);
            }
            if (cb_input.width() < cb_select.width() + settings.select_arrow_width) {
                if (settings.allow_magnify_input === false) {
                    cb_select.width(cb_input.width() + settings.select_arrow_width);
                } else {
                    cb_input.width(cb_select.width() - settings.select_arrow_width);
                }
            }
            $(combobox).css('width', cb_select.outerWidth(true));

            //events
            // dropdown -> input
            cb_select.change(function (e) {
                cb_input.val($(this).val());
            });

            // input -> dropdown
            cb_input.keyup(function (e) {
                cb_select.val('');
                cb_select.children('option').each(function (i, option) {
                    if (option.value === cb_input.val()) {
                        cb_select.val(option.value);
                    }
                });
            });
        });

        return this;
    };
})(jQuery);
