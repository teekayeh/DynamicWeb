// Sticky Header
$(window).scroll(function() {

    if ($(window).scrollTop() > 100) {
        $('.top_nav').addClass('sticky');
    } else {
        $('.top_nav').removeClass('sticky');
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


// Post Stuff



 $(".comment-input button").on("click", function (event) {
    var $new_comment;

    if ($(".comment-input input").val() !== "") {
        $new_comment = $("<p>").text($(".comment-input input").val());
        $new_comment.hide();
        $(".comment").append($new_comment);
        $new_comment.fadeIn();
        $(".comment-input input").val("");
    }
 });

  $(".comment-input input").on("keypress", function (event) {
    var $new_comment;

    if(event.keycode === 13 ) {
        if ($(".comment-input input").val() !== "") {
            $new_comment = $("<p>").text($(".comment-input input").val());
            $new_comment.hide();
            $(".comment").append($new_comment);
            $new_comment.fadeIn();
            $(".comment-input input").val("");
        }
     }  
});




