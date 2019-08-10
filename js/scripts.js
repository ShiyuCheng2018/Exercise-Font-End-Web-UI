$(document).ready(function () {
    $("#mycarousel").carousel({interval: 2000});
    $('#carouselButton').click(function () {
        console.log("clicked");
        if ($("#carouselButton").children('span').hasClass('fa-pause')) {
            $("#mycarousel").carousel('pause');
            $("#carouselButton").children('span').removeClass('fa-pause');
            $("#carouselButton").children('span').addClass('fa-play');
            console.log("fa-pause condition");
        } else if ($("#carouselButton").children('span').hasClass('fa-play')) {
            $("#mycarousel").carousel('cycle');
            $("#carouselButton").children('span').removeClass('fa-play');
            $("#carouselButton").children('span').addClass('fa-pause');
            console.log("fa-play condition");
        }
    });


    //$('[data-toggle="tooltip"]').tooltip();

});