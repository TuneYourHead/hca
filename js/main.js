$(document).ready(function() {

    $(".scroll-to-contact").click(function() {
        $('html, body').animate({
            scrollTop: $(".contact-us").offset().top
        }, 1000);
    });

    var labelAnimation = function() {
        $("input, textarea").on("focusin", function() {}, function() {
            $(this).addClass("active");
        });
        $("input, textarea").on("focusout", function() {}, function() {
            if ($(this).val() == "") {
                $(this).removeClass("active");
            }
        });
    };

    labelAnimation();
    
    (function($) {
        $('.parallax').parallaxBackground();
    })(jQuery);

    $('.slider').slick({
        infinite: false,
        initialSlide: 2,
        centerMode: true,
        centerPadding: 0,
        slidesToShow: 3,
        dots: true,
        speed: 600,
        cssEase: 'ease-in-out',
        autoplay: true,
        appendArrows: ".slider-nav",
        appendDots: ".slider-nav",
        nextArrow: '<span class="slider-arrows slider-arrows_right">&gt;</span>',
        prevArrow: '<span class="slider-arrows">&lt;</span>',
        responsive: [{
            breakpoint: 800,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }, ],
    });
    $('.phone_us').mask('(000) 000-0000');
})
