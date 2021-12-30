$(document).ready(function() {
    // $('.multiple-items').slick({
    //     infinite: true,
    //     slidesToShow: 3,
    //     slidesToScroll: 3
    // });
    $(".shta-social-share-btn").on('click', function() {
        $(this).closest('.shta-look-great-card-body').children().find(".shta-share-media-list").addClass('show');
    });
});