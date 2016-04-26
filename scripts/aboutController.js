(function (module) {
  var aboutController = {};

  aboutController.index = function() {
    $('#portfolio-welcome').hide();
    $('#portfolio-resume').hide();
    $('#portfolio-container').show();
  };
  module.aboutController = aboutController;
})(window);
