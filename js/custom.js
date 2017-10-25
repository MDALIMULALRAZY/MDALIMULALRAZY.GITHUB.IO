$(document).ready(function() {

    // NewsTicker
    var owl = $("#NewsTicker");
    owl.owlCarousel({
        autoPlay: 5000, //Set AutoPlay to 5 seconds
        singleItem: true,
        transitionStyle: "goDown",
        pagination: false,
        navigation: false
    });

    //datepicker
    $(".datepicker").datepicker({
        inline: true,
        showOtherMonths: true
    });

    //back to top
    $('body').append('<div id="toTop" class="btn back-top"><span class="fa fa-angle-up"></span></div>');
    $(window).on("scroll", function() {
        if ($(this).scrollTop() !== 0) {
            $('#toTop').fadeIn();
        } else {
            $('#toTop').fadeOut();
        }
    });
    $('#toTop').on("click", function() {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    });

});