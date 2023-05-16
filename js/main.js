(function (window, document) {
  document.getElementById('toggle').addEventListener('click', function (e) {
      document.getElementById('tuckedMenu').classList.toggle('custom-menu-tucked');
      document.getElementById('toggle').classList.toggle('x');
  });
  })(this, this.document);
  
(function($) {
  "use strict"; // Start of use strict
  $(document).ready(function() {

    // Lightbox2 options
    lightbox.option({
      'wrapAround': true
    });



  }); // end doc ready

})(jQuery); // End of use strict
