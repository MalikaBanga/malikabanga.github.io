(function($) {
    var $scrollTopElem = $('#scroll-to-top');
    $(window).scroll(function() {
        if ($(this).scrollTop() > 200) {
            $scrollTopElem.fadeIn();
        } else {
            $scrollTopElem.fadeOut();
        }
    });
    $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
    $('#menu').click(function() {
        $('#site-navigation').slideToggle();
    });

    $('body').on('click', function(e) {
        if (!($(e.target).hasClass('navigation') ||
                $(e.target).hasClass('mobile-menu') || $(e.target).parents().hasClass('navigation') || $(e.target).parents().hasClass('mobile-menu'))) {
            $('#site-navigation').slideUp();
        }
    });
}(jQuery));
