var app = app || {};

(function ($) {
    $(function () {
        app.init();
    });

    app.init = function () {
        $('h1').on('click', function () {
            alert('test');
        });
    };
})(jQuery);
