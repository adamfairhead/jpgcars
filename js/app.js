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
