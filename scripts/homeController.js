
(function (module) {
  var homeController = {};

  homeController.index = function() {
    $('#portfolio-container').hide();
    $('#portfolio-resume').hide();
    $('#portfolio-welcome').show();
  };
  module.homeController = homeController;
})(window);
