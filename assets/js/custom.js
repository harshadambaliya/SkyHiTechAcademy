$(document).ready(function() {
    $('.shta-landing-slider').slick({
        infinite: true,
        autoplay: true,
        arrows: false,
        dots: false,
        autoplaySpeed: 2000,
        speed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1
    });
    $('.shta-testimonial-slider').slick({
        infinite: true,
        autoplay: true,
        arrows: false,
        dots: false,
        autoplaySpeed: 2000,
        speed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1
    });
    $(".shta-social-share-btn").on('click', function() {
        $(this).closest('.shta-look-great-card-body').children().find(".shta-share-media-list").addClass('show');
    });
});