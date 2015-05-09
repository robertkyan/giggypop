/*global jQuery:false*/

(function($){
  'use strict';
  var doc = $(document);
  doc.foundation();
  doc.on('ready',function(){
    $('.fake-spinner').on('click', function(e) {
      var href = $(this).attr('href');
      e.preventDefault();
      $('body').append('<div class="fake-loader"><div><span class="spinner"></span></div></div>')
      setTimeout(function() {
        window.location = href;
      }, 1200);
      /* Act on the event */
    });
    $('go-active').on('click', function(event) {
      event.preventDefault();
      $('this').addClass('active');
    });
  });
})(jQuery);
