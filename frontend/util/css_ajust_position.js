$.fn.bookingFormFollow = function () {
    let $this = this,
        $window = $(window);

    // listen for scroll
    $window.scroll(function (e) {

        // grabs window's scroll position
        let scroll = $window.scrollTop();

        console.log(scroll);

        if (scroll <= 480) {
          $this.css({
              position: 'absolute',
              top: -43
          });
        } else if (480 < scroll && scroll <= 890) {
          $this.css({
              position: 'fixed',
              top: 70
          });
        } else if (scroll > 890){
          $this.css({
              position: 'absolute',
              top: 360
          });
        }
    });
};
