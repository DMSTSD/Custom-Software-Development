/** Request Form Price Slider **/

$(document).ready(function(){

    $("#bootstrap-slider").slider();
    $("#bootstrap-slider").on("slide", function(slideEvt) {
        $("#sliderValue").text(slideEvt.value);
    });
    
    $('.slider').on("click", function() {
        var newvalue = $('.tooltip-inner').text();
        $("#sliderValue").text(newvalue);
    });

});


/** Navbar **/

(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 100
    });

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggle:visible').click();
    });

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 50
        }
    })

})(jQuery); // End of use strict


/** Preloader **/

$(window).load(function() { // makes sure the whole site is loaded
   var preloader=$('#preloader div');
   preloader.fadeOut(); // will first fade out the loading animation
   $('#preloader').delay(350).fadeOut('slow'); 
// will fade out the white DIV that covers the website.
       $('body').delay(350).css({'overflow':'visible'});
}) 


/** Counter **/
jQuery(document).ready(function($) {
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });

    var options = {
           types: ['(cities)'],
           componentRestrictions: {country: "us"}
        };
        var ac = new google.maps.places.Autocomplete(document.getElementById('autocomplete'),options)
         google.maps.event.addListener(ac,'place_changed',function(){
          var place = ac.getPlace();
          console.log(place.formatted_address);
    });
});


/** Agents **/
$(document).ready(function() {
  $('#media').carousel({
    pause: true,
    interval: false,
  });
});

// let usersSection=document.querySelector(".user-section")
// let isShow =true;
// function showHideUsers(){
//         if (isShow){
//             usersSection.style.display ="none";
//             isShow =false;
//         } else{
//             usersSection.style.display ="block";
//             isShow =true;
//         }
// }

toastr.options = {
  "closeButton": false,
  "debug": false,
  "newestOnTop": false,
  "progressBar": false,
  "positionClass": "toast-top-center",
  "preventDuplicates": false,
  "onclick": null,
  "showDuration": "300",
  "hideDuration": "1000",
  "timeOut": "5000",
  "extendedTimeOut": "1000",
  "showEasing": "swing",
  "hideEasing": "linear",
  "showMethod": "fadeIn",
  "hideMethod": "fadeOut"
}

try {

var responce=document.URL.split("?status=")[1];

if (responce=="success") {
    toastr["success"]("Thank you! We will contact you soon.")
} else if(responce=="error") {
    toastr["error"]("Mail not sent.")
} else if(responce==undefined) {
    
}else{
    
}
} catch (error) {

}




