$('.owl-carousel').owlCarousel({
    loop: true,
    autoWidth: 500,
    margin: 10,
    stagePadding: 10,
    nav: true,
    dots: true,
    autoplay: true,
    autoplayTimeout: 2000,
    center: false,
    rtl: true,
    smartSpeed: 1000,
    items: 6,
    startPosition: 2,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    freeDrag: false,
    lazyLoad: true,
    autoplayHoverPause: true,
    video: true,
    videoWidth: 500,
    videoHeight: 500,
    animateOut: 'scale',
    responsive:{
        0:{
            items:1,
            dots: false,
            nav: false
        },
        480: {
            items:2,
            dots: false,
            nav: false
        },
        600:{
            items:3,
        }, 
        760:{
            items:4
        },           
        960:{
            items:5
        },
        1200:{
            items:6
        }
    }
})

owl.on('changed.owl.carousel', function(event) {
    console.log(event);
})

owl.on('customNextBtn', function(event) {
    console.log(event);
})

owl.on('customPrevBtn', function(event) {
    console.log(event);
})

owl.on('owl-carousel', function(event) {
    console.log(event);
})