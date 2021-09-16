$(document).ready(function(){

    $('.nav-icon').click(function(){
        $('.menu ul').slideToggle(500);
        return false;

    });


    // $('.nav-icon').click(function(){
    //     $('.menu ul').slideToggle(500);
    //     return false;
    // });


	$('.owl-carousel').owlCarousel({
	items: 1,
	loop: true,
	nav: false,
	dots: true,
    autoplay: false,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
        },
        600:{
            items:1,
            nav:false
        },
        1000:{
            items:1,
            loop:false
        }
    }
})
    $('.owl-carousel .truted-slider').owlCarousel({
    loop: true,
    nav: false,
    dots: false,
    autoplay: true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
        },
        600:{
            items:1,
            nav:false
        },
        1000:{
            items:5
        }
    }
})
});