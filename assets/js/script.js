$(document).ready(function () {
    $(window).scroll(function () {
        // section animation
        $(".section-scrol").each(function () {
            if ($(window).scrollTop() > $(this).offset().top - 400) {
                var classNewName = $(this).attr("data-name");
                $(this).addClass(classNewName);
            }
        });
    });

    $(".open-menu i").click(function () {
        // opne mobile menu
        $("body").addClass("body-over");
        $(".close-menu").addClass("close-icon");
        $(".nav-link").addClass("open-menu");
        $(".header-section .nav-link ul li").addClass("up-a");
        $(".over-lay").show();
    });

    $(".close-menu i").click(function () {
        // close mobile menu
        $("body").removeClass("body-over");
        $(".close-menu").removeClass("close-icon");
        $(".nav-link").removeClass("open-menu");
        $(".header-section .nav-link ul li").removeClass("up-a");
        $(".over-lay").hide();
    });

    $(".header-section .nav-link ul li a").click(function () {
        // scroll body
        $("html, body").animate(
            {
                scrollTop: $("#" + $(this).data("scroll")).offset().top,
            },
            1100
        );
        $("body").removeClass("body-over");
        $(".close-menu").removeClass("close-icon");
        $(".nav-link").removeClass("open-menu");
        $(".header-section .nav-link ul li").removeClass("up-a");
        $(".over-lay").hide();
    });






    $(".sevice-slider").slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        //  autoplay:true,
        dots: false,
        adaptiveHeight: true,
        autoplaySpeed: 1000,
        prevArrow:"<div class='circle-arrow devo-left'><img src='assets/img/slick-arrow-left.png'  class='img-fluid'></div>",
        nextArrow:"<div class='circle-arrow devo-right'><img src='assets/img/slick-arrow-right.png'  class='img-fluid'></div>",
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 772,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    });
    $(".work-slider").slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        //  autoplay:true,
        dots: false,
        adaptiveHeight: true,
        autoplaySpeed: 1000,
        prevArrow:"<div class='circle-arrow devo-left'><img src='assets/img/slick-arrow-left.png'  class='img-fluid'></div>",
        nextArrow:"<div class='circle-arrow devo-right'><img src='assets/img/slick-arrow-right.png'  class='img-fluid'></div>",
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 772,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    });
    $(".pricing-slider").slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        //  autoplay:true,
        dots: false,
        adaptiveHeight: true,
        autoplaySpeed: 1000,
        prevArrow:"<div class='circle-arrow devo-left'><img src='assets/img/slick-arrow-left.png'  class='img-fluid'></div>",
        nextArrow:"<div class='circle-arrow devo-right'><img src='assets/img/slick-arrow-right.png'  class='img-fluid'></div>",
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 772,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    });
});
