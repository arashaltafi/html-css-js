$('.slider-parent-1').slick({
    dots: true,
    autoplay: true,
    autoPlaySpeed: 100,
    touchMove: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    draggable: true,
    speed: 20,
    swipe: true,
    useCSS: true,
    infinite: false,
    centerMode: true,
    centerPadding: "50px",
});

// On swipe event
$('.slider-parent-1').on('swipe', function (event, slick, direction) {
    console.log(direction);
});

// On edge hit
$('.slider-parent-1').on('edge', function (event, slick, direction) {
    console.log('edge was hit')
});

// On before slide change
$('.slider-parent-1').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
    console.log(nextSlide);
});

//sample 2
$('.slider-parent-2').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear'
});