// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
$(document).foundation({
  orbit: {
      animation: 'slide', // Sets the type of animation used for transitioning between slides, can also be 'fade'
      timer_speed: 10000, // Sets the amount of time in milliseconds before transitioning a slide
      pause_on_hover: false, // Pauses on the current slide while hovering
      navigation_arrows: true,
      slide_number: false,
      bullets: true, // Does the slider have bullets visible?
      timer: false, // Does the slider have a timer visible?
      variable_height: true, // Does the slider have variable height content?
      swipe: true,
  }
});


$(function() {

  // Wufoo auto-populate vehicle
  $('form .vehicle input').val($('.registration').text());

  // Smooth scroll
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
