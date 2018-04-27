$(document).ready(function() {

    /* Navigation scroll */
    $(function() {
      $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top
            }, 1000);
            return false;
          }
        }
      });
    });

    /* Mobile nav */
    $('.js--nav-icon').click(function(){
          var nav = $('.js--nav-links');
          var icon = $('.js--nav-icon i');

          nav.slideToggle(500);
          if (icon.hasClass('ion-navicon-round')) {
              icon.addClass('ion-close-round');
              icon.removeClass('ion-navicon-round');
          } else {
            icon.addClass('ion-navicon-round');
            icon.removeClass('ion-close-round');
          }

     });

});
