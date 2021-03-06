// Sticky Header
$(window).scroll(function() {

    if ($(window).scrollTop() > 100) {
        $('.main_nav').addClass('sticky');
    } else {
        $('.main_nav').removeClass('sticky');
    }
});

// Mobile Navigation
$('.mobile-toggle').click(function() {
    if ($('.top_nav').hasClass('open-nav')) {
        $('.top_nav').removeClass('open-nav');
    } else {
        $('.top_nav').addClass('open-nav');
    }
});

$('.main_h li a').click(function() {
    if ($('.top_nav').hasClass('open-nav')) {
        $('.navigation').removeClass('open-nav');
        $('.top_nav').removeClass('open-nav');
    }
});

// Navigation Scroll - ljepo radi materem
$('nav a').click(function(event) {
    var id = $(this).attr("href");
    var offset = 70;
    var target = $(id).offset().top - offset;
    $('html, body').animate({
        scrollTop: target
    }, 500);
    event.preventDefault();
});