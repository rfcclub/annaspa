$(document).ready(function () {  
 
    $('#carousel-1').addClass('carousel-show');
    $('#demo').bind('slid.bs.carousel', function (e) {
        if($('#crs-item1').hasClass('active')) {
            $('#carousel-1').addClass('carousel-show');
            $('#carousel-2').removeClass('carousel-show');
            $('#carousel-3').removeClass('carousel-show');
        } else if($('#crs-item2').hasClass('active')) {
            $('#carousel-2').addClass('carousel-show');
            $('#carousel-1').removeClass('carousel-show');
            $('#carousel-3').removeClass('carousel-show');
        } else {
            $('#carousel-3').addClass('carousel-show');
            $('#carousel-1').removeClass('carousel-show');
            $('#carousel-2').removeClass('carousel-show');
        }
    });
    
  });