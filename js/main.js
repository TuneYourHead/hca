$(document).ready(function() {
  $("form").submit(function(e) {
    $(this).find("input[type='submit']").val('submiting');
    if (e.preventDefault(), "" == grecaptcha.getResponse()) alert("Recaptcha is wrong!");
    else {
        var dataform = $(this).serializeArray();
        console.log(dataform);
        $.ajax({
            type: "POST",
            url: "https://homecourtadvantage.net/leadform.php",
            data: dataform,
            success: function(e) {
                $("#thankyou_message").css("display", "block");
                $("form").find("input[type='submit']").val('submit');
                grecaptcha.reset();
                $('form')[0].reset();
            }
        })
    }
  });

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
                slidesToScroll: 1,
                infinite: true
            }
        }, ],
    });
    $('.phone_us').mask('(000) 000-0000');
    $('.zip-code').mask('00000');
})
