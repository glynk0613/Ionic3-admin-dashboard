(function() {

  'use strict';

  // Check to make sure service workers are supported in the current browser,
  // and that the current page is accessed from a secure origin. Using a
  // service worker from an insecure origin will trigger JS console errors. See
  // http://www.chromium.org/Home/chromium-security/prefer-secure-origins-for-powerful-new-features
  var isLocalhost = Boolean(window.location.hostname === 'localhost' ||
      // [::1] is the IPv6 localhost address.
      window.location.hostname === '[::1]' ||
      // 127.0.0.1/8 is considered localhost for IPv4.
      window.location.hostname.match(
        /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
      )
    );

  // Your custom JavaScript goes here
  $(document).ready(function () {

    // Manu
    // header
    $('.aus-menu').click(function(){
      if($('.aus-nav-user').hasClass('open')){
        $('.aus-nav-user').removeClass('open');
      }
      $('.aus-nav-main').toggleClass('open');
      $('.accordion .aus-side-head-list').removeClass('open');
    })
    // user
    $('.aus-toggle').click(function(){
      if($('.aus-nav-main').hasClass('open')){
        $('.aus-nav-main').removeClass('open');
      }
      $('.aus-nav-user').toggleClass('open');
      $('.accordion .aus-side-head-list').removeClass('open');
    })
    // accordion-aside
    $('.accordion .aus-side-head-list').click(function(){
      if($('.aus-side-head-list').hasClass('open')){
        $('.aus-side-head-list').removeClass('open');
      }
      $(this).addClass('open');
      $('.aus-nav-user').removeClass('open');
      $('.aus-nav-main').removeClass('open');
    })
  })
})(jQuery);
